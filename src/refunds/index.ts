/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import find = require("./find");
import get = require("./get");
import approve = require("./approve");
import cancel = require("./cancel");
import cancelapproval = require("./cancelapproval");
import { RefundsClient } from "../model/refunds";

const refundsClient: RefundsClient = {
  find: find,
  get: get,
  approve: approve,
  cancel: cancel,
  cancelapproval: cancelapproval
};
export = refundsClient;
