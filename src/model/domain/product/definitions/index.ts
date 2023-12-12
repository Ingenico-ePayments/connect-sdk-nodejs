/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import { KeyValuePair } from "../../definitions";

export interface AbstractIndicator {
  name?: string | null;
  value?: string | null;
}

export interface AccountOnFile {
  attributes?: AccountOnFileAttribute[] | null;
  displayHints?: AccountOnFileDisplayHints | null;
  id?: number | null;
  paymentProductId?: number | null;
}

export interface AccountOnFileAttribute extends KeyValuePair {
  mustWriteReason?: string | null;
  status?: string | null;
}

export interface AccountOnFileDisplayHints {
  labelTemplate?: LabelTemplateElement[] | null;
  logo?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AuthenticationIndicator extends AbstractIndicator {}

export interface BoletoBancarioRequirednessValidator {
  fiscalNumberLength?: number | null;
}

export interface DirectoryEntry {
  countryNames?: string[] | null;
  issuerId?: string | null;
  issuerList?: string | null;
  issuerName?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface EmptyValidator {}

export interface FixedListValidator {
  allowedValues?: string[] | null;
}

export interface LabelTemplateElement {
  attributeKey?: string | null;
  mask?: string | null;
}

export interface LengthValidator {
  maxLength?: number | null;
  minLength?: number | null;
}

export interface MobilePaymentProductSession302SpecificInput {
  displayName?: string | null;
  domainName?: string | null;
  validationUrl?: string | null;
}

export interface MobilePaymentProductSession302SpecificOutput {
  sessionObject?: string | null;
}

export interface PaymentProduct {
  accountsOnFile?: AccountOnFile[] | null;
  acquirerCountry?: string | null;
  allowsInstallments?: boolean | null;
  allowsRecurring?: boolean | null;
  allowsTokenization?: boolean | null;
  authenticationIndicator?: AuthenticationIndicator | null;
  autoTokenized?: boolean | null;
  canBeIframed?: boolean | null;
  deviceFingerprintEnabled?: boolean | null;
  displayHints?: PaymentProductDisplayHints | null;
  fields?: PaymentProductField[] | null;
  fieldsWarning?: string | null;
  id?: number | null;
  isAuthenticationSupported?: boolean | null;
  isJavaScriptRequired?: boolean | null;
  maxAmount?: number | null;
  minAmount?: number | null;
  mobileIntegrationLevel?: string | null;
  paymentMethod?: string | null;
  paymentProduct302SpecificData?: PaymentProduct302SpecificData | null;
  paymentProduct320SpecificData?: PaymentProduct320SpecificData | null;
  paymentProduct863SpecificData?: PaymentProduct863SpecificData | null;
  paymentProductGroup?: string | null;
  supportsMandates?: boolean | null;
  usesRedirectionTo3rdParty?: boolean | null;
}

export interface PaymentProduct302SpecificData {
  networks?: string[] | null;
}

export interface PaymentProduct320SpecificData {
  gateway?: string | null;
  networks?: string[] | null;
}

export interface PaymentProduct863SpecificData {
  integrationTypes?: string[] | null;
}

export interface PaymentProductDisplayHints {
  displayOrder?: number | null;
  label?: string | null;
  logo?: string | null;
}

export interface PaymentProductField {
  dataRestrictions?: PaymentProductFieldDataRestrictions | null;
  displayHints?: PaymentProductFieldDisplayHints | null;
  id?: string | null;
  type?: string | null;
  usedForLookup?: boolean | null;
}

export interface PaymentProductFieldDataRestrictions {
  isRequired?: boolean | null;
  validators?: PaymentProductFieldValidators | null;
}

export interface PaymentProductFieldDisplayElement {
  id?: string | null;
  label?: string | null;
  type?: string | null;
  value?: string | null;
}

export interface PaymentProductFieldDisplayHints {
  alwaysShow?: boolean | null;
  displayOrder?: number | null;
  formElement?: PaymentProductFieldFormElement | null;
  label?: string | null;
  link?: string | null;
  mask?: string | null;
  obfuscate?: boolean | null;
  placeholderLabel?: string | null;
  preferredInputType?: string | null;
  tooltip?: PaymentProductFieldTooltip | null;
}

export interface PaymentProductFieldFormElement {
  type?: string | null;
  valueMapping?: ValueMappingElement[] | null;
}

export interface PaymentProductFieldTooltip {
  image?: string | null;
  label?: string | null;
}

export interface PaymentProductFieldValidators {
  boletoBancarioRequiredness?: BoletoBancarioRequirednessValidator | null;
  emailAddress?: EmptyValidator | null;
  expirationDate?: EmptyValidator | null;
  fixedList?: FixedListValidator | null;
  iban?: EmptyValidator | null;
  length?: LengthValidator | null;
  luhn?: EmptyValidator | null;
  range?: RangeValidator | null;
  regularExpression?: RegularExpressionValidator | null;
  residentIdNumber?: EmptyValidator | null;
  termsAndConditions?: EmptyValidator | null;
}

export interface PaymentProductGroup {
  accountsOnFile?: AccountOnFile[] | null;
  allowsInstallments?: boolean | null;
  deviceFingerprintEnabled?: boolean | null;
  displayHints?: PaymentProductDisplayHints | null;
  fields?: PaymentProductField[] | null;
  id?: string | null;
}

export interface RangeValidator {
  maxValue?: number | null;
  minValue?: number | null;
}

export interface RegularExpressionValidator {
  regularExpression?: string | null;
}

export interface ValueMappingElement {
  displayElements?: PaymentProductFieldDisplayElement[] | null;
  /**
   * @deprecated Use displayElements instead with ID 'displayName'
   */
  displayName?: string | null;
  value?: string | null;
}
