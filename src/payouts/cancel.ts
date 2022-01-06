/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import communicator = require("../utils/communicator");
import { PaymentContext, SdkCallback } from "../model";

const cancelPayout = function(merchantId: string, payoutId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void {
  communicator.json({
    method: "POST",
    modulePath: "/v1/" + merchantId + "/payouts/" + payoutId + "/cancel",
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
};
export = cancelPayout;
