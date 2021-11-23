var dateformat = require('dateformat');

var date = function () {
  return dateformat("GMT:ddd, dd mmm yyyy HH:MM:ss") + " GMT";
};

var serverMetaInfo = function (sdkContext) {
  var info = {
    key: "X-GCS-ServerMetaInfo",
    value: {
      'sdkCreator': 'Ingenico',
      'sdkIdentifier': 'NodejsServerSDK/v3.20.0',
      'platformIdentifier': process.env['OS'] + ' Node.js/' + process.versions.node
    }
  };
  if (sdkContext.getIntegrator() !== null) {
    info.value['integrator'] = sdkContext.getIntegrator();
  }
  if (sdkContext.getShoppingCartExtension() !== null) {
    info.value['shoppingCartExtension'] = sdkContext.getShoppingCartExtension();
  }
  info.value = Buffer.from(JSON.stringify(info.value)).toString("base64");
  return info;
};

var isBinaryContent = function (contentType) {
  return !!contentType
    && !contentType.startsWith("text/")
    && contentType.indexOf("json") == -1
    && contentType.indexOf("xml") == -1;
};

var isJSON = function (contentType) {
  return contentType == null || contentType.toLowerCase().startsWith('application/json');
};

var dispositionFilenamePattern = /(?:^|;)\s*filename\s*=\s*(.*?)\s*(?:;|$)/i;

var trimQuotes = function (filename) {
  if (filename.length < 2) {
    return filename;
  }
  if ((filename.startsWith('"') && filename.endsWith('"')) || (filename.startsWith("'") && filename.endsWith("'"))) {
    return filename.substring(1, filename.length - 1);
  }
  return filename;
};

var dispositionFilename = function (headers) {
  var disposition = headers['content-disposition'];
  if (disposition) {
    var match = disposition.match(dispositionFilenamePattern);
    if (match) {
      var filename = match[1];
      return trimQuotes(filename);
    }
  }
  return null;
};

var contentLength = function (headers) {
  var length = headers['content-length'];
  if (length) {
    var intLength = parseInt(length);
    return isNaN(intLength) ? length : intLength;
  }
  return null;
}

module.exports = {
  date: date,
  serverMetaInfo: serverMetaInfo,
  isBinaryContent: isBinaryContent,
  isJSON: isJSON,
  dispositionFilename: dispositionFilename,
  contentLength: contentLength
};