/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import { ApprovePayoutRequest, CreatePayoutRequest } from "../domain/payout";
import { PaymentContext, SdkCallback } from "../types";

export interface PayoutsClient {
  /**
   * Resource /{merchantId}/payouts - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/payouts/create.html">Create payout</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link PayoutResponse}.
   *           If the call was not successful, the response body type will be one of {@link PayoutErrorResponse} or {@link ErrorResponse}.
   */
  create(merchantId: string, postData: CreatePayoutRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/payouts - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/payouts/find.html">Find payouts</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link FindPayoutsResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  find(merchantId: string, paymentContext: FindPayoutsParams, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/payouts/{payoutId} - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/payouts/get.html">Get payout</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link PayoutResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  get(merchantId: string, payoutId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/payouts/{payoutId}/approve - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/payouts/approve.html">Approve payout</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link PayoutResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  approve(merchantId: string, payoutId: string, postData: ApprovePayoutRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/payouts/{payoutId}/cancel - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/payouts/cancel.html">Cancel payout</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be null.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  cancel(merchantId: string, payoutId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/payouts/{payoutId}/cancelapproval - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/payouts/cancelapproval.html">Undo approve payout</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be null.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  cancelapproval(merchantId: string, payoutId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void;
}

export interface FindPayoutsParams extends PaymentContext {
  merchantReference?: string;
  merchantOrderId?: number;
  offset?: number;
  limit?: number;
}
