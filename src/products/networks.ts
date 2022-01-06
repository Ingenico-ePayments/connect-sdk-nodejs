/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import communicator = require("../utils/communicator");
import { SdkCallback } from "../model";
import { NetworksParams } from "../model/products";

const getNetworks = function(merchantId: string, paymentProductId: number, paymentContext: NetworksParams, cb: SdkCallback): void {
  communicator.json({
    method: "GET",
    modulePath: "/v1/" + merchantId + "/products/" + paymentProductId + "/networks",
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
};
export = getNetworks;
