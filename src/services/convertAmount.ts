/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import communicator = require("../utils/communicator");
import { SdkCallback } from "../model";
import { ConvertAmountParams } from "../model/services";

const convertAmount = function(merchantId: string, paymentContext: ConvertAmountParams, cb: SdkCallback): void {
  communicator.json({
    method: "GET",
    modulePath: "/v1/" + merchantId + "/services/convert/amount",
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
};
export = convertAmount;
