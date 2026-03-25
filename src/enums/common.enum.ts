/**
 * Common Enums used across the SMS system
 */

/**
 * Subject Type Enum
 */
export enum SubjectType {
  CURRICULAR = 'curricular',
  COMPETITIVE = 'competitive',
  VOCATIONAL = 'vocational',
}

/**
 * Status Enums
 */
export enum Status {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PENDING = 'PENDING',
  SUSPENDED = 'SUSPENDED',
  ARCHIVED = 'ARCHIVED',
  DELETED = 'DELETED',
}

/**
 * Live Status Enum (lowercase for database)
 */
export enum LiveStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  DELETED = 'deleted',
  PENDING = 'pending',
  SUSPENDED = 'suspended',
}

/**
 * Approval Status
 */
export enum ApprovalStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  UNDER_REVIEW = 'UNDER_REVIEW',
}

/**
 * Entity Types under Company
 */
export enum EntityType {
  COMPANY = 'COMPANY',
  SCHOOL = 'SCHOOL',
  TUITION = 'TUITION',
  OTHER_PROGRAM = 'OTHER_PROGRAM',
}

/**
 * Owner Types (for Classes, Sections, etc.)
 */
export enum OwnerType {
  SCHOOL = 'school',
  TUTOR = 'tutor',
  COACHING = 'coaching',
  COMPANY = 'company',
}

/**
 * Program Types under Other-Program
 */
export enum ProgramType {
  ADVAN_LEARNING_AI = 'ADVAN_LEARNING_AI',
  ONLINE_COURSES = 'ONLINE_COURSES',
  CERTIFICATION = 'CERTIFICATION',
  SKILLS_TRAINING = 'SKILLS_TRAINING',
  CUSTOM = 'CUSTOM',
}

/**
 * Gender
 */
export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
  PREFER_NOT_TO_SAY = 'PREFER_NOT_TO_SAY',
}

/**
 * Blood Group
 */
export enum BloodGroup {
  A_POSITIVE = 'A+',
  A_NEGATIVE = 'A-',
  B_POSITIVE = 'B+',
  B_NEGATIVE = 'B-',
  AB_POSITIVE = 'AB+',
  AB_NEGATIVE = 'AB-',
  O_POSITIVE = 'O+',
  O_NEGATIVE = 'O-',
}

/**
 * Days of Week
 */
export enum DayOfWeek {
  MONDAY = 'MONDAY',
  TUESDAY = 'TUESDAY',
  WEDNESDAY = 'WEDNESDAY',
  THURSDAY = 'THURSDAY',
  FRIDAY = 'FRIDAY',
  SATURDAY = 'SATURDAY',
  SUNDAY = 'SUNDAY',
}

/**
 * Months
 */
export enum Month {
  JANUARY = 'JANUARY',
  FEBRUARY = 'FEBRUARY',
  MARCH = 'MARCH',
  APRIL = 'APRIL',
  MAY = 'MAY',
  JUNE = 'JUNE',
  JULY = 'JULY',
  AUGUST = 'AUGUST',
  SEPTEMBER = 'SEPTEMBER',
  OCTOBER = 'OCTOBER',
  NOVEMBER = 'NOVEMBER',
  DECEMBER = 'DECEMBER',
}

/**
 * Priority Levels
 */
export enum Priority {
  LOW = 'LOW',
  MEDIUM = 'MEDIUM',
  HIGH = 'HIGH',
  URGENT = 'URGENT',
  CRITICAL = 'CRITICAL',
}

/**
 * Visibility Levels
 */
export enum Visibility {
  PUBLIC = 'PUBLIC',
  PRIVATE = 'PRIVATE',
  RESTRICTED = 'RESTRICTED',
  INTERNAL = 'INTERNAL',
}

/**
 * Communication Channels
 */
export enum CommunicationChannel {
  EMAIL = 'EMAIL',
  SMS = 'SMS',
  PUSH_NOTIFICATION = 'PUSH_NOTIFICATION',
  IN_APP = 'IN_APP',
  WHATSAPP = 'WHATSAPP',
}

/**
 * Languages
 */
