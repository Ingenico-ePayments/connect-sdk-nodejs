var http = require('http');
var https = require('https');

var dateformat = require('dateFormat');
var _ = require('lodash');
var uuid = require('node-uuid');

var sdkcontext = require('../utils/context');
var obfuscate = require('../utils/obfuscate');

var communicator = function (o) {
  var context = sdkcontext.getContext();
  var date = dateformat("GMT:ddd, dd mmm yyyy HH:MM:ss") + " GMT";
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
  options.headers.date = date;
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
  var serverMetaInfo = {
    key: "X-GCS-ServerMetaInfo",
    value: {
      'sdkCreator': 'Ingenico',
      'sdkIdentifier': 'NodejsServerSDK/v1.0.0',
      'platformIdentifier': process.env["OS"] + ' Node.js/' + process.versions.node
    }
  }
  serverMetaInfo.value = new Buffer(JSON.stringify(serverMetaInfo.value)).toString("base64");
  options.headers[serverMetaInfo.key] = serverMetaInfo.value;
  extraHeaders.push(serverMetaInfo);


  options.headers.Authorization = 'GCS v1HMAC:' + context.apiKeyId + ':' + sdkcontext.getSignature(o.method, 'application/json', date, extraHeaders, path);
  doRequest(options, o.body, o.cb);
};



var doRequest = function (options, postData, cb) {
  var logger = sdkcontext.getLogger(),
    uuidString = uuid.v4();
  if (sdkcontext.isLoggingEnabled()) {
    logger('info', 'Request with Message ID: ' + uuidString + ", " + options.method + " to " + options.path + ", headers: " + obfuscate.getObfuscated(options.headers) + ", body: " + obfuscate.getObfuscated(postData));
  }
  var h = options.protocol === 'https:' ? https : http;
  var req = h.request(options, function (res) {
    var body = '';

    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      body += chunk;
    });

    res.on('end', function () {
      if (sdkcontext.isLoggingEnabled()) {
        logger('info', 'Response from Message ID: ' + uuidString + ", status: " + res.statusCode + ", headers: " + obfuscate.getObfuscated(res.headers) + ", body: " + obfuscate.getObfuscated(body));
      }
      if (res.headers["x-gcs-idempotence-request-timestamp"]) {
        sdkcontext.setIdempotenceRequestTimestamp(res.headers["x-gcs-idempotence-request-timestamp"]);
      }
      try {
        body = (body) ? JSON.parse(body) : null;
        cb(null, {
          status: res.statusCode,
          body: body
        });
      } catch (e) {
        cb({
          status: res.statusCode,
          message: e.message,
          body: body
        }, null);
      }
    });
  });
  req.on('error', function (e) {
    if (sdkcontext.isLoggingEnabled()) {
      logger('error', 'Error for Message ID:' + uuidString + ", error: " + JSON.stringify(e));
    }
    cb(e, null);
  });
  if (postData) {
    req.write(JSON.stringify(postData));
  }
  req.end();
};

module.exports = communicator;