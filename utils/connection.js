var http = require('http');
var https = require('https');

var uuid = require('node-uuid');

var obfuscate = require('../utils/obfuscate');

var send = function (options, postData, context, cb) {
  var logger = context.getLogger();
  var uuidString = uuid.v4();
  if (context.isLoggingEnabled()) {
    logger('info', 'Request with Message ID: ' + uuidString + ", " + options.method + " to " + options.path + ", headers: " + obfuscate.getObfuscated(options.headers) + ", body: " + obfuscate.getObfuscated(postData, context));
  }
  var h = options.protocol === 'https:' ? https : http;
  var req = h.request(options, function (res) {
    var body = '';

    res.setEncoding('utf8');
    res.on('data', function (chunk) {
      body += chunk;
    });

    res.on('end', function () {
      if (context.isLoggingEnabled()) {
        logger('info', 'Response from Message ID: ' + uuidString + ", status: " + res.statusCode + ", headers: " + obfuscate.getObfuscated(res.headers, context) + ", body: " + obfuscate.getObfuscated(body, context));
      }
      cb(null, {
        status: res.statusCode,
        body: body,
        headers: res.headers
      });
    });
  });
  req.on('error', function (e) {
    if (context.isLoggingEnabled()) {
      logger('error', 'Error for Message ID:' + uuidString + ", error: " + JSON.stringify(e));
    }
    cb(e, null);
  });
  if (postData) {
    req.write(JSON.stringify(postData));
  }
  req.end();
};

var connect = {
  send: send
};

module.exports = connect;