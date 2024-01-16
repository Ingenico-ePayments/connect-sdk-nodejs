/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/
 */
import { Address, BankAccountBban, BankAccountIban, CardWithoutCvv, ContactDetailsBase, CustomerBase, PersonalNameBase } from "../../definitions";

export interface AbstractToken {
  alias?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ContactDetailsToken extends ContactDetailsBase {}

export interface Creditor {
  additionalAddressInfo?: string | null;
  city?: string | null;
  countryCode?: string | null;
  houseNumber?: string | null;
  iban?: string | null;
  id?: string | null;
  name?: string | null;
  referenceParty?: string | null;
  referencePartyId?: string | null;
  street?: string | null;
  zip?: string | null;
}

export interface CustomerToken extends CustomerBase {
  billingAddress?: Address | null;
  personalInformation?: PersonalInformationToken | null;
}

export interface CustomerTokenWithContactDetails extends CustomerToken {
  contactDetails?: ContactDetailsToken | null;
}

export interface Debtor {
  additionalAddressInfo?: string | null;
  city?: string | null;
  countryCode?: string | null;
  firstName?: string | null;
  houseNumber?: string | null;
  state?: string | null;
  stateCode?: string | null;
  street?: string | null;
  surname?: string | null;
  surnamePrefix?: string | null;
  zip?: string | null;
}

export interface MandateApproval {
  mandateSignatureDate?: string | null;
  mandateSignaturePlace?: string | null;
  mandateSigned?: boolean | null;
}

export interface MandateNonSepaDirectDebit {
  paymentProduct705SpecificData?: TokenNonSepaDirectDebitPaymentProduct705SpecificData | null;
  paymentProduct730SpecificData?: TokenNonSepaDirectDebitPaymentProduct730SpecificData | null;
}

export interface MandateSepaDirectDebit extends MandateSepaDirectDebitWithMandateId {
  creditor?: Creditor | null;
}

export interface MandateSepaDirectDebitWithMandateId extends MandateSepaDirectDebitWithoutCreditor {
  mandateId?: string | null;
}

export interface MandateSepaDirectDebitWithoutCreditor {
  bankAccountIban?: BankAccountIban | null;
  customerContractIdentifier?: string | null;
  debtor?: Debtor | null;
  isRecurring?: boolean | null;
  mandateApproval?: MandateApproval | null;
  preNotification?: string | null;
}

export interface PersonalInformationToken {
  name?: PersonalNameToken | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface PersonalNameToken extends PersonalNameBase {}

export interface TokenCard extends AbstractToken {
  customer?: CustomerToken | null;
  data?: TokenCardData | null;
}

export interface TokenCardData {
  cardWithoutCvv?: CardWithoutCvv | null;
  firstTransactionDate?: string | null;
  providerReference?: string | null;
}

export interface TokenEWallet extends AbstractToken {
  customer?: CustomerToken | null;
  data?: TokenEWalletData | null;
}

export interface TokenEWalletData {
  billingAgreementId?: string | null;
}

export interface TokenNonSepaDirectDebit extends AbstractToken {
  customer?: CustomerToken | null;
  mandate?: MandateNonSepaDirectDebit | null;
}

export interface TokenNonSepaDirectDebitPaymentProduct705SpecificData {
  authorisationId?: string | null;
  bankAccountBban?: BankAccountBban | null;
}

export interface TokenNonSepaDirectDebitPaymentProduct730SpecificData {
  bankAccountBban?: BankAccountBban | null;
}

export interface TokenSepaDirectDebit extends AbstractToken {
  customer?: CustomerTokenWithContactDetails | null;
  mandate?: MandateSepaDirectDebit | null;
}

export interface TokenSepaDirectDebitWithoutCreditor extends AbstractToken {
  customer?: CustomerTokenWithContactDetails | null;
  mandate?: MandateSepaDirectDebitWithoutCreditor | null;
}
