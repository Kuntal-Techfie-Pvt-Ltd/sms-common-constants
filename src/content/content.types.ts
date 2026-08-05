/**
 * Shape of the UI content dictionary for a single language.
 * "web" and "app" are separate namespaces because sms-web and the mobile apps
 * have different screens/components — not every key exists on both sides.
 */
export interface UiContentDictionary {
  web: Record<string, any>;
  app: Record<string, any>;
}
