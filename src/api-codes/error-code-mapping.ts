/**
 * Error Code to Key Mapping
 * Maps error code values (EC001, EC002, etc.) to their constant keys
 * This is used by filters to convert HTTP status codes to error code keys
 */

export const ERROR_CODE_TO_KEY_MAP: Record<string, string> = {
  // General Errors (EC001-EC020)
  'EC001': 'UNKNOWN_ERROR',
  'EC002': 'INTERNAL_SERVER_ERROR',
  'EC003': 'NOT_FOUND',
  'EC004': 'VALIDATION_ERROR',
  'EC005': 'PAYLOAD_MISMATCH',
  'EC006': 'INVALID_DATA',
  'EC007': 'DUPLICATE_NOT_ALLOWED',
  'EC008': 'UPDATE_NOT_POSSIBLE',
  'EC009': 'DATE_RANGE_VALIDATION',

  // Authentication & Authorization Errors (EC021-EC050)
  'EC021': 'AUTHENTICATION_ERROR',
  'EC022': 'INVALID_TOKEN',
  'EC023': 'INVALID_EMAIL_OR_PASSWORD',
  'EC024': 'INVALID_OTP',
  'EC025': 'OTP_EXPIRED',
  'EC026': 'INVALID_OTP_WITH_ATTEMPTS',
  'EC027': 'ACCOUNT_LOCKED',
  'EC028': 'FORBIDDEN',
  'EC029': 'MISSING_PERMISSION_FOR_REQUEST',
  'EC030': 'INSUFFICIENT_USER_PRIVILEGE',

  // User & Role Errors (EC051-EC100)
  'EC051': 'USER_NOT_FOUND',
  'EC052': 'EMAIL_TAKEN',
  'EC053': 'NOT_VALID_EMAIL',
  'EC054': 'PASSWORD_NOT_FOUND',
  'EC055': 'PASSWORD_NOT_MATCHED',
  'EC056': 'USER_DEACTIVATED',
  'EC057': 'INVALID_ROLE',
  'EC058': 'INVALID_MOBILE_NUMBER',
  'EC059': 'INVALID_DIAL_CODE',

  // Student Management Errors (EC101-EC150)
  'EC101': 'STUDENT_NOT_FOUND',
  'EC102': 'STUDENT_ALREADY_ENROLLED',
  'EC103': 'STUDENT_CANNOT_BE_PROMOTED',
  'EC104': 'PARENT_NOT_FOUND',
  'EC105': 'CLASS_NOT_FOUND',
  'EC106': 'SECTION_NOT_FOUND',
  'EC107': 'STUDENT_TRANSFER_FAILED',
  'EC108': 'INVALID_CLASS_CAPACITY',

  // Add more mappings as needed...
};

/**
 * Get error code key by code value
 * @param codeValue - The error code (e.g., 'EC001')
 * @returns The error code key (e.g., 'UNKNOWN_ERROR'), defaults to 'UNKNOWN_ERROR' if not found
 */
export const getErrorCodeKeyByCode = (codeValue: string): string => {
  return ERROR_CODE_TO_KEY_MAP[codeValue] || 'UNKNOWN_ERROR';
};
