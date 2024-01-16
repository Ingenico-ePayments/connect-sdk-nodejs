/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import communicator = require("../utils/communicator");
import { PaymentContext, SdkCallback } from "../model";

const unblockMandate = function(merchantId: string, uniqueMandateReference: string, paymentContext: PaymentContext | null, cb: SdkCallback): void {
  communicator.json({
    method: "POST",
    modulePath: "/v1/" + merchantId + "/mandates/" + uniqueMandateReference + "/unblock",
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
};
export = unblockMandate;
