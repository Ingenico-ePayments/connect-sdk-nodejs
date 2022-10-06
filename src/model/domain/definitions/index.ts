/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import { APIError } from "../errors/definitions";

export interface AbstractOrderStatus {
  id?: string | null;
}

export interface AbstractPaymentMethodSpecificInput {
  paymentProductId?: number | null;
}

export interface AdditionalOrderInputAirlineData {
  airlineData?: AirlineData | null;
  lodgingData?: LodgingData | null;
}

export interface Address {
  additionalInfo?: string | null;
  city?: string | null;
  countryCode?: string | null;
  houseNumber?: string | null;
  state?: string | null;
  stateCode?: string | null;
  street?: string | null;
  zip?: string | null;
}

export interface AirlineData {
  agentNumericCode?: string | null;
  code?: string | null;
  flightDate?: string | null;
  flightLegs?: AirlineFlightLeg[] | null;
  invoiceNumber?: string | null;
  isETicket?: boolean | null;
  /**
   * @deprecated Use Order.customer.accountType instead
   */
  isRegisteredCustomer?: boolean | null;
  isRestrictedTicket?: boolean | null;
  isThirdParty?: boolean | null;
  issueDate?: string | null;
  merchantCustomerId?: string | null;
  name?: string | null;
  passengerName?: string | null;
  passengers?: AirlinePassenger[] | null;
  placeOfIssue?: string | null;
  pnr?: string | null;
  pointOfSale?: string | null;
  posCityCode?: string | null;
  ticketDeliveryMethod?: string | null;
  ticketNumber?: string | null;
  totalFare?: number | null;
  totalFee?: number | null;
  totalTaxes?: number | null;
  travelAgencyName?: string | null;
}

export interface AirlineFlightLeg {
  airlineClass?: string | null;
  arrivalAirport?: string | null;
  arrivalTime?: string | null;
  carrierCode?: string | null;
  conjunctionTicket?: string | null;
  couponNumber?: string | null;
  date?: string | null;
  departureTime?: string | null;
  endorsementOrRestriction?: string | null;
  exchangeTicket?: string | null;
  fare?: string | null;
  fareBasis?: string | null;
  fee?: number | null;
  flightNumber?: string | null;
  number?: number | null;
  originAirport?: string | null;
  passengerClass?: string | null;
  /**
   * @deprecated Use passengerClass instead
   */
  serviceClass?: string | null;
  stopoverCode?: string | null;
  taxes?: number | null;
}

export interface AirlinePassenger {
  firstName?: string | null;
  surname?: string | null;
  surnamePrefix?: string | null;
  title?: string | null;
}

export interface AmountOfMoney {
  amount?: number | null;
  currencyCode?: string | null;
}

export interface BankAccount {
  accountHolderName?: string | null;
}

export interface BankAccountBban extends BankAccount {
  accountNumber?: string | null;
  bankCode?: string | null;
  bankName?: string | null;
  branchCode?: string | null;
  checkDigit?: string | null;
  countryCode?: string | null;
}

export interface BankAccountIban extends BankAccount {
  iban?: string | null;
}

export interface Card extends CardWithoutCvv {
  cvv?: string | null;
  partialPin?: string | null;
}

export interface CardEssentials {
  cardNumber?: string | null;
  expiryDate?: string | null;
}

export interface CardFraudResults extends FraudResults {
  avsResult?: string | null;
  cvvResult?: string | null;
  fraugster?: FraugsterResults | null;
  microsoftFraudProtection?: MicrosoftFraudResults | null;
  retailDecisions?: FraudResultsRetailDecisions | null;
}

export interface CardWithoutCvv extends CardEssentials {
  cardholderName?: string | null;
  issueNumber?: string | null;
}

export interface CompanyInformation {
  name?: string | null;
  vatNumber?: string | null;
}

export interface ContactDetailsBase {
  emailAddress?: string | null;
  emailMessageType?: string | null;
}

export interface CustomerBase {
  companyInformation?: CompanyInformation | null;
  merchantCustomerId?: string | null;
  /**
   * @deprecated Use companyInformation.vatNumber instead
   */
  vatNumber?: string | null;
}

