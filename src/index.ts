/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import https = require("https");
import { CommunicatorLogger, ConnectSdk, Context } from "./model";
import sdkcontext = require("./utils/context");
import obfuscate = require("./utils/obfuscate");

import hostedcheckouts = require("./hostedcheckouts");
import hostedmandatemanagements = require("./hostedmandatemanagements");
import payments = require("./payments");
import captures = require("./captures");
import refunds = require("./refunds");
import disputes = require("./disputes");
import payouts = require("./payouts");
import productgroups = require("./productgroups");
import products = require("./products");
import riskassessments = require("./riskassessments");
import services = require("./services");
import tokens = require("./tokens");
import mandates = require("./mandates");
import sessions = require("./sessions");
import installments = require("./installments");
import files = require("./files");

import webhooks = require("./webhooks");

let _logger: CommunicatorLogger | undefined;
let _context: Context;

const httpOptions: https.RequestOptions = {
  host: undefined,
  protocol: undefined,
  method: undefined,
  port: undefined,
  headers: {
    "Content-Type": "application/json"
  }
};

const setBasicOptions = (): void => {
  httpOptions.host = _context.host;
  httpOptions.port = _context.port;
  httpOptions.protocol = _context.scheme + ":";
};

const connectSdk: ConnectSdk = {
  init(context: Context) {
    _logger = context.logger;
    _context = context;
    if (typeof context.scheme === "undefined") {
      _context.scheme = "https";
    }
    if (typeof context.port === "undefined") {
      if (_context.scheme === "https") {
        _context.port = 443;
      } else {
        _context.port = 80;
      }
    }
    setBasicOptions();
    _context.httpOptions = httpOptions;
    sdkcontext.setContext(_context);
    sdkcontext.setLogger((level, message) => {
      if (typeof _logger !== "undefined" && _logger) {
        _logger[level](message);
      } else {
        console[level](message);
      }
    });
    sdkcontext.setEnableLogging(context.enableLogging || false);
    sdkcontext.setIntegrator(context.integrator);
    sdkcontext.setShoppingCartExtension(context.shoppingCartExtension);
    return connectSdk;
  },
  hostedcheckouts: hostedcheckouts,
  hostedmandatemanagements: hostedmandatemanagements,
  payments: payments,
  captures: captures,
  refunds: refunds,
  disputes: disputes,
  payouts: payouts,
  productgroups: productgroups,
  products: products,
  riskassessments: riskassessments,
  services: services,
  tokens: tokens,
  mandates: mandates,
  sessions: sessions,
  installments: installments,
  files: files,

  context: sdkcontext,

  webhooks: webhooks,

  obfuscate: {
    all: obfuscate.all,
    allButLast: obfuscate.allButLast,
    allButFirst: obfuscate.allButFirst,
    withFixedLength: obfuscate.withFixedLength
  }
};
export = connectSdk;
