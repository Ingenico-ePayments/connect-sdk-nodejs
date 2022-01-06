/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import { PaymentContext, SdkCallback } from "../types";

export interface FilesClient {
  /**
   * Resource /{merchantId}/files/{fileId} - <a href="https://epayments-api.developer-ingenico.com/fileserviceapi/v1/en_US/nodejs/files/getFile.html">Retrieve File</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be a readable stream.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  getFile(merchantId: string, fileId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void;
}
