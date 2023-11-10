// *** ROOT COMMENT *** //
// Currently this file escapes global classes, methods and libraries for which types are not available.
// This prevents red squiggles in the code editor.
// More types are in the process of being added.

enum RequesteeType {
  ApiKey = 'api_key',
  User = 'user',
  LegacyApiKey = 'legacy_api_key',
  LegacyUserApiKey = 'legacy_user_api_key',
  System = 'system',
  ProductModule = 'product_module',
}

interface JSONRequestee {
  type: RequesteeType;
  id?: string;
  owner_id?: string;
}

enum Gender {
  Male = 'male',
  Female = 'female',
}

interface Identification {
  type: IdentificationType;
  number: string;
  country: string;
  expiration_date?: Moment;
}

enum Title {
  Mr = 'mr',
  Mrs = 'mrs',
  Miss = 'miss',
  Mx = 'mx',
  Sir = 'sir',
  Dr = 'dr',
  Adv = 'adv',
  Ms = 'ms',
  Prof = 'prof',
}

enum EntityType {
  Individual = 'individual',
  Company = 'company',
}

enum BeneficiaryRelationship {
  MainMember = 'main_member',
  Spouse = 'spouse',
  Parent = 'parent',
  Son = 'son',
  Daughter = 'daughter',
  AuntOrUncle = 'aunt_or_uncle',
  Grandparent = 'grandparent',
  CousinRelative = 'cousin_or_relative',
  Brother = 'brother',
  Sister = 'sister',
  Employer = 'employer',
  Policyholder = 'policyholder',
  CreditProvider = 'credit_provider',
  Cessionary = 'cessionary',
  Estate = 'estate',
  Trust = 'trust',
  GuardianFund = 'guardian_fund',
  FuneralParlour = 'funeral_parlour',
  SonInLaw = 'son_in_law',
  DaughterInLaw = 'daughter_in_law',
  MotherInLaw = 'mother_in_law',
  FatherInLaw = 'father_in_law',
  Grandchild = 'grandchild',
  NieceOrNephew = 'niece_or_nephew',
  Other = 'other',
}

enum PaymentType {
  EFT = 'eft',
  Card = 'card',
}

enum AccountType {
  Cheque = 'cheque_account',
  Savings = 'savings_account',
}

enum PolicyStatus {
  PendingInitialPayment = 'pending_initial_payment',
  NotTakenUp = 'not_taken_up',
  Cancelled = 'cancelled',
  Active = 'active',
  Lapsed = 'lapsed',
  Expired = 'expired',
}

enum PolicyCancellationRequestor {
  Insurer = 'insurer',
  Client = 'client',
}

enum PolicyClientCancellationOptions {
  TooExpensive = 'Too expensive',
  AlternateProduct = 'Alternate product',
  UnhappyWithService = 'Unhappy with service',
  UnhappyWithBenefits = 'Unhappy with benefits',
  FinancialConstraints = 'Financial constraints',
  Retrenched = 'Retrenched',
  Unemployed = 'Unemployed',
  leavingTheCountry = 'Leaving the country',
  Other = 'Other',
}

enum PolicyInsurerCancellationOptions {
  CoolingOffPeriod = 'Cooling off period',
  DishonestClient = 'Dishonest client',
  AlteredRiskProfile = 'Altered risk profile',
  PolicyClaimed = 'Policy claimed',
}

enum ClaimStatus {
  Open = 'open',
  InReview = 'in_review',
  Acknowledged = 'acknowledged',
  PendingPayout = 'pending_payout',
  PaidOut = 'paid_out',
  Closed = 'closed',
}

enum ClaimApprovalStatus {
  Pending = 'pending',
  Approved = 'approved',
  Repudiated = 'repudiated',
  NoClaim = 'no_claim',
  Goodwill = 'goodwill',
}

enum PaymentStatus {
  Pending = 'pending',
  Submitted = 'submitted',
  Processing = 'processing',
  Failed = 'failed',
  Successful = 'successful',
  Cancelled = 'cancelled',
}

enum PaymentType {
  Premium = 'premium',
  Reversal = 'reversal',
  ClaimPayout = 'claim_payout',
  PremiumRefund = 'premium_refund',
  Other = 'other',
}

enum PaymentPremiumType {
  Recurring = 'recurring',
  Arrears = 'arrears',
  AdHoc = 'ad_hoc',
  ProRata = 'pro_rata',
  CoverPeriod = 'cover_period',
}

