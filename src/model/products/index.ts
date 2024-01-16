/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import { CreatePaymentProductSessionRequest, DeviceFingerprintRequest, GetCustomerDetailsRequest } from "../domain/product";
import { PaymentContext, SdkCallback } from "../types";

export interface ProductsClient {
  /**
   * Resource /{merchantId}/products - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/products/find.html">Get payment products</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link PaymentProducts}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  find(merchantId: string, paymentContext: FindProductsParams, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/products/{paymentProductId} - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/products/get.html">Get payment product</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link PaymentProductResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  get(merchantId: string, paymentProductId: number, paymentContext: GetProductParams, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/products/{paymentProductId}/directory - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/products/directory.html">Get payment product directory</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link Directory}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  directory(merchantId: string, paymentProductId: number, paymentContext: DirectoryParams, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/products/{paymentProductId}/customerDetails - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/products/customerDetails.html">Get customer details</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link GetCustomerDetailsResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  customerDetails(merchantId: string, paymentProductId: number, postData: GetCustomerDetailsRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/products/{paymentProductId}/deviceFingerprint - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/products/deviceFingerprint.html">Get device fingerprint</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link DeviceFingerprintResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  deviceFingerprint(merchantId: string, paymentProductId: number, postData: DeviceFingerprintRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/products/{paymentProductId}/networks - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/products/networks.html">Get payment product networks</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link PaymentProductNetworksResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  networks(merchantId: string, paymentProductId: number, paymentContext: NetworksParams, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/products/{paymentProductId}/sessions - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/products/sessions.html">Create session for payment product</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link CreatePaymentProductSessionResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  sessions(merchantId: string, paymentProductId: number, postData: CreatePaymentProductSessionRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void;
}

export interface FindProductsParams extends PaymentContext {
  countryCode?: string;
  currencyCode?: string;
  locale?: string;
  amount?: number;
  isRecurring?: boolean;
  hide?: string[];
}

export interface GetProductParams extends PaymentContext {
  countryCode?: string;
  currencyCode?: string;
  locale?: string;
  amount?: number;
  isRecurring?: boolean;
  hide?: string[];
  forceBasicFlow?: boolean;
}

export interface DirectoryParams extends PaymentContext {
  countryCode?: string;
  currencyCode?: string;
}

export interface NetworksParams extends PaymentContext {
  countryCode?: string;
  currencyCode?: string;
  amount?: number;
  isRecurring?: boolean;
}
