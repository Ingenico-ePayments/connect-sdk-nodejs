/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import find = require("./find");
import get = require("./get");
import directory = require("./directory");
import customerDetails = require("./customerDetails");
import deviceFingerprint = require("./deviceFingerprint");
import networks = require("./networks");
import sessions = require("./sessions");
import { ProductsClient } from "../model/products";

const productsClient: ProductsClient = {
  find: find,
  get: get,
  directory: directory,
  customerDetails: customerDetails,
  deviceFingerprint: deviceFingerprint,
  networks: networks,
  sessions: sessions
};
export = productsClient;
