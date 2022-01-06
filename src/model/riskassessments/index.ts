/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import { RiskAssessmentBankAccount, RiskAssessmentCard } from "../domain/riskassessments";
import { PaymentContext, SdkCallback } from "../types";

export interface RiskassessmentsClient {
  /**
   * Resource /{merchantId}/riskassessments/bankaccounts - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/riskassessments/bankaccounts.html">Risk-assess bankaccount</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link RiskAssessmentResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  bankaccounts(merchantId: string, postData: RiskAssessmentBankAccount, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/riskassessments/cards - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/riskassessments/cards.html">Risk-assess card</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link RiskAssessmentResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  cards(merchantId: string, postData: RiskAssessmentCard, paymentContext: PaymentContext | null, cb: SdkCallback): void;
}
