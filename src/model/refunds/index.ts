/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import { ApproveRefundRequest } from "../domain/refund";
import { PaymentContext, SdkCallback } from "../types";

export interface RefundsClient {
  /**
   * Resource /{merchantId}/refunds - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/refunds/find.html">Find refunds</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link FindRefundsResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  find(merchantId: string, paymentContext: FindRefundsParams, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/refunds/{refundId} - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/refunds/get.html">Get refund</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link RefundResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  get(merchantId: string, refundId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/refunds/{refundId}/approve - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/refunds/approve.html">Approve refund</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be null.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  approve(merchantId: string, refundId: string, postData: ApproveRefundRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/refunds/{refundId}/cancel - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/refunds/cancel.html">Cancel refund</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be null.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  cancel(merchantId: string, refundId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/refunds/{refundId}/cancelapproval - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/refunds/cancelapproval.html">Undo approve refund</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be null.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  cancelapproval(merchantId: string, refundId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void;
}

export interface FindRefundsParams extends PaymentContext {
  hostedCheckoutId?: string;
  merchantReference?: string;
  merchantOrderId?: number;
  offset?: number;
  limit?: number;
}
