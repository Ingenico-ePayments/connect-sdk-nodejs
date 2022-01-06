/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { CreateTokenResponse } from "../../src/model/domain/token";
import connectSdk, { config } from "./init";

/**
 * @group integration
 */
describe("token", () => {
  test("created and deleted successfully", done => {
    const body = {
      paymentProductId: 1,
      card: {
        customer: {
          billingAddress: {
            countryCode: "NL"
          }
        },
        data: {
          cardWithoutCvv: {
            cardholderName: "Jan",
            issueNumber: "12",
            cardNumber: "4567350000427977",
            expiryDate: "1225"
          }
        }
      }
    };

    connectSdk.tokens.create(config.merchantId, body, null, (error, response) => {
      expect(error).toBeNull();

      expect(response).not.toBeNull();
      expect(response!.status).toBeGreaterThanOrEqual(200);
      expect(response!.status).toBeLessThanOrEqual(201);
      expect(response!.body).not.toBeNull();

      const responseBody = response!.body as CreateTokenResponse;
      expect(responseBody.token).not.toBeNull();
      expect(responseBody.isNewToken).toBeDefined();

      if (responseBody.isNewToken) {
        connectSdk.tokens.remove(config.merchantId, responseBody.token!, {}, (error, response) => {
          expect(error).toBeNull();

          expect(response).not.toBeNull();
          expect(response!.status).toBe(204);

          done();
        });
      } else {
        done();
      }
    });
  });
});
