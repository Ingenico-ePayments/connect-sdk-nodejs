"use strict";
var communicator = require('../utils/communicator');

var myModule = function (merchantId, paymentId, paymentContext, cb) {
  communicator({
    method: 'POST',
    modulePath: '/v1/' + merchantId + '/payments/' + paymentId + '/cancel',
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
}

module.exports = myModule;
