"use strict";
var communicator = require('../utils/communicator');

var myModule = function (merchantId, paymentProductId, paymentContext, cb) {
  communicator({
    method: 'GET',
    modulePath: '/v1/' + merchantId + '/products/' + paymentProductId,
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
}

module.exports = myModule;
