/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import { AmountOfMoney } from "../definitions";
import { APIError } from "../errors/definitions";
import { BankRefundMethodSpecificInput, RefundCustomer, RefundReferences, RefundResult } from "./definitions";

export interface ApproveRefundRequest {
  amount?: number | null;
}

export interface FindRefundsResponse {
  limit?: number | null;
  offset?: number | null;
  refunds?: RefundResult[] | null;
  totalCount?: number | null;
}

export interface RefundErrorResponse {
  errorId?: string | null;
  errors?: APIError[] | null;
  refundResult?: RefundResult | null;
}

export interface RefundRequest {
  amountOfMoney?: AmountOfMoney | null;
  bankRefundMethodSpecificInput?: BankRefundMethodSpecificInput | null;
  customer?: RefundCustomer | null;
  refundDate?: string | null;
  refundReferences?: RefundReferences | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RefundResponse extends RefundResult {}

export interface RefundsResponse {
  refunds?: RefundResult[] | null;
}
