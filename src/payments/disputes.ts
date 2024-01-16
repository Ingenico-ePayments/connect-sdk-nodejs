/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import communicator = require("../utils/communicator");
import { PaymentContext, SdkCallback } from "../model";

const getPaymentDisputes = function(merchantId: string, paymentId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void {
  communicator.json({
    method: "GET",
    modulePath: "/v1/" + merchantId + "/payments/" + paymentId + "/disputes",
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
};
export = getPaymentDisputes;
