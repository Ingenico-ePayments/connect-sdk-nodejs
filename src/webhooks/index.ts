/* eslint-disable @typescript-eslint/no-non-null-assertion */

import crypto = require("crypto");
import compare = require("secure-compare");
import { apiVersion } from "../utils/versions";
import { WebhooksEvent } from "../model/domain/webhooks";
import { ApiVersionMismatchError, RequestHeaders, SecretKeyCallback, SecretKeyNotAvailableError, UnmarshalCallback, ValidateCallback, WebhooksHelper } from "../model/webhooks";

const webhooksContext = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  getSecretKey(_keyId: string, _cb: SecretKeyCallback): void {
    throw new Error("getSecretKey not initialized yet");
  }
};

const secretKeyStore: object = {};

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

function validateBody(body: string | Buffer, requestHeaders: RequestHeaders, cb: ValidateCallback): void {
  try {
    const signature = getHeaderValue(requestHeaders, "X-GCS-Signature");
    const keyId = getHeaderValue(requestHeaders, "X-GCS-KeyId");

    webhooksContext.getSecretKey(keyId, (error, secretKey) => {
      if (error) {
        cb(error);
      } else {
        const expectedSignature = crypto
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

function validate(body: string | Buffer, requestHeaders: RequestHeaders, cb: ValidateCallback): void {
  try {
    validateBody(body, requestHeaders, cb);
  } catch (e) {
    cb(e as Error);
  }
}

function validateApiVersion(event: WebhooksEvent): void {
  if (apiVersion !== event.apiVersion) {
    throw new ApiVersionMismatchError("event API version " + event.apiVersion + " is not compatible with SDK API version " + apiVersion, event.apiVersion!, apiVersion);
  }
}

function unmarshal(body: string | Buffer, requestHeaders: RequestHeaders, cb: UnmarshalCallback): void {
  validate(body, requestHeaders, error => {
    if (error) {
      cb(error, null);
    } else {
      try {
        const event = JSON.parse(body.toString());
        validateApiVersion(event);
        cb(null, event);
      } catch (e) {
        cb(e as Error, null);
      }
    }
  });
}

const webhooksHelper: WebhooksHelper = {
  init: context => {
    if (!context || !context.getSecretKey || typeof context.getSecretKey !== "function") {
      throw new Error("no valid secret key store given");
    }
    webhooksContext.getSecretKey = context.getSecretKey;

    return webhooksHelper;
  },

  validate: validate,
  unmarshal: unmarshal,

  inMemorySecretKeyStore: {
    getSecretKey(keyId, cb): void {
      const secretKey = secretKeyStore[keyId];
      if (!secretKey) {
        cb(new SecretKeyNotAvailableError("could not find secret key for key id " + keyId, keyId), null);
      } else {
        cb(null, secretKey);
      }
    },
    storeSecretKey(keyId, secretKey): void {
      if (!keyId || !keyId.trim()) {
        throw new Error("keyId is required");
      }
      if (!secretKey || !secretKey.trim()) {
        throw new Error("secretKey is required");
      }
      secretKeyStore[keyId] = secretKey;
    },
    removeSecretKey(keyId): void {
      delete secretKeyStore[keyId];
    },
    clear(): void {
      for (const prop in secretKeyStore) {
        // eslint-disable-next-line no-prototype-builtins
        if (secretKeyStore.hasOwnProperty(prop)) {
          delete secretKeyStore[prop];
        }
      }
    }
  }
};

export = webhooksHelper;
