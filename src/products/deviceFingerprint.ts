/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import { validate } from "jsonschema";
import communicator = require("../utils/communicator");
import sdkcontext = require("../utils/context");
import { PaymentContext, SdkCallback } from "../model";
import { DeviceFingerprintRequest } from "../model/domain/product";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const requestSchema = require("../../schemas/product/DeviceFingerprintRequest.json");

const getDeviceFingerprint = function(
  merchantId: string,
  paymentProductId: number,
  postData: DeviceFingerprintRequest,
  paymentContext: PaymentContext | null,
  cb: SdkCallback
): void {
  // validate postData
  const isValidRequest = validate(postData, requestSchema);
  if (!isValidRequest.valid) {
    const logger = sdkcontext.getLogger();
    if (sdkcontext.isLoggingEnabled()) {
      logger("error", isValidRequest.errors);
    }
    throw new Error(isValidRequest.errors.toString());
  }
  communicator.json({
    method: "POST",
    modulePath: "/v1/" + merchantId + "/products/" + paymentProductId + "/deviceFingerprint",
    body: postData,
    paymentContext: paymentContext,
    cb: cb
  });
};
export = getDeviceFingerprint;
