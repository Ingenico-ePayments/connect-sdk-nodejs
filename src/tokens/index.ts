/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import create = require("./create");
import get = require("./get");
import update = require("./update");
import remove = require("./remove");
import approvesepadirectdebit = require("./approvesepadirectdebit");
import { TokensClient } from "../model/tokens";

const tokensClient: TokensClient = {
  create: create,
  get: get,
  update: update,
  remove: remove,
  approvesepadirectdebit: approvesepadirectdebit
};
export = tokensClient;
