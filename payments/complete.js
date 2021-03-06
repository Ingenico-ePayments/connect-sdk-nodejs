"use strict";
/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
var validate = require('jsonschema').validate;
var communicator = require('../utils/communicator');
var sdkcontext = require('../utils/context');
var requestSchema = require('../schemas/payment/CompletePaymentRequest.json');

var myModule = function (merchantId, paymentId, postData, paymentContext, cb) {
  // validate postData
  var isValidRequest = validate(postData, requestSchema);
  if (!isValidRequest.valid) {
    var logger = sdkcontext.getLogger();
    if (sdkcontext.isLoggingEnabled()) {
      logger('error', isValidRequest.errors);
    }
    throw new Error(isValidRequest.errors);
  }
  communicator.json({
    method: 'POST',
    modulePath: '/v1/' + merchantId + '/payments/' + paymentId + '/complete',
    body: postData,
    paymentContext: paymentContext,
    cb: cb
  });
}

module.exports = myModule;
