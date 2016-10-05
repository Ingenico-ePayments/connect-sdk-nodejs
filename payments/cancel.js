"use strict";
/*
 * This file was auto-generated from the API references found at
 * https://developer.globalcollect.com/documentation/api/server/
 */
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
