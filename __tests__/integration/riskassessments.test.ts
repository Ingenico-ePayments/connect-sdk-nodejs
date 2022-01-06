/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { RiskAssessmentResponse } from "../../src/model/domain/riskassessments";
import connectSdk, { config } from "./init";

/**
 * @group integration
 */
describe("riskassessments", () => {
  describe("for bankaccounts", () => {
    test("called successfully", done => {
      const body = {
        order: {
          amountOfMoney: {
            currencyCode: "EUR",
            amount: 100
          },
          customer: {
            locale: "en_GB"
          }
        },
        bankAccountBban: {
          countryCode: "DE",
          accountNumber: "0532013000",
          bankCode: "37040044"
        }
      };

      connectSdk.riskassessments.bankaccounts(config.merchantId, body, null, (error, response) => {
        expect(error).toBeNull();

        expect(response).not.toBeNull();
        expect(response!.status).toBe(200);
        expect(response!.body).not.toBeNull();

        const responseBody = response!.body as RiskAssessmentResponse;
        expect(responseBody.results).not.toBeNull();
        expect(responseBody.results).not.toBe([]);

        done();
      });
    });
  });
});
