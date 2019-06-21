"use strict";
/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
var communicator = require('../utils/communicator');

var myModule = function (merchantId, captureId, paymentContext, cb) {
  communicator.json({
    method: 'GET',
    modulePath: '/v1/' + merchantId + '/captures/' + captureId,
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
}

module.exports = myModule;
