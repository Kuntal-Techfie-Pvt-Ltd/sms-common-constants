/**
 * Response Interceptor
 * Standardized response interceptor for all services
 * Formats successful responses with API codes
 */

import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Request } from 'express';
import { ApiResponseHandler } from '../utils/api-response.handler';
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from '../config/languages';

export interface CustomResponse {
  apiCode?: string; // e.g., 'LOGIN_SUCCESS'
  data?: any;
  statusCode?: number; // HTTP status code, defaults to 200
}

@Injectable()
export class ResponseInterceptor implements NestInterceptor {
  private responseHandler: ApiResponseHandler;

  constructor() {
    this.responseHandler = new ApiResponseHandler('en');
  }

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest<Request>();

    // Extract language from request
    const language = this.extractLanguage(request);
    this.responseHandler.setLanguage(language as any);

    return next.handle().pipe(
      map((data: any) => {
        // If response is already formatted, return as-is
        if (data?.success === true || data?.success === false) {
          return data;
        }

        // If data is a CustomResponse with apiCode
        if (data?.apiCode) {
          const { apiCode, data: responseData, statusCode } = data as CustomResponse;
          return this.responseHandler.formatSuccessResponse(
            apiCode as string,
            responseData,
            statusCode || 200
          );
        }

        // Default success response
        return this.responseHandler.formatSuccessResponse('COMMON_SUCCESS', data, 200);
      })
    );
  }

  /**
   * Extract language from request
   * Priority: query param > header > default (DEFAULT_LANGUAGE)
   * Supported languages: SUPPORTED_LANGUAGES (en, hi)
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
