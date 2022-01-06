/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import { MandateApproval, TokenCard, TokenEWallet, TokenNonSepaDirectDebit, TokenSepaDirectDebit, TokenSepaDirectDebitWithoutCreditor } from "./definitions";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ApproveTokenRequest extends MandateApproval {}

export interface CreateTokenRequest {
  card?: TokenCard | null;
  eWallet?: TokenEWallet | null;
  encryptedCustomerInput?: string | null;
  nonSepaDirectDebit?: TokenNonSepaDirectDebit | null;
  paymentProductId?: number | null;
  sepaDirectDebit?: TokenSepaDirectDebitWithoutCreditor | null;
}

export interface CreateTokenResponse {
  isNewToken?: boolean | null;
  originalPaymentId?: string | null;
  token?: string | null;
}

export interface TokenResponse {
  card?: TokenCard | null;
  eWallet?: TokenEWallet | null;
  id?: string | null;
  nonSepaDirectDebit?: TokenNonSepaDirectDebit | null;
  originalPaymentId?: string | null;
  paymentProductId?: number | null;
  sepaDirectDebit?: TokenSepaDirectDebit | null;
}

export interface UpdateTokenRequest {
  card?: TokenCard | null;
  eWallet?: TokenEWallet | null;
  nonSepaDirectDebit?: TokenNonSepaDirectDebit | null;
  paymentProductId?: number | null;
  sepaDirectDebit?: TokenSepaDirectDebitWithoutCreditor | null;
}
