/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import { FraudFields } from "../definitions";
import { APIError } from "../errors/definitions";
import {
  ApprovePaymentCardPaymentMethodSpecificOutput,
  ApprovePaymentMobilePaymentMethodSpecificOutput,
  ApprovePaymentNonSepaDirectDebitPaymentMethodSpecificInput,
  ApprovePaymentSepaDirectDebitPaymentMethodSpecificInput,
  BankTransferPaymentMethodSpecificInput,
  CancelPaymentCardPaymentMethodSpecificOutput,
  CancelPaymentMobilePaymentMethodSpecificOutput,
  CardPaymentMethodSpecificInput,
  CashPaymentMethodSpecificInput,
  CompletePaymentCardPaymentMethodSpecificInput,
  CreatePaymentResult,
  EInvoicePaymentMethodSpecificInput,
  InvoicePaymentMethodSpecificInput,
  Merchant,
  MobilePaymentMethodSpecificInput,
  NonSepaDirectDebitPaymentMethodSpecificInput,
  Order,
  OrderApprovePayment,
  Payment,
  RedirectPaymentMethodSpecificInput,
  SepaDirectDebitPaymentMethodSpecificInput
} from "./definitions";

export interface ApprovePaymentRequest {
  amount?: number | null;
  directDebitPaymentMethodSpecificInput?: ApprovePaymentNonSepaDirectDebitPaymentMethodSpecificInput | null;
  order?: OrderApprovePayment | null;
  sepaDirectDebitPaymentMethodSpecificInput?: ApprovePaymentSepaDirectDebitPaymentMethodSpecificInput | null;
}

export interface CancelApprovalPaymentResponse {
  payment?: Payment | null;
}

export interface CancelPaymentResponse {
  cardPaymentMethodSpecificOutput?: CancelPaymentCardPaymentMethodSpecificOutput | null;
  mobilePaymentMethodSpecificOutput?: CancelPaymentMobilePaymentMethodSpecificOutput | null;
  payment?: Payment | null;
}

export interface CapturePaymentRequest {
  amount?: number | null;
  isFinal?: boolean | null;
}

export interface CompletePaymentRequest {
  cardPaymentMethodSpecificInput?: CompletePaymentCardPaymentMethodSpecificInput | null;
  merchant?: Merchant | null;
  order?: Order | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CompletePaymentResponse extends CreatePaymentResult {}

export interface CreatePaymentRequest {
  bankTransferPaymentMethodSpecificInput?: BankTransferPaymentMethodSpecificInput | null;
  cardPaymentMethodSpecificInput?: CardPaymentMethodSpecificInput | null;
  cashPaymentMethodSpecificInput?: CashPaymentMethodSpecificInput | null;
  directDebitPaymentMethodSpecificInput?: NonSepaDirectDebitPaymentMethodSpecificInput | null;
  eInvoicePaymentMethodSpecificInput?: EInvoicePaymentMethodSpecificInput | null;
  encryptedCustomerInput?: string | null;
  fraudFields?: FraudFields | null;
  invoicePaymentMethodSpecificInput?: InvoicePaymentMethodSpecificInput | null;
  merchant?: Merchant | null;
  mobilePaymentMethodSpecificInput?: MobilePaymentMethodSpecificInput | null;
  order?: Order | null;
  redirectPaymentMethodSpecificInput?: RedirectPaymentMethodSpecificInput | null;
  sepaDirectDebitPaymentMethodSpecificInput?: SepaDirectDebitPaymentMethodSpecificInput | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CreatePaymentResponse extends CreatePaymentResult {}

export interface DeviceFingerprintDetails {
  paymentId?: string | null;
  rawDeviceFingerprintOutput?: string | null;
}

export interface FindPaymentsResponse {
  limit?: number | null;
  offset?: number | null;
  payments?: Payment[] | null;
  totalCount?: number | null;
}

export interface PaymentApprovalResponse {
  cardPaymentMethodSpecificOutput?: ApprovePaymentCardPaymentMethodSpecificOutput | null;
  mobilePaymentMethodSpecificOutput?: ApprovePaymentMobilePaymentMethodSpecificOutput | null;
  payment?: Payment | null;
  /**
   * @deprecated Use cardPaymentMethodSpecificOutput instead
   */
  paymentMethodSpecificOutput?: ApprovePaymentCardPaymentMethodSpecificOutput | null;
}

export interface PaymentErrorResponse {
  errorId?: string | null;
  errors?: APIError[] | null;
  paymentResult?: CreatePaymentResult | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PaymentResponse extends Payment {}

export interface ThirdPartyStatusResponse {
  thirdPartyStatus?: string | null;
}

export interface TokenizePaymentRequest {
  alias?: string | null;
}