enum PaymentCollectionType {
  DebitOrderSameDay = 'debit_order_same_day',
  DebitOrderTwoDay = 'debit_order_two_day',
  DebitOrderOneDay = 'debit_order_one_day',
  DebitOrderNaedo = 'debit_order_naedo',
  DebitOrderDebiCheck = 'debit_order_debicheck',
  RealTimeClearing = 'real_time_clearing',
  RealTimeLine = 'real_time_line',
  Card = 'card',
  External = 'external',
  Other = 'other',
}

export enum PaymentCouponStatus {
  Pending = 'pending',
  Redeemed = 'redeemed',
  Cancelled = 'cancelled',
  Reversed = 'reversed',
}

export enum PaymentCouponType {
  Adhoc = 'ad_hoc',
  PaymentHoliday = 'payment_holiday',
}

interface Address {
  google_place_id?: string;
  geo_coordinates_latitude?: string;
  geo_coordinates_longitude?: string;
  line_1: string;
  line_2?: string;
  suburb?: string;
  city: string;
  country: string;
  area_code: string;
}

interface PaymentDetails {
  type: PaymentType;
  details: {
    bank_name: string;
    branch_code: string;
    account_type: AccountType;
    account_number: string;
  };
}

interface Beneficiary {
  beneficiary_id: string;
  policyholder_id?: string;
  first_name?: string;
  last_name?: string;
  gender?: Gender;
  id?: Identification;
  title?: Title;
  /** Date of birth in 'YYYYMMDD' format. */
  date_of_birth?: string;
  percentage: number;
  cellphone?: string;
  email?: string;
  company_name?: string;
  type?: EntityType;
  registration_number?: string;
  payment_details?: PaymentDetails;
  relationship: BeneficiaryRelationship;
}

class QuotePackageWithoutConstructor {
  /**
   * The package name.
   */
  package_name: string;

  /**
   * Must be an integer. The maximum insured value in cents.
   */
  sum_assured?: number;

  /**
   * Must be an integer. The combined risk and platform fee in cents.
   */
  base_premium: number;

  /**
   * Must be an integer. The suggested `monthly_premium` amount in cents. This is the total premium for display to the customer.
   */
  suggested_premium?: number;

  /**
   * Custom, product-specific information saved to the quote for later reference.
   */
  module: { [k: string]: any };

  /**
   * The frequency at which premium payments will be collected. See the [billing settings](https://docs.rootplatform.com/docs/billing-settings#billing-frequency) guide for more details.
   */
  billing_frequency?: 'yearly' | 'monthly' | 'once_off';

  /**
   * Should be set equal to the quote fields as received over the API (the `data` parameter of the `getQuote` function), unchanged and without any additional fields.
   */
  input_data?: { [key: string]: any };
}

class ApplicationWithoutConstructor {
  /**
   * The package name.
   */
  package_name: string;

  /**
   * Must be an integer. The maximum insured value in cents.
   */
  sum_assured?: number;

  /**
   * Must be an integer. The combined risk and platform fee in cents.
   */
  base_premium: number;

  /**
   * Must be an integer. The total monthly premium, in cents, of the application. This is the total premium that will be billed to the policyholder after the policy is issued.
   */
  monthly_premium: number;

  /**
   * Must be a string. The billing frequency on the policy
   */
  billing_frequency?: 'yearly' | 'monthly' | 'once_off';

  /**
   * Custom, product-specific information stored against the application for later reference. Typically, at least the rating factors received at the quote stage (stored in the module object of the quote package) will be carried over and included in the application module.
   */
  module: { [key: string]: any };

  /**
   * Should be set equal to the application fields received over the API (the `data` parameter of the `getApplication` function), unchanged and without any additional fields.
   */
  input_data?: { [key: string]: any };

  /**
   * @deprecated Covered items are no longer supported by the Root platform.
   */
  covered_items?: any[];
}

interface Charge {
  /**
   * One of  `[variable, fixed, balance]`.
   * Variable charges are applied as a proportion of the total payment amount.
   * Fixed charges are applied as an absolute currency value in cents.
   * The `balance` is the balance of the payment total after all charges have been applied.
   */
  type: 'fixed' | 'variable' | 'balance';

  /**
   * The name of the charge.
   */
  name: string;

  /**
   * The description of the charge.
   */
  description?: string;

