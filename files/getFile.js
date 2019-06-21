"use strict";
/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
var communicator = require('../utils/communicator');

var myModule = function (merchantId, fileId, paymentContext, cb) {
  communicator.json({
    method: 'GET',
    modulePath: '/files/v1/' + merchantId + '/files/' + fileId,
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
}

module.exports = myModule;
