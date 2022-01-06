import traverse = require("traverse");
import _ = require("lodash");
import { SdkContext } from "../model";
import sdkContext = require("./context");

const REPLACECHAR = "*";
const INDENT = 2;

function keyMatches(key: string, property: string, caseInsensitive = false): boolean {
  return caseInsensitive ? key.toLocaleLowerCase() === property.toLowerCase() : property === key;
}

function withKeepEndCount(json: unknown, property: string, count: number, caseInsensitive = false): unknown {
  traverse(json).forEach(function(node) {
    if (this.key && keyMatches(this.key, property, caseInsensitive) && typeof node !== "object") {
      node = "" + node; // make sure it's a string
      const l = node.length;
      const end = node.substring(l - count);
      this.update(_.padStart(end, l, REPLACECHAR));
    }
  });
  return json;
}
function withAll(json: unknown, property: string, caseInsensitive = false): unknown {
  traverse(json).forEach(function(node) {
    if (this.key && keyMatches(this.key, property, caseInsensitive) && typeof node !== "object") {
      node = "" + node; // make sure it's a string
      const l = node.length;
      this.update(_.padStart("", l, REPLACECHAR));
    }
  });
  return json;
}
function withKeepStartCount(json: unknown, property: string, count: number, caseInsensitive = false): unknown {
  traverse(json).forEach(function(node) {
    if (this.key && keyMatches(this.key, property, caseInsensitive) && typeof node !== "object") {
      node = "" + node; // make sure it's a string
      const l = node.length;
      const start = node.substring(0, count);
      this.update(_.padEnd(start, l, REPLACECHAR));
    }
  });
  return json;
}
function withFixedLength(json: unknown, property: string, count: number, caseInsensitive = false): unknown {
  traverse(json).forEach(function(node) {
    if (this.key && keyMatches(this.key, property, caseInsensitive) && typeof node !== "object") {
      this.update(_.padEnd("", count, REPLACECHAR));
    }
  });
  return json;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function getObfuscated(input: any, context?: SdkContext | null, caseInsensitive = false): string {
  if (!context) {
    context = sdkContext;
  }
  if (!input) {
    return "";
  }
  if (typeof input === "string") {
    try {
      input = JSON.parse(input);
    } catch (e) {
      const logger = context.getLogger();
      if (context.isLoggingEnabled()) {
        logger("warn", "Cannot parse input to JSON: " + input);
      }
      return input;
    }
  }
  let obfuscated = JSON.parse(JSON.stringify(input));
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
  obfuscated = withFixedLength(obfuscated, "Authorization", 8, caseInsensitive);
  obfuscated = withFixedLength(obfuscated, "WWW-Authenticate", 8, caseInsensitive);
  obfuscated = withFixedLength(obfuscated, "Proxy-Authenticate", 8, caseInsensitive);
  obfuscated = withFixedLength(obfuscated, "Proxy-Authorization", 8, caseInsensitive);
  obfuscated = withFixedLength(obfuscated, "X-GCS-Authentication-Token", 8, caseInsensitive);
  obfuscated = withFixedLength(obfuscated, "X-GCS-CallerPassword", 8, caseInsensitive);

  return JSON.stringify(obfuscated, null, INDENT);
}
