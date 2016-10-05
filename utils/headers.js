var dateformat = require('dateFormat');

var date = function () {
  return dateformat("GMT:ddd, dd mmm yyyy HH:MM:ss") + " GMT";
};

var serverMetaInfo = function (context) {
  var info = {
    key: "X-GCS-ServerMetaInfo",
    value: {
      'sdkCreator': 'Ingenico',
      'sdkIdentifier': 'NodejsServerSDK/v1.1.0',
      'platformIdentifier': process.env['OS'] + ' Node.js/' + process.versions.node
    }
  };
  info.value = new Buffer(JSON.stringify(info.value)).toString("base64");
  return info;
};

module.exports = {
  date: date,
  serverMetaInfo: serverMetaInfo,
};