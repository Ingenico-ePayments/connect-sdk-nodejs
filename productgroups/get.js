"use strict";
var communicator = require('../utils/communicator');

var myModule = function (merchantId, paymentProductGroupId, paymentContext, cb) {
  communicator({
    method: 'GET',
    modulePath: '/v1/' + merchantId + '/productgroups/' + paymentProductGroupId,
    body: null,
    paymentContext: paymentContext,
    cb: cb
  });
}

module.exports = myModule;
