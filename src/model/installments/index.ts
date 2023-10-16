/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import { GetInstallmentRequest } from "../domain/installments";
import { PaymentContext, SdkCallback } from "../types";

export interface InstallmentsClient {
  /**
   * Resource /{merchantId}/installments/getInstallmentsInfo - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/installments/getInstallmentsInfo.html">Get Installment Info</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link InstallmentOptionsResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  getInstallmentsInfo(merchantId: string, postData: GetInstallmentRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void;
}
