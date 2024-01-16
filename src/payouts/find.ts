/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import communicator = require("../utils/communicator");
import { SdkCallback } from "../model";
import { FindPayoutsParams } from "../model/payouts";

const findPayouts = function(merchantId: string, paymentContext: FindPayoutsParams, cb: SdkCallback): void {
  communicator.json({
    method: "GET",
    modulePath: "/v1/" + merchantId + "/payouts",
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
};
export = findPayouts;
