"use strict";
var communicator = require('../utils/communicator');

var myModule = function (merchantId, payoutId, paymentContext, cb) {
  communicator({
    method: 'POST',
    modulePath: '/v1/' + merchantId + '/payouts/' + payoutId + '/cancel',
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
}

module.exports = myModule;
