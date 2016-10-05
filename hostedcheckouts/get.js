"use strict";
/*
 * This file was auto-generated from the API references found at
 * https://developer.globalcollect.com/documentation/api/server/
 */
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
