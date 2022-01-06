/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import { MandateResponse } from "../mandates/definitions";
import { HostedMandateInfo, HostedMandateManagementSpecificInput } from "./definitions";

export interface CreateHostedMandateManagementRequest {
  createMandateInfo?: HostedMandateInfo | null;
  hostedMandateManagementSpecificInput?: HostedMandateManagementSpecificInput | null;
}

export interface CreateHostedMandateManagementResponse {
  RETURNMAC?: string | null;
  hostedMandateManagementId?: string | null;
  partialRedirectUrl?: string | null;
}

export interface GetHostedMandateManagementResponse {
  mandate?: MandateResponse | null;
  status?: string | null;
}
