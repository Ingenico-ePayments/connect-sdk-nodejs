/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import { AmountOfMoney } from "../definitions";
import { Dispute } from "./definitions";

export interface CreateDisputeRequest {
  amountOfMoney?: AmountOfMoney | null;
  contactPerson?: string | null;
  emailAddress?: string | null;
  replyTo?: string | null;
  requestMessage?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DisputeResponse extends Dispute {}

export interface DisputesResponse {
  disputes?: Dispute[] | null;
}

export interface UploadDisputeFileResponse {
  disputeId?: string | null;
  fileId?: string | null;
}
