/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import { KeyValuePair } from "../definitions";
import { DirectoryEntry, MobilePaymentProductSession302SpecificInput, MobilePaymentProductSession302SpecificOutput, PaymentProduct, PaymentProductGroup } from "./definitions";

export interface CreatePaymentProductSessionRequest {
  paymentProductSession302SpecificInput?: MobilePaymentProductSession302SpecificInput | null;
}

export interface CreatePaymentProductSessionResponse {
  paymentProductSession302SpecificOutput?: MobilePaymentProductSession302SpecificOutput | null;
}

export interface DeviceFingerprintRequest {
  collectorCallback?: string | null;
}

export interface DeviceFingerprintResponse {
  deviceFingerprintTransactionId?: string | null;
  html?: string | null;
}

export interface Directory {
  entries?: DirectoryEntry[] | null;
}

export interface GetCustomerDetailsRequest {
  countryCode?: string | null;
  values?: KeyValuePair[] | null;
}

export interface GetCustomerDetailsResponse {
  city?: string | null;
  country?: string | null;
  emailAddress?: string | null;
  firstName?: string | null;
  fiscalNumber?: string | null;
  languageCode?: string | null;
  phoneNumber?: string | null;
  street?: string | null;
  surname?: string | null;
  zip?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PaymentProductGroupResponse extends PaymentProductGroup {}

export interface PaymentProductGroups {
  paymentProductGroups?: PaymentProductGroup[] | null;
}

export interface PaymentProductNetworksResponse {
  networks?: string[] | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PaymentProductResponse extends PaymentProduct {}

export interface PaymentProducts {
  paymentProducts?: PaymentProduct[] | null;
}
