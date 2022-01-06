import crypto = require("crypto");
import _ = require("lodash");
import { Context, Header, Logger, SdkContext } from "../model";
import { ShoppingCartExtension } from "../model/domain/metadata";

/**
 * @param  {Array} gcsHeaders Collection of headers that need to be sorted; only headers that start with X-GCS will be returned
 */
function getSortedHeadersForContext(gcsHeaders: Header[]): string {
  let headers = "";
  if (gcsHeaders) {
    let sortedXGCSHeaders: Header[] = [];
    _.forEach(gcsHeaders, header => {
      if (header.key.toUpperCase().indexOf("X-GCS") === 0) {
        // add this header
        sortedXGCSHeaders.push(header);
      }
    });
    sortedXGCSHeaders = sortedXGCSHeaders.sort((a, b) => {
      a.key = a.key.toUpperCase();
      b.key = b.key.toUpperCase();
      if (a.key < b.key) {
        return -1;
      } else if (a.key > b.key) {
        return 1;
      } else {
        return 0;
      }
    });
    _.forEach(sortedXGCSHeaders, header => {
      headers += header.key.toLowerCase() + ":" + header.value + "\n";
    });
  }
  return headers;
}

class SdkContextImpl implements SdkContext {
  private context?: Context;
  private logger?: Logger;
  private enableLogging?: boolean;
  private idempotenceRequestTimestamp?: string | number;
  private integrator?: string;
  private shoppingCartExtension?: ShoppingCartExtension;

  private notSetError<T>(name: string): T {
    throw new Error(name + " has not been set");
  }
  setContext(context: Context): void {
    this.context = context;
  }
  getContext(): Context {
    return this.context || this.notSetError("context");
  }
  getSignature(method: string, contentType: string, date: string, gcsHeaders: Header[], path: string): string {
    const headers = getSortedHeadersForContext(gcsHeaders);
    return crypto
      .createHmac("SHA256", this.getContext().secretApiKey)
      .update(method + "\n" + contentType + "\n" + date + "\n" + headers + path + "\n")
      .digest("base64");
  }
  setLogger(logger: Logger): void {
    this.logger = logger;
  }
  getLogger(): Logger {
    return this.logger || this.notSetError("logger");
  }
  setEnableLogging(isLoggingEnabled: boolean): void {
    this.enableLogging = isLoggingEnabled;
  }
  setIdempotenceRequestTimestamp(ts?: string | number): void {
    this.idempotenceRequestTimestamp = ts;
  }
  getIdempotenceRequestTimestamp(): string | number | undefined {
    return this.idempotenceRequestTimestamp;
  }
  setIntegrator(integrator: string): void {
    if (this.integrator) {
      if (this.isLoggingEnabled()) {
        this.getLogger()("error", "integrator has already been set and cannot be overwritten");
      }
      throw new Error("integrator has already been set and cannot be overwritten");
    }
    if (!integrator) {
      if (this.isLoggingEnabled()) {
        this.getLogger()("error", "integrator is required");
      }
      throw new Error("integrator is required");
    }
    this.integrator = integrator;
  }
  getIntegrator(): string {
    return this.integrator || this.notSetError("integrator");
  }
  setShoppingCartExtension(shoppingCartExtension?: ShoppingCartExtension): void {
    if (this.shoppingCartExtension) {
      if (this.isLoggingEnabled()) {
        this.getLogger()("error", "shoppingCartExtension has already been set and cannot be overwritten");
      }
      throw new Error("shoppingCartExtension has already been set and cannot be overwritten");
    }
    if (shoppingCartExtension) {
      if (shoppingCartExtension.creator && shoppingCartExtension.name && shoppingCartExtension.version) {
        this.shoppingCartExtension = shoppingCartExtension;
      } else {
        if (this.isLoggingEnabled()) {
          this.getLogger()(
            "warn",
            "shoppingCartExtension is missing a required property (creator / name / version). Your shoppingCartExtension: " + JSON.stringify(shoppingCartExtension)
          );
        }
      }
    }
  }
  getShoppingCartExtension(): ShoppingCartExtension | undefined {
    return this.shoppingCartExtension;
  }
  isLoggingEnabled(): boolean {
    return this.enableLogging || false;
  }
}

const sdkContext: SdkContext = new SdkContextImpl();

export = sdkContext;
