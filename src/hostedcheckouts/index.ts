/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import create = require("./create");
import get = require("./get");
import remove = require("./remove");
import { HostedcheckoutsClient } from "../model/hostedcheckouts";

const hostedcheckoutsClient: HostedcheckoutsClient = {
  create: create,
  get: get,
  remove: remove
};
export = hostedcheckoutsClient;
