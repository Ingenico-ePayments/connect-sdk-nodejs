import * as express from "express";
import * as request from "supertest";
import * as connectSdk from "../../src";
import * as bodyParser from "body-parser";

const app = express();
const webhooks = connectSdk.webhooks;

const secretKeyStore = webhooks.inMemorySecretKeyStore;
webhooks.init(secretKeyStore);

const keyId = "dummy-key-id";
secretKeyStore.storeSecretKey(keyId, "hello+world");

app.use(
  bodyParser.raw({
    type: "*/*"
  })
);
app.post("/webhooks/event", (req, res) => {
  webhooks.unmarshal(req.body, req.headers, (error, event) => {
    if (error) {
      res.status(500).json(error);
    } else if (event) {
      res.status(200).json(event);
    } else {
      res.status(204).send("");
    }
  });
});

const validBody = `{
  "apiVersion": "v1",
  "id": "8ee793f6-4553-4749-85dc-f2ef095c5ab0",
  "created": "2017-02-02T11:24:14.040+0100",
  "merchantId": "20000",
  "type": "payment.paid",
  "payment": {
    "id": "00000200000143570012",
    "paymentOutput": {
      "amountOfMoney": {
        "amount": 1000,
        "currencyCode": "EUR"
      },
      "references": {
        "paymentReference": "200001681810"
      },
      "paymentMethod": "bankTransfer",
      "bankTransferPaymentMethodSpecificOutput": {
        "paymentProductId": 11
      }
    },
    "status": "PAID",
    "statusOutput": {
      "isCancellable": false,
      "statusCategory": "COMPLETED",
      "statusCode": 1000,
      "statusCodeChangeDateTime": "20170202112414",
      "isAuthorized": true
    }
  }
}`.replace(/\r\n/, "\n");

const validSignature = "2S7doBj/GnJnacIjSJzr5fxGM5xmfQyFAwxv1I53ZEk=";

describe("webhooks", () => {
  test("when received event from express", done => {
    request(app)
      .post("/webhooks/event")
      .send(validBody)
      .set({
        "Content-Type": "application/json",
        "X-GCS-Signature": validSignature,
        "X-GCS-KeyId": keyId
      })
      .expect(200)
      .expect("Content-Type", /application\/json(;.*)?/)
      .expect(response => {
        const event = response.body;
        expect(event).not.toBeNull();
        expect(event.apiVersion).toBe("v1");
        expect(event.id).toBe("8ee793f6-4553-4749-85dc-f2ef095c5ab0");
        expect(event.created).toBe("2017-02-02T11:24:14.040+0100");
        expect(event.merchantId).toBe("20000");
        expect(event.type).toBe("payment.paid");

        expect(event.refund).toBeUndefined();
        expect(event.payout).toBeUndefined();
        expect(event.token).toBeUndefined();

        expect(event.payment).not.toBeUndefined();
        expect(event.payment).not.toBeNull();
        expect(event.payment.id).toBe("00000200000143570012");
      })
      .end(error => {
        done(error);
      });
  });
});
