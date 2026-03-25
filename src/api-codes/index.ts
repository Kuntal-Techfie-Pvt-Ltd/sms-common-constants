/**
 * API Codes Module
 * Export all API response codes (success and error) for all supported languages
 * Currently supported languages: English (en), Hindi (hi)
 */

// Types
export * from './api-codes.types';

// English (default)
export * from './success-codes.en';
export * from './error-codes.en';

// Hindi
export * from './success-codes.hi';
export * from './error-codes.hi';

// Error code mappings
export * from './error-code-mapping';

// Combine all codes for convenience
import { SUCCESS_CODES } from './success-codes.en';
import { ERROR_CODES } from './error-codes.en';

export const API_CODES = {
  ...SUCCESS_CODES,
  ...ERROR_CODES,
};