  /**
   * The charged amount. Required when type is `fixed` or `variable`, forbidden otherwise.
   * Either a proportion of the total premium (if `type` is `variable`),
   * or a currency amount in cents (if `type` is `fixed`).
   */
  amount?: number;

  /**
   * @deprecated Specifying the calculated amount here will have no effect
   */
  calculated?: number;
}

interface PaymentCharge extends Charge {
  /** The final charge amount calculated from the payment amount (integer in cents). */
  calculated: number;
}

class BasePolicy {
  /**
   * The package name.
   */
  package_name: string;

  /**
   * Must be an integer. The maximum insured value in cents.
   */
  sum_assured: number;

  /**
   * Must be an integer. The combined risk and platform fee in cents.
   */
  base_premium: number;

  /**
   * Must be an integer. The total monthly premium, in cents, that will be billed to the policyholder.
   */
  monthly_premium: number;

  /**
   * Custom, product-specific fields stored against the policy.
   * These fields can be referenced in policy documents, data exports and external integrations.
   */
  module: { [key: string]: any };

  /**
   * Whenever a premium payment is created (including reversals),
   * a breakdown of the payment amount is calculated according to the charges stored on the policy.
   * This allows the premium breakdown to be referenced in policy documents and disclosures,
   * and in the policy's payment data.
   *
   * See the [policy issue hook](https://docs.rootplatform.com/docs/policy-issue-hook#charges-and-commissions) guide for more details.
   */
  charges?: Charge[];
}

class PolicyWithoutConstructor extends BasePolicy {
  /**
   * Once the policy reaches its start date, cover commences
   * and regular collection attempts can run against the policy (provided it has an `active` status).
   * See the [Managing policies](https://docs.rootplatform.com/docs/policy-administration#policy-lifecycle) guide for more details.
   *
   * We recommend using an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string.
   */
  start_date: string | moment.Moment;

  /**
   * When the policy reaches its end date, its status will change to `expired`.
   * Cover and collections will cease. Policies with no end date do not expire.
   *
   * We recommend using an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string.
   */
  end_date?: string | moment.Moment | null;

  /**
   * @deprecated Covered items are no longer supported by the Root platform.
   */
  covered_items?: any[];

  /**
   * @deprecated Group policies are no longer supported by the Root platform.
   */
  members?: any[];

  /**
   * @deprecated Specifying the billing day here will have no effect.
   */
  billing_day?: number;

  /**
   * @deprecated Specifying the beneficiaries here will have no effect.
   */
  beneficiaries?: any[];

  /**
   * @deprecated Specifying the policy number here will have no effect.
   */
  policy_number?: string;
}

class AlterationPackageWithoutConstructor {
  /**
   * Must be an integer. The maximum insured value in cents.
   */
  sum_assured: number;

  /**
   *  Must be an integer. The total monthly premium, in cents, that will be displayed to the policyholder on the alteration package.
   */
  monthly_premium: number;

  /**
   * A description of the change to the policy.
   */
  change_description: string;

  /**
   * Must be a string. The billing frequency on the policy
   */
  billing_frequency?: 'yearly' | 'monthly' | 'once_off';

  /**
   * Custom, product-specific fields stored against the alteration package.
   * These fields can be referenced later by the `applyAlteration` function.
   */
  module: { [k: string]: any };

  /**
   * Should be set equal to the input parameters as received over the API (the `data` parameter of the `getAlteration` function),
   * unchanged and without any additional fields.
   */
  input_data: { [k: string]: any };
}

class ReactivationOptionWithoutConstructor {
  /**
   * The name of the reactivation option as it will appear on the dashboard,
   * and which must be passed to the [reactivate policy](https://docs.rootplatform.com/reference/reactivate-1) endpoint.
   */
  type: string;

  /**
   * The description of the reactivation option as it will appear on the dashboard.
   */
  description: string;

  /**
   * Whether reactivation is only allowed if the (negative) balance on the policy falls below a minimum absolute amount.
   *
   * If set to false, all policies can be reactivated irrespective of the arrears amount outstanding.
   */
  minimumBalanceRequired?: boolean;

  /**
   * Required if `minimumBalanceRequired` is `true`. Must be a positve integer.
   * The amount, in cents, that must be settled by the customer to allow the policy to be reactivated.
   * @example <caption>Example of requiring a `settlementAmount` equal to the policy balance, which will be negative if the policy is in arrears:</caption>
   * settlementAmount: policy.balance < 0 ? -policy.balance : 0;
   */
  settlementAmount?: number;
}

