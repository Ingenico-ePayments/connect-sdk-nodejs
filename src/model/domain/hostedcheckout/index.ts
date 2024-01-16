/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import { FraudFields } from "../definitions";
import {
  BankTransferPaymentMethodSpecificInputBase,
  CardPaymentMethodSpecificInputBase,
  CashPaymentMethodSpecificInputBase,
  EInvoicePaymentMethodSpecificInputBase,
  Merchant,
  Order,
  RedirectPaymentMethodSpecificInputBase,
  SepaDirectDebitPaymentMethodSpecificInputBase
} from "../payment/definitions";
import { CreatedPaymentOutput, HostedCheckoutSpecificInput, MobilePaymentMethodSpecificInputHostedCheckout } from "./definitions";

export interface CreateHostedCheckoutRequest {
  bankTransferPaymentMethodSpecificInput?: BankTransferPaymentMethodSpecificInputBase | null;
  cardPaymentMethodSpecificInput?: CardPaymentMethodSpecificInputBase | null;
  cashPaymentMethodSpecificInput?: CashPaymentMethodSpecificInputBase | null;
  eInvoicePaymentMethodSpecificInput?: EInvoicePaymentMethodSpecificInputBase | null;
  fraudFields?: FraudFields | null;
  hostedCheckoutSpecificInput?: HostedCheckoutSpecificInput | null;
  merchant?: Merchant | null;
  mobilePaymentMethodSpecificInput?: MobilePaymentMethodSpecificInputHostedCheckout | null;
  order?: Order | null;
  redirectPaymentMethodSpecificInput?: RedirectPaymentMethodSpecificInputBase | null;
  sepaDirectDebitPaymentMethodSpecificInput?: SepaDirectDebitPaymentMethodSpecificInputBase | null;
}

export interface CreateHostedCheckoutResponse {
  RETURNMAC?: string | null;
  hostedCheckoutId?: string | null;
  invalidTokens?: string[] | null;
  merchantReference?: string | null;
  partialRedirectUrl?: string | null;
}

export interface GetHostedCheckoutResponse {
  createdPaymentOutput?: CreatedPaymentOutput | null;
  status?: string | null;
}
