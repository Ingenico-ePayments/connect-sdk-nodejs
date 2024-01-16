/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import create = require("./create");
import find = require("./find");
import get = require("./get");
import approve = require("./approve");
import cancel = require("./cancel");
import cancelapproval = require("./cancelapproval");
import { PayoutsClient } from "../model/payouts";

const payoutsClient: PayoutsClient = {
  create: create,
  find: find,
  get: get,
  approve: approve,
  cancel: cancel,
  cancelapproval: cancelapproval
};
export = payoutsClient;
