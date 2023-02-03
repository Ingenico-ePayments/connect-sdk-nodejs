/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import { AmountOfMoney, BankAccountBban, BankAccountIban } from "../definitions";
import { APIError } from "../errors/definitions";
import { BankTransferPayoutMethodSpecificInput, CardPayoutMethodSpecificInput, PayoutCustomer, PayoutDetails, PayoutMerchant, PayoutReferences, PayoutResult } from "./definitions";

export interface ApprovePayoutRequest {
  datePayout?: string | null;
}

export interface CreatePayoutRequest {
  /**
   * @deprecated Moved to PayoutDetails
   */
  amountOfMoney?: AmountOfMoney | null;
  /**
   * @deprecated Moved to BankTransferPayoutMethodSpecificInput
   */
  bankAccountBban?: BankAccountBban | null;
  /**
   * @deprecated Moved to BankTransferPayoutMethodSpecificInput
   */
  bankAccountIban?: BankAccountIban | null;
  bankTransferPayoutMethodSpecificInput?: BankTransferPayoutMethodSpecificInput | null;
  cardPayoutMethodSpecificInput?: CardPayoutMethodSpecificInput | null;
  /**
   * @deprecated Moved to PayoutDetails
   */
  customer?: PayoutCustomer | null;
  merchant?: PayoutMerchant | null;
  /**
   * @deprecated Moved to BankTransferPayoutMethodSpecificInput
   */
  payoutDate?: string | null;
  payoutDetails?: PayoutDetails | null;
  /**
   * @deprecated Moved to BankTransferPayoutMethodSpecificInput
   */
  payoutText?: string | null;
  /**
   * @deprecated Moved to PayoutDetails
   */
  references?: PayoutReferences | null;
  /**
   * @deprecated Moved to BankTransferPayoutMethodSpecificInput
   */
  swiftCode?: string | null;
}

export interface FindPayoutsResponse {
  limit?: number | null;
  offset?: number | null;
  payouts?: PayoutResult[] | null;
  totalCount?: number | null;
}

export interface PayoutErrorResponse {
  errorId?: string | null;
  errors?: APIError[] | null;
  payoutResult?: PayoutResult | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PayoutResponse extends PayoutResult {}
