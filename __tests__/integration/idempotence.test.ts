/* eslint-disable @typescript-eslint/no-non-null-assertion */

import * as uuid from "uuid";
import { CreatePaymentResponse } from "../../src/model/domain/payment";
import connectSdk, { config } from "./init";

/**
 * @group integration
 */
describe("Idempotence", () => {
  test("causes second request to be idempotent", done => {
    const body = {
      order: {
        amountOfMoney: {
          currencyCode: "EUR",
          amount: 100
        },
        customer: {
          locale: "en_GB",
          billingAddress: {
            countryCode: "NL"
          }
        }
      },
      redirectPaymentMethodSpecificInput: {
        returnUrl: "http://example.com/",
        paymentProductId: 809,
        paymentProduct809SpecificInput: {
          issuerId: "INGBNL2A"
        }
      }
    };

    const idemPotenceKey = uuid.v4();
    const paymentContext = {
      idemPotence: {
        key: idemPotenceKey
      }
    };

    connectSdk.payments.create(config.merchantId, body, paymentContext, (error, response) => {
      expect(error).toBeNull();

      expect(response).not.toBeNull();
      expect(response!.status).toBe(201);
      expect(response!.body).not.toBe(null);

      const responseBody = response!.body as CreatePaymentResponse;
      expect(responseBody.payment).not.toBe(null);
      expect(responseBody.payment!.id).not.toBe(null);
      expect(paymentContext.idemPotence.key).toBe(idemPotenceKey);
      expect(connectSdk.context.getIdempotenceRequestTimestamp()).toBeUndefined();

      connectSdk.payments.create(config.merchantId, body, paymentContext, (error2, response2) => {
        expect(error2).toBeNull();

        expect(response2).not.toBeNull();
        expect(response2!.status).toBe(201);
        expect(response2!.body).not.toBe(null);

        const responseBody2 = response2!.body as CreatePaymentResponse;
        expect(responseBody2.payment).not.toBe(null);
        expect(responseBody2.payment!.id).toBe(responseBody.payment!.id);
        expect(paymentContext.idemPotence.key).toBe(idemPotenceKey);
        expect(connectSdk.context.getIdempotenceRequestTimestamp()).not.toBeUndefined();
        expect(connectSdk.context.getIdempotenceRequestTimestamp()).not.toBeNull();

        done();
      });
    });
  });
});
