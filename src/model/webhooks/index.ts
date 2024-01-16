import { InMemorySecretKeyStore, RequestHeaders, ValidateCallback, WebhooksContext } from "./types";
import { WebhooksEvent } from "../domain/webhooks";

export type UnmarshalCallback = (e: Error | null, event: WebhooksEvent | null) => void;

export interface WebhooksHelper {
  init(context: WebhooksContext): WebhooksHelper;
  validate(body: string | Buffer, requestHeaders: RequestHeaders, cb: ValidateCallback): void;
  unmarshal(body: string | Buffer, requestHeaders: RequestHeaders, cb: UnmarshalCallback): void;

  readonly inMemorySecretKeyStore: InMemorySecretKeyStore;
}

export * from "./types";
