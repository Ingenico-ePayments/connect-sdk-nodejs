/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import communicator = require("../utils/communicator");
import { SdkCallback } from "../model";
import { PrivacypolicyParams } from "../model/services";

const getPrivacyPolicy = function(merchantId: string, paymentContext: PrivacypolicyParams, cb: SdkCallback): void {
  communicator.json({
    method: "GET",
    modulePath: "/v1/" + merchantId + "/services/privacypolicy",
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
};
export = getPrivacyPolicy;
