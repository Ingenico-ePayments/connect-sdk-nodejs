/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import { MultipartFormDataObject, PaymentContext, SdkCallback, UploadableFile } from "../types";

export interface DisputesClient {
  /**
   * Resource /{merchantId}/disputes/{disputeId} - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/disputes/get.html">Get dispute</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link DisputeResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  get(merchantId: string, disputeId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/disputes/{disputeId}/submit - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/disputes/submit.html">Submit dispute</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link DisputeResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  submit(merchantId: string, disputeId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/disputes/{disputeId}/cancel - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/disputes/cancel.html">Cancel dispute</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link DisputeResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  cancel(merchantId: string, disputeId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/disputes/{disputeId} - <a href="https://epayments-api.developer-ingenico.com/fileserviceapi/v1/en_US/nodejs/disputes/uploadFile.html">Upload File</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link UploadDisputeFileResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  uploadFile(merchantId: string, disputeId: string, postData: UploadFileRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void;
}

export interface UploadFileRequest extends MultipartFormDataObject {
  file?: UploadableFile;
}
