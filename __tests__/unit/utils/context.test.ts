import * as sdkContext from "../../../src/utils/context";

/**
 * @group unit:context
 */
describe("context.getSignature", () => {
  test("with contentType and headers", () => {
    const context = {
      host: "dummy",
      apiKeyId: "apiKeyId",
      secretApiKey: "secretApiKey",
      integrator: "Unit tests"
    };

    const headers = [
      {
        key: "X-GCS-CustomerHeader",
        value: "processed header value"
      },
      {
        key: "X-GCS-ClientMetaInfo",
        value: "processed header value"
      },
      {
        key: "X-GCS-ServerMetaInfo",
        value: "processed header value"
      }
    ];

    sdkContext.setContext(context);

    const signature = sdkContext.getSignature("DELETE", "application/json", "Fri, 06 Jun 2014 13:39:43 GMT", headers, "/v1/9991/tokens/123456789");
    expect(signature).toBe("VfnXpPBQQoHZivTcAg0JvOWkhnzlPnaCPKpTQn/uMJM=");
  });

  test("without contentType or headers", () => {
    const context = {
      host: "dummy",
      apiKeyId: "EC36A74A98D21",
      secretApiKey: "6Kj5HT0MQKC6D8eb7W3lTg71kVKVDSt1",
      integrator: "Unit tests"
    };

    sdkContext.setContext(context);

    const signature = sdkContext.getSignature("GET", "", "Fri, 06 Jun 2014 13:39:43 GMT", [], "/v1/9991/tokens/123456789");
    expect(signature).toBe("9ond5EIN05dBXJGCLRK5om9pxHsyrh/12pZJ7bvmwNM=");
  });
});

/**
 * @group unit:context
 */
describe("context.integrator", () => {
  test("must not be empty", () => {
    const integrator = "";
    expect(() => sdkContext.setIntegrator(integrator)).toThrowError("integrator is required");
  });

  test("can be set", () => {
    const integrator = "test-integrator";
    sdkContext.setIntegrator(integrator);
    expect(sdkContext.getIntegrator()).toBe(integrator);
  });

  test("cannot be set twice", () => {
    const integrator = "test-integrator";
    if (!sdkContext.getIntegrator()) {
      sdkContext.setIntegrator(integrator);
    }
    expect(() => sdkContext.setIntegrator(integrator)).toThrowError("integrator has already been set and cannot be overwritten");
  });
});
