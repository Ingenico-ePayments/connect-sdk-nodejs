/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import communicator = require("../utils/communicator");
import { PaymentContext, SdkCallback } from "../model";

const getFile = function(merchantId: string, fileId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void {
  communicator.json({
    method: "GET",
    modulePath: "/files/v1/" + merchantId + "/files/" + fileId,
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
};
export = getFile;
