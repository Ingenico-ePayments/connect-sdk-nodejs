/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import communicator = require("../utils/communicator");
import { PaymentContext, SdkCallback } from "../model";
import { UploadFileRequest } from "../model/disputes";

const uploadDisputeFile = function(merchantId: string, disputeId: string, postData: UploadFileRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void {
  communicator.multipart({
    method: "POST",
    modulePath: "/files/v1/" + merchantId + "/disputes/" + disputeId,
    body: postData,
    paymentContext: paymentContext,
    cb: cb
  });
};
export = uploadDisputeFile;
