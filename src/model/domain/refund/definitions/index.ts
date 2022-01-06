/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import { AbstractOrderStatus, BankAccountBban, BankAccountIban, CompanyInformation, ContactDetailsBase, OrderStatusOutput } from "../../definitions";
import { AddressPersonal, RefundOutput } from "../../payment/definitions";

export interface BankAccountBbanRefund extends BankAccountBban {
  bankCity?: string | null;
  patronymicName?: string | null;
  swiftCode?: string | null;
}

export interface BankRefundMethodSpecificInput {
  bankAccountBban?: BankAccountBbanRefund | null;
  bankAccountIban?: BankAccountIban | null;
  countryCode?: string | null;
}

export interface RefundCustomer {
  address?: AddressPersonal | null;
  companyInformation?: CompanyInformation | null;
  contactDetails?: ContactDetailsBase | null;
  fiscalNumber?: string | null;
}

export interface RefundReferences {
  merchantReference?: string | null;
}

export interface RefundResult extends AbstractOrderStatus {
  refundOutput?: RefundOutput | null;
  status?: string | null;
  statusOutput?: OrderStatusOutput | null;
}
