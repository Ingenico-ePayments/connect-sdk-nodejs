/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import communicator = require("../utils/communicator");
import { SdkCallback } from "../model";
import { FindProductsParams } from "../model/products";

const getPaymentProducts = function(merchantId: string, paymentContext: FindProductsParams, cb: SdkCallback): void {
  communicator.json({
    method: "GET",
    modulePath: "/v1/" + merchantId + "/products",
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
};
export = getPaymentProducts;
