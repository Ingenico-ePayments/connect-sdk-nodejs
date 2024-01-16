/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import { CreateDisputeRequest } from "../domain/dispute";
import { ApprovePaymentRequest, CapturePaymentRequest, CompletePaymentRequest, CreatePaymentRequest, TokenizePaymentRequest } from "../domain/payment";
import { RefundRequest } from "../domain/refund";
import { PaymentContext, SdkCallback } from "../types";

export interface PaymentsClient {
  /**
   * Resource /{merchantId}/payments - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/payments/create.html">Create payment</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link CreatePaymentResponse}.
   *           If the call was not successful, the response body type will be one of {@link PaymentErrorResponse} or {@link ErrorResponse}.
   */
  create(merchantId: string, postData: CreatePaymentRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/payments - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/payments/find.html">Find payments</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link FindPaymentsResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  find(merchantId: string, paymentContext: FindPaymentsParams, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/payments/{paymentId} - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/payments/get.html">Get payment</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link PaymentResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  get(merchantId: string, paymentId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/payments/{paymentId}/complete - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/payments/complete.html">Complete payment</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link CompletePaymentResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  complete(merchantId: string, paymentId: string, postData: CompletePaymentRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/payments/{paymentId}/thirdpartystatus - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/payments/thirdPartyStatus.html">Third party status poll</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link ThirdPartyStatusResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  thirdPartyStatus(merchantId: string, paymentId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/payments/{paymentId}/tokenize - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/payments/tokenize.html">Create a token from payment</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link CreateTokenResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  tokenize(merchantId: string, paymentId: string, postData: TokenizePaymentRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/payments/{paymentId}/processchallenged - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/payments/processchallenged.html">Approves challenged payment</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link PaymentResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  processchallenged(merchantId: string, paymentId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/payments/{paymentId}/approve - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/payments/approve.html">Approve payment</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link PaymentApprovalResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  approve(merchantId: string, paymentId: string, postData: ApprovePaymentRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/payments/{paymentId}/capture - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/payments/capture.html">Capture payment</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link CaptureResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  capture(merchantId: string, paymentId: string, postData: CapturePaymentRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/payments/{paymentId}/cancelapproval - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/payments/cancelapproval.html">Undo capture payment</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link CancelApprovalPaymentResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  cancelapproval(merchantId: string, paymentId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/payments/{paymentId}/captures - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/payments/captures.html">Get captures of payment</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link CapturesResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  captures(merchantId: string, paymentId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/payments/{paymentId}/refund - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/payments/refund.html">Create refund</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link RefundResponse}.
   *           If the call was not successful, the response body type will be one of {@link RefundErrorResponse} or {@link ErrorResponse}.
   */
  refund(merchantId: string, paymentId: string, postData: RefundRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/payments/{paymentId}/refunds - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/payments/refunds.html">Get refunds of payment</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link RefundsResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  refunds(merchantId: string, paymentId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/payments/{paymentId}/cancel - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/payments/cancel.html">Cancel payment</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link CancelPaymentResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  cancel(merchantId: string, paymentId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/payments/{paymentId}/dispute - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/payments/dispute.html">Create dispute</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link DisputeResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  dispute(merchantId: string, paymentId: string, postData: CreateDisputeRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/payments/{paymentId}/disputes - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/payments/disputes.html">Get disputes</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link DisputesResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  disputes(merchantId: string, paymentId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/payments/{paymentId}/devicefingerprint - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/payments/devicefingerprint.html">Get Device Fingerprint details</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link DeviceFingerprintDetails}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  devicefingerprint(merchantId: string, paymentId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void;
}

export interface FindPaymentsParams extends PaymentContext {
  hostedCheckoutId?: string;
  merchantReference?: string;
  merchantOrderId?: number;
  offset?: number;
  limit?: number;
}
