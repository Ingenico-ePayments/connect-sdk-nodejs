var traverse = require('traverse');
var _ = require("lodash");

var REPLACECHAR = "*";
var INDENT = 2;

var withKeepEndCount = function (json, property, count) {
  traverse(json).forEach(function (node) {
    if (this.key === property) {
      node = "" + node; // make sure it's a string
      var l = node.length;
      var end = node.substring(l - count);
      this.update(_.padStart(end, l, REPLACECHAR));
    }
  });
  return json;
};
var withAll = function (json, property) {
  traverse(json).forEach(function (node) {
    if (this.key === property) {
      node = "" + node; // make sure it's a string
      var l = node.length;
      this.update(_.padStart('', l, REPLACECHAR));
    }
  });
  return json;
};
var withKeepStartCount = function (json, property, count) {
  traverse(json).forEach(function (node) {
    if (this.key === property) {
      node = "" + node; // make sure it's a string
      var l = node.length;
      var end = node.substring(l - count);
      this.update(_.padEnd(end, l, REPLACECHAR));
    }
  });
  return json;
};
var withFixedLength = function (json, property, count) {
  traverse(json).forEach(function (node) {
    if (this.key === property) {
      this.update(_.padEnd('', count, REPLACECHAR));
    }
  });
  return json;
};


var obfuscate = {
  getObfuscated : function (input, context) {
    if (!context) {
      context = require('../utils/context');
    }
    if (!input) {
      return '';
    }
    if (typeof input === "string") {
      try {
        input = JSON.parse(input);
      } catch (e) {
        var logger = context.getLogger();
        if (context.isLoggingEnabled()) {
          logger('error', 'Cannot parse input to JSON: ' + input);
        }
        // throw new Error('Input cannot be parsed to JSON', input);
        return input;
      }
    }
    var obfuscated = JSON.parse(JSON.stringify(input));
    obfuscated = withKeepEndCount(obfuscated, "cardNumber", 4);
    obfuscated = withKeepEndCount(obfuscated, "expiryDate", 2);
    obfuscated = withAll(obfuscated, "cvv");
    obfuscated = withKeepEndCount(obfuscated, "iban", 4);
    obfuscated = withKeepEndCount(obfuscated, "accountNumber", 4);
    obfuscated = withKeepEndCount(obfuscated, "reformattedAccountNumber", 4);
    obfuscated = withKeepStartCount(obfuscated, "bin", 6);
    // key-value pairs can contain any value, like credit card numbers or other private data; mask all values
    obfuscated = withAll(obfuscated, "value");
    obfuscated = withFixedLength(obfuscated, "keyId", 8);
    obfuscated = withFixedLength(obfuscated, "secretKey", 8);
    obfuscated = withFixedLength(obfuscated, "publicKey", 8);
    obfuscated = withFixedLength(obfuscated, "userAuthenticationToken", 8);
    // encrypted payload is a base64 string that contains an encrypted value; to make decrypting even harder, just mask the entire thing
    obfuscated = withFixedLength(obfuscated, "encryptedPayload", 8);
    // decrypted payload is a simple base64 string that may contain credit card numbers or other private data; just mask the entire thing
    obfuscated = withFixedLength(obfuscated, "decryptedPayload", 8);
    // encrypted customer input is similar to encrypted payload
    obfuscated = withFixedLength(obfuscated, "encryptedCustomerInput", 8);

    // headers
    obfuscated = withFixedLength(obfuscated, "Authorization", 8);
    obfuscated = withFixedLength(obfuscated, "WWW-Authenticate", 8);
    obfuscated = withFixedLength(obfuscated, "Proxy-Authenticate", 8);
    obfuscated = withFixedLength(obfuscated, "Proxy-Authorization", 8);
    obfuscated = withFixedLength(obfuscated, "X-GCS-Authentication-Token", 8);
    obfuscated = withFixedLength(obfuscated, "X-GCS-CallerPassword", 8);

    return JSON.stringify(obfuscated, null, INDENT);
  }
};

module.exports = obfuscate;