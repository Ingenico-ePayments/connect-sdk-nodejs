/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { PaymentProductGroupResponse } from "../../src/model/domain/product";
import connectSdk, { config } from "./init";

/**
 * @group integration
 */
describe("paymentProductGroup", () => {
  test("with id 'cards' retrieved successfully", done => {
    const query = {
      countryCode: "NL",
      currencyCode: "EUR"
    };

    connectSdk.productgroups.get(config.merchantId, "cards", query, (error, response) => {
      expect(error).toBeNull();

      expect(response).not.toBeNull();
      expect(response!.status).toBe(200);
      expect(response!.body).not.toBeNull();

      const responseBody = response!.body as PaymentProductGroupResponse;
      expect(responseBody.id).toBe("cards");

      done();
    });
  });
});
