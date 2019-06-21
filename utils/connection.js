var http = require('http');
var https = require('https');

var uuid = require('node-uuid');

var formData = require('form-data');

var obfuscate = require('../utils/obfuscate');
var headers = require('../utils/headers');

var handleResponse = function (res, context, logger, uuidString, cb) {
  if (context.isLoggingEnabled()) {
    var body = '';

    if (headers.isBinaryContent(res.headers['content-type'])) {
      body = '<binary content>';
    } else {
      res.setEncoding('utf8');
      res.on('data', function (chunk) {
        body += chunk;
      });
    }

    res.on('end', function () {
      if (context.isLoggingEnabled()) {
        var obfuscatedBody = headers.isJSON(res.headers['content-type']) ? obfuscate.getObfuscated(body, context) : body;
        logger('info', 'Response from Message ID: ' + uuidString + ", status: " + res.statusCode + ", headers: " + obfuscate.getObfuscated(res.headers, context) + ", body: " + obfuscatedBody);
      }
    });
  }

  cb(null, res);
};

var handleError = function (e, context, logger, uuidString, cb) {
  if (context.isLoggingEnabled()) {
    logger('error', 'Error for Message ID:' + uuidString + ", error: " + JSON.stringify(e));
  }
  cb(e, null);
};

var sendJSON = function (options, postData, context, cb) {
  var logger = context.getLogger();
  var uuidString = uuid.v4();
  if (context.isLoggingEnabled()) {
    logger('info', 'Request with Message ID: ' + uuidString + ", " + options.method + " to " + options.path + ", headers: " + obfuscate.getObfuscated(options.headers) + ", body: " + obfuscate.getObfuscated(postData, context));
  }
  var h = options.protocol === 'https:' ? https : http;
  var req = h.request(options, function (res) {
    handleResponse(res, context, logger, uuidString, cb);
  });
  req.on('error', function (e) {
    handleError(e, context, logger, uuidString, cb);
  });

  if (postData) {
    req.write(JSON.stringify(postData));
  }
  req.end();
};

var sendMultipart = function (options, postData, boundary, context, cb) {
  var logger = context.getLogger();
  var uuidString = uuid.v4();
  if (context.isLoggingEnabled()) {
    logger('info', 'Request with Message ID: ' + uuidString + ", " + options.method + " to " + options.path + ", headers: " + obfuscate.getObfuscated(options.headers) + ", body: " + '<binary data>');
  }
  var h = options.protocol === 'https:' ? https : http;
  var req = h.request(options, function (res) {
    handleResponse(res, context, logger, uuidString, cb);
  });
  req.on('error', function (e) {
    handleError(e, context, logger, uuidString, cb);
  });

  var form = formData();
  // overwrite getBoundary to use the provided boundary instead of letting the form generate one
  form.getBoundary = function () {
    return boundary;
  };
  if (postData) {
    for (var key in postData) {
      if (typeof(postData[key]) === 'object') {
        if (!postData[key].fileName) {
          cb({
            message: key + ': fileName is required'
          }, null);
          return;
        }
        if (!postData[key].contentType) {
          cb({
            message: key + ': contentType is required'
          }, null);
          return;
        }
        if (!postData[key].content) {
          cb({
            message: key + ': content is required'
          }, null);
          return;
        }
        var opts = {
          filename: postData[key].fileName,
          contentType: postData[key].contentType
        };
        if (postData[key].contentLength || postData[key].contentLength === 0) {
          opts.knownLength = postData[key].contentLength;
        }
        form.append(key, postData[key].content, opts);
      } else {
        form.append(key, postData[key]);
      }
    }
  }
  form.pipe(req);
};

var connect = {
  sendJSON:      sendJSON,
  sendMultipart: sendMultipart
};

module.exports = connect;