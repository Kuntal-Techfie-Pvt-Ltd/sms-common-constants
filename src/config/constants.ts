/**
 * System-wide Configuration Constants
 */

/**
 * Pagination Defaults
 */
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_LIMIT: 10,
  MAX_LIMIT: 100,
  MIN_LIMIT: 1,
} as const;

/**
 * Authentication Constants
 */
export const AUTH = {
  JWT_EXPIRY: '24h',
  REFRESH_TOKEN_EXPIRY: '7d',
  OTP_EXPIRY_MINUTES: 10,
  OTP_LENGTH: 6,
  MAX_LOGIN_ATTEMPTS: 5,
  ACCOUNT_LOCK_DURATION_MINUTES: 30,
  PASSWORD_MIN_LENGTH: 8,
  PASSWORD_MAX_LENGTH: 128,
  SESSION_TIMEOUT_MINUTES: 60,
} as const;

/**
 * File Upload Constants
 */
export const FILE_UPLOAD = {
  MAX_FILE_SIZE_MB: 10,
  MAX_FILE_SIZE_BYTES: 10 * 1024 * 1024, // 10MB
  ALLOWED_IMAGE_TYPES: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
  ALLOWED_DOCUMENT_TYPES: [
    'application/pdf',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
  ],
  ALLOWED_VIDEO_TYPES: ['video/mp4', 'video/mpeg', 'video/quicktime'],
  MAX_IMAGE_SIZE_MB: 5,
  MAX_DOCUMENT_SIZE_MB: 10,
  MAX_VIDEO_SIZE_MB: 100,
} as const;

/**
 * Validation Constants
 */
export const VALIDATION = {
  MOBILE_NUMBER_REGEX: /^[0-9]{10,15}$/,
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  ALPHANUMERIC_REGEX: /^[a-zA-Z0-9]+$/,
  ALPHA_ONLY_REGEX: /^[a-zA-Z]+$/,
  URL_REGEX: /^https?:\/\/.+/,
  MIN_NAME_LENGTH: 2,
  MAX_NAME_LENGTH: 100,
  MIN_DESCRIPTION_LENGTH: 10,
  MAX_DESCRIPTION_LENGTH: 5000,
} as const;

/**
 * School Constants
 */
export const SCHOOL = {
  MIN_CLASS_CAPACITY: 10,
  MAX_CLASS_CAPACITY: 60,
  DEFAULT_CLASS_CAPACITY: 40,
  MIN_SECTION_NAME_LENGTH: 1,
  MAX_SECTION_NAME_LENGTH: 10,
  SCHOOL_HOURS_START: '08:00',
  SCHOOL_HOURS_END: '15:00',
  MAX_SUBJECTS_PER_STUDENT: 15,
  MIN_SUBJECTS_PER_STUDENT: 5,
} as const;

/**
 * Attendance Constants
 */
export const ATTENDANCE = {
  LATE_THRESHOLD_MINUTES: 15,
  HALF_DAY_THRESHOLD_MINUTES: 240, // 4 hours
  MIN_ATTENDANCE_PERCENTAGE: 75,
  ATTENDANCE_GRACE_PERIOD_DAYS: 7,
} as const;

/**
 * Grading Constants
 */
export const GRADING = {
  MAX_MARKS: 100,
  PASSING_PERCENTAGE: 40,
  DISTINCTION_PERCENTAGE: 75,
  FIRST_CLASS_PERCENTAGE: 60,
  SECOND_CLASS_PERCENTAGE: 50,
  GPA_SCALE: 4.0,
} as const;

/**
 * Fee Constants
 */
export const FEE = {
  LATE_FEE_PERCENTAGE: 2,
  EARLY_PAYMENT_DISCOUNT_PERCENTAGE: 5,
  PAYMENT_DUE_REMINDER_DAYS: [7, 3, 1], // Days before due date
  OVERDUE_GRACE_PERIOD_DAYS: 7,
} as const;

/**
 * Notification Constants
 */
export const NOTIFICATION = {
  MAX_RETRY_ATTEMPTS: 3,
  RETRY_DELAY_SECONDS: 60,
  BATCH_SIZE: 100,
  TTL_DAYS: 30,
} as const;

/**
 * Bus Tracking Constants
 */
export const BUS_TRACKING = {
  LOCATION_UPDATE_INTERVAL_SECONDS: 30,
  GEOFENCE_RADIUS_METERS: 100,
  MAX_SPEED_KMPH: 60,
  ROUTE_DEVIATION_THRESHOLD_METERS: 500,
  ETA_CALCULATION_BUFFER_MINUTES: 5,
} as const;

/**
 * Cache Constants
 */
export const CACHE = {
  TTL_SHORT: 60, // 1 minute
  TTL_MEDIUM: 300, // 5 minutes
  TTL_LONG: 3600, // 1 hour
  TTL_DAY: 86400, // 24 hours
} as const;

/**
 * Rate Limiting Constants
 */
export const RATE_LIMIT = {
  WINDOW_MS: 15 * 60 * 1000, // 15 minutes
  MAX_REQUESTS: 100,
  MAX_LOGIN_ATTEMPTS_PER_WINDOW: 5,
  MAX_OTP_REQUESTS_PER_WINDOW: 3,
} as const;

/**
 * API Key Constants
 */
export const API_KEY = {
  PREFIX: 'sms_',
  LENGTH: 32,
  EXPIRY_DAYS: 365,
} as const;

/**
 * Subscription Constants
 */
export const SUBSCRIPTION = {
  TRIAL_PERIOD_DAYS: 14,
  GRACE_PERIOD_DAYS: 7,
  RENEWAL_REMINDER_DAYS: [30, 15, 7, 3, 1],
  MAX_STUDENTS_FREE_TIER: 50,
  MAX_STAFF_FREE_TIER: 10,
} as const;

/**
 * Timezone & Date Format Constants
 */
export const DATE_TIME = {
  DEFAULT_TIMEZONE: 'UTC',
  DATE_FORMAT: 'YYYY-MM-DD',
  TIME_FORMAT: 'HH:mm:ss',
  DATETIME_FORMAT: 'YYYY-MM-DD HH:mm:ss',
  DISPLAY_DATE_FORMAT: 'DD/MM/YYYY',
  DISPLAY_TIME_FORMAT: 'hh:mm A',
  DISPLAY_DATETIME_FORMAT: 'DD/MM/YYYY hh:mm A',
} as const;

/**
 * Regex Patterns
 */
export const PATTERNS = {
  ULID: /^[0-9A-HJKMNP-TV-Z]{26}$/,
  UUID: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i,
  HEX_COLOR: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
  PHONE_E164: /^\+[1-9]\d{1,14}$/,
} as const;

/**
 * HTTP Status Codes
 */
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNPROCESSABLE_ENTITY: 422,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
  SERVICE_UNAVAILABLE: 503,
} as const;
