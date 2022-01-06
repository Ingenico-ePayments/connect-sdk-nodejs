import each from "jest-each";
import * as http from "http";
import * as obfuscate from "../../../src/utils/obfuscate";

/**
 * @group unit:obfuscate
 */
describe("obfuscate.getObfuscated", () => {
  test("undefined body", () => {
    expect(obfuscate.getObfuscated(undefined)).toBe("");
  });

  test("empty body", () => {
    expect(obfuscate.getObfuscated("")).toBe("");
  });

  test("cardNumber", () => {
    const body = {
      order: {
        amountOfMoney: {
          currencyCode: "CAD",
          amount: 2345
        },
        customer: {
          billingAddress: {
            countryCode: "CA"
          }
        }
      },
      cardPaymentMethodSpecificInput: {
        paymentProductId: 1,
        card: {
          cvv: "123",
          cardNumber: "1234567890123456",
          expiryDate: "1220"
        }
      }
    };
    const expected = JSON.parse(JSON.stringify(body));
    expected.cardPaymentMethodSpecificInput.card.cvv = "***";
    expected.cardPaymentMethodSpecificInput.card.cardNumber = "************3456";
    expected.cardPaymentMethodSpecificInput.card.expiryDate = "**20";

    expect(obfuscate.getObfuscated(body)).toBe(JSON.stringify(expected, null, 2));
  });

  test("iban", () => {
    const body = {
      sepaDirectDebit: {
        mandate: {
          bankAccountIban: {
            iban: "NL00INGB0001234567"
          },
          debtor: {
            surname: "Jones"
          },
          isRecurring: false
        },
        customer: {
          billingAddress: {
            countryCode: "NL"
          }
        }
      },
      paymentProductId: 770
    };
    const expected = JSON.parse(JSON.stringify(body));
    expected.sepaDirectDebit.mandate.bankAccountIban.iban = "**************4567";

    expect(obfuscate.getObfuscated(body)).toBe(JSON.stringify(expected, null, 2));
  });

  test("bin", () => {
    const body = {
      bin: "12345678"
    };
    const expected = JSON.parse(JSON.stringify(body));
    expected.bin = "123456**";

    expect(obfuscate.getObfuscated(body)).toBe(JSON.stringify(expected, null, 2));
  });

  test("no matches", () => {
    const body = {
      order: {
        amountOfMoney: {
          currencyCode: "EUR",
          amount: 1000
        },
        customer: {
          locale: "nl_NL",
          billingAddress: {
            countryCode: "NL"
          }
        }
      },
      bankTransferPaymentMethodSpecificInput: {
        paymentProductId: 11
      }
    };
    expect(obfuscate.getObfuscated(body)).toBe(JSON.stringify(body, null, 2));
  });

  test("not matching object", () => {
    const body = {
      values: [{ value: true }, { value: "12345" }, { value: 12345 }, { value: {} }]
    };
    const expected = JSON.parse(JSON.stringify(body));
    expected.values[0].value = "****";
    expected.values[1].value = "*****";
    expected.values[2].value = "*****";

    expect(obfuscate.getObfuscated(body)).toBe(JSON.stringify(expected, null, 2));
  });

  const headersTestData = [
    ["Authorization", "Basic QWxhZGRpbjpPcGVuU2VzYW1l", "********"],
    ["authorization", "Basic QWxhZGRpbjpPcGVuU2VzYW1l", "********"],
    ["AUTHORIZATION", "Basic QWxhZGRpbjpPcGVuU2VzYW1l", "********"],

    ["X-GCS-Authentication-Token", "foobar", "********"],
    ["x-gcs-authentication-token", "foobar", "********"],
    ["X-GCS-AUTHENTICATION-TOKEN", "foobar", "********"],

    ["X-GCS-CallerPassword", "foobar", "********"],
    ["x-gcs-callerpassword", "foobar", "********"],
    ["X-GCS-CALLERPASSWORD", "foobar", "********"],

    ["Content-Type", "application/json", "application/json"],
    ["content-type", "application/json", "application/json"],
    ["CONTENT-TYPE", "application/json", "application/json"]
  ];
  each(headersTestData).test("when the header is '%s'", (name, originalValue, expectedObfuscatedValue) => {
    const headers: http.IncomingHttpHeaders = {};
    headers[name] = originalValue;
    headers["content-length"] = "5";

    const expected = JSON.parse(JSON.stringify(headers));
    expected[name] = expectedObfuscatedValue;

    expect(obfuscate.getObfuscated(headers, null, true)).toBe(JSON.stringify(expected, null, 2));
  });
});
