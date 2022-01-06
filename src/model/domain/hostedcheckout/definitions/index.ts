/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import { AbstractPaymentMethodSpecificInput, KeyValuePair, PaymentProductFilter } from "../../definitions";
import { GPayThreeDSecure, Payment, PaymentCreationReferences } from "../../payment/definitions";

export interface CreatedPaymentOutput {
  displayedData?: DisplayedData | null;
  payment?: Payment | null;
  paymentCreationReferences?: PaymentCreationReferences | null;
  /**
   * @deprecated Use Payment.statusOutput.statusCategory instead
   */
  paymentStatusCategory?: string | null;
  tokenizationSucceeded?: boolean | null;
  tokens?: string | null;
}

export interface DisplayedData {
  displayedDataType?: string | null;
  renderingData?: string | null;
  showData?: KeyValuePair[] | null;
}

export interface HostedCheckoutSpecificInput {
  isRecurring?: boolean | null;
  locale?: string | null;
  paymentProductFilters?: PaymentProductFiltersHostedCheckout | null;
  returnCancelState?: boolean | null;
  returnUrl?: string | null;
  showResultPage?: boolean | null;
  tokens?: string | null;
  validateShoppingCart?: boolean | null;
  variant?: string | null;
}

export interface MobilePaymentMethodSpecificInputHostedCheckout extends AbstractPaymentMethodSpecificInput {
  authorizationMode?: string | null;
  customerReference?: string | null;
  paymentProduct302SpecificInput?: MobilePaymentProduct302SpecificInputHostedCheckout | null;
  paymentProduct320SpecificInput?: MobilePaymentProduct320SpecificInputHostedCheckout | null;
  requiresApproval?: boolean | null;
  skipFraudService?: boolean | null;
}

export interface MobilePaymentProduct302SpecificInputHostedCheckout {
  businessName?: string | null;
}

export interface MobilePaymentProduct320SpecificInputHostedCheckout {
  merchantName?: string | null;
  merchantOrigin?: string | null;
  threeDSecure?: GPayThreeDSecure | null;
}

export interface PaymentProductFiltersHostedCheckout {
  exclude?: PaymentProductFilter | null;
  restrictTo?: PaymentProductFilter | null;
  tokensOnly?: boolean | null;
}
