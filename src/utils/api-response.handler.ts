/**
 * API Response Handler
 * Handles language-based API response codes and formatting
 */

import { ApiCode, ApiCodeCollection } from '../api-codes/api-codes.types';
import { SUCCESS_CODES } from '../api-codes/success-codes.en';
import { ERROR_CODES } from '../api-codes/error-codes.en';
import { SUCCESS_CODES_HI } from '../api-codes/success-codes.hi';
import { ERROR_CODES_HI } from '../api-codes/error-codes.hi';
import { HTTP_STATUS } from '../config/constants';
import { SupportedLanguage, SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from '../config/languages';

export type LanguageType = SupportedLanguage;

export interface ApiResponse<T = any> {
  success: boolean;
  statusCode: number;
  code: string;
  message: string;
  data?: T;
  timestamp: string;
}

export interface ApiErrorResponse {
  success: boolean;
  statusCode: number;
  code: string;
  message: string;
  path?: string;
  method?: string;
  timestamp: string;
  error?: any;
}

/**
 * API Response Handler Class
 * Handles language-based API responses
 */
export class ApiResponseHandler {
  private language: LanguageType = DEFAULT_LANGUAGE;
  private codeCollections: Map<
    LanguageType,
    { success: ApiCodeCollection; error: ApiCodeCollection }
  > = new Map();

  constructor(language: LanguageType = DEFAULT_LANGUAGE) {
    this.language = language;
    this.initializeLanguages();
  }

  /**
   * Initialize language collections
   * Supports English and Hindi
   */
  private initializeLanguages(): void {
    this.codeCollections.set('en', {
      success: SUCCESS_CODES,
      error: ERROR_CODES,
    });
    this.codeCollections.set('hi', {
      success: SUCCESS_CODES_HI,
      error: ERROR_CODES_HI,
    });
  }

  /**
   * Set language for responses
   */
  setLanguage(language: LanguageType): void {
    if (SUPPORTED_LANGUAGES.includes(language)) {
      this.language = language;
    } else {
      console.warn(`Language ${language} not supported, falling back to ${DEFAULT_LANGUAGE}`);
      this.language = DEFAULT_LANGUAGE;
    }
  }

  /**
   * Get current language
   */
  getLanguage(): LanguageType {
    return this.language;
  }

  /**
   * Get success code
   */
  getSuccessCode(key: string): ApiCode {
    const codes = this.codeCollections.get(this.language);
    if (!codes) {
      return SUCCESS_CODES[key] || SUCCESS_CODES['COMMON_SUCCESS'];
    }
    return codes.success[key] || SUCCESS_CODES[key] || SUCCESS_CODES['COMMON_SUCCESS'];
  }

  /**
   * Get error code
   */
  getErrorCode(key: string): ApiCode {
    const codes = this.codeCollections.get(this.language);
    if (!codes) {
      return ERROR_CODES[key] || ERROR_CODES['UNKNOWN_ERROR'];
    }
    return codes.error[key] || ERROR_CODES[key] || ERROR_CODES['UNKNOWN_ERROR'];
  }

  /**
   * Format success response
   */
  formatSuccessResponse<T = any>(
    key: string,
    data?: T,
    statusCode: number = HTTP_STATUS.OK
  ): ApiResponse<T> {
    const codeInfo = this.getSuccessCode(key);

    return {
      success: true,
      statusCode,
      code: codeInfo.code,
      message: codeInfo.message,
      data,
      timestamp: new Date().toISOString(),
    };
  }

  /**
   * Format error response
   */
  formatErrorResponse(
    key: string,
    statusCode: number = HTTP_STATUS.INTERNAL_SERVER_ERROR,
    path?: string,
    method?: string,
    error?: any,
    messageVariables?: Record<string, string>
  ): ApiErrorResponse {
    const codeInfo = this.getErrorCode(key);
    let message = codeInfo.message;

    // Replace variables in message if provided
    if (messageVariables) {
      Object.entries(messageVariables).forEach(([key, value]) => {
        message = message.replace(new RegExp(`<${key}>`, 'g'), value);
      });
    }

    return {
      success: false,
      statusCode,
      code: codeInfo.code,
      message,
      path,
      method,
      timestamp: new Date().toISOString(),
      ...(error && { error }),
    };
  }

  /**
   * Get HTTP status code from error code key
   */
  getHttpStatusFromErrorCode(errorCodeKey: string): number {
    const errorCode = this.getErrorCode(errorCodeKey);
    const code = errorCode.code;

    // Map error code prefixes to HTTP status codes
    if (code.startsWith('EC021') || code.startsWith('EC022')) return HTTP_STATUS.UNAUTHORIZED;
    if (code.startsWith('EC028') || code.startsWith('EC029')) return HTTP_STATUS.FORBIDDEN;
    if (code.startsWith('EC003')) return HTTP_STATUS.NOT_FOUND;
    if (code.startsWith('EC004') || code.startsWith('EC005') || code.startsWith('EC006'))
      return HTTP_STATUS.BAD_REQUEST;
    if (code.startsWith('EC007')) return HTTP_STATUS.CONFLICT;

    return HTTP_STATUS.INTERNAL_SERVER_ERROR;
  }
}

/**
 * Global API response handler instance
 */
export const apiResponseHandler = new ApiResponseHandler('en');
