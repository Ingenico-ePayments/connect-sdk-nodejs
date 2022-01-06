/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import communicator = require("../utils/communicator");
import { SdkCallback } from "../model";
import { GetProductgroupParams } from "../model/productgroups";

const getPaymentProductGroup = function(merchantId: string, paymentProductGroupId: string, paymentContext: GetProductgroupParams, cb: SdkCallback): void {
  communicator.json({
    method: "GET",
    modulePath: "/v1/" + merchantId + "/productgroups/" + paymentProductGroupId,
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
};
export = getPaymentProductGroup;
