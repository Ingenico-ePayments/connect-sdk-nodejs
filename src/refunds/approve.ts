/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import { validate } from "jsonschema";
import communicator = require("../utils/communicator");
import sdkcontext = require("../utils/context");
import { PaymentContext, SdkCallback } from "../model";
import { ApproveRefundRequest } from "../model/domain/refund";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const requestSchema = require("../../schemas/refund/ApproveRefundRequest.json");

const approveRefund = function(merchantId: string, refundId: string, postData: ApproveRefundRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void {
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
    modulePath: "/v1/" + merchantId + "/refunds/" + refundId + "/approve",
    body: postData,
    paymentContext: paymentContext,
    cb: cb
  });
};
export = approveRefund;
