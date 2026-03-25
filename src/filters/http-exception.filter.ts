/**
 * HTTP Exception Filter
 * Standardized exception filter for all services
 * Handles HTTP exceptions and formats responses with API codes
 */

import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { ApiResponseHandler } from '../utils/api-response.handler';
import { HTTP_STATUS_TO_ERROR_CODE } from '../api-codes/api-codes.types';
import { getErrorCodeKeyByCode } from '../api-codes/error-code-mapping';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from '../config/languages';

@Injectable()
@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  private responseHandler: ApiResponseHandler;

  constructor() {
    this.responseHandler = new ApiResponseHandler(DEFAULT_LANGUAGE);
  }

  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();

    // Extract language from request headers or query params
    const language = this.extractLanguage(request);
    this.responseHandler.setLanguage(language as any);

    // Get error code key from exception
    const errorCodeKey = this.mapHttpStatusToErrorCode(status, exception);

    // Format error response
    const errorDetails = this.extractErrorDetails(exception);
    const errorResponse = this.responseHandler.formatErrorResponse(
      errorCodeKey,
      status,
      request.url,
      request.method,
      errorDetails
    );

    // For 401, prefer the exception message (e.g. "Invalid credentials") so login shows the real reason
    if (status === HttpStatus.UNAUTHORIZED) {
      const exceptionResponse = exception.getResponse();
      const exceptionMessage =
        typeof exceptionResponse === 'object' && (exceptionResponse as any).message
          ? (exceptionResponse as any).message
          : exception.message;
      if (exceptionMessage && exceptionMessage !== 'Unauthorized') {
        errorResponse.message = exceptionMessage;
      }
    }

    response.status(status).json(errorResponse);
  }

  /**
   * Extract language from request
   * Priority: query param > header > default (DEFAULT_LANGUAGE)
   * Uses SUPPORTED_LANGUAGES constant
   */
  private extractLanguage(request: Request): string {
    const queryLang = (request.query.lang as string) || '';
    const headerLang = (request.headers['accept-language'] as string) || '';

    // Check query parameter first (highest priority)
    if (queryLang && SUPPORTED_LANGUAGES.includes(queryLang as any)) {
      return queryLang;
    }

    // Check Accept-Language header (medium priority)
    if (headerLang) {
      const lang = headerLang.split(',')[0].split('-')[0];
      if (SUPPORTED_LANGUAGES.includes(lang as any)) {
        return lang;
      }
    }

    // Return default language (lowest priority)
    return DEFAULT_LANGUAGE;
  }

  /**
   * Map HTTP status code to error code
   */
  private mapHttpStatusToErrorCode(status: number, exception: HttpException): string {
    const exceptionResponse = exception.getResponse();

    // Check if exception has custom error code
    if (typeof exceptionResponse === 'object' && 'errorCode' in exceptionResponse) {
      return (exceptionResponse as any).errorCode;
    }

    // Map HTTP status to error code
    const errorCodeKey = (HTTP_STATUS_TO_ERROR_CODE as any)[status];
    if (errorCodeKey) {
      // Find the key in ERROR_CODES that matches the code
      return this.getErrorCodeKeyByCode(errorCodeKey);
    }

    return 'UNKNOWN_ERROR';
  }

  /**
   * Get error code key by code value
   * Uses centralized mapping from error-code-mapping.ts
   */
  private getErrorCodeKeyByCode(codeValue: string): string {
    return getErrorCodeKeyByCode(codeValue);
  }

  /**
   * Extract error details from exception
   */
  private extractErrorDetails(exception: HttpException): any {
    const exceptionResponse = exception.getResponse();

    if (typeof exceptionResponse === 'object') {
      const { errorCode, ...details } = exceptionResponse as any;
      return Object.keys(details).length > 0 ? details : undefined;
    }

    return undefined;
  }
}

/**
 * All Exceptions Filter
 * Catches all unhandled exceptions
 */
@Injectable()
@Catch()
export class AllExceptionsFilter implements ExceptionFilter {
  private responseHandler: ApiResponseHandler;

  constructor() {
    this.responseHandler = new ApiResponseHandler(DEFAULT_LANGUAGE);
  }

