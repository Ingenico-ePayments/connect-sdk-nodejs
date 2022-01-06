/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import communicator = require("../utils/communicator");
import { PaymentContext, SdkCallback } from "../model";

const getMandate = function(merchantId: string, uniqueMandateReference: string, paymentContext: PaymentContext | null, cb: SdkCallback): void {
  communicator.json({
    method: "GET",
    modulePath: "/v1/" + merchantId + "/mandates/" + uniqueMandateReference,
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
};
export = getMandate;
