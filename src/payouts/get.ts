/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import communicator = require("../utils/communicator");
import { PaymentContext, SdkCallback } from "../model";

const getPayout = function(merchantId: string, payoutId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void {
  communicator.json({
    method: "GET",
    modulePath: "/v1/" + merchantId + "/payouts/" + payoutId,
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
};
export = getPayout;
