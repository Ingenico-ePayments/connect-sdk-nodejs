var crypto = require('crypto');
var compare = require('secure-compare');

var webhooksContext = {};

var secretKeyStore = {};

// cb: function (error, event)
var unmarshal = function (body, requestHeaders, cb) {
  validate(body, requestHeaders, function (error) {
    if (error) {
      cb(error, null);
    } else {
      try {
        var event = JSON.parse(body);
        validateApiVersion(event);
        cb(null, event);
      } catch (e) {
        cb(e, null);
      }
    }
  });
};

// cb: function (error)
var validate = function (body, requestHeaders, cb) {
  try {
    validateBody(body, requestHeaders, cb);
  } catch (e) {
    cb(e);
  }
};

// validation utility functions

// cb: function (error)
var validateBody = function (body, requestHeaders, cb) {
  try {
    var signature = getHeaderValue(requestHeaders, 'X-GCS-Signature');
    var keyId = getHeaderValue(requestHeaders, 'X-GCS-KeyId');

    webhooksContext.getSecretKey(keyId, function(error, secretKey) {
      if (error) {
        cb(error);
      } else {
        var expectedSignature = crypto.createHmac('sha256', secretKey).update(body).digest('base64');
        if (compare(expectedSignature, signature)) {
          cb(null);
        } else {
          cb(new Error("failed to validate signature '" + signature + "'"));
        }
      }
    });
  } catch (e) {
    cb(e);
  }
};

// general utility methods

// returns void || throws Error {eventApiVersion, sdkApiVersion}
var validateApiVersion = function (event) {
  var sdkApiVersion = wrapper.API_VERSION;
  if (sdkApiVersion !== event.apiVersion) {
    var e = new Error('event API version ' + event.apiVersion + ' is not compatible with SDK API version ' + sdkApiVersion);
    e.eventApiVersion = event.apiVersion;
    e.sdkApiVersion = sdkApiVersion;
    throw e;
  }
};

// returns string || throws Error
var getHeaderValue = function(requestHeaders, headerName) {
  var lowerCaseHeaderName = headerName.toLowerCase();
  for (var name in requestHeaders) {
    if (name != null && lowerCaseHeaderName === name.toLowerCase()) {
      return requestHeaders[name];
    }
  }
  throw new Error("could not find header '" + headerName + "'");
};

// module exports

var wrapper = {
  init: function (context) {
    if (!context
        || !context.getSecretKey
        || typeof context.getSecretKey != 'function') {
      throw new Error('no valid secret key store given');
    }
    webhooksContext.getSecretKey = context.getSecretKey;

    return wrapper;
  },

  validate: validate,
  unmarshal: unmarshal,

  inMemorySecretKeyStore: {
    getSecretKey: function (keyId, cb) {
      var secretKey = secretKeyStore[keyId];
      if (!secretKey) {
        var e = new Error('could not find secret key for key id ' + keyId);
        e.keyId = keyId;
        cb(e, null);
      } else {
        cb(null, secretKey);
      }
    },
    storeSecretKey: function (keyId, secretKey) {
      if (!keyId || !keyId.trim()) {
        throw new Error('keyId is required');
      }
      if (!secretKey || !secretKey.trim()) {
        throw new Error('secretKey is required');
      }
      secretKeyStore[keyId] = secretKey;
    },
    removeSecretKey: function (keyId) {
      delete secretKeyStore[keyId];
    },
    clear: function () {
      for (var prop in secretKeyStore) {
        if (secretKeyStore.hasOwnProperty(prop)) {
          delete secretKeyStore[prop];
        }
      }
    }
  }
};

module.exports = wrapper;
