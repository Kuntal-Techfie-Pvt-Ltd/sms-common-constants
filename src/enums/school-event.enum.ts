/**
 * School calendar event categories — shared catalog (sms-common-constants).
 * Per-school rows are stored in sms-school table `school_event_categories` (school_id + academic_session_id).
 *
 * Multilingual shape matches sms-school master data: Translation[] as [{ code, value }, ...].
 */

/** Row type in `school_event_categories.source` — standard codes come from SCHOOL_EVENT_CATEGORY_CATALOG. */
export enum SchoolEventCategorySource {
  STANDARD = 'STANDARD',
  CUSTOM = 'CUSTOM',
}

export enum SchoolEventCategoryCode {
  SPORTS = 'SPORTS',
  CULTURAL = 'CULTURAL',
  ACADEMIC = 'ACADEMIC',
  HOLIDAY = 'HOLIDAY',
  MEETING = 'MEETING',
  WORKSHOP = 'WORKSHOP',
  OTHER = 'OTHER',
}

/** Single translation entry (ISO 639-1 code + text). */
export interface SchoolEventCategoryTranslation {
  code: string;
  value: string;
}

export interface SchoolEventCategoryDefinition {
  code: SchoolEventCategoryCode;
  /** Display names per language — same structure as school master `name` jsonb. */
  name: SchoolEventCategoryTranslation[];
}

/** Canonical catalog exposed to UI and APIs (source of truth for standard categories). */
export const SCHOOL_EVENT_CATEGORY_CATALOG: SchoolEventCategoryDefinition[] = [
  {
    code: SchoolEventCategoryCode.SPORTS,
    name: [
      { code: 'en', value: 'Sports' },
      { code: 'hi', value: 'खेल' },
    ],
  },
  {
    code: SchoolEventCategoryCode.CULTURAL,
    name: [
      { code: 'en', value: 'Cultural' },
      { code: 'hi', value: 'सांस्कृतिक' },
    ],
  },
  {
    code: SchoolEventCategoryCode.ACADEMIC,
    name: [
      { code: 'en', value: 'Academic' },
      { code: 'hi', value: 'शैक्षिक' },
    ],
  },
  {
    code: SchoolEventCategoryCode.HOLIDAY,
    name: [
      { code: 'en', value: 'Holiday' },
      { code: 'hi', value: 'अवकाश' },
    ],
  },
  {
    code: SchoolEventCategoryCode.MEETING,
    name: [
      { code: 'en', value: 'Meeting' },
      { code: 'hi', value: 'बैठक' },
    ],
  },
  {
    code: SchoolEventCategoryCode.WORKSHOP,
    name: [
      { code: 'en', value: 'Workshop' },
      { code: 'hi', value: 'कार्यशाला' },
    ],
  },
  {
    code: SchoolEventCategoryCode.OTHER,
    name: [
      { code: 'en', value: 'Other' },
      { code: 'hi', value: 'अन्य' },
    ],
  },
];

const STANDARD_CODE_SET = new Set(
  SCHOOL_EVENT_CATEGORY_CATALOG.map((c) => c.code as string),
);

export function isStandardSchoolEventCategoryCode(code: string): boolean {
  return STANDARD_CODE_SET.has(code);
}

/**
 * Resolved label for a standard category code (no sms-school dependency).
 * @param language — prefer 'en' | 'hi'; unknown codes fall back to 'en' then first entry.
 */
export function getSchoolEventCategoryLabel(code: string, language = 'en'): string {
  const row = SCHOOL_EVENT_CATEGORY_CATALOG.find((c) => c.code === code);
  if (!row?.name?.length) return code;
  const lang = language === 'hi' ? 'hi' : 'en';
  const hit = row.name.find((t) => t.code === lang);
  if (hit?.value) return hit.value;
  const en = row.name.find((t) => t.code === 'en');
  if (en?.value) return en.value;
  return row.name[0]?.value ?? code;
}

/** User-visible event lifecycle (distinct from entity liveStatus). */
export enum SchoolCalendarEventStatus {
  UPCOMING = 'UPCOMING',
  ONGOING = 'ONGOING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
}

/** Which people the calendar event applies to (can combine; all three = whole school community). */
export enum SchoolCalendarEventParticipantGroup {
  STUDENTS = 'STUDENTS',
  TEACHERS = 'TEACHERS',
  STAFF = 'STAFF',
}

export const SCHOOL_CALENDAR_EVENT_PARTICIPANT_GROUP_ORDER: SchoolCalendarEventParticipantGroup[] = [
  SchoolCalendarEventParticipantGroup.STUDENTS,
  SchoolCalendarEventParticipantGroup.TEACHERS,
  SchoolCalendarEventParticipantGroup.STAFF,
];

const PARTICIPANT_GROUP_SET = new Set(
  SCHOOL_CALENDAR_EVENT_PARTICIPANT_GROUP_ORDER.map((g) => g as string),
);

/** Normalize API/DB values: unique known groups, stable order; default [STUDENTS]. */
export function normalizeSchoolCalendarParticipantAudiences(
  input: unknown,
): SchoolCalendarEventParticipantGroup[] {
  const raw = Array.isArray(input) ? input : [];
  const picked = new Set<string>();
  for (const x of raw) {
    const u = String(x).toUpperCase();
    if (PARTICIPANT_GROUP_SET.has(u)) picked.add(u);
  }
  if (picked.size === 0) {
    return [SchoolCalendarEventParticipantGroup.STUDENTS];
  }
  return SCHOOL_CALENDAR_EVENT_PARTICIPANT_GROUP_ORDER.filter((g) => picked.has(g));
}
