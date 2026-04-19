/**
 * String normalization and display helpers.
 * Store user-facing text in lowercase in the DB; use these for API/UI presentation.
 */

/** Trim and lowercase for persisted string fields. */
export function normalizeForDb(value: string | null | undefined): string {
  if (value == null || value === '') return '';
  return value.trim().toLowerCase();
}

/** Trim only (preserve casing) — use when case is meaningful (e.g. mixed codes). */
export function trimValue(value: string | null | undefined): string {
  if (value == null || value === '') return '';
  return value.trim();
}

/** Title-case each word for display (e.g. "united states" → "United States"). */
export function toTitleCaseWords(value: string | null | undefined): string {
  if (value == null || value === '') return '';
  return value
    .trim()
    .split(/\s+/)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
}

/** Uppercase trimmed (e.g. ISO-3166 alpha-3 or alpha-2 for display). */
export function toUpperCaseTrim(value: string | null | undefined): string {
  if (value == null || value === '') return '';
  return value.trim().toUpperCase();
}

/** Lowercase trimmed. */
export function toLowerCaseTrim(value: string | null | undefined): string {
  if (value == null || value === '') return '';
  return value.trim().toLowerCase();
}

export type DisplayCaseMode = 'lower' | 'upper' | 'title' | 'none';

/** Format a DB-stored (typically lowercase) string for API/UI. */
export function formatForDisplay(
  value: string | null | undefined,
  mode: DisplayCaseMode = 'title',
): string {
  if (value == null || value === '') return '';
  switch (mode) {
    case 'lower':
      return toLowerCaseTrim(value);
    case 'upper':
      return toUpperCaseTrim(value);
    case 'title':
      return toTitleCaseWords(value);
    case 'none':
      return trimValue(value);
    default:
      return trimValue(value);
  }
}
