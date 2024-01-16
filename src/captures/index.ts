/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import get = require("./get");
import refund = require("./refund");
import { CapturesClient } from "../model/captures";

const capturesClient: CapturesClient = {
  get: get,
  refund: refund
};
export = capturesClient;
