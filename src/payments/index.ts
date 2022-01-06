/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import create = require("./create");
import find = require("./find");
import get = require("./get");
import complete = require("./complete");
import thirdPartyStatus = require("./thirdPartyStatus");
import tokenize = require("./tokenize");
import processchallenged = require("./processchallenged");
import approve = require("./approve");
import capture = require("./capture");
import cancelapproval = require("./cancelapproval");
import captures = require("./captures");
import refund = require("./refund");
import refunds = require("./refunds");
import cancel = require("./cancel");
import dispute = require("./dispute");
import disputes = require("./disputes");
import devicefingerprint = require("./devicefingerprint");
import { PaymentsClient } from "../model/payments";

const paymentsClient: PaymentsClient = {
  create: create,
  find: find,
  get: get,
  complete: complete,
  thirdPartyStatus: thirdPartyStatus,
  tokenize: tokenize,
  processchallenged: processchallenged,
  approve: approve,
  capture: capture,
  cancelapproval: cancelapproval,
  captures: captures,
  refund: refund,
  refunds: refunds,
  cancel: cancel,
  dispute: dispute,
  disputes: disputes,
  devicefingerprint: devicefingerprint
};
export = paymentsClient;
