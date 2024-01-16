/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import { AmountOfMoney, BankAccountBban, BankAccountIban } from "../../definitions";

export interface BankData {
  newBankName?: string | null;
  reformattedAccountNumber?: string | null;
  reformattedBankCode?: string | null;
  reformattedBranchCode?: string | null;
}

export interface BankDetails {
  bankAccountBban?: BankAccountBban | null;
  bankAccountIban?: BankAccountIban | null;
}

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
export interface IINDetail {
  isAllowedInContext?: boolean | null;
  paymentProductId?: number | null;
}

export interface PaymentContext {
  amountOfMoney?: AmountOfMoney | null;
  countryCode?: string | null;
  isInstallments?: boolean | null;
  isRecurring?: boolean | null;
}

export interface Swift {
  bic?: string | null;
  category?: string | null;
  chipsUID?: string | null;
  extraInfo?: string | null;
  poBoxCountry?: string | null;
  poBoxLocation?: string | null;
  poBoxNumber?: string | null;
  poBoxZip?: string | null;
  routingBic?: string | null;
  services?: string | null;
}
