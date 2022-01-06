/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import { AmountOfMoney } from "../../definitions";
import { HostedFile } from "../../file/definitions";

export interface Dispute {
  disputeOutput?: DisputeOutput | null;
  id?: string | null;
  paymentId?: string | null;
  status?: string | null;
  statusOutput?: DisputeStatusOutput | null;
}

export interface DisputeCreationDetail {
  disputeCreationDate?: string | null;
  disputeOriginator?: string | null;
  userName?: string | null;
}

export interface DisputeOutput {
  amountOfMoney?: AmountOfMoney | null;
  contactPerson?: string | null;
  creationDetails?: DisputeCreationDetail | null;
  emailAddress?: string | null;
  files?: HostedFile[] | null;
  reference?: DisputeReference | null;
  replyTo?: string | null;
  requestMessage?: string | null;
  responseMessage?: string | null;
}

export interface DisputeReference {
  merchantOrderId?: string | null;
  merchantReference?: string | null;
  paymentReference?: string | null;
  providerId?: string | null;
  providerReference?: string | null;
}

export interface DisputeStatusOutput {
  isCancellable?: boolean | null;
  statusCategory?: string | null;
  statusCode?: number | null;
  statusCodeChangeDateTime?: string | null;
}
