"use strict";
var communicator = require('../utils/communicator');

var myModule = function (merchantId, tokenId, paymentContext, cb) {
  communicator({
    method: 'GET',
    modulePath: '/v1/' + merchantId + '/tokens/' + tokenId,
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
}

module.exports = myModule;
