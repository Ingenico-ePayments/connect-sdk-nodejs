/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import { AbstractOrderStatus, Address, AmountOfMoney, BankAccountBban, BankAccountIban, Card, CompanyInformation, ContactDetailsBase, OrderStatusOutput } from "../../definitions";
import { OrderOutput, PersonalName } from "../../payment/definitions";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AbstractPayoutMethodSpecificInput {}

export interface BankTransferPayoutMethodSpecificInput extends AbstractPayoutMethodSpecificInput {
  bankAccountBban?: BankAccountBban | null;
  bankAccountIban?: BankAccountIban | null;
  /**
   * @deprecated Moved to PayoutDetails
   */
  customer?: PayoutCustomer | null;
  payoutDate?: string | null;
  payoutText?: string | null;
  swiftCode?: string | null;
}

export interface CardPayoutMethodSpecificInput extends AbstractPayoutMethodSpecificInput {
  card?: Card | null;
  paymentProductId?: number | null;
  recipient?: PayoutRecipient | null;
  token?: string | null;
}

export interface PayoutCustomer {
  address?: Address | null;
  companyInformation?: CompanyInformation | null;
  contactDetails?: ContactDetailsBase | null;
  merchantCustomerId?: string | null;
  name?: PersonalName | null;
}

export interface PayoutDetails {
  amountOfMoney?: AmountOfMoney | null;
  customer?: PayoutCustomer | null;
  references?: PayoutReferences | null;
}

export interface PayoutMerchant {
  configurationId?: string | null;
}

export interface PayoutRecipient {
  firstName?: string | null;
  surname?: string | null;
  surnamePrefix?: string | null;
}

export interface PayoutReferences {
  invoiceNumber?: string | null;
  merchantOrderId?: number | null;
  merchantReference?: string | null;
}

export interface PayoutResult extends AbstractOrderStatus {
  payoutOutput?: OrderOutput | null;
  status?: string | null;
  statusOutput?: OrderStatusOutput | null;
}
