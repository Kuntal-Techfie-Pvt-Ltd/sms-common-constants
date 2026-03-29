/**
 * School Related Enums
 * Used by sms-school for school-specific operations (school_id, academic_session_id)
 */

/**
 * School Timing Slot Type
 * Used in school_timing_slots table (prayer, lunch, school start/end, recess)
 */
export enum SchoolTimingType {
  SCHOOL_START = 'SCHOOL_START',   // School assembly / morning start
  SCHOOL_END = 'SCHOOL_END',       // School dismissal
  PRAYER = 'PRAYER',               // Prayer / assembly break
  LUNCH_BREAK = 'LUNCH_BREAK',     // Lunch / mid-day meal
  RECESS = 'RECESS',               // Short break / interval
}

/**
 * School Shift
 * Used in period timings and timetable (some classes run in two shifts)
 */
export enum SchoolShift {
  MORNING = 'MORNING',
  AFTERNOON = 'AFTERNOON',
  ALL = 'ALL',
}

/**
 * Working-day codes for school_shifts.days_of_week (comma-separated VARCHAR).
 * Wire/DB format (MON…SUN) — keep stable for API consumers and stored data.
 * Distinct from DayOfWeek in common.enum (full names) by design.
 */
export enum ShiftDayOfWeekCode {
  MON = 'MON',
  TUE = 'TUE',
  WED = 'WED',
  THU = 'THU',
  FRI = 'FRI',
  SAT = 'SAT',
  SUN = 'SUN',
}

/** Calendar order Monday → Sunday for UI chips and consistent parsing */
export const SHIFT_WORKING_DAYS_ORDER: ShiftDayOfWeekCode[] = [
  ShiftDayOfWeekCode.MON,
  ShiftDayOfWeekCode.TUE,
  ShiftDayOfWeekCode.WED,
  ShiftDayOfWeekCode.THU,
  ShiftDayOfWeekCode.FRI,
  ShiftDayOfWeekCode.SAT,
  ShiftDayOfWeekCode.SUN,
];

/** Default days_of_week when creating a new shift (Mon–Sat) */
export const DEFAULT_SHIFT_WORKING_DAYS = [
  ShiftDayOfWeekCode.MON,
  ShiftDayOfWeekCode.TUE,
  ShiftDayOfWeekCode.WED,
  ShiftDayOfWeekCode.THU,
  ShiftDayOfWeekCode.FRI,
  ShiftDayOfWeekCode.SAT,
].join(',');

/**
 * Holiday Type
 * Used in school_holidays table
 */
export enum HolidayType {
  PUBLIC = 'PUBLIC',           // National / gazetted holiday
  SCHOOL = 'SCHOOL',           // School-declared holiday
  RESTRICTED = 'RESTRICTED',   // Restricted / half-day holiday
  OPTIONAL = 'OPTIONAL',       // Optional leave day
}

/**
 * Promotion Status Enum
 * NEW / PROMOTED / REPEAT
 */
export enum PromotionStatusEnum {
  NEW = 'NEW',
  PROMOTED = 'PROMOTED',
  REPEAT = 'REPEAT',
}

/**
 * Enrollment Status Enum
 * ACTIVE / COMPLETED / DROPPED
 */
export enum EnrollmentStatusEnum {
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  DROPPED = 'DROPPED',
}

/**
 * Teacher Role Enum
 * CLASS_TEACHER / SUBJECT_TEACHER
 */
export enum TeacherRoleEnum {
  CLASS_TEACHER = 'CLASS_TEACHER',
  SUBJECT_TEACHER = 'SUBJECT_TEACHER',
}

/**
 * Student Admission Type Enum
 * NEW_ADMISSION / TRANSFER / CONTINUING
 */
export enum StudentAdmissionTypeEnum {
  NEW_ADMISSION = 'NEW_ADMISSION',
  TRANSFER = 'TRANSFER',
  CONTINUING = 'CONTINUING',
}

/**
 * Student Promotion Status (for enrollment)
 * Promoted / Repeat / New
 */
