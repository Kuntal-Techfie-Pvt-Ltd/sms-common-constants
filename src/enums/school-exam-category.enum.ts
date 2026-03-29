/**
 * School exam categories — shared catalog (sms-common-constants).
 * Per-school rows are stored in sms-school table `school_exam_categories` (school_id + academic_session_id).
 */

export enum SchoolExamCategorySource {
  STANDARD = 'STANDARD',
  CUSTOM = 'CUSTOM',
}

export enum SchoolExamCategoryCode {
  QUARTERLY = 'QUARTERLY',
  HALF_YEARLY = 'HALF_YEARLY',
  ANNUAL = 'ANNUAL',
  CLASS_TEST = 'CLASS_TEST',
}

export interface SchoolExamCategoryTranslation {
  code: string;
  value: string;
}

export interface SchoolExamCategoryDefinition {
  code: SchoolExamCategoryCode;
  name: SchoolExamCategoryTranslation[];
}

export const SCHOOL_EXAM_CATEGORY_CATALOG: SchoolExamCategoryDefinition[] = [
  {
    code: SchoolExamCategoryCode.QUARTERLY,
    name: [
      { code: 'en', value: 'Quarterly' },
      { code: 'hi', value: 'त्रैमासिक' },
    ],
  },
  {
    code: SchoolExamCategoryCode.HALF_YEARLY,
    name: [
      { code: 'en', value: 'Half yearly' },
      { code: 'hi', value: 'अर्धवार्षिक' },
    ],
  },
  {
    code: SchoolExamCategoryCode.ANNUAL,
    name: [
      { code: 'en', value: 'Annual' },
      { code: 'hi', value: 'वार्षिक' },
    ],
  },
  {
    code: SchoolExamCategoryCode.CLASS_TEST,
    name: [
      { code: 'en', value: 'Class test' },
      { code: 'hi', value: 'कक्षा परीक्षा' },
    ],
  },
];

const STANDARD_EXAM_CODE_SET = new Set(
  SCHOOL_EXAM_CATEGORY_CATALOG.map((c) => c.code as string),
);

export function isStandardSchoolExamCategoryCode(code: string): boolean {
  return STANDARD_EXAM_CODE_SET.has(code);
}

export function getSchoolExamCategoryLabel(code: string, language = 'en'): string {
  const row = SCHOOL_EXAM_CATEGORY_CATALOG.find((c) => c.code === code);
  if (!row?.name?.length) return code;
  const lang = language === 'hi' ? 'hi' : 'en';
  const hit = row.name.find((t) => t.code === lang);
  if (hit?.value) return hit.value;
  const en = row.name.find((t) => t.code === 'en');
  if (en?.value) return en.value;
  return row.name[0]?.value ?? code;
}
