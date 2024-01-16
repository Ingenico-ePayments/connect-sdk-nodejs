/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import { CreateMandateRequest } from "../domain/mandates";
import { PaymentContext, SdkCallback } from "../types";

export interface MandatesClient {
  /**
   * Resource /{merchantId}/mandates - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/mandates/create.html">Create mandate</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link CreateMandateResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  create(merchantId: string, postData: CreateMandateRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/mandates/{uniqueMandateReference} - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/mandates/createWithMandateReference.html">Create mandate with mandatereference</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link CreateMandateResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  createWithMandateReference(merchantId: string, uniqueMandateReference: string, postData: CreateMandateRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/mandates/{uniqueMandateReference} - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/mandates/get.html">Get mandate</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link GetMandateResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  get(merchantId: string, uniqueMandateReference: string, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/mandates/{uniqueMandateReference}/block - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/mandates/block.html">Block mandate</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link GetMandateResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  block(merchantId: string, uniqueMandateReference: string, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/mandates/{uniqueMandateReference}/unblock - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/mandates/unblock.html">Unblock mandate</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link GetMandateResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  unblock(merchantId: string, uniqueMandateReference: string, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/mandates/{uniqueMandateReference}/revoke - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/mandates/revoke.html">Revoke mandate</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link GetMandateResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  revoke(merchantId: string, uniqueMandateReference: string, paymentContext: PaymentContext | null, cb: SdkCallback): void;
}
