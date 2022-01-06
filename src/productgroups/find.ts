/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import communicator = require("../utils/communicator");
import { SdkCallback } from "../model";
import { FindProductgroupsParams } from "../model/productgroups";

const getPaymentProductGroups = function(merchantId: string, paymentContext: FindProductgroupsParams, cb: SdkCallback): void {
  communicator.json({
    method: "GET",
    modulePath: "/v1/" + merchantId + "/productgroups",
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
};
export = getPaymentProductGroups;
