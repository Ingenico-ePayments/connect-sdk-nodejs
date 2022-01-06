/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import { CreateMandateWithReturnUrl, MandateMerchantAction, MandateResponse } from "./definitions";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CreateMandateRequest extends CreateMandateWithReturnUrl {}

export interface CreateMandateResponse {
  mandate?: MandateResponse | null;
  merchantAction?: MandateMerchantAction | null;
}

export interface GetMandateResponse {
  mandate?: MandateResponse | null;
}
