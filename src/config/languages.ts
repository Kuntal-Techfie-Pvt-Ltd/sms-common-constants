/**
 * Supported Languages Configuration
 * Centralized language settings for the entire system
 */

/**
 * Supported language codes
 */
export type SupportedLanguage = 'en' | 'hi';

/**
 * Language configuration
 */
export const SUPPORTED_LANGUAGES: SupportedLanguage[] = ['en', 'hi'];

/**
 * Default language
 */
export const DEFAULT_LANGUAGE: SupportedLanguage = 'en';

/**
 * Language display names
 */
export const LANGUAGE_NAMES: Record<SupportedLanguage, string> = {
  en: 'English',
  hi: 'हिंदी (Hindi)',
};

/**
 * Language to locale mapping (for Accept-Language header parsing)
 */
export const LANGUAGE_LOCALES: Record<SupportedLanguage, string[]> = {
  en: ['en', 'en-US', 'en-GB', 'en-AU'],
  hi: ['hi', 'hi-IN'],
};

/**
 * Check if a language is supported
 */
export const isSupportedLanguage = (lang: any): lang is SupportedLanguage => {
  return SUPPORTED_LANGUAGES.includes(lang);
};
