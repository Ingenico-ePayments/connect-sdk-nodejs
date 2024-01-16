/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import { BankAccountIban, RedirectDataBase } from "../../definitions";

export interface CreateMandateBase {
  alias?: string | null;
  customer?: MandateCustomer | null;
  customerReference?: string | null;
  language?: string | null;
  recurrenceType?: string | null;
  signatureType?: string | null;
  uniqueMandateReference?: string | null;
}

export interface CreateMandateWithReturnUrl extends CreateMandateBase {
  returnUrl?: string | null;
}

export interface MandateAddress {
  city?: string | null;
  countryCode?: string | null;
  houseNumber?: string | null;
  street?: string | null;
  zip?: string | null;
}

export interface MandateContactDetails {
  emailAddress?: string | null;
}

export interface MandateCustomer {
  bankAccountIban?: BankAccountIban | null;
  companyName?: string | null;
  contactDetails?: MandateContactDetails | null;
  mandateAddress?: MandateAddress | null;
  personalInformation?: MandatePersonalInformation | null;
}

export interface MandateMerchantAction {
  actionType?: string | null;
  redirectData?: MandateRedirectData | null;
}

export interface MandatePersonalInformation {
  name?: MandatePersonalName | null;
  title?: string | null;
}

export interface MandatePersonalName {
  firstName?: string | null;
  surname?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface MandateRedirectData extends RedirectDataBase {}

export interface MandateResponse {
  alias?: string | null;
  customer?: MandateCustomer | null;
  customerReference?: string | null;
  recurrenceType?: string | null;
  status?: string | null;
  uniqueMandateReference?: string | null;
}
