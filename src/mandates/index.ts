/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import create = require("./create");
import createWithMandateReference = require("./createWithMandateReference");
import get = require("./get");
import block = require("./block");
import unblock = require("./unblock");
import revoke = require("./revoke");
import { MandatesClient } from "../model/mandates";

const mandatesClient: MandatesClient = {
  create: create,
  createWithMandateReference: createWithMandateReference,
  get: get,
  block: block,
  unblock: unblock,
  revoke: revoke
};
export = mandatesClient;
