// SDK
var sdkcontext = require('./utils/context');
var communicator = require('./utils/communicator');

var payouts = require('./payouts');
var refunds = require('./refunds');
var sessions = require('./sessions');
var tokens = require('./tokens');
var services = require('./services');
var hostedcheckouts = require('./hostedcheckouts');
var products = require('./products');
var payments = require('./payments');
var productgroups = require('./productgroups');
var riskassessments = require('./riskassessments');

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
    _context.API_VERSION = 'v1';
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
  },
  payouts: payouts,
  refunds: refunds,
  sessions: sessions,
  tokens: tokens,
  services: services,
  hostedcheckouts: hostedcheckouts,
  products: products,
  payments: payments,
  productgroups: productgroups,
  riskassessments: riskassessments,
  context: sdkcontext
};
module.exports = wrapper;
