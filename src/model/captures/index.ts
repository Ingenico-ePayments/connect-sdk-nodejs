/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import { RefundRequest } from "../domain/refund";
import { PaymentContext, SdkCallback } from "../types";

export interface CapturesClient {
  /**
   * Resource /{merchantId}/captures/{captureId} - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/captures/get.html">Get capture</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link CaptureResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  get(merchantId: string, captureId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/captures/{captureId}/refund - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/captures/refund.html">Create Refund</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link RefundResponse}.
   *           If the call was not successful, the response body type will be one of {@link RefundErrorResponse} or {@link ErrorResponse}.
   */
  refund(merchantId: string, captureId: string, postData: RefundRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void;
}
