/*
 * This file was auto-generated from the API references found at
 * https://epayments-api.developer-ingenico.com/s2sapi/v1/
 */
import {
  AbstractOrderStatus,
  AbstractPaymentMethodSpecificInput,
  AdditionalOrderInputAirlineData,
  Address,
  AirlineData,
  AmountOfMoney,
  BankAccountBban,
  BankAccountIban,
  Card,
  CardEssentials,
  CardFraudResults,
  CardWithoutCvv,
  ContactDetailsBase,
  CustomerBase,
  FraudResults,
  KeyValuePair,
  LodgingData,
  OrderStatusOutput,
  PersonalNameBase,
  RedirectDataBase
} from "../../definitions";
import { CreateMandateBase, CreateMandateWithReturnUrl } from "../../mandates/definitions";
import { PaymentProductField } from "../../product/definitions";

export interface AbstractBankTransferPaymentMethodSpecificInput extends AbstractPaymentMethodSpecificInput {
  additionalReference?: string | null;
}

export interface AbstractCardPaymentMethodSpecificInput extends AbstractPaymentMethodSpecificInput {
  authorizationMode?: string | null;
  customerReference?: string | null;
  initialSchemeTransactionId?: string | null;
  recurring?: CardRecurrenceDetails | null;
  /**
   * @deprecated Use recurring.recurringPaymentSequenceIndicator instead
   */
  recurringPaymentSequenceIndicator?: string | null;
  requiresApproval?: boolean | null;
  /**
   * @deprecated Use threeDSecure.skipAuthentication instead
   */
  skipAuthentication?: boolean | null;
  skipFraudService?: boolean | null;
  token?: string | null;
  tokenize?: boolean | null;
  transactionChannel?: string | null;
  /**
   * @deprecated Use unscheduledCardOnFileSequenceIndicator instead
   */
  unscheduledCardOnFileIndicator?: string | null;
  unscheduledCardOnFileRequestor?: string | null;
  unscheduledCardOnFileSequenceIndicator?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AbstractCashPaymentMethodSpecificInput extends AbstractPaymentMethodSpecificInput {}

export interface AbstractEInvoicePaymentMethodSpecificInput extends AbstractPaymentMethodSpecificInput {
  requiresApproval?: boolean | null;
}

export interface AbstractPaymentMethodSpecificOutput {
  paymentProductId?: number | null;
}

export interface AbstractRedirectPaymentMethodSpecificInput extends AbstractPaymentMethodSpecificInput {
  expirationPeriod?: number | null;
  recurringPaymentSequenceIndicator?: string | null;
  requiresApproval?: boolean | null;
  token?: string | null;
  tokenize?: boolean | null;
}

export interface AbstractRedirectPaymentProduct840SpecificInput {
  addressSelectionAtPayPal?: boolean | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface AbstractSepaDirectDebitPaymentMethodSpecificInput extends AbstractPaymentMethodSpecificInput {}

export interface AbstractSepaDirectDebitPaymentProduct771SpecificInput {
  /**
   * @deprecated Use existingUniqueMandateReference or mandate.uniqueMandateReference instead
   */
  mandateReference?: string | null;
}

export interface AbstractThreeDSecure {
  authenticationAmount?: AmountOfMoney | null;
  authenticationFlow?: string | null;
  challengeCanvasSize?: string | null;
  challengeIndicator?: string | null;
  exemptionRequest?: string | null;
  priorThreeDSecureData?: ThreeDSecureData | null;
  sdkData?: SdkDataInput | null;
  skipAuthentication?: boolean | null;
  transactionRiskLevel?: string | null;
}

export interface AdditionalOrderInput {
  airlineData?: AirlineData | null;
  installments?: Installments | null;
  /**
   * @deprecated Use Order.shoppingCart.amountBreakdown instead
   */
  level3SummaryData?: Level3SummaryData | null;
  loanRecipient?: LoanRecipient | null;
  lodgingData?: LodgingData | null;
  /**
   * @deprecated Use installments.numberOfInstallments instead
   */
  numberOfInstallments?: number | null;
  orderDate?: string | null;
  typeInformation?: OrderTypeInformation | null;
}

export interface AddressPersonal extends Address {
  name?: PersonalName | null;
}

export interface AmountBreakdown {
  amount?: number | null;
  type?: string | null;
}

export interface ApprovePaymentCardPaymentMethodSpecificOutput {
  voidResponseId?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ApprovePaymentDirectDebitPaymentMethodSpecificInput extends ApprovePaymentPaymentMethodSpecificInput {}

export interface ApprovePaymentMobilePaymentMethodSpecificOutput {
  voidResponseId?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ApprovePaymentNonSepaDirectDebitPaymentMethodSpecificInput extends ApprovePaymentDirectDebitPaymentMethodSpecificInput {}

export interface ApprovePaymentPaymentMethodSpecificInput {
  dateCollect?: string | null;
  token?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ApprovePaymentSepaDirectDebitPaymentMethodSpecificInput extends ApprovePaymentDirectDebitPaymentMethodSpecificInput {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BankTransferPaymentMethodSpecificInput extends AbstractBankTransferPaymentMethodSpecificInput {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface BankTransferPaymentMethodSpecificInputBase extends AbstractBankTransferPaymentMethodSpecificInput {}

export interface BankTransferPaymentMethodSpecificOutput extends AbstractPaymentMethodSpecificOutput {
  fraudResults?: FraudResults | null;
}

export interface BrowserData {
  colorDepth?: number | null;
  innerHeight?: string | null;
  innerWidth?: string | null;
  javaEnabled?: boolean | null;
  javaScriptEnabled?: boolean | null;
  screenHeight?: string | null;
  screenWidth?: string | null;
}

export interface CancelPaymentCardPaymentMethodSpecificOutput {
  voidResponseId?: string | null;
}

export interface CancelPaymentMobilePaymentMethodSpecificOutput {
  voidResponseId?: string | null;
}

export interface CardPaymentMethodSpecificInput extends AbstractCardPaymentMethodSpecificInput {
  card?: Card | null;
  /**
   * @deprecated Use threeDSecure.externalCardholderAuthenticationData instead
   */
  externalCardholderAuthenticationData?: ExternalCardholderAuthenticationData | null;
  isRecurring?: boolean | null;
  merchantInitiatedReasonIndicator?: string | null;
  /**
   * @deprecated Use threeDSecure.redirectionData.returnUrl instead
   */
  returnUrl?: string | null;
  threeDSecure?: ThreeDSecure | null;
}

export interface CardPaymentMethodSpecificInputBase extends AbstractCardPaymentMethodSpecificInput {
  threeDSecure?: ThreeDSecureBase | null;
}

export interface CardPaymentMethodSpecificOutput extends AbstractPaymentMethodSpecificOutput {
  authorisationCode?: string | null;
  card?: CardEssentials | null;
  fraudResults?: CardFraudResults | null;
  initialSchemeTransactionId?: string | null;
  schemeTransactionId?: string | null;
  threeDSecureResults?: ThreeDSecureResults | null;
  token?: string | null;
}

export interface CardRecurrenceDetails {
  endDate?: string | null;
  minFrequency?: number | null;
  recurringPaymentSequenceIndicator?: string | null;
}

export interface CashPaymentMethodSpecificInput extends AbstractCashPaymentMethodSpecificInput {
  /**
   * @deprecated No replacement
   */
  paymentProduct1503SpecificInput?: CashPaymentProduct1503SpecificInput | null;
  paymentProduct1504SpecificInput?: CashPaymentProduct1504SpecificInput | null;
  paymentProduct1521SpecificInput?: CashPaymentProduct1521SpecificInput | null;
  paymentProduct1522SpecificInput?: CashPaymentProduct1522SpecificInput | null;
  paymentProduct1523SpecificInput?: CashPaymentProduct1523SpecificInput | null;
  paymentProduct1524SpecificInput?: CashPaymentProduct1524SpecificInput | null;
  paymentProduct1526SpecificInput?: CashPaymentProduct1526SpecificInput | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CashPaymentMethodSpecificInputBase extends AbstractCashPaymentMethodSpecificInput {}

export interface CashPaymentMethodSpecificOutput extends AbstractPaymentMethodSpecificOutput {
  fraudResults?: FraudResults | null;
}

/**
 * @deprecated No replacement
 */
export interface CashPaymentProduct1503SpecificInput {
  /**
   * @deprecated No replacement, since Boleto Bancario no longer needs a return URL
   */
  returnUrl?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CashPaymentProduct1504SpecificInput extends CashPaymentProductWithRedirectSpecificInputBase {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CashPaymentProduct1521SpecificInput extends CashPaymentProductWithRedirectSpecificInputBase {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CashPaymentProduct1522SpecificInput extends CashPaymentProductWithRedirectSpecificInputBase {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CashPaymentProduct1523SpecificInput extends CashPaymentProductWithRedirectSpecificInputBase {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CashPaymentProduct1524SpecificInput extends CashPaymentProductWithRedirectSpecificInputBase {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface CashPaymentProduct1526SpecificInput extends CashPaymentProductWithRedirectSpecificInputBase {}

export interface CashPaymentProductWithRedirectSpecificInputBase {
  returnUrl?: string | null;
}

export interface CompletePaymentCardPaymentMethodSpecificInput {
  card?: CardWithoutCvv | null;
}

export interface ContactDetails extends ContactDetailsBase {
  faxNumber?: string | null;
  mobilePhoneNumber?: string | null;
  phoneNumber?: string | null;
  workPhoneNumber?: string | null;
}

export interface CreatePaymentResult {
  creationOutput?: PaymentCreationOutput | null;
  merchantAction?: MerchantAction | null;
  payment?: Payment | null;
}

export interface Customer extends CustomerBase {
  account?: CustomerAccount | null;
  accountType?: string | null;
  billingAddress?: Address | null;
  contactDetails?: ContactDetails | null;
  device?: CustomerDevice | null;
  fiscalNumber?: string | null;
  isPreviousCustomer?: boolean | null;
  locale?: string | null;
  personalInformation?: PersonalInformation | null;
  /**
   * @deprecated Use Order.shipping.address instead
   */
  shippingAddress?: AddressPersonal | null;
}

export interface CustomerAccount {
  authentication?: CustomerAccountAuthentication | null;
  changeDate?: string | null;
  changedDuringCheckout?: boolean | null;
  createDate?: string | null;
  hadSuspiciousActivity?: boolean | null;
  hasForgottenPassword?: boolean | null;
  hasPassword?: boolean | null;
  passwordChangeDate?: string | null;
  passwordChangedDuringCheckout?: boolean | null;
  paymentAccountOnFile?: PaymentAccountOnFile | null;
  paymentAccountOnFileType?: string | null;
  paymentActivity?: CustomerPaymentActivity | null;
}

export interface CustomerAccountAuthentication {
  data?: string | null;
  method?: string | null;
  utcTimestamp?: string | null;
}

export interface CustomerApprovePayment {
  accountType?: string | null;
}

export interface CustomerDevice {
  acceptHeader?: string | null;
  browserData?: BrowserData | null;
  defaultFormFill?: string | null;
  deviceFingerprintTransactionId?: string | null;
  ipAddress?: string | null;
  locale?: string | null;
  timezoneOffsetUtcMinutes?: string | null;
  userAgent?: string | null;
}

export interface CustomerPaymentActivity {
  numberOfPaymentAttemptsLast24Hours?: number | null;
  numberOfPaymentAttemptsLastYear?: number | null;
  numberOfPurchasesLast6Months?: number | null;
}

export interface DecryptedPaymentData {
  /**
   * @deprecated Use decryptedPaymentData.paymentMethod instead
   */
  authMethod?: string | null;
  cardholderName?: string | null;
  cryptogram?: string | null;
  dpan?: string | null;
  eci?: number | null;
  expiryDate?: string | null;
  pan?: string | null;
  paymentMethod?: string | null;
}

export interface DeviceRenderOptions {
  sdkInterface?: string | null;
  /**
   * @deprecated Use deviceRenderOptions.sdkUiTypes instead
   */
  sdkUiType?: string | null;
  sdkUiTypes?: string[] | null;
}

export interface EInvoicePaymentMethodSpecificInput extends AbstractEInvoicePaymentMethodSpecificInput {
  acceptedTermsAndConditions?: boolean | null;
  paymentProduct9000SpecificInput?: EInvoicePaymentProduct9000SpecificInput | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface EInvoicePaymentMethodSpecificInputBase extends AbstractEInvoicePaymentMethodSpecificInput {}

export interface EInvoicePaymentMethodSpecificOutput extends AbstractPaymentMethodSpecificOutput {
  paymentProduct9000SpecificOutput?: EInvoicePaymentProduct9000SpecificOutput | null;
}

export interface EInvoicePaymentProduct9000SpecificInput {
  bankAccountIban?: BankAccountIban | null;
  installmentId?: string | null;
}

export interface EInvoicePaymentProduct9000SpecificOutput {
  installmentId?: string | null;
}

export interface ExemptionOutput {
  exemptionRaised?: string | null;
  exemptionRejectionReason?: string | null;
  exemptionRequest?: string | null;
}

export interface ExternalCardholderAuthenticationData {
  acsTransactionId?: string | null;
  appliedExemption?: string | null;
  cavv?: string | null;
  cavvAlgorithm?: string | null;
  directoryServerTransactionId?: string | null;
  eci?: number | null;
  schemeRiskScore?: number | null;
  threeDSecureVersion?: string | null;
  /**
   * @deprecated No replacement
   */
  threeDServerTransactionId?: string | null;
  validationResult?: string | null;
  xid?: string | null;
}

export interface GPayThreeDSecure {
  challengeCanvasSize?: string | null;
  challengeIndicator?: string | null;
  exemptionRequest?: string | null;
  redirectionData?: RedirectionData | null;
  skipAuthentication?: boolean | null;
}

export interface GiftCardPurchase {
  amountOfMoney?: AmountOfMoney | null;
  numberOfGiftCards?: number | null;
}

export interface HostedCheckoutSpecificOutput {
  hostedCheckoutId?: string | null;
  variant?: string | null;
}

export interface Installments {
  amountOfMoneyPerInstallment?: AmountOfMoney | null;
  frequencyOfInstallments?: string | null;
  installmentPlanCode?: number | null;
  interestRate?: string | null;
  numberOfInstallments?: number | null;
}

export interface InvoicePaymentMethodSpecificInput extends AbstractPaymentMethodSpecificInput {
  additionalReference?: string | null;
}

export interface InvoicePaymentMethodSpecificOutput extends AbstractPaymentMethodSpecificOutput {
  fraudResults?: FraudResults | null;
}

/**
 * @deprecated Use ShoppingCart.amountBreakdown instead
 */
export interface Level3SummaryData {
  /**
   * @deprecated Use ShoppingCart.amountBreakdown with type DISCOUNT instead
   */
  discountAmount?: number | null;
  /**
   * @deprecated Use ShoppingCart.amountBreakdown with type DUTY instead
   */
  dutyAmount?: number | null;
  /**
   * @deprecated Use ShoppingCart.amountBreakdown with type SHIPPING instead
   */
  shippingAmount?: number | null;
}

export interface LineItem {
  amountOfMoney?: AmountOfMoney | null;
  invoiceData?: LineItemInvoiceData | null;
  /**
   * @deprecated Use orderLineDetails instead
   */
  level3InterchangeInformation?: LineItemLevel3InterchangeInformation | null;
  orderLineDetails?: OrderLineDetails | null;
}

export interface LineItemInvoiceData {
  description?: string | null;
  merchantLinenumber?: string | null;
  merchantPagenumber?: string | null;
  nrOfItems?: string | null;
  pricePerItem?: number | null;
}

export interface LineItemLevel3InterchangeInformation {
  discountAmount?: number | null;
  lineAmountTotal?: number | null;
  productCode?: string | null;
  productPrice?: number | null;
  productType?: string | null;
  quantity?: number | null;
  taxAmount?: number | null;
  unit?: string | null;
}

export interface LoanRecipient {
  accountNumber?: string | null;
  dateOfBirth?: string | null;
  partialPan?: string | null;
  surname?: string | null;
  zip?: string | null;
}

export interface Merchant {
  contactWebsiteUrl?: string | null;
  seller?: Seller | null;
  websiteUrl?: string | null;
}

export interface MerchantAction {
  actionType?: string | null;
  formFields?: PaymentProductField[] | null;
  mobileThreeDSecureChallengeParameters?: MobileThreeDSecureChallengeParameters | null;
  redirectData?: RedirectData | null;
  renderingData?: string | null;
  showData?: KeyValuePair[] | null;
  thirdPartyData?: ThirdPartyData | null;
}

export interface MobilePaymentData {
  dpan?: string | null;
  expiryDate?: string | null;
}

export interface MobilePaymentMethodSpecificInput extends AbstractPaymentMethodSpecificInput {
  authorizationMode?: string | null;
  customerReference?: string | null;
  decryptedPaymentData?: DecryptedPaymentData | null;
  encryptedPaymentData?: string | null;
  paymentProduct320SpecificInput?: MobilePaymentProduct320SpecificInput | null;
  requiresApproval?: boolean | null;
  skipFraudService?: boolean | null;
}

export interface MobilePaymentMethodSpecificOutput extends AbstractPaymentMethodSpecificOutput {
  authorisationCode?: string | null;
  fraudResults?: CardFraudResults | null;
  network?: string | null;
  paymentData?: MobilePaymentData | null;
  threeDSecureResults?: ThreeDSecureResults | null;
}

export interface MobilePaymentProduct320SpecificInput {
  threeDSecure?: GPayThreeDSecure | null;
}

export interface MobileThreeDSecureChallengeParameters {
  acsReferenceNumber?: string | null;
  acsSignedContent?: string | null;
  acsTransactionId?: string | null;
  threeDServerTransactionId?: string | null;
}

export interface NonSepaDirectDebitPaymentMethodSpecificInput extends AbstractPaymentMethodSpecificInput {
  dateCollect?: string | null;
  directDebitText?: string | null;
  isRecurring?: boolean | null;
  paymentProduct705SpecificInput?: NonSepaDirectDebitPaymentProduct705SpecificInput | null;
  paymentProduct730SpecificInput?: NonSepaDirectDebitPaymentProduct730SpecificInput | null;
  recurringPaymentSequenceIndicator?: string | null;
  requiresApproval?: boolean | null;
  token?: string | null;
  tokenize?: boolean | null;
}

export interface NonSepaDirectDebitPaymentMethodSpecificOutput extends AbstractPaymentMethodSpecificOutput {
  fraudResults?: FraudResults | null;
}

export interface NonSepaDirectDebitPaymentProduct705SpecificInput {
  authorisationId?: string | null;
  bankAccountBban?: BankAccountBban | null;
  transactionType?: string | null;
}

export interface NonSepaDirectDebitPaymentProduct730SpecificInput {
  bankAccountBban?: BankAccountBban | null;
}

export interface Order {
  additionalInput?: AdditionalOrderInput | null;
  amountOfMoney?: AmountOfMoney | null;
  customer?: Customer | null;
  /**
   * @deprecated Use shoppingCart.items instead
   */
  items?: LineItem[] | null;
  references?: OrderReferences | null;
  /**
   * @deprecated Use Merchant.seller instead
   */
  seller?: Seller | null;
  shipping?: Shipping | null;
  shoppingCart?: ShoppingCart | null;
}

export interface OrderApprovePayment {
  additionalInput?: AdditionalOrderInputAirlineData | null;
  customer?: CustomerApprovePayment | null;
  references?: OrderReferencesApprovePayment | null;
}

export interface OrderInvoiceData {
  additionalData?: string | null;
  invoiceDate?: string | null;
  invoiceNumber?: string | null;
  textQualifiers?: string[] | null;
}

export interface OrderLineDetails {
  discountAmount?: number | null;
  googleProductCategoryId?: number | null;
  lineAmountTotal?: number | null;
  productCategory?: string | null;
  productCode?: string | null;
  productName?: string | null;
  productPrice?: number | null;
  productSku?: string | null;
  productType?: string | null;
  quantity?: number | null;
  taxAmount?: number | null;
  unit?: string | null;
}

export interface OrderOutput {
  amountOfMoney?: AmountOfMoney | null;
  references?: PaymentReferences | null;
}

export interface OrderReferences {
  descriptor?: string | null;
  invoiceData?: OrderInvoiceData | null;
  merchantOrderId?: number | null;
  merchantReference?: string | null;
}

export interface OrderReferencesApprovePayment {
  merchantReference?: string | null;
}

export interface OrderTypeInformation {
  purchaseType?: string | null;
  transactionType?: string | null;
  usageType?: string | null;
}

export interface Payment extends AbstractOrderStatus {
  hostedCheckoutSpecificOutput?: HostedCheckoutSpecificOutput | null;
  paymentOutput?: PaymentOutput | null;
  status?: string | null;
  statusOutput?: PaymentStatusOutput | null;
}

export interface PaymentAccountOnFile {
  createDate?: string | null;
  numberOfCardOnFileCreationAttemptsLast24Hours?: number | null;
}

export interface PaymentCreationOutput extends PaymentCreationReferences {
  isNewToken?: boolean | null;
  token?: string | null;
  tokenizationSucceeded?: boolean | null;
}

export interface PaymentCreationReferences {
  additionalReference?: string | null;
  externalReference?: string | null;
}

export interface PaymentOutput extends OrderOutput {
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

export interface PaymentProduct3201SpecificOutput {
  card?: CardEssentials | null;
}

export interface PaymentProduct771SpecificOutput {
  mandateReference?: string | null;
}

export interface PaymentProduct806SpecificOutput {
  billingAddress?: Address | null;
  customerAccount?: TrustlyBankAccount | null;
}

export interface PaymentProduct836SpecificOutput {
  securityIndicator?: string | null;
}

export interface PaymentProduct840CustomerAccount {
  accountId?: string | null;
  billingAgreementId?: string | null;
  companyName?: string | null;
  contactPhone?: string | null;
  countryCode?: string | null;
  customerAccountStatus?: string | null;
  customerAddressStatus?: string | null;
  firstName?: string | null;
  payerId?: string | null;
  surname?: string | null;
}

export interface PaymentProduct840SpecificOutput {
  billingAddress?: Address | null;
  customerAccount?: PaymentProduct840CustomerAccount | null;
  customerAddress?: Address | null;
  protectionEligibility?: ProtectionEligibility | null;
}

export interface PaymentProduct863ThirdPartyData {
  appId?: string | null;
  nonceStr?: string | null;
  packageSign?: string | null;
  paySign?: string | null;
  prepayId?: string | null;
  signType?: string | null;
  timeStamp?: string | null;
}

export interface PaymentReferences {
  merchantOrderId?: number | null;
  merchantReference?: string | null;
  paymentReference?: string | null;
  providerId?: string | null;
  providerReference?: string | null;
  referenceOrigPayment?: string | null;
}

export interface PaymentStatusOutput extends OrderStatusOutput {
  isAuthorized?: boolean | null;
  isRefundable?: boolean | null;
  threeDSecureStatus?: string | null;
}

export interface PersonalInformation {
  dateOfBirth?: string | null;
  gender?: string | null;
  name?: PersonalName | null;
}

export interface PersonalName extends PersonalNameBase {
  title?: string | null;
}

export interface ProtectionEligibility {
  eligibility?: string | null;
  type?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RedirectData extends RedirectDataBase {}

export interface RedirectPaymentMethodSpecificInput extends AbstractRedirectPaymentMethodSpecificInput {
  isRecurring?: boolean | null;
  paymentProduct4101SpecificInput?: RedirectPaymentProduct4101SpecificInput | null;
  paymentProduct809SpecificInput?: RedirectPaymentProduct809SpecificInput | null;
  paymentProduct816SpecificInput?: RedirectPaymentProduct816SpecificInput | null;
  paymentProduct840SpecificInput?: RedirectPaymentProduct840SpecificInput | null;
  paymentProduct861SpecificInput?: RedirectPaymentProduct861SpecificInput | null;
  paymentProduct863SpecificInput?: RedirectPaymentProduct863SpecificInput | null;
  paymentProduct869SpecificInput?: RedirectPaymentProduct869SpecificInput | null;
  paymentProduct882SpecificInput?: RedirectPaymentProduct882SpecificInput | null;
  redirectionData?: RedirectionData | null;
  /**
   * @deprecated Use redirectionData.returnUrl instead
   */
  returnUrl?: string | null;
}

export interface RedirectPaymentMethodSpecificInputBase extends AbstractRedirectPaymentMethodSpecificInput {
  paymentProduct840SpecificInput?: RedirectPaymentProduct840SpecificInputBase | null;
}

export interface RedirectPaymentMethodSpecificOutput extends AbstractPaymentMethodSpecificOutput {
  bankAccountBban?: BankAccountBban | null;
  bankAccountIban?: BankAccountIban | null;
  bic?: string | null;
  fraudResults?: FraudResults | null;
  paymentProduct3201SpecificOutput?: PaymentProduct3201SpecificOutput | null;
  paymentProduct806SpecificOutput?: PaymentProduct806SpecificOutput | null;
  paymentProduct836SpecificOutput?: PaymentProduct836SpecificOutput | null;
  paymentProduct840SpecificOutput?: PaymentProduct840SpecificOutput | null;
  token?: string | null;
}

export interface RedirectPaymentProduct4101SpecificInput {
  displayName?: string | null;
  integrationType?: string | null;
  virtualPaymentAddress?: string | null;
}

export interface RedirectPaymentProduct809SpecificInput {
  /**
   * @deprecated Use RedirectPaymentMethodSpecificInput.expirationPeriod instead
   */
  expirationPeriod?: string | null;
  issuerId?: string | null;
}

export interface RedirectPaymentProduct816SpecificInput {
  bankAccountIban?: BankAccountIban | null;
}

export interface RedirectPaymentProduct840SpecificInput extends AbstractRedirectPaymentProduct840SpecificInput {
  /**
   * @deprecated Use Order.references.descriptor instead
   */
  custom?: string | null;
  isShortcut?: boolean | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RedirectPaymentProduct840SpecificInputBase extends AbstractRedirectPaymentProduct840SpecificInput {}

export interface RedirectPaymentProduct861SpecificInput {
  mobileDevice?: boolean | null;
}

export interface RedirectPaymentProduct863SpecificInput {
  integrationType?: string | null;
  openId?: string | null;
}

export interface RedirectPaymentProduct869SpecificInput {
  issuerId?: string | null;
  residentIdName?: string | null;
  residentIdNumber?: string | null;
}

export interface RedirectPaymentProduct882SpecificInput {
  issuerId?: string | null;
}

export interface RedirectionData {
  returnUrl?: string | null;
  variant?: string | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RefundBankMethodSpecificOutput extends RefundMethodSpecificOutput {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RefundCardMethodSpecificOutput extends RefundMethodSpecificOutput {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RefundCashMethodSpecificOutput extends RefundMethodSpecificOutput {}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface RefundEInvoiceMethodSpecificOutput extends RefundMethodSpecificOutput {}

export interface RefundEWalletMethodSpecificOutput extends RefundMethodSpecificOutput {
  paymentProduct840SpecificOutput?: RefundPaymentProduct840SpecificOutput | null;
}

export interface RefundMethodSpecificOutput {
  refundProductId?: number | null;
  totalAmountPaid?: number | null;
  totalAmountRefunded?: number | null;
}

export interface RefundMobileMethodSpecificOutput extends RefundMethodSpecificOutput {
  network?: string | null;
}

export interface RefundOutput extends OrderOutput {
  amountPaid?: number | null;
  bankRefundMethodSpecificOutput?: RefundBankMethodSpecificOutput | null;
  cardRefundMethodSpecificOutput?: RefundCardMethodSpecificOutput | null;
  cashRefundMethodSpecificOutput?: RefundCashMethodSpecificOutput | null;
  eInvoiceRefundMethodSpecificOutput?: RefundEInvoiceMethodSpecificOutput | null;
  eWalletRefundMethodSpecificOutput?: RefundEWalletMethodSpecificOutput | null;
  mobileRefundMethodSpecificOutput?: RefundMobileMethodSpecificOutput | null;
  paymentMethod?: string | null;
}

export interface RefundPaymentProduct840CustomerAccount {
  customerAccountStatus?: string | null;
  customerAddressStatus?: string | null;
  payerId?: string | null;
}

export interface RefundPaymentProduct840SpecificOutput {
  customerAccount?: RefundPaymentProduct840CustomerAccount | null;
}

export interface SdkDataInput {
  /**
   * @deprecated No replacement
   */
  deviceInfo?: string | null;
  deviceRenderOptions?: DeviceRenderOptions | null;
  sdkAppId?: string | null;
  sdkEncryptedData?: string | null;
  sdkEphemeralPublicKey?: string | null;
  sdkMaxTimeout?: string | null;
  sdkReferenceNumber?: string | null;
  sdkTransactionId?: string | null;
}

export interface SdkDataOutput {
  sdkTransactionId?: string | null;
}

export interface Seller {
  address?: Address | null;
  channelCode?: string | null;
  description?: string | null;
  geocode?: string | null;
  id?: string | null;
  invoiceNumber?: string | null;
  mcc?: string | null;
  name?: string | null;
  type?: string | null;
}

export interface SepaDirectDebitPaymentMethodSpecificInput extends AbstractSepaDirectDebitPaymentMethodSpecificInput {
  dateCollect?: string | null;
  directDebitText?: string | null;
  isRecurring?: boolean | null;
  paymentProduct771SpecificInput?: SepaDirectDebitPaymentProduct771SpecificInput | null;
  recurringPaymentSequenceIndicator?: string | null;
  requiresApproval?: boolean | null;
  token?: string | null;
  tokenize?: boolean | null;
}

export interface SepaDirectDebitPaymentMethodSpecificInputBase extends AbstractSepaDirectDebitPaymentMethodSpecificInput {
  paymentProduct771SpecificInput?: SepaDirectDebitPaymentProduct771SpecificInputBase | null;
}

export interface SepaDirectDebitPaymentMethodSpecificOutput extends AbstractPaymentMethodSpecificOutput {
  fraudResults?: FraudResults | null;
  paymentProduct771SpecificOutput?: PaymentProduct771SpecificOutput | null;
  token?: string | null;
}

export interface SepaDirectDebitPaymentProduct771SpecificInput extends AbstractSepaDirectDebitPaymentProduct771SpecificInput {
  existingUniqueMandateReference?: string | null;
  mandate?: CreateMandateWithReturnUrl | null;
}

export interface SepaDirectDebitPaymentProduct771SpecificInputBase extends AbstractSepaDirectDebitPaymentProduct771SpecificInput {
  existingUniqueMandateReference?: string | null;
  mandate?: CreateMandateBase | null;
}

export interface Shipping {
  address?: AddressPersonal | null;
  addressIndicator?: string | null;
  comments?: string | null;
  emailAddress?: string | null;
  firstUsageDate?: string | null;
  isFirstUsage?: boolean | null;
  trackingNumber?: string | null;
  type?: string | null;
}

export interface ShoppingCart {
  amountBreakdown?: AmountBreakdown[] | null;
  giftCardPurchase?: GiftCardPurchase | null;
  isPreOrder?: boolean | null;
  items?: LineItem[] | null;
  preOrderItemAvailabilityDate?: string | null;
  reOrderIndicator?: boolean | null;
}

export interface ThirdPartyData {
  paymentProduct863?: PaymentProduct863ThirdPartyData | null;
}

export interface ThreeDSecure extends AbstractThreeDSecure {
  externalCardholderAuthenticationData?: ExternalCardholderAuthenticationData | null;
  redirectionData?: RedirectionData | null;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ThreeDSecureBase extends AbstractThreeDSecure {}

export interface ThreeDSecureData {
  acsTransactionId?: string | null;
  method?: string | null;
  utcTimestamp?: string | null;
}

export interface ThreeDSecureResults {
  acsTransactionId?: string | null;
  appliedExemption?: string | null;
  authenticationAmount?: AmountOfMoney | null;
  cavv?: string | null;
  directoryServerTransactionId?: string | null;
  eci?: string | null;
  exemptionOutput?: ExemptionOutput | null;
  schemeRiskScore?: number | null;
  sdkData?: SdkDataOutput | null;
  threeDSecureData?: ThreeDSecureData | null;
  threeDSecureVersion?: string | null;
  threeDServerTransactionId?: string | null;
  xid?: string | null;
}

export interface TrustlyBankAccount {
  accountLastDigits?: string | null;
  bankName?: string | null;
  clearinghouse?: string | null;
  personIdentificationNumber?: string | null;
}
