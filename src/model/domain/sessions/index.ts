/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import { PaymentProductFiltersClientSession } from "./definitions";

export interface SessionRequest {
  paymentProductFilters?: PaymentProductFiltersClientSession | null;
  tokens?: string[] | null;
}

export interface SessionResponse {
  assetUrl?: string | null;
  clientApiUrl?: string | null;
  clientSessionId?: string | null;
  customerId?: string | null;
  invalidTokens?: string[] | null;
  region?: string | null;
}
