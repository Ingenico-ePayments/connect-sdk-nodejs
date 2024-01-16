/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { apiVersion } from "../utils/versions";
import { WebhooksEvent } from "../model/domain/webhooks";
import { ApiVersionMismatchError, RequestHeaders, SecretKeyNotAvailableError, UnmarshalCallback, ValidateCallback, WebhooksHelper } from "../model/webhooks";
import signatureValidator = require("./validation");

const secretKeyStore: object = {};

function validate(body: string | Buffer, requestHeaders: RequestHeaders, cb: ValidateCallback): void {
  try {
    signatureValidator.validate(body, requestHeaders, cb);
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
    signatureValidator.init(context);
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
