/**
 * Subscription-related Enums
 * Used across subscription and related services
 */

/**
 * Subscription Status
 */
export enum SubscriptionStatus {
  PENDING = 'Pending',
  TRIAL = 'Trial',
  ACTIVE = 'Active',
  EXPIRED = 'Expired',
  CANCELED = 'Canceled',
  SUSPENDED = 'Suspended',
}

/**
 * Subscription Renewal Type
 */
export enum RenewalType {
  MANUAL = 'Manual',
  AUTO_RENEW = 'Auto-Renew',
}

/**
 * Subscription Plan Type
 */
export enum PlanType {
  TRIAL = 'Trial',
  BASIC = 'Basic',
  STANDARD = 'Standard',
  PREMIUM = 'Premium',
  ENTERPRISE = 'Enterprise',
}

/**
 * Plan Category
 * Categorizes subscription plans for better organization and filtering
 */
export enum PlanCategory {
  BASIC = 'basic',           // Entry-level plans for small schools/tutors
  STANDARD = 'standard',     // Standard plans for medium-sized institutions
  PREMIUM = 'premium',       // Premium plans with advanced features
  ENTERPRISE = 'enterprise', // Enterprise plans for large organizations
  TRIAL = 'trial',          // Trial plans for new users
  CUSTOM = 'custom',        // Custom plans tailored to specific needs
  STUDENT = 'student',      // Plans specifically for students
  EDUCATOR = 'educator',     // Plans for individual educators/tutors
}

/**
 * User Status (for subscription service)
 */
export enum UserStatus {
  ACTIVE = 'Active',
  INACTIVE = 'Inactive',
  SUSPENDED = 'Suspended',
  PENDING_VERIFICATION = 'PendingVerification',
}

/**
 * User Type (for subscription service)
 */
export enum UserType {
  STAFF = 'Staff',
  STUDENT = 'Student',
  EXTERNAL = 'ExternalLearner',
}

/**
 * External Learning Subscription Status
 */
export enum ExternalSubscriptionStatus {
  ACTIVE = 'Active',
  EXPIRED = 'Expired',
  CANCELED = 'Canceled',
}

/**
 * Course Category (for advance learning courses)
 */
export enum CourseCategory {
  MATHEMATICS = 'Mathematics',
  SCIENCE = 'Science',
  PROGRAMMING = 'Programming',
  LANGUAGES = 'Languages',
  ARTS = 'Arts',
  BUSINESS = 'Business',
  EXAM_PREP = 'Exam Preparation',
  SKILL_DEVELOPMENT = 'Skill Development',
}

/**
 * Course Level (for advance learning courses)
 */
export enum CourseLevel {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced',
  EXPERT = 'Expert',
}

/**
 * School Status
 */
export enum SchoolStatus {
  PROSPECT = 'Prospect',
  ACTIVE = 'Active',
  SUSPENDED = 'Suspended',
  INACTIVE = 'Inactive',
}

/**
 * Staff Role
 */
export enum StaffRole {
  ADMIN = 'admin',
  TEACHER = 'teacher',
  PRINCIPAL = 'principal',
  VICE_PRINCIPAL = 'vice_principal',
  COORDINATOR = 'coordinator',
  ACCOUNTANT = 'accountant',
  LIBRARIAN = 'librarian',
  LAB_ASSISTANT = 'lab_assistant',
  SUPPORT_STAFF = 'support_staff',
}

/**
 * API Key Status
 */
export enum ApiKeyStatus {
  ACTIVE = 'Active',
  REVOKED = 'Revoked',
  EXPIRED = 'Expired',
}

/**
 * Payment Status (subscription service specific - lowercase values)
 * Note: PaymentStatus with uppercase values exists in payment.enum.ts
 */
export enum SubscriptionPaymentStatus {
  INITIATED = 'initiated',
  PENDING = 'pending',
  SUCCESS = 'success',
  FAILED = 'failed',
  REFUNDED = 'refunded',
  PARTIALLY_REFUNDED = 'partially_refunded',
}

/**
 * Payment Method (subscription service specific - lowercase values)
 * Note: PaymentMethod with uppercase values exists in payment.enum.ts
 */
export enum SubscriptionPaymentMethod {
  CREDIT_CARD = 'credit_card',
  DEBIT_CARD = 'debit_card',
  NET_BANKING = 'net_banking',
  UPI = 'upi',
  WALLET = 'wallet',
  BANK_TRANSFER = 'bank_transfer',
  CASH = 'cash',
  CHEQUE = 'cheque',
}


/**
 * Billing Cycle
 * How often the customer is billed
 */
export enum BillingCycle {
  MONTHLY = 'monthly',
  QUARTERLY = 'quarterly',
  YEARLY = 'yearly',
  ONE_TIME = 'one-time',
}
