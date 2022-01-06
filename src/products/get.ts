/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import communicator = require("../utils/communicator");
import { SdkCallback } from "../model";
import { GetProductParams } from "../model/products";

const getPaymentProduct = function(merchantId: string, paymentProductId: number, paymentContext: GetProductParams, cb: SdkCallback): void {
  communicator.json({
    method: "GET",
    modulePath: "/v1/" + merchantId + "/products/" + paymentProductId,
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
};
export = getPaymentProduct;
