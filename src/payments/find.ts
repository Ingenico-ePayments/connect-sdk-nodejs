/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import communicator = require("../utils/communicator");
import { SdkCallback } from "../model";
import { FindPaymentsParams } from "../model/payments";

const findPayments = function(merchantId: string, paymentContext: FindPaymentsParams, cb: SdkCallback): void {
  communicator.json({
    method: "GET",
    modulePath: "/v1/" + merchantId + "/payments",
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
};
export = findPayments;
