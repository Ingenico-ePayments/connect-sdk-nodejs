/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import communicator = require("../utils/communicator");
import { SdkCallback } from "../model";
import { DirectoryParams } from "../model/products";

const getDirectory = function(merchantId: string, paymentProductId: number, paymentContext: DirectoryParams, cb: SdkCallback): void {
  communicator.json({
    method: "GET",
    modulePath: "/v1/" + merchantId + "/products/" + paymentProductId + "/directory",
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
};
export = getDirectory;
