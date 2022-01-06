/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import { BankDetailsRequest, GetIINDetailsRequest } from "../domain/services";
import { PaymentContext, SdkCallback } from "../types";

export interface ServicesClient {
  /**
   * Resource /{merchantId}/services/convert/amount - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/services/convertAmount.html">Convert amount</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link ConvertAmount}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  convertAmount(merchantId: string, paymentContext: ConvertAmountParams, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/services/convert/bankaccount - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/services/bankaccount.html">Convert bankaccount</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link BankDetailsResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  bankaccount(merchantId: string, postData: BankDetailsRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/services/getIINdetails - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/services/getIINdetails.html">Get IIN details</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link GetIINDetailsResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  getIINdetails(merchantId: string, postData: GetIINDetailsRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/services/privacypolicy - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/services/privacypolicy.html">Get privacy policy</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link GetPrivacyPolicyResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  privacypolicy(merchantId: string, paymentContext: PrivacypolicyParams, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/services/testconnection - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/services/testconnection.html">Test connection</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link TestConnection}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  testconnection(merchantId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void;
}

export interface ConvertAmountParams extends PaymentContext {
  source?: string;
  target?: string;
  amount?: number;
}

export interface PrivacypolicyParams extends PaymentContext {
  locale?: string;
  paymentProductId?: number;
}
