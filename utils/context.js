var crypto = require('crypto');

var _ = require('lodash');


/**
 * @param  {Array} gcsHeaders Collection of headers that need to be sorted; only headers that start with X-GCS will be returned
 */
var getSortedHeadersForContext = function(gcsHeaders) {
  var headers = '';
  if (gcsHeaders) {
    var sortedXGCSHeaders = [];
    _.forEach(gcsHeaders, function(header) {
      if (header.key.toUpperCase().indexOf("X-GCS") === 0) {
        // add this header
        sortedXGCSHeaders.push(header);
      }
    });
    sortedXGCSHeaders = sortedXGCSHeaders.sort(function(a, b) {
      a.key = a.key.toUpperCase();
      b.key = b.key.toUpperCase();
      if (a.key < b.key) {
        return -1;
      } else if (a.key > b.key) {
        return 1;
      } else {
        return 0;
      }
    });
    _.forEach(sortedXGCSHeaders, function(header) {
      headers += header.key.toLowerCase() + ":" + header.value + "\n";
    });
  }
  return headers;
}


var sdkContext = {
  setContext: function(context) {
    this.context = context;
  },
  getContext: function() {
    return this.context;
  },
  getSignature: function(method, contentType, date, gcsHeaders, path) {
    var headers = getSortedHeadersForContext(gcsHeaders);
    return crypto.createHmac("SHA256", this.getContext().secretApiKey).update(method + "\n" + contentType + "\n" + date + "\n" + headers + path + "\n").digest('base64');
  },
  setLogger: function(logger) {
    this.logger = logger;
  },
  getLogger: function() {
    return this.logger;
  },
  setEnableLogging: function(isLoggingEnabled) {
    this.enableLogging = isLoggingEnabled;
  },
  setIdempotenceRequestTimestamp: function (ts) {
    this.idempotenceRequestTimestamp = ts;
  },
  getIdempotenceRequestTimestamp: function () {
    return this.idempotenceRequestTimestamp;
  },
  isLoggingEnabled: function() {
    return this.enableLogging;
  }
}

module.exports = sdkContext;