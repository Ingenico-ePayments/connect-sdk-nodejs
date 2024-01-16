/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import { AdditionalOrderInputAirlineData, Address, AmountOfMoney, FraudFields, PersonalNameBase } from "../../definitions";
import { AddressPersonal } from "../../payment/definitions";

export interface ContactDetailsRiskAssessment {
  emailAddress?: string | null;
}

export interface CustomerAccountRiskAssessment {
  hasForgottenPassword?: boolean | null;
  hasPassword?: boolean | null;
}

export interface CustomerDeviceRiskAssessment {
  defaultFormFill?: string | null;
  deviceFingerprintTransactionId?: string | null;
}

export interface CustomerRiskAssessment {
  account?: CustomerAccountRiskAssessment | null;
  accountType?: string | null;
  billingAddress?: Address | null;
  contactDetails?: ContactDetailsRiskAssessment | null;
  device?: CustomerDeviceRiskAssessment | null;
  isPreviousCustomer?: boolean | null;
  locale?: string | null;
  personalInformation?: PersonalInformationRiskAssessment | null;
  /**
   * @deprecated Use Order.shipping.address instead
   */
  shippingAddress?: AddressPersonal | null;
}

export interface MerchantRiskAssessment {
  websiteUrl?: string | null;
}

export interface OrderRiskAssessment {
  additionalInput?: AdditionalOrderInputAirlineData | null;
  amountOfMoney?: AmountOfMoney | null;
  customer?: CustomerRiskAssessment | null;
  shipping?: ShippingRiskAssessment | null;
}

export interface PersonalInformationRiskAssessment {
  name?: PersonalNameRiskAssessment | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PersonalNameRiskAssessment extends PersonalNameBase {}

export interface RiskAssessment {
  fraudFields?: FraudFields | null;
  merchant?: MerchantRiskAssessment | null;
  order?: OrderRiskAssessment | null;
  paymentProductId?: number | null;
}

export interface ShippingRiskAssessment {
  address?: AddressPersonal | null;
  comments?: string | null;
  trackingNumber?: string | null;
}