interface UpdatePolicyAction {
  name: 'update_policy';
  data: {
    /** The updated `monthly_premium` in cents. Must be an integer greater or equal to zero. */
    monthlyPremium?: number;
    /** The updated `base_premium` Must be an integer greater or equal to zero. */
    basePremium?: number;
    /** @deprecated Do not use this property */
    billingAmount?: number;
    /** The updated `sum_assured` in cents. Must be an integer greater or equal to zero. */
    sumAssured?: number;
    /** The updated `billing_day`. Must be an integer between `1` and `31` inclusive. */
    billingDay?: number;
    /** This will replace the entire module object on the policy. */
    module?: Record<string, any>;
  };
}

interface DebitPolicyAction {
  name: 'debit_policy';
  /** The amount to debit the policy in cents. Must be an integer greater or equal to zero. */
  amount: number;
  /** The description for the ledger entry. */
  description?: string;
}

interface CreditPolicyAction {
  name: 'credit_policy';
  /** The amount to credit the policy in cents. Must be an integer greater or equal to zero. */
  amount: number;
  /** The description for the ledger entry. */
  description?: string;
}

interface ActivatePolicyAction {
  name: 'activate_policy';
}

interface LapsePolicyAction {
  name: 'lapse_policy';
}

interface MarkPolicyNotTakenUpAction {
  name: 'mark_policy_not_taken_up';
}

interface TriggerCustomNotificationEventAction {
  name: 'trigger_custom_notification_event';
  /** The key of the custom notification event to trigger. */
  custom_event_key: string;
  /** The type of the custom notification event. */
  custom_event_type: 'policy' | 'payment' | 'payment_method' | 'claim';
  /**
   * The UUID of the policy for which to trigger the notification.
   * Required if `custom_event_type` is `policy` or `payment_method`, forbidden otherwise.
   */
  policy_id?: string;
  /**
   * The UUID of the payment for which to trigger the notification.
   * Required if `custom_event_type` is `payment`, forbidden otherwise.
   */
  payment_id?: string;
  /**
   * The UUID of the claim for which to trigger the notification.
   * Required if `custom_event_type` is `claim`, forbidden otherwise.
   */
  claim_id?: string;
}

