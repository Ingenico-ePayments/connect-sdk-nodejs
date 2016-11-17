var _ = require('lodash');

var headers = require('../utils/headers');
var connection = require('../utils/connection');
var sdkcontext = require('../utils/context');

var communicator = function (o) {
  var context = sdkcontext.getContext();
  var date = headers.date();
  var path = o.modulePath;
  if (o.paymentContext) {
    var separator = "?";
    for (var key in o.paymentContext) {
      if (key !== "extraHeaders" && key !== "idemPotence") {
        if (_.isArray(o.paymentContext[key])) {
          for (var value in o.paymentContext[key]) {
            path += separator + key + "=" + o.paymentContext[key][value];
            separator = "&";
          }
        } else {
          path += separator + key + "=" + o.paymentContext[key];
          separator = "&";
        }
      }
    }
  }
  var options = _.merge({}, context.httpOptions),
    extraHeaders = [];
  options.path = path;
  options.method = o.method;
  options.headers['Date'] = date;
  if (o.paymentContext && o.paymentContext.extraHeaders) {
    for (var i = 0; i < o.paymentContext.extraHeaders.length; i++) {
      var header = o.paymentContext.extraHeaders[i];
      options.headers[header.key] = _.trim(header.value.replace(/\r?\n[\\s&&[^\r\n]]*/g, " "));
      extraHeaders.push(header);
    }
  }

  // add idemPotence header
  if (o.paymentContext && o.paymentContext.idemPotence) {
    var idemPotenceKey = o.paymentContext.idemPotence.key;
    var idemPotenceHeader = {
      key: "X-GCS-Idempotence-Key",
      value: idemPotenceKey
    }
    options.headers[idemPotenceHeader.key] = idemPotenceHeader.value;
    extraHeaders.push(idemPotenceHeader);
  }

  // add X-GCS-ServerMetaInfo
  var serverMetaInfo = headers.serverMetaInfo(sdkcontext);
  options.headers[serverMetaInfo.key] = serverMetaInfo.value;
  extraHeaders.push(serverMetaInfo);

  options.headers.Authorization = 'GCS v1HMAC:' + context.apiKeyId + ':' + sdkcontext.getSignature(o.method, 'application/json', date, extraHeaders, path);
  doRequest(options, o.body, o.cb);
};


var doRequest = function (options, postData, cb) {
  connection.send(options, postData, sdkcontext, function(error, response) {
    if (error) {
      cb(error, null);
    } else {
      if (response.headers["x-gcs-idempotence-request-timestamp"]) {
        sdkcontext.setIdempotenceRequestTimestamp(response.headers["x-gcs-idempotence-request-timestamp"]);
      }
      var body = response.body;
      try {
        body = (body) ? JSON.parse(body) : null;
        cb(null, {
          status: response.status,
          body: body
        });
      } catch (e) {
        cb({
          status: response.status,
          message: e.message,
          body: body
        }, null);
      }
    }
  });
};

module.exports = communicator;