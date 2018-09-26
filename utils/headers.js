var dateformat = require('dateformat');

var date = function () {
  return dateformat("GMT:ddd, dd mmm yyyy HH:MM:ss") + " GMT";
};

var serverMetaInfo = function (sdkContext) {
  var info = {
    key: "X-GCS-ServerMetaInfo",
    value: {
      'sdkCreator': 'Ingenico',
      'sdkIdentifier': 'NodejsServerSDK/v2.22.0',
      'platformIdentifier': process.env['OS'] + ' Node.js/' + process.versions.node
    }
  };
  if (sdkContext.getIntegrator() !== null) {
    info.value['integrator'] = sdkContext.getIntegrator();
  }
  if (sdkContext.getShoppingCartExtension() !== null) {
    info.value['shoppingCartExtension'] = sdkContext.getShoppingCartExtension();
  }
  info.value = new Buffer(JSON.stringify(info.value)).toString("base64");
  return info;
};

module.exports = {
  date: date,
  serverMetaInfo: serverMetaInfo
};