declare global {
  /**
   * The quote package, or array of quote packages, returned by the `getQuote` function is saved to the platform,
   * and then returned over the [create a quote](https://docs.rootplatform.com/reference/getting-a-quote-2) endpoint.
   *
   * Quote packages are designed to be low-fidelity and fast to generate,
   * and are used to generate and display new quotes rapidly on a customer-facing front-end.
   * They expire after one week.
   *
   * See the [issing policies](https://docs.rootplatform.com/docs/policy-issuing) guide and the [quote hook](https://docs.rootplatform.com/docs/quote-hook) guide for more details.
   */
  class QuotePackage extends QuotePackageWithoutConstructor {
    constructor(init: QuotePackageWithoutConstructor) {
      Object.assign(this, init);
    }
  }

  interface PlatformQuotePackage extends QuotePackageWithoutConstructor {
    /** The unique identifier of the quote package. */
    quote_package_id: string;
    /** The unique identifier of the product module definition used to create the quote. */
    product_module_definition_id: string;
    /** ISO date indicating when the quote package was created. */
    created_at: string;
    /** Three-digit currency code (e.g. `USD`) indicating the currency in which the policy will be billed. */
    currency: string;
  }

  interface PlatformPolicyholder {
    /** The unique identifier of the policyholder. */
    policyholder_id: string;
    /** Whether the policyholder is an individual or a company. */
    type: EntityType;
    initials?: string;
    first_name: string;
    middle_name?: string;
    last_name: string;
    company_name?: string;
    registration_number?: string;
    /** Date of establishment in 'YYYYMMDD' format. */
    date_of_establishment?: string;
    company_website_url?: string;
    contact_position?: string;
    subsidiary_companies?: string;
    id: Identification;
    email?: string;
    cellphone: string | null;
    phone_other: string | null;
    /** Date of birth in 'YYYYMMDD' format. */
    date_of_birth?: string;
    gender?: string;
    title?: Title;
    /** ISO date indicating when the policyholder was created. */
    created_at: string;
    /** Free-form object field for storing custom data. Typically used for integrations. */
    app_data: Record<string, any> | null;
    /** Array of policies linked to the policyholder */
    policy_ids: string[];
    created_by: JSONRequestee;
    /** The policyholder's physical address. */
    address?: Address;
    /** ISO date indicating when the policyholder was last updated. */
    updated_at: string;
  }

  /**
   * The application returned by the `getApplication` function is saved to the platform,
   * and then returned over the [create an application](https://docs.rootplatform.com/reference/create-an-application) endpoint.
   *
   * An application represents a "draft" policy, with all information captured and validated.
   * Applications persist on Root (they do not expire), and can be reviewed and managed on the Root management dashboard.
   *
   * See the [issing policies](https://docs.rootplatform.com/docs/policy-issuing) guide and the [application hook](https://docs.rootplatform.com/docs/application-hook) guide for more details.
   */
  class Application extends ApplicationWithoutConstructor {
    constructor(init: ApplicationWithoutConstructor) {
      Object.assign(this, init);
    }
  }

  interface PlatformApplication extends ApplicationWithoutConstructor {
    /** The unique identifier of the application. */
    application_id: string;
    /** The unique identifier of the policyholder linked to the application. */
    policyholder_id: string;
    /** The unique identifier of the quote package linked to the application. */
    quote_package_id: string;
    /** The unique identifier of the product module definition linked to the application. */
    product_module_definition_id: string;
    /** ISO date indicating when the application was created. */
    created_at: string;
    /** The user or API key that created the application. */
    created_by: JSONRequestee;
    /** Three-digit currency code (e.g. `USD`) indicating the currency in which the policy will be billed. */
    currency: string;
    /** The unique identifier of the payment method linked to the application. */
    payment_method_id?: string;
    /** The frequency at which premium payments will be collected. */
    billing_frequency: 'yearly' | 'monthly' | 'once_off';
    /** (Yearly billing only) The month in which the policy will be billed. */
    billing_month?: number;
    /** The day of the month the policy will be billed. */
    billing_day?: number;
    /** Whether the application is `pending` or `issued`. */
    status: 'pending';
    /** Beneficiaries added to the application */
    beneficiaries?: Beneficiary[];
    /** @deprecated */
    type?: 'requote' | 'new_policy';
  }

  /**
   * The policy object returned by the `getPolicy` function is saved to the platform,
   * and returned over the [issue a policy](https://docs.rootplatform.com/reference/issue-a-policy-1) endpoint.
   *
   * A policy represents a binding insurance agreement.
   * Parameters stored on the policy can be referenced in custom notifications,
   * policy documents, data exports and external integrations.
   *
   * See the [issing policies](https://docs.rootplatform.com/docs/policy-issuing) guide and the [policy issue hook](https://docs.rootplatform.com/docs/policy-issue-hook) guide for more details.
   */
  class Policy extends PolicyWithoutConstructor {
    constructor(init: PolicyWithoutConstructor) {
      Object.assign(this, init);
    }
  }

  interface PlatformPolicy extends PolicyWithoutConstructor {
    /** The unique identifier of the policy. */
    policy_id: string;
    /** @deprecated */
    scheme_type: 'individual';
    /** ISO date indicating when the policy was created. */
    created_at: string;
    /** The user or API key that created the policy. */
    created_by: JSONRequestee;
    /** A human-readable policy identifier. */
    policy_number: string;
    /** The unique identifier of the policyholder linked to the policy. */
    policyholder_id: string;
    /**  The amount, in cents, that will be billed on the next billing run. */
    billing_amount: number;
    /** The frequency at which premium payments will be collected. */
    billing_frequency: 'yearly' | 'monthly' | 'once_off';
    /** (Yearly billing only) The month in which the policy will be billed. */
    billing_month?: number;
    /** The day of the month the policy will be billed. */
    billing_day?: number;
    /** ISO date indicating the next date the policy premium will be raised. */
    next_billing_date?: string;
    /** ISO date indicating the next date the policy premium will be collected. */
    next_collection_date?: string;
    /** ISO date indicating when cover and billing start. */
    start_date: string;
    /** ISO date indicating when the policy will expire. */
    end_date: string | null;
    /** ISO date indicating when the policy was cancelled. */
    cancelled_at: string | null;
    /** Reason policy was cancelled */
    reason_cancelled: string | null;
    /** Free-form object field for storing custom data. Typically used for integrations. */
    app_data: Record<string, any> | null;
    /** The unique identifier of the product module used to issue the policy. */
    product_module_id: string;
    /** The unique identifier of the product module definition used to issue the policy. */
    product_module_definition_id: string;
    /** Beneficiaries added to the policy. */
    beneficiaries?: Beneficiary[];
    schedule_versions: { version: number; created_at: string }[];
    current_version: number | null;
    terms_uri: string;
    policy_schedule_uri: string;
    policy_welcome_letter_uri: string;
    policy_certificate_uri: string;
    /** Array of unique identifiers of the claims opened against the policy. */
    claim_ids: string[];
    /** Array of unique identifiers of the complaints opened against the policy. */
    complaint_ids: string[];
    /** The policy status. See the [managing policies](https://docs.rootplatform.com/docs/policy-administration#policy-lifecycle) guide. */
    status: PolicyStatus;
    /** The balance on the policy ledger in cents. */
    balance: number;
    /** Three-digit currency code (e.g. `USD`) indicating the currency in which the policy is billed. */
    currency: string;
    /** The unique identifier of the payment method linked to the policy. */
    payment_method_id?: string;
    /** ISO date indicating when the policy status was last updated. */
    status_updated_at: string;
    /** ISO date indicating when the policy was last updated. */
    updated_at: string;
    /** @deprecated */
    covered_people: any[];
    /** The unique identifier of the applications used to issue the policy. */
    application_id?: string;
    cancellation_requestor?: PolicyCancellationRequestor;
    cancellation_type?: PolicyClientCancellationOptions | PolicyInsurerCancellationOptions;
    /** Array of charges applied as a breadkdown to any premium payments. */
    charges: Charge[];
    /** The unique identifier of the DebiCheck mandate linked to the policy. */
    debicheck_mandate_id?: string;
  }

  interface PlatformClaim {
    /** The unique identifier of the claim. */
    claim_id: string;
    /** Human readable claim identifier. */
    claim_number: string;
    /** ISO date indicating when the claim was created. */
    created_at: string;
    /** Indicates at what stage of the process the claim is between being opened and finalized. */
    claim_status: ClaimStatus;
    claimant: {
      first_name?: string;
      last_name?: string;
      id_number?: string;
      cellphone?: string;
      email?: string;
      relationship?: string;
    } | null;
    /** Relates to the outcome of the claim assessment. */
    approval_status: ClaimApprovalStatus;
    /** The unique identifier of the policy linked to the claim. */
    policy_id?: string;
    /** @deprecated */
    member_id?: string;
    /** @deprecated */
    covered_item_id?: string;
    /** The unique identifier of the policyholder linked to the claim. */
    policyholder_id?: string;
    /** @deprecated Use claims blocks instead */
    incident_type?: string;
    /** @deprecated Use claims blocks instead */
    incident_cause?: string;
    /** @deprecated Use claims blocks instead */
    incident_date?: string;
    /** Free-form object field for storing custom data. Typically used for integrations. */
    app_data?: Record<string, any>;
    /** @deprecated Use claims blocks instead */
    module_data?: string;
    /** @deprecated Use claims blocks instead */
    requested_amount?: string;
    /** @deprecated Use claims blocks instead */
    granted_amount?: string;
    rejection_reason?: string;
    /** The user or API key that created the claim. */
    created_by: JSONRequestee;
    /** Three-digit currency code (e.g. `USD`) indicating the currency in which the claim is to be paid out. */
    currency: string;
    /** ISO date indicating when the claim was last updated. */
    updated_at: string;
    /** @deprecated */
    member: string;
    /**
     * Used to store custom claim data.
     * Configured per product module as part of the [claims workflow](https://docs.rootplatform.com/docs/claims-workflow).
     */
    block_states?: Record<string, any>;
  }

  /**
   * Defining the reactivation options allows you to configure how the [reactivate policy](https://docs.rootplatform.com/reference/reactivate-1) endpoint will work for your product. These reactivation options will be displayed on the Root management dashboard.
   *
   * See the [reactivation hook](https://docs.rootplatform.com/docs/reactivation-hook) guide for more details.
   */
  class ReactivationOption extends ReactivationOptionWithoutConstructor {
    constructor(init: ReactivationOptionWithoutConstructor) {
      Object.assign(this, init);
    }
  }

  /**
   * The alteration package returned by the `getAlteration` function is saved to the platform
   * and then returned over the [create an alteration package](https://docs.rootplatform.com/reference/create-an-alteration-package-1) endpoint.
   *
   * The alteration package serves as a preview, for review by the policyholder,
   * of the changes to be applied to the policy.
   *
   * See the [alteration hooks](https://docs.rootplatform.com/docs/alteration-hooks) guide for more details.
   */
  class AlterationPackage extends AlterationPackageWithoutConstructor {
    constructor(init: AlterationPackageWithoutConstructor) {
      Object.assign(this, init);
    }
  }

  interface PlatformAlterationPackage extends AlterationPackageWithoutConstructor {
    /** The unique identifier of the alteration package. */
    alteration_package_id: string;
    /** The unique identifier of the organisation to which the alteration package belongs. */
    organisation_id: string;
    /** ISO date indicating when the alteration package was created. */
    created_at: string;
    /** The user or API key that created the alteration package. */
    created_by: JSONRequestee;
    /** Three-digit currency code (e.g. `USD`). */
    currency: string;
    status: 'pending';
    product_module_definition_id: string;
    /** The unique identifier of the policy to which the alteration package is to be applied. */
    policy_id: string;
    product_module_definition_alteration_hook_id: string;
    alteration_hook?: {
      product_module_definition_alteration_hook_id: string;
      product_module_definition_id: string;
      schema_id: string;
      key: string;
      name: p.name;
      created_at: string;
      created_by: JSONRequestee;
    };
  }

  /**
   * The parameters included on the altered policy object
   * will be applied to as changes to the policy by the Root platform.
   *
   * This object is not returned from the [apply alteration package](https://docs.rootplatform.com/reference/apply-alteration-package-1) endpoint. Instead, the alteration package is returned with a status of `applied`.
   *
   * See the [alteration hooks](https://docs.rootplatform.com/docs/alteration-hooks) guide for more details.
   */
  class AlteredPolicy extends BasePolicy {
    /**
     * Defaults to the existing policy start date.
     * The policy start date can only be changed using an alteration hook
     * if both the existing start date and the new start date are in the future.
     *
     * We recommend using an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string.
     */
    start_date?: string | moment.Moment;
    /**
     * Defaults to the existing policy end date. When the policy reaches its end date,
     * its status will change to `expired`. Cover and collections will cease.
     * Policies with no end date do not expire.
     *
     * We recommend using an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted string.
     */
    end_date?: string | moment.Moment | null;

    /**
     * Defaults to the existing billing frequency
     * Must be a string. The billing frequency on the policy
     */
    billing_frequency?: 'yearly' | 'monthly' | 'once_off';

    /**
     * @deprecated This parameter will have no effect.
     */
    input_data?: { [k: string]: any };

    constructor(init: AlteredPolicy) {
      Object.assign(this, init);
    }
  }

  type ProductModuleAction =
    | UpdatePolicyAction
    | DebitPolicyAction
    | CreditPolicyAction
    | ActivatePolicyAction
    | LapsePolicyAction
    | MarkPolicyNotTakenUpAction
    | TriggerCustomNotificationEventAction;

  interface PlatformPayment {
    /** The unique identifier of the payment. */
    payment_id: string;
    /** The unique identifier of the policy linked to the payment. */
    policy_id: string;
    /** The unique identifier of the payment method used to make the payment. */
    payment_method_id: string;
    status: PaymentStatus;
    /** The amount of the payment (integer in cents). */
    amount: string;
    description?: string;
    /** Unique external reference of the payment. */
    external_ref?: string;
    /** Customer reference for the payment */
    customer_ref?: string;
    /** ISO date indicating when the payment was created. */
    created_at: string;
    /** The user or API key that created the payment. */
    created_by: JSONRequestee;
    /** ISO date indicating when the payment was last updated. */
    updated_at: string;
    /**
     * ISO date. The target date for the payment to go off the customer’s card or bank account.
     * Typically the same as `billing_date`,
     * but may be earlier or later if `billing_date` falls on a bank holiday or Sunday.
     */
    payment_date: string;
    /** ISO date. The date that the system first attempts to collect the payment from the customer's card or bank account.
     * Typically the same as the `payment_date`, but can be earlier for certain payment methods.
     */
    action_date: string;
    /** The customer's chosen payment date, as specified by the `billing_day` property on the policy. */
    billing_date: string;
    payment_type: PaymentType;
    premium_type?: PaymentPremiumType;
    failure_reason?: string;
    /** The unique identifier of the payment that this payment is a retry of. */
    retry_of?: string;
    /** Three-digit currency code (e.g. `USD`). */
    currency: string;
    /** The number of times the payment has been retried (including the current retry payment). */
    retry_number: number | null;
    /** The payment amount net of any charges. */
    net_amount?: number;
    finalized_at?: string;
    finalized_by?: JSONRequestee;
    collection_type?: PaymentCollectionType;
    payment_batch_id?: string;
    /** The unique identifier of the payment that this payment is a reversal of. */
    reversal_of_payment_id?: string;
    naedo_tracking_days?: string[];
    /** Free-form object field for storing custom data. Typically used for integrations. */
    app_data: Record<string, any> | null;
    charges: PaymentCharge[];
    raw_response: Record<string, any> | null;
  }

  interface PaymentCouponInsert {
    /**
     * Payment coupons of type `payment_holiday` are redeemed in lieu of one recurring premium payment.
     * `ad_hoc` payment coupons directly credit the policy ledger with the specified amount.
     */
    type: string;
    /** ISO date. Required if the payment coupon is of type `payment_holiday`. */
    redeemable_from?: string;
    /** ISO date. Required if the payment coupon is of type `payment_holiday`. */
    redeemable_to?: string;
    /** Required if the payment coupon is of type `ad_hoc`. */
    amount?: number;
    reason?: string;
  }

  interface PlatformPaymentCoupon extends PaymentCouponInsert {
    /** The unique identifier of the payment coupon. */
    payment_coupon_id: string;
    /** The unique identifier of the policy linked to the payment coupon. */
    policy_id: string;
    status: PaymentCouponStatus;
    /** ISO date. The date the payment coupon was redeemed. */
    payment_date?: string;
    /** ISO date. The `billing_date` of the payment that the payment coupon was redeemed in lieu of. */
    billing_date?: string;
    /** ISO date. The date the payment coupon was created. */
    created_at: string;
    /** The user or API key that created the payment coupon. */
    created_by: JSONRequestee;
  }

  interface BillingChange {
    /** Whether the new start date will be applied to the policy immediately, or deferred to a later date. */
    defer_update: boolean;
    /** ISO date. The date on which the start date change will be applied, if the update is deferred. */
    defer_update_until?: string;
    /** The new policy billing day. */
    billing_day?: number;
    /** (Annual policies only) The new policy billing month. */
    billing_month?: number;
    /** ISO date. The new policy start date. */
    start_date: string;
    ledger_adjustments: Array<{
      /** The unique identifier of the policy linked to the ledger adjustment. */
      policy_id: string;
      /** The unique identifier of organization the policy belongs to. */
      organization_id: string;
      environment: 'sandbox' | 'production';
      /** The amount of the ledger adjustment (integer in cents). */
      amount: number;
      description?: string;
      /** Three-digit currency code (e.g. `USD`). */
      currency: string;
      data_import_id?: string;
      /** The resulting policy balance after the ledger adjustment (integer in cents). */
      balance?: number;
    }>;
    /** The policy balance (integer in cents). */
    current_balance: number;
    /** The policy's monhtly premium (integer in cents). */
    monthly_premium: number;
  }

  /**
   * @deprecated Use [alteration hooks](https://docs.rootplatform.com/docs/alteration-hooks) instead.
   */
  class RequotePolicy {
    constructor(init: any) {
      Object.assign(this, init);
    }
  }

  /**
   * @deprecated Throw a standard JavaScript Error instead.
   */
  class InvalidRequestError extends Error {
    constructor(message) {
      super();
      this.name = this.constructor.name;
      this.message = message;
    }
  }

  /**
   * @deprecated Throw a standard JavaScript Error instead.
   */
  class ValidationError extends Error {
    constructor(fields) {
      super();
      this.name = this.constructor.name;
      this.message = 'Validation failed';
      this.fields = fields;
    }
  }

  // Root SDK methods
  var root: any;

  // Root helpers
  var createUuid: any;

  /**
   * @deprecated The Root platform will automatically generate a unique policy number.
   */
  var generatePolicyNumber: any;

  // External libraries
  var Joi: any;
  var fetch: any;
  var momentTimezone: any;

  // Node built-ins
  var Buffer: any;
  var process: {
    env: {
      ENVIRONMENT: string;
      ORGANIZATION_ID: string;
      ORGANIZATION_TIMEZONE: string;
    };
  };
}

export {};
