/* eslint-disable @typescript-eslint/no-non-null-assertion */

import each from "jest-each";
import { PaymentProductResponse, PaymentProducts } from "../../src/model/domain/product";
import connectSdk, { config } from "./init";

/**
 * @group integration
 */
describe("paymentProducts", () => {
  test("retrieved successfully", done => {
    const query = {
      countryCode: "NL",
      currencyCode: "EUR"
    };

    connectSdk.products.find(config.merchantId, query, (error, response) => {
      expect(error).toBeNull();

      expect(response).not.toBeNull();
      expect(response!.status).toBe(200);
      expect(response!.body).not.toBeNull();

      const responseBody = response!.body as PaymentProducts;
      expect(responseBody.paymentProducts).not.toBeNull();
      expect(responseBody.paymentProducts!.length).not.toBe(0);

      done();
    });
  });
});

describe("paymentProduct", () => {
  each([809]).test("with id %d retrieved successfully", (id, done) => {
    const query = {
      countryCode: "NL",
      currencyCode: "EUR"
    };

    connectSdk.products.get(config.merchantId, id, query, (error, response) => {
      expect(error).toBeNull();

      expect(response).not.toBeNull();
      expect(response!.status).toBe(200);
      expect(response!.body).not.toBeNull();

      const responseBody = response!.body as PaymentProductResponse;
      expect(responseBody.id).toBe(id);

      done();
    });
  });
});
