/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import { validate } from "jsonschema";
import communicator = require("../utils/communicator");
import sdkcontext = require("../utils/context");
import { PaymentContext, SdkCallback } from "../model";
import { CreateHostedCheckoutRequest } from "../model/domain/hostedcheckout";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const requestSchema = require("../../schemas/hostedcheckout/CreateHostedCheckoutRequest.json");

const createHostedCheckout = function(merchantId: string, postData: CreateHostedCheckoutRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void {
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
    modulePath: "/v1/" + merchantId + "/hostedcheckouts",
    body: postData,
    paymentContext: paymentContext,
    cb: cb
  });
};
export = createHostedCheckout;
