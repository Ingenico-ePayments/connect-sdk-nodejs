/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import { AbstractOrderStatus, KeyValuePair } from "../../definitions";
import {
  BankTransferPaymentMethodSpecificOutput,
  CardPaymentMethodSpecificOutput,
  CashPaymentMethodSpecificOutput,
  EInvoicePaymentMethodSpecificOutput,
  InvoicePaymentMethodSpecificOutput,
  MobilePaymentMethodSpecificOutput,
  NonSepaDirectDebitPaymentMethodSpecificOutput,
  OrderOutput,
  RedirectPaymentMethodSpecificOutput,
  SepaDirectDebitPaymentMethodSpecificOutput
} from "../../payment/definitions";

export interface Capture extends AbstractOrderStatus {
  captureOutput?: CaptureOutput | null;
  status?: string | null;
  statusOutput?: CaptureStatusOutput | null;
}

export interface CaptureOutput extends OrderOutput {
  amountPaid?: number | null;
  amountReversed?: number | null;
  bankTransferPaymentMethodSpecificOutput?: BankTransferPaymentMethodSpecificOutput | null;
  cardPaymentMethodSpecificOutput?: CardPaymentMethodSpecificOutput | null;
  cashPaymentMethodSpecificOutput?: CashPaymentMethodSpecificOutput | null;
  directDebitPaymentMethodSpecificOutput?: NonSepaDirectDebitPaymentMethodSpecificOutput | null;
  eInvoicePaymentMethodSpecificOutput?: EInvoicePaymentMethodSpecificOutput | null;
  invoicePaymentMethodSpecificOutput?: InvoicePaymentMethodSpecificOutput | null;
  mobilePaymentMethodSpecificOutput?: MobilePaymentMethodSpecificOutput | null;
  paymentMethod?: string | null;
  redirectPaymentMethodSpecificOutput?: RedirectPaymentMethodSpecificOutput | null;
  reversalReason?: string | null;
  sepaDirectDebitPaymentMethodSpecificOutput?: SepaDirectDebitPaymentMethodSpecificOutput | null;
}

export interface CaptureStatusOutput {
  isRetriable?: boolean | null;
  providerRawOutput?: KeyValuePair[] | null;
  statusCode?: number | null;
}
