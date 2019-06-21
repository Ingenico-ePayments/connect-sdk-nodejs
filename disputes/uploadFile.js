"use strict";
/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
var communicator = require('../utils/communicator');

var myModule = function (merchantId, disputeId, postData, paymentContext, cb) {
  communicator.multipart({
    method: 'POST',
    modulePath: '/files/v1/' + merchantId + '/disputes/' + disputeId,
    body: postData,
    paymentContext: paymentContext,
    cb: cb
  });
}

module.exports = myModule;
