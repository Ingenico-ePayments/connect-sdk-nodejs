import crypto = require("crypto");
import compare = require("secure-compare");
import { RequestHeaders, SecretKeyCallback, SecretKeyStore, SignatureValidator, ValidateCallback } from "../model/webhooks";

let secretKeyStore: SecretKeyStore = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getSecretKey(_keyId: string, _cb: SecretKeyCallback): void {
    throw new Error("getSecretKey not initialized yet");
  }
};

function getHeaderValue(requestHeaders: RequestHeaders, headerName: string): string {
  const lowerCaseHeaderName = headerName.toLowerCase();
  for (const name in requestHeaders) {
    if (name != null && lowerCaseHeaderName === name.toLowerCase()) {
      const value = requestHeaders[name];
      if (typeof value === "string") {
        return value;
      }
      if (typeof value === "undefined") {
        throw new Error("could not find header '" + headerName + "'");
      }
      throw new Error("found multiple values for header '" + headerName + "'");
    }
  }
  throw new Error("could not find header '" + headerName + "'");
}

function validate(body: string | Buffer, requestHeaders: RequestHeaders, cb: ValidateCallback): void {
  try {
    const signature = getHeaderValue(requestHeaders, "X-GCS-Signature");
    const keyId = getHeaderValue(requestHeaders, "X-GCS-KeyId");

    secretKeyStore.getSecretKey(keyId, (error, secretKey) => {
      if (error) {
        cb(error);
      } else {
        const expectedSignature = crypto
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          .createHmac("sha256", secretKey!) // if error is falsy, secretKey isn't
          .update(body)
          .digest("base64");
        if (compare(signature, expectedSignature)) {
          cb(null);
        } else {
          cb(new Error("failed to validate signature '" + signature + "'"));
        }
      }
    });
  } catch (e) {
    cb(e as Error);
  }
}

const validator: SignatureValidator = {
  init: store => {
    if (!store || typeof store.getSecretKey !== "function") {
      throw new Error("no valid secret key store given");
    }
    secretKeyStore = store;
  },
  validate: validate
};
export = validator;