export enum Language {
  ENGLISH = 'en',
  SPANISH = 'es',
  FRENCH = 'fr',
  GERMAN = 'de',
  HINDI = 'hi',
  CHINESE = 'zh',
  ARABIC = 'ar',
}

/**
 * Timezone
 */
export enum Timezone {
  UTC = 'UTC',
  PST = 'America/Los_Angeles',
  EST = 'America/New_York',
  IST = 'Asia/Kolkata',
  GMT = 'Europe/London',
  CST = 'Asia/Shanghai',
}

/**
 * Currency Codes (ISO 4217)
 */
export enum Currency {
  USD = 'USD', // US Dollar
  EUR = 'EUR', // Euro
  GBP = 'GBP', // British Pound
  INR = 'INR', // Indian Rupee
  CNY = 'CNY', // Chinese Yuan
  JPY = 'JPY', // Japanese Yen
  AUD = 'AUD', // Australian Dollar
  CAD = 'CAD', // Canadian Dollar
  AED = 'AED', // UAE Dirham
}

/**
 * File Types
 */
export enum FileType {
  PDF = 'PDF',
  DOC = 'DOC',
  DOCX = 'DOCX',
  XLS = 'XLS',
  XLSX = 'XLSX',
  PPT = 'PPT',
  PPTX = 'PPTX',
  JPG = 'JPG',
  JPEG = 'JPEG',
  PNG = 'PNG',
  GIF = 'GIF',
  MP4 = 'MP4',
  MP3 = 'MP3',
  ZIP = 'ZIP',
  CSV = 'CSV',
  TXT = 'TXT',
}

/**
 * Document Types
 */
export enum DocumentType {
  BIRTH_CERTIFICATE = 'BIRTH_CERTIFICATE',
  TRANSFER_CERTIFICATE = 'TRANSFER_CERTIFICATE',
  MARK_SHEET = 'MARK_SHEET',
  ID_PROOF = 'ID_PROOF',
  ADDRESS_PROOF = 'ADDRESS_PROOF',
  PHOTOGRAPH = 'PHOTOGRAPH',
  MEDICAL_CERTIFICATE = 'MEDICAL_CERTIFICATE',
  INCOME_CERTIFICATE = 'INCOME_CERTIFICATE',
  CASTE_CERTIFICATE = 'CASTE_CERTIFICATE',
  OTHER = 'OTHER',
}

/**
 * Academic Term
 */
export enum AcademicTerm {
  TERM_1 = 'TERM_1',
  TERM_2 = 'TERM_2',
  TERM_3 = 'TERM_3',
  SEMESTER_1 = 'SEMESTER_1',
  SEMESTER_2 = 'SEMESTER_2',
  ANNUAL = 'ANNUAL',
}

/**
 * School Board/Curriculum
 */
export enum SchoolBoard {
  CBSE = 'CBSE', // Central Board of Secondary Education (India)
  ICSE = 'ICSE', // Indian Certificate of Secondary Education
  STATE_BOARD = 'STATE_BOARD',
  IB = 'IB', // International Baccalaureate
  CAMBRIDGE = 'CAMBRIDGE', // Cambridge International
  AP = 'AP', // Advanced Placement
  GCSE = 'GCSE', // General Certificate of Secondary Education
  OTHER = 'OTHER',
}

/**
 * Company Type
 */
export enum CompanyType {
  PARENT = 'PARENT', // Parent
  PARENT_FOR_ALL = 'PARENT_FOR_ALL', // Parent For All - Can see all companies including other Parent companies
  DISTRIBUTOR = 'DISTRIBUTOR', // Distributor
  NATIONAL_DISTRIBUTOR = 'NATIONAL_DISTRIBUTOR', // National Distributor
  PARTNER = 'PARTNER', // Partner
}

/**
 * Account User Type
 * Defines the type of user for entity accounts (schools, tuitions, coaching)
 */
export enum AccountUserType {
  STAFF = 'staff',
  TEACHER = 'teacher',
  PARENT = 'parent',
  STUDENT = 'student',
}

/**
 * Address Type Enum
 * PERMANENT / CURRENT
 */
export enum AddressTypeEnum {
  PERMANENT = 'PERMANENT',
  CURRENT = 'CURRENT',
}
