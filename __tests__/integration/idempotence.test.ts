/* eslint-disable @typescript-eslint/no-non-null-assertion */

import * as uuid from "uuid";
import { SdkResponse } from "../../src/model";
import { CreatePaymentResponse, PaymentErrorResponse } from "../../src/model/domain/payment";
import { CreatePaymentResult } from "../../src/model/domain/payment/definitions";
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

    function extractPaymentResult(response: SdkResponse): CreatePaymentResult {
      // For this test it doesn't matter if the response is successful or declined,
      // as long as idempotence is handled correctly
      if (response.status === 201) {
        return response.body as CreatePaymentResponse;
      } else {
        const responseBody = response.body as PaymentErrorResponse;
        return responseBody.paymentResult!;
      }
    }

    connectSdk.payments.create(config.merchantId, body, paymentContext, (error, response) => {
      expect(error).toBeNull();

      expect(response).not.toBeNull();
      expect(response!.body).toBeTruthy();

      const paymentResult = extractPaymentResult(response!);
      expect(paymentResult.payment).toBeTruthy();
      expect(paymentResult.payment!.id).toBeTruthy();
      expect(paymentContext.idemPotence.key).toBe(idemPotenceKey);
      expect(connectSdk.context.getIdempotenceRequestTimestamp()).toBeUndefined();

      connectSdk.payments.create(config.merchantId, body, paymentContext, (error2, response2) => {
        expect(error2).toBeNull();

        expect(response2).not.toBeNull();
        expect(response2!.status).toBe(response!.status);
        expect(response2!.body).toBeTruthy();

        const paymentResult2 = extractPaymentResult(response2!);
        expect(paymentResult2.payment).toBeTruthy();
        expect(paymentResult2.payment!.id).toBe(paymentResult.payment!.id);
        expect(paymentContext.idemPotence.key).toBe(idemPotenceKey);
        expect(connectSdk.context.getIdempotenceRequestTimestamp()).not.toBeUndefined();
        expect(connectSdk.context.getIdempotenceRequestTimestamp()).not.toBeNull();

        done();
      });
    });
  });
});
