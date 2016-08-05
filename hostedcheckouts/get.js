"use strict";
var communicator = require('../utils/communicator');

var myModule = function (merchantId, hostedCheckoutId, paymentContext, cb) {
  communicator({
    method: 'GET',
    modulePath: '/v1/' + merchantId + '/hostedcheckouts/' + hostedCheckoutId,
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
}

module.exports = myModule;
