/**
 * API Code Structure
 * Defines the structure for API response codes
 */
export interface ApiCode {
  code: string;
  message: string;
  statusCode?: number; // HTTP status code (optional, for backwards compatibility)
}

export interface ApiCodeCollection {
  [key: string]: ApiCode;
}

/**
 * HTTP Status to Error Code Mapping
 * Maps HTTP status codes to appropriate error codes
 */
export const HTTP_STATUS_TO_ERROR_CODE = {
  400: 'EC004', // Validation Error
  401: 'EC021', // Authentication Error
  403: 'EC028', // Forbidden
  404: 'EC003', // Not Found
  409: 'EC007', // Duplicate Entry
  422: 'EC004', // Validation Error
  429: 'EC030', // Too Many Requests (if exists)
  500: 'EC002', // Internal Server Error
  503: 'EC002', // Service Unavailable
} as const;
