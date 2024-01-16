/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import { ApproveTokenRequest, CreateTokenRequest, UpdateTokenRequest } from "../domain/token";
import { PaymentContext, SdkCallback } from "../types";

export interface TokensClient {
  /**
   * Resource /{merchantId}/tokens - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/tokens/create.html">Create token</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link CreateTokenResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  create(merchantId: string, postData: CreateTokenRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/tokens/{tokenId} - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/tokens/get.html">Get token</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be {@link TokenResponse}.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  get(merchantId: string, tokenId: string, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/tokens/{tokenId} - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/tokens/update.html">Update token</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be null.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  update(merchantId: string, tokenId: string, postData: UpdateTokenRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/tokens/{tokenId} - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/tokens/delete.html">Delete token</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be null.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  remove(merchantId: string, tokenId: string, paymentContext: DeleteTokenParams, cb: SdkCallback): void;
  /**
   * Resource /{merchantId}/tokens/{tokenId}/approvesepadirectdebit - <a href="https://epayments-api.developer-ingenico.com/s2sapi/v1/en_US/nodejs/tokens/approvesepadirectdebit.html">Approve SEPA DD mandate</a>
   * @param cb The callback for the response.
   *           If the call was successfull, the response body type will be null.
   *           If the call was not successful, the response body type will be {@link ErrorResponse}.
   */
  approvesepadirectdebit(merchantId: string, tokenId: string, postData: ApproveTokenRequest, paymentContext: PaymentContext | null, cb: SdkCallback): void;
}

export interface DeleteTokenParams extends PaymentContext {
  mandateCancelDate?: string;
}
