"use strict";
/*
 * This file was auto-generated from the API references found at
 * https://developer.globalcollect.com/documentation/api/server/
 */
var communicator = require('../utils/communicator');

var myModule = function (merchantId, tokenId, paymentContext, cb) {
  communicator({
    method: 'DELETE',
    modulePath: '/v1/' + merchantId + '/tokens/' + tokenId,
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
}

module.exports = myModule;
