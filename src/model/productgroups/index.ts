/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import { DeviceFingerprintRequest } from "../domain/product";
import { PaymentContext, SdkCallback } from "../types";

export interface ProductgroupsClient {
  /**
   * Resource /{merchantId}/productgroups - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/productgroups/find.html">Get payment product groups</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link PaymentProductGroups}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  find(merchantId: string, paymentContext: FindProductgroupsParams, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/productgroups/{paymentProductGroupId} - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/productgroups/get.html">Get payment product group</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link PaymentProductGroupResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  get(merchantId: string, paymentProductGroupId: string, paymentContext: GetProductgroupParams, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/productgroups/{paymentProductGroupId}/deviceFingerprint - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/productgroups/deviceFingerprint.html">Get device fingerprint</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link DeviceFingerprintResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  deviceFingerprint(merchantId: string, paymentProductGroupId: string, postData: DeviceFingerprintRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void;
}

export interface FindProductgroupsParams extends PaymentContext {
  countryCode?: string;
  currencyCode?: string;
  locale?: string;
  amount?: number;
  isRecurring?: boolean;
  isInstallments?: boolean;
  hide?: string[];
}

export interface GetProductgroupParams extends PaymentContext {
  countryCode?: string;
  currencyCode?: string;
  locale?: string;
  amount?: number;
  isRecurring?: boolean;
  isInstallments?: boolean;
  hide?: string[];
}