export interface FraudFields {
  /**
   * @deprecated For risk assessments there is no replacement. For other calls, use Order.shipping.addressIndicator instead
   */
  addressesAreIdentical?: boolean | null;
  blackListData?: string | null;
  /**
   * @deprecated This should be the same as Order.customer.billingAddress
   */
  cardOwnerAddress?: Address | null;
  customerIpAddress?: string | null;
  /**
   * @deprecated Use Order.customer.device.defaultFormFill instead
   */
  defaultFormFill?: string | null;
  /**
   * @deprecated No replacement
   */
  deviceFingerprintActivated?: boolean | null;
  /**
   * @deprecated Use Order.customer.device.deviceFingerprintTransactionId instead
   */
  deviceFingerprintTransactionId?: string | null;
  giftCardType?: string | null;
  giftMessage?: string | null;
  /**
   * @deprecated Use Order.customer.account.hasForgottenPassword instead
   */
  hasForgottenPwd?: boolean | null;
  /**
   * @deprecated Use Order.customer.account.hasPassword instead
   */
  hasPassword?: boolean | null;
  /**
   * @deprecated Use Order.customer.isPreviousCustomer instead
   */
  isPreviousCustomer?: boolean | null;
  orderTimezone?: string | null;
  /**
   * @deprecated Use Order.shipping.comments instead
   */
  shipComments?: string | null;
  /**
   * @deprecated Use Order.shipping.trackingNumber instead
   */
  shipmentTrackingNumber?: string | null;
  /**
   * @deprecated No replacement
   */
  shippingDetails?: FraudFieldsShippingDetails | null;
  userData?: string[] | null;
  /**
   * @deprecated Use Merchant.websiteUrl instead
   */
  website?: string | null;
}

/**
 * @deprecated No replacement
 */
export interface FraudFieldsShippingDetails {
  /**
   * @deprecated No replacement
   */
  methodDetails?: string | null;
  /**
   * @deprecated No replacement
   */
  methodSpeed?: number | null;
  /**
   * @deprecated No replacement
   */
  methodType?: number | null;
}

export interface FraudResults {
  fraudServiceResult?: string | null;
  inAuth?: InAuth | null;
}

export interface FraudResultsRetailDecisions {
  fraudCode?: string | null;
  fraudNeural?: string | null;
  fraudRCF?: string | null;
}

export interface FraugsterResults {
  fraudInvestigationPoints?: string | null;
  fraudScore?: number | null;
}

export interface InAuth {
  deviceCategory?: string | null;
  deviceId?: string | null;
  riskScore?: string | null;
  trueIpAddress?: string | null;
  trueIpAddressCountry?: string | null;
}

export interface KeyValuePair {
  key?: string | null;
  value?: string | null;
}

export interface LodgingCharge {
  chargeAmount?: number | null;
  chargeAmountCurrencyCode?: string | null;
  chargeType?: string | null;
}

export interface LodgingData {
  charges?: LodgingCharge[] | null;
  checkInDate?: string | null;
  checkOutDate?: string | null;
  folioNumber?: string | null;
  isConfirmedReservation?: boolean | null;
  isFacilityFireSafetyConform?: boolean | null;
  isNoShow?: boolean | null;
  isPreferenceSmokingRoom?: boolean | null;
  numberOfAdults?: number | null;
  numberOfNights?: number | null;
  numberOfRooms?: number | null;
  programCode?: string | null;
  propertyCustomerServicePhoneNumber?: string | null;
  propertyPhoneNumber?: string | null;
  renterName?: string | null;
  rooms?: LodgingRoom[] | null;
}

export interface LodgingRoom {
  dailyRoomRate?: string | null;
  dailyRoomRateCurrencyCode?: string | null;
  dailyRoomTaxAmount?: string | null;
  dailyRoomTaxAmountCurrencyCode?: string | null;
  numberOfNightsAtRoomRate?: number | null;
  roomLocation?: string | null;
  roomNumber?: string | null;
  typeOfBed?: string | null;
  typeOfRoom?: string | null;
}

export interface MicrosoftFraudResults {
  deviceCountryCode?: string | null;
  deviceId?: string | null;
  fraudScore?: number | null;
  trueIpAddress?: string | null;
  userDeviceType?: string | null;
}

export interface OrderStatusOutput {
  errors?: APIError[] | null;
  isCancellable?: boolean | null;
  statusCategory?: string | null;
  statusCode?: number | null;
  statusCodeChangeDateTime?: string | null;
}

export interface PaymentProductFilter {
  groups?: string[] | null;
  products?: number[] | null;
}

export interface PersonalNameBase {
  firstName?: string | null;
  surname?: string | null;
  surnamePrefix?: string | null;
}

export interface RedirectDataBase {
  RETURNMAC?: string | null;
  redirectURL?: string | null;
}

export interface ResultDoRiskAssessment {
  category?: string | null;
  result?: string | null;
  retaildecisionsCCFraudCheckOutput?: RetailDecisionsCCFraudCheckOutput | null;
  validationBankAccountOutput?: ValidationBankAccountOutput | null;
}

export interface RetailDecisionsCCFraudCheckOutput {
  fraudCode?: string | null;
  fraudNeural?: string | null;
  fraudRCF?: string | null;
}

export interface ValidationBankAccountCheck {
  code?: string | null;
  description?: string | null;
  result?: string | null;
}

export interface ValidationBankAccountOutput {
  checks?: ValidationBankAccountCheck[] | null;
  newBankName?: string | null;
  reformattedAccountNumber?: string | null;
  reformattedBankCode?: string | null;
  reformattedBranchCode?: string | null;
}
