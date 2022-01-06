/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import { CreateHostedMandateManagementRequest } from "../domain/hostedmandatemanagement";
import { PaymentContext, SdkCallback } from "../types";

export interface HostedmandatemanagementsClient {
  /**
   * Resource /{merchantId}/hostedmandatemanagements - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/hostedmandatemanagements/create.html">Create hosted mandate management</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link CreateHostedMandateManagementResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  create(merchantId: string, postData: CreateHostedMandateManagementRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/hostedmandatemanagements/{hostedMandateManagementId} - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/hostedmandatemanagements/get.html">Get hosted mandate management status</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link GetHostedMandateManagementResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  get(merchantId: string, hostedMandateManagementId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void;
}
