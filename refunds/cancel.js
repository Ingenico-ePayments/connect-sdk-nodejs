"use strict";
var communicator = require('../utils/communicator');

var myModule = function (merchantId, refundId, paymentContext, cb) {
  communicator({
    method: 'POST',
    modulePath: '/v1/' + merchantId + '/refunds/' + refundId + '/cancel',
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
}

module.exports = myModule;
