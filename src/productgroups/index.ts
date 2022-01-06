/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import find = require("./find");
import get = require("./get");
import deviceFingerprint = require("./deviceFingerprint");
import { ProductgroupsClient } from "../model/productgroups";

const productgroupsClient: ProductgroupsClient = {
  find: find,
  get: get,
  deviceFingerprint: deviceFingerprint
};
export = productgroupsClient;
