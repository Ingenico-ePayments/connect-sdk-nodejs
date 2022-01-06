import * as connectSdk from "../../src";

// eslint-disable-next-line @typescript-eslint/no-var-requires
export const config = require("../config.json");

jest.setTimeout(60 * 1000);

connectSdk.init({
  host: config.apiEndpoint.host,
  scheme: config.apiEndpoint.scheme,
  port: config.apiEndpoint.port,
  enableLogging: config.enableLogging, // defaults to false
  apiKeyId: config.apiKeyId,
  secretApiKey: config.secretApiKey,
  integrator: "Integration tests"
});

export default connectSdk;
