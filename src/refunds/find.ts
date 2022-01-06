/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import communicator = require("../utils/communicator");
import { SdkCallback } from "../model";
import { FindRefundsParams } from "../model/refunds";

const findRefunds = function(merchantId: string, paymentContext: FindRefundsParams, cb: SdkCallback): void {
  communicator.json({
    method: "GET",
    modulePath: "/v1/" + merchantId + "/refunds",
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
};
export = findRefunds;
