var _ = require('lodash');

var headers = require('../utils/headers');
var connection = require('../utils/connection');
var sdkcontext = require('../utils/context');

var uuid = require('node-uuid');


var prepareRequest = function (o, context, options, contentType) {
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
  var extraHeaders = [];
  options.path = path;
  options.method = o.method;
  options.headers['Date'] = date;
  options.headers['Content-Type'] = contentType;
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

  options.headers.Authorization = 'GCS v1HMAC:' + context.apiKeyId + ':' + sdkcontext.getSignature(o.method, contentType, date, extraHeaders, options.path);
};

var handleResponse = function (error, response, cb) {
  if (error) {
    cb(error, null);
  } else {
    if (response.headers["x-gcs-idempotence-request-timestamp"]) {
      sdkcontext.setIdempotenceRequestTimestamp(response.headers["x-gcs-idempotence-request-timestamp"]);
    }

    if (headers.isBinaryContent(response.headers['content-type'])) {
      cb(null, {
        status: response.statusCode,
        body: response,
        isSuccess: response.statusCode >= 200 && response.statusCode < 300,
        file: {
          contentType: response.headers['content-type'],
          contentLength: headers.contentLength(response.headers),
          filename: headers.dispositionFilename(response.headers)
        }
      });
    } else {
      var body = '';

      response.setEncoding('utf8');
      response.on('data', function (chunk) {
        body += chunk;
      });
      response.on('end', function () {
        try {
          body = (body) ? JSON.parse(body) : null;
          cb(null, {
            status: response.statusCode,
            body: body,
            isSuccess: response.statusCode >= 200 && response.statusCode < 300
          });
        } catch (e) {
          e.status = response.statusCode;
          e.body = body;
          cb(e, null);
        }
      });
    }
  }
};

var json = function (o) {
  var context = sdkcontext.getContext();
  var options = _.merge({}, context.httpOptions);
  prepareRequest(o, context, options, 'application/json');
  connection.sendJSON(options, o.body, sdkcontext, function (error, response) {
    handleResponse(error, response, o.cb);
  });
};

var multipart = function (o) {
  var context = sdkcontext.getContext();
  var options = _.merge({}, context.httpOptions);
  var boundary = uuid.v4();
  prepareRequest(o, context, options, 'multipart/form-data; boundary=' + boundary);
  connection.sendMultipart(options, o.body, boundary, sdkcontext, function (error, response) {
    handleResponse(error, response, o.cb);
  });
};

var communicator = {
  json:      json,
  multipart: multipart
};

module.exports = communicator;