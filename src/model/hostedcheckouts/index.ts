/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import { CreateHostedCheckoutRequest } from "../domain/hostedcheckout";
import { PaymentContext, SdkCallback } from "../types";

export interface HostedcheckoutsClient {
  /**
   * Resource /{merchantId}/hostedcheckouts - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/hostedcheckouts/create.html">Create hosted checkout</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link CreateHostedCheckoutResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  create(merchantId: string, postData: CreateHostedCheckoutRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/hostedcheckouts/{hostedCheckoutId} - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/hostedcheckouts/get.html">Get hosted checkout status</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link GetHostedCheckoutResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  get(merchantId: string, hostedCheckoutId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/hostedcheckouts/{hostedCheckoutId} - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/hostedcheckouts/delete.html">Delete hosted checkout</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be null.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  remove(merchantId: string, hostedCheckoutId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void;
}
