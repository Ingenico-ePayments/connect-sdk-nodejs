/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import communicator = require("../utils/communicator");
import { PaymentContext, SdkCallback } from "../model";

const cancelRefund = function(merchantId: string, refundId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void {
  communicator.json({
    method: "POST",
    modulePath: "/v1/" + merchantId + "/refunds/" + refundId + "/cancel",
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
};
export = cancelRefund;
