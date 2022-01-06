import { WebhooksEvent } from "../domain/webhooks";

export class ApiVersionMismatchError extends Error {
  public constructor(message: string, public readonly eventApiVersion: string, public readonly sdkApiVersion: string) {
    super(message);
    // see https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
    Object.setPrototypeOf(this, ApiVersionMismatchError.prototype);
  }
  name = "ApiVersionMismatchError";
}

export interface InMemorySecretKeyStore extends SecretKeyStore {
  storeSecretKey(keyId: string, secretKey: string): void;
  removeSecretKey(keyId: string): void;
  clear(): void;
}

export type RequestHeaders = { [header: string]: string | string[] | undefined };

export type SecretKeyCallback = (e: Error | null, secretKey: string | null) => void;

export class SecretKeyNotAvailableError extends Error {
  public constructor(message: string, public readonly keyId: string) {
    super(message);
    // see https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#extending-built-ins-like-error-array-and-map-may-no-longer-work
    Object.setPrototypeOf(this, SecretKeyNotAvailableError.prototype);
  }
  name = "SecretKeyNotAvailableError";
}

export interface SecretKeyStore {
  getSecretKey(keyId: string, cb: SecretKeyCallback): void;
}

export type UnmarshalCallback = (e: Error | null, event: WebhooksEvent | null) => void;

export type ValidateCallback = (e: Error | null) => void;

export interface WebhooksContext {
  getSecretKey(keyId: string, cb: SecretKeyCallback): void;
}

export interface WebhooksHelper {
  init(context: WebhooksContext): WebhooksHelper;
  validate(body: string | Buffer, requestHeaders: RequestHeaders, cb: ValidateCallback): void;
  unmarshal(body: string | Buffer, requestHeaders: RequestHeaders, cb: UnmarshalCallback): void;

  readonly inMemorySecretKeyStore: InMemorySecretKeyStore;
}
