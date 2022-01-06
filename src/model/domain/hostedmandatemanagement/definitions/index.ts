/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import { MandateCustomer } from "../../mandates/definitions";

export interface HostedMandateInfo {
  alias?: string | null;
  customer?: MandateCustomer | null;
  customerReference?: string | null;
  recurrenceType?: string | null;
  signatureType?: string | null;
  uniqueMandateReference?: string | null;
}

export interface HostedMandateManagementSpecificInput {
  locale?: string | null;
  returnUrl?: string | null;
  showResultPage?: boolean | null;
  variant?: string | null;
}
