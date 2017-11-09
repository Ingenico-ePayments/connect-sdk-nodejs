/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
// SDK
var apiVersion = 'v1';

var sdkcontext = require('./utils/context');
var communicator = require('./utils/communicator');

var payments = require('./payments');
var captures = require('./captures');
var payouts = require('./payouts');
var products = require('./products');
var productgroups = require('./productgroups');
var mandates = require('./mandates');
var refunds = require('./refunds');
var riskassessments = require('./riskassessments');
var services = require('./services');
var sessions = require('./sessions');
var tokens = require('./tokens');
var hostedcheckouts = require('./hostedcheckouts');

var webhooks = require('./webhooks');
webhooks.API_VERSION = apiVersion;

var _logger = null;
var _context = null;

var httpOptions = {
  host: null,
  protocol: null,
  method: null,
  port: null,
  headers: {
    'Content-Type': 'application/json'
  }
};

var setBasicOptions = function () {
  httpOptions.host = _context.host;
  httpOptions.port = _context.port;
  httpOptions.protocol = _context.scheme + ':';
};

var wrapper = {
  init: function (context) {
    _logger = context.logger;
    _context = context;
    if (typeof context.scheme === 'undefined') {
      _context.scheme = 'https';
    }
    if (typeof context.port === 'undefined') {
      if (_context.scheme === 'https') {
        _context.port = 443;
      } else {
        _context.port = 80;
      }
    }
    setBasicOptions();
    _context.httpOptions = httpOptions;
    _context.API_VERSION = apiVersion;
    sdkcontext.setContext(_context);
    sdkcontext.setLogger(function (level, message) {
      if (typeof _logger !== 'undefined' && _logger) {
        _logger[level](message);
      } else {
        console[level](message);
      }
    });
    if (context.hasOwnProperty("enableLogging")) {
      sdkcontext.setEnableLogging(context.enableLogging);
    } else {
      sdkcontext.setEnableLogging(false);
    }
    // context.intergrator has been deprecated but needs to be supported for backwards compatibility
    if (context.integrator) {
      sdkcontext.setIntegrator(context.integrator);
    } else {
      sdkcontext.setIntegrator(context.intergrator);
    }
    sdkcontext.setShoppingCartExtension(context.shoppingCartExtension);
    return wrapper;
  },
  payments: payments,
  captures: captures,
  payouts: payouts,
  products: products,
  productgroups: productgroups,
  mandates: mandates,
  refunds: refunds,
  riskassessments: riskassessments,
  services: services,
  sessions: sessions,
  tokens: tokens,
  hostedcheckouts: hostedcheckouts,
  context: sdkcontext,

  webhooks: webhooks
};
module.exports = wrapper;
