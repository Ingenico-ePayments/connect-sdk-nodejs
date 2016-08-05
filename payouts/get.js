"use strict";
var communicator = require('../utils/communicator');

var myModule = function (merchantId, payoutId, paymentContext, cb) {
  communicator({
    method: 'GET',
    modulePath: '/v1/' + merchantId + '/payouts/' + payoutId,
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
}

module.exports = myModule;
