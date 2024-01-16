/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import { AbstractPaymentMethodSpecificInput, AmountOfMoney, KeyValuePair, PaymentProductFilter } from "../../definitions";
import { GPayThreeDSecure, Payment, PaymentCreationReferences } from "../../payment/definitions";

export interface CreatedPaymentOutput {
  displayedData?: DisplayedData | null;
  isCheckedRememberMe?: boolean | null;
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

export interface Frequency {
  interval?: string | null;
  intervalFrequency?: number | null;
}

export interface HostedCheckoutSpecificInput {
  isRecurring?: boolean | null;
  locale?: string | null;
  paymentProductFilters?: PaymentProductFiltersHostedCheckout | null;
  recurringPaymentsData?: RecurringPaymentsData | null;
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

export interface RecurringPaymentsData {
  recurringInterval?: Frequency | null;
  trialInformation?: TrialInformation | null;
}

export interface TrialInformation {
  amountOfMoneyAfterTrial?: AmountOfMoney | null;
  endDate?: string | null;
  isRecurring?: boolean | null;
  trialPeriod?: TrialPeriod | null;
  trialPeriodRecurring?: Frequency | null;
}

export interface TrialPeriod {
  duration?: number | null;
  interval?: string | null;
}
