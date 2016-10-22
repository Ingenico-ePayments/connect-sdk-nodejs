"use strict";
/*
 * This file was auto-generated from the API references found at
 * https://developer.globalcollect.com/documentation/api/server/
 */
var communicator = require('../utils/communicator');

var myModule = function (merchantId, payoutId, paymentContext, cb) {
  communicator({
    method: 'POST',
    modulePath: '/v1/' + merchantId + '/payouts/' + payoutId + '/cancelapproval',
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
}

module.exports = myModule;
