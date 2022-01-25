/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import { AmountOfMoney, BankAccountBban, BankAccountIban } from "../definitions";
import { BankData, BankDetails, IINDetail, PaymentContext, Swift } from "./definitions";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BankDetailsRequest extends BankDetails {}

export interface BankDetailsResponse {
  bankAccountBban?: BankAccountBban | null;
  bankAccountIban?: BankAccountIban | null;
  bankData?: BankData | null;
  swift?: Swift | null;
}

export interface ConvertAmount {
  convertedAmount?: number | null;
}

export interface GetIINDetailsRequest {
  bin?: string | null;
  paymentContext?: PaymentContext | null;
}

export interface GetIINDetailsResponse {
  coBrands?: IINDetail[] | null;
  countryCode?: string | null;
  isAllowedInContext?: boolean | null;
  paymentProductId?: number | null;
}

export interface GetPrivacyPolicyResponse {
  htmlContent?: string | null;
}

export interface SettlementDetails {
  acquirerReferenceNumber?: string | null;
  amountOfMoney?: AmountOfMoney | null;
  paymentId?: string | null;
  retrievalReferenceNumber?: string | null;
}

export interface TestConnection {
  result?: string | null;
}
