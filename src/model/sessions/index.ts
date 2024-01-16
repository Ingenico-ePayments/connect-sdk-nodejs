/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import { SessionRequest } from "../domain/sessions";
import { PaymentContext, SdkCallback } from "../types";

export interface SessionsClient {
  /**
   * Resource /{merchantId}/sessions - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/sessions/create.html">Create session</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link SessionResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  create(merchantId: string, postData: SessionRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void;
}
