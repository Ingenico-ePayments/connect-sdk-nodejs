/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { ConvertAmount } from "../../src/model/domain/services";
import connectSdk, { config } from "./init";

/**
 * @group integration
 */
describe("convertAmount", () => {
  test("called successfully", done => {
    const query = {
      source: "EUR",
      target: "USD",
      amount: 100
    };

    connectSdk.services.convertAmount(config.merchantId, query, (error, response) => {
      expect(error).toBeNull();

      expect(response).not.toBeNull();
      expect(response!.status).toBe(200);
      expect(response!.body).not.toBeNull();

      const responseBody = response!.body as ConvertAmount;
      expect(responseBody.convertedAmount).not.toBeNull();

      done();
    });
  });
});