export enum StudentPromotionStatus {
  PROMOTED = 'PROMOTED',
  REPEAT = 'REPEAT',
  NEW = 'NEW',
}

/**
 * Student Enrollment Status (for admission/enrollment)
 * Active / Completed / Dropped
 */
export enum StudentEnrollmentStatus {
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  DROPPED = 'DROPPED',
}

/**
 * Teacher Assign Responsibility
 * Class-teacher / Subject-teacher / Substitute
 */
export enum TeacherAssignResponsibility {
  CLASS_TEACHER = 'CLASS_TEACHER',
  SUBJECT_TEACHER = 'SUBJECT_TEACHER',
  SUBSTITUTE = 'SUBSTITUTE',
}

/**
 * Staff Assignment Type (for staff_assignments)
 */
export enum StaffAssignmentType {
  ADMINISTRATIVE = 'ADMINISTRATIVE',
  SUPPORT = 'SUPPORT',
  LABORATORY = 'LABORATORY',
  SPORTS = 'SPORTS',
  COUNSELOR = 'COUNSELOR',
  OTHER = 'OTHER',
}

/**
 * Exam Result Status
 */
export enum ExamResultStatus {
  PASS = 'PASS',
  FAIL = 'FAIL',
  ABSENT = 'ABSENT',
  WITHHELD = 'WITHHELD',
  INCOMPLETE = 'INCOMPLETE',
}

/**
 * Transport Log Event Type
 */
export enum TransportLogEventType {
  PICKUP = 'PICKUP',
  DROP = 'DROP',
  CHECK_IN = 'CHECK_IN',
  CHECK_OUT = 'CHECK_OUT',
  DELAY = 'DELAY',
  INCIDENT = 'INCIDENT',
}

/**
 * School Type Enum
 * Represents the administrative/funding classification of a school.
 */
export enum SchoolTypeEnum {
  GOVERNMENT = 'GOVERNMENT',
  PRIVATE = 'PRIVATE',
  INTERNATIONAL = 'INTERNATIONAL',
  AIDED = 'AIDED',
  UNAIDED = 'UNAIDED',
  CENTRAL = 'CENTRAL',
  AUTONOMOUS = 'AUTONOMOUS',
}

/**
 * School Type Display Labels
 */
export const SchoolTypeLabels: Record<SchoolTypeEnum, string> = {
  [SchoolTypeEnum.GOVERNMENT]: 'Government',
  [SchoolTypeEnum.PRIVATE]: 'Private',
  [SchoolTypeEnum.INTERNATIONAL]: 'International',
  [SchoolTypeEnum.AIDED]: 'Aided',
  [SchoolTypeEnum.UNAIDED]: 'Unaided',
  [SchoolTypeEnum.CENTRAL]: 'Central',
  [SchoolTypeEnum.AUTONOMOUS]: 'Autonomous',
};

/**
 * Affiliation Board Enum
 * Represents the educational board/curriculum a school is affiliated with.
 */
export enum AffiliationBoardEnum {
  CBSE = 'CBSE',
  ICSE = 'ICSE',
  IB = 'IB',
  IGCSE = 'IGCSE',
  STATE_BOARD = 'STATE_BOARD',
  NIOS = 'NIOS',
  CAMBRIDGE = 'CAMBRIDGE',
  OTHER = 'OTHER',
}

/**
 * Affiliation Board Display Labels
 */
export const AffiliationBoardLabels: Record<AffiliationBoardEnum, string> = {
  [AffiliationBoardEnum.CBSE]: 'CBSE',
  [AffiliationBoardEnum.ICSE]: 'ICSE',
  [AffiliationBoardEnum.IB]: 'IB',
  [AffiliationBoardEnum.IGCSE]: 'IGCSE',
  [AffiliationBoardEnum.STATE_BOARD]: 'State Board',
  [AffiliationBoardEnum.NIOS]: 'NIOS',
  [AffiliationBoardEnum.CAMBRIDGE]: 'Cambridge',
  [AffiliationBoardEnum.OTHER]: 'Other',
};
