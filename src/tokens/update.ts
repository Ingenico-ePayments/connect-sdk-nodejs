/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import { validate } from "jsonschema";
import communicator = require("../utils/communicator");
import sdkcontext = require("../utils/context");
import { PaymentContext, SdkCallback } from "../model";
import { UpdateTokenRequest } from "../model/domain/token";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const requestSchema = require("../../schemas/token/UpdateTokenRequest.json");

const updateToken = function(merchantId: string, tokenId: string, postData: UpdateTokenRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void {
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
    method: "PUT",
    modulePath: "/v1/" + merchantId + "/tokens/" + tokenId,
    body: postData,
    paymentContext: paymentContext,
    cb: cb
  });
};
export = updateToken;
