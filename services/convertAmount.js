"use strict";
var communicator = require('../utils/communicator');

var myModule = function (merchantId, paymentContext, cb) {
  communicator({
    method: 'GET',
    modulePath: '/v1/' + merchantId + '/services/convert/amount',
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
}

module.exports = myModule;
