/**
 * UI Content Dictionary module
 * Central, in-memory, language-keyed dictionary of control names/labels/text
 * shared by sms-web and the mobile apps. Replaces the previously-empty
 * sms_content_web/sms_content_app DB-backed content system for this purpose
 * (that DB system is still used for genuinely dynamic content like the
 * marketing homepage and footer — leave it alone).
 */
export * from './content.types';
export * from './en';
export * from './hi';
export * from './gu';

import { UiContentDictionary } from './content.types';
import { UI_CONTENT_EN } from './en';
import { UI_CONTENT_HI } from './hi';
import { UI_CONTENT_GU } from './gu';

export const UI_CONTENT: Record<string, UiContentDictionary> = {
  en: UI_CONTENT_EN,
  hi: UI_CONTENT_HI,
  gu: UI_CONTENT_GU,
};

export const UI_CONTENT_SUPPORTED_LANGUAGES = Object.keys(UI_CONTENT);

export const UI_CONTENT_DEFAULT_LANGUAGE = 'en';

/**
 * Get the UI content dictionary for a language, falling back to English
 * if the language isn't supported or doesn't exist.
 */
export function getUiContent(languageCode?: string): UiContentDictionary {
  if (!languageCode) return UI_CONTENT_EN;
  return UI_CONTENT[languageCode.toLowerCase()] || UI_CONTENT_EN;
}
