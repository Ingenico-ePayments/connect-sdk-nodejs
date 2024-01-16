/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import communicator = require("../utils/communicator");
import { PaymentContext, SdkCallback } from "../model";

const getHostedCheckout = function(merchantId: string, hostedCheckoutId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void {
  communicator.json({
    method: "GET",
    modulePath: "/v1/" + merchantId + "/hostedcheckouts/" + hostedCheckoutId,
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
};
export = getHostedCheckout;