  catch(exception: unknown, host: ArgumentsHost) {
    // Skip HttpExceptions - they should be handled by HttpExceptionFilter
    // This filter only handles non-HttpExceptions (true internal server errors)

    // Check if exception is HttpException (also check duck typing for edge cases)
    // Note: instanceof may fail due to module resolution, so we also check duck typing
    // Note: instanceof may fail due to module resolution, so we also check duck typing
    const isHttpException = exception instanceof HttpException ||
      (exception && typeof exception === 'object' && 'getStatus' in exception && typeof (exception as any).getStatus === 'function');

    if (isHttpException) {
      // Use duck typing - cast to HttpException-like object
      const httpException = exception instanceof HttpException ? exception : (exception as any as HttpException);
      // HttpExceptions should be handled by HttpExceptionFilter
      // But since AllExceptionsFilter catches everything first, we handle it here
      const ctx = host.switchToHttp();
      const response = ctx.getResponse<Response>();
      const request = ctx.getRequest<Request>();

      // Check if response was already sent
      if (response.headersSent) {
        console.warn('Response already sent, cannot handle HttpException');
        return;
      }

      try {
        const status = httpException.getStatus();

        // Extract language from request
        const language = this.extractLanguage(request);
        this.responseHandler.setLanguage(language as any);

        // Get error code key from exception
        let errorCodeKey: string;
        try {
          errorCodeKey = this.mapHttpStatusToErrorCode(status, httpException);
        } catch (mapError) {
          console.error('Error in mapHttpStatusToErrorCode:', mapError);
          // Fallback to AUTHENTICATION_ERROR for 401, INTERNAL_SERVER_ERROR for others
          errorCodeKey = status === 401 ? 'AUTHENTICATION_ERROR' : 'INTERNAL_SERVER_ERROR';
        }

        // Format error response using HttpExceptionFilter logic
        const errorResponse = this.responseHandler.formatErrorResponse(
          errorCodeKey,
          status,
          request.url,
          request.method,
          this.extractErrorDetails(httpException)
        );

        response.status(status).json(errorResponse);
        return;
      } catch (error) {
        // If there's an error handling the HttpException, log it but don't process further
        console.error('Error handling HttpException in AllExceptionsFilter:', error);
        if (error instanceof Error) {
          console.error('Error stack:', error.stack);
        }
        // Don't fall through - if we can't handle it, at least try to send a basic 401 response
        if (!response.headersSent) {
          try {
            const exceptionStatus = httpException.getStatus();
            response.status(exceptionStatus).json({
              success: false,
              statusCode: exceptionStatus,
              code: exceptionStatus === 401 ? 'EC021' : 'EC002',
              message: httpException.message || 'An error occurred',
              path: request.url,
              method: request.method,
              timestamp: new Date().toISOString(),
            });
          } catch (sendError) {
            console.error('Failed to send error response:', sendError);
          }
        }
        return;
      }
    }

    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    // Log the actual error for debugging
    console.error('🔴 Unhandled Exception (Non-HttpException):', exception);
    if (exception instanceof Error) {
      console.error('Error Stack:', exception.stack);
    }

    // Extract language from request
    const language = this.extractLanguage(request);
    this.responseHandler.setLanguage(language as any);

    // This filter only handles true internal server errors (non-HttpExceptions)
    const errorResponse = this.responseHandler.formatErrorResponse(
      'INTERNAL_SERVER_ERROR',
      HttpStatus.INTERNAL_SERVER_ERROR,
      request.url,
      request.method
    );

    response.status(HttpStatus.INTERNAL_SERVER_ERROR).json(errorResponse);
  }

  /**
   * Map HTTP status code to error code (same as HttpExceptionFilter)
   */
  private mapHttpStatusToErrorCode(status: number, exception: HttpException): string {
    const exceptionResponse = exception.getResponse();

    // Check if exception has custom error code
    if (typeof exceptionResponse === 'object' && 'errorCode' in exceptionResponse) {
      return (exceptionResponse as any).errorCode;
    }

    // Map HTTP status to error code
    const errorCodeKey = (HTTP_STATUS_TO_ERROR_CODE as any)[status];
    if (errorCodeKey) {
      return getErrorCodeKeyByCode(errorCodeKey);
    }

    return 'UNKNOWN_ERROR';
  }

  /**
   * Extract error details from exception (same as HttpExceptionFilter)
   */
  private extractErrorDetails(exception: HttpException): any {
    const exceptionResponse = exception.getResponse();

    if (typeof exceptionResponse === 'object') {
      const { errorCode, ...details } = exceptionResponse as any;
      return Object.keys(details).length > 0 ? details : undefined;
    }

    return undefined;
  }

  /**
   * Extract language from request
   * Priority: query param > header > default (DEFAULT_LANGUAGE)
   * Uses SUPPORTED_LANGUAGES constant
   */
  private extractLanguage(request: Request): string {
    const queryLang = (request.query.lang as string) || '';
    const headerLang = (request.headers['accept-language'] as string) || '';

    // Check query parameter first (highest priority)
    if (queryLang && SUPPORTED_LANGUAGES.includes(queryLang as any)) {
      return queryLang;
    }

    // Check Accept-Language header (medium priority)
    if (headerLang) {
      const lang = headerLang.split(',')[0].split('-')[0];
      if (SUPPORTED_LANGUAGES.includes(lang as any)) {
        return lang;
      }
    }

    // Return default language (lowest priority)
    return DEFAULT_LANGUAGE;
  }
}
