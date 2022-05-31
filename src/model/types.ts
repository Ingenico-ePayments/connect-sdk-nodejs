import http = require("http");
import https = require("https");
import { Readable } from "stream";
import { ShoppingCartExtension } from "./domain/metadata";

export type CommunicatorLogger = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [level in LogLevel]: (message: any) => void;
};

export type ConnectionCallback = (e: Error | null, res: http.IncomingMessage | null) => void;

export interface Context {
  host: string;
  scheme?: "http" | "https";
  port?: number;
  enableLogging?: boolean;
  logger?: CommunicatorLogger;
  apiKeyId: string;
  secretApiKey: string;
  integrator: string;
  shoppingCartExtension?: ShoppingCartExtension;
  httpOptions?: https.RequestOptions;
  obfuscationRules?: { [key: string]: ObfuscationRule };
}

export interface FileMetaData {
  contentType: string | null;
  contentLength: string | number | null;
  filename: string | null;
}

export interface Header {
  key: string;
  value: string;
}

export interface IdemPotence {
  key: string;
}

export interface JsonRequest extends SdkRequest {
  body?: object | null;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Logger = (level: LogLevel, message: any) => void;

export type LogLevel = "info" | "warn" | "error";

export interface MultipartFormDataObject {
  [key: string]: string | UploadableFile | undefined;
}

export interface MultipartFormDataRequest extends SdkRequest {
  body: MultipartFormDataObject;
}

export interface ObfuscationRules {
  /**
   * @returns An obfuscation rule that will replace all characters with *.
   */
  all(): ObfuscationRule;
  /**
   * @returns An obfuscation rule that will keep a fixed number of characters at the end, then replaces all other characters with *.
   */
  allButLast(count: number): ObfuscationRule;
  /**
   * @returns An obfuscation rule that will keep a fixed number of characters at the start, then replaces all other characters with *.
   */
  allButFirst(count: number): ObfuscationRule;
  /**
   * @returns An obfuscation rule that will replace values with a fixed length string containing only *.
   */
  withFixedLength(count: number): ObfuscationRule;
}

export type ObfuscationRule = (value: string) => string;

export interface PaymentContext {
  extraHeaders?: Header[];
  idemPotence?: IdemPotence;
}

export type SdkCallback = (error: SdkResponseError | null, result: SdkResponse | null) => void;

export interface SdkContext {
  setContext(context: Context): void;
  getContext(): Context;
  getSignature(method: string, contentType: string, date: string, gcsHeaders: Header[], path: string): string;
  setLogger(logger: Logger): void;
  getLogger(): Logger;
  setEnableLogging(isLoggingEnabled: boolean): void;
  setIdempotenceRequestTimestamp(ts?: string | number): void;
  getIdempotenceRequestTimestamp(): string | number | undefined;
  setIntegrator(integrator: string): void;
  getIntegrator(): string;
  setShoppingCartExtension(shoppingCartExtension?: ShoppingCartExtension): void;
  getShoppingCartExtension(): ShoppingCartExtension | undefined;
  isLoggingEnabled(): boolean;
}

export interface SdkRequest {
  method: string;
  modulePath: string;
  paymentContext?: PaymentContext | null;
  cb: SdkCallback;
}

export interface SdkResponse {
  status: number;
  /**
   * The response body. One of:
   * <ul>
   * <li>A call-specific object for successful JSON responses</li>
   * <li>A readable stream for sucessful file downloads</li>
   * <li><code>null</code> for 204 responses</li>
   * <li>A {@link PaymentErrorResponse}, {@link PayoutErrorResponse}, {@link RefundErrorResponse} or {@link ErrorResponse} if an error occurs</li>
   * </ul>
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body: any;
  isSuccess: boolean;
  /**
   * For successful file downloads only, meta data about the file.
   */
  file?: FileMetaData;
}

export interface SdkResponseError extends Error {
  status?: number;
  body?: string;
}

export interface UploadableFile {
  fileName: string;
  contentType: string;
  content: Readable | Buffer | string;
  contentLength?: number;
}
