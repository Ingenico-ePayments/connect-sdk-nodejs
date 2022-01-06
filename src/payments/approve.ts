/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import { validate } from "jsonschema";
import communicator = require("../utils/communicator");
import sdkcontext = require("../utils/context");
import { PaymentContext, SdkCallback } from "../model";
import { ApprovePaymentRequest } from "../model/domain/payment";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const requestSchema = require("../../schemas/payment/ApprovePaymentRequest.json");

const approvePayment = function(merchantId: string, paymentId: string, postData: ApprovePaymentRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void {
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
    modulePath: "/v1/" + merchantId + "/payments/" + paymentId + "/approve",
    body: postData,
    paymentContext: paymentContext,
    cb: cb
  });
};
export = approvePayment;
