/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import communicator = require("../utils/communicator");
import { SdkCallback } from "../model";
import { DeleteTokenParams } from "../model/tokens";

const deleteToken = function(merchantId: string, tokenId: string, paymentContext: DeleteTokenParams, cb: SdkCallback): void {
  communicator.json({
    method: "DELETE",
    modulePath: "/v1/" + merchantId + "/tokens/" + tokenId,
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
};
export = deleteToken;
