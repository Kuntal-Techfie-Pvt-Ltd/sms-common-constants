/**
 * Academic Related Enums
 */

/**
 * Grade/Class Level
 */
export enum GradeLevel {
  PRE_NURSERY = 'PRE_NURSERY',
  NURSERY = 'NURSERY',
  LKG = 'LKG', // Lower Kindergarten
  UKG = 'UKG', // Upper Kindergarten
  GRADE_1 = 'GRADE_1',
  GRADE_2 = 'GRADE_2',
  GRADE_3 = 'GRADE_3',
  GRADE_4 = 'GRADE_4',
  GRADE_5 = 'GRADE_5',
  GRADE_6 = 'GRADE_6',
  GRADE_7 = 'GRADE_7',
  GRADE_8 = 'GRADE_8',
  GRADE_9 = 'GRADE_9',
  GRADE_10 = 'GRADE_10',
  GRADE_11 = 'GRADE_11',
  GRADE_12 = 'GRADE_12',
}

/**
 * Grading System
 */
export enum GradingSystem {
  PERCENTAGE = 'PERCENTAGE',
  GPA = 'GPA',
  LETTER_GRADE = 'LETTER_GRADE',
  MARKS = 'MARKS',
  PASS_FAIL = 'PASS_FAIL',
}

/**
 * Letter Grades
 */
export enum LetterGrade {
  A_PLUS = 'A+',
  A = 'A',
  A_MINUS = 'A-',
  B_PLUS = 'B+',
  B = 'B',
  B_MINUS = 'B-',
  C_PLUS = 'C+',
  C = 'C',
  C_MINUS = 'C-',
  D = 'D',
  F = 'F',
}

/**
 * Exam Type
 */
export enum ExamType {
  UNIT_TEST = 'UNIT_TEST',
  MONTHLY_TEST = 'MONTHLY_TEST',
  QUARTERLY = 'QUARTERLY',
  HALF_YEARLY = 'HALF_YEARLY',
  ANNUAL = 'ANNUAL',
  MIDTERM = 'MIDTERM',
  FINAL = 'FINAL',
  PRACTICAL = 'PRACTICAL',
  VIVA = 'VIVA',
  QUIZ = 'QUIZ',
  ASSIGNMENT = 'ASSIGNMENT',
  PROJECT = 'PROJECT',
}

/**
 * Assignment Status Enum (lifecycle: active vs ended)
 * ACTIVE / ENDED
 */
export enum AssignmentStatusEnum {
  ACTIVE = 'ACTIVE',
  ENDED = 'ENDED',
}

/**
 * Assignment Status
 */
export enum AssignmentStatus {
  ASSIGNED = 'ASSIGNED',
  IN_PROGRESS = 'IN_PROGRESS',
  SUBMITTED = 'SUBMITTED',
  LATE_SUBMISSION = 'LATE_SUBMISSION',
  GRADED = 'GRADED',
  RETURNED = 'RETURNED',
  OVERDUE = 'OVERDUE',
}

/**
 * Subject Category
 */
export enum SubjectCategory {
  LANGUAGE = 'LANGUAGE',
  MATHEMATICS = 'MATHEMATICS',
  SCIENCE = 'SCIENCE',
  SOCIAL_STUDIES = 'SOCIAL_STUDIES',
  ARTS = 'ARTS',
  PHYSICAL_EDUCATION = 'PHYSICAL_EDUCATION',
  COMPUTER_SCIENCE = 'COMPUTER_SCIENCE',
  MUSIC = 'MUSIC',
  ELECTIVE = 'ELECTIVE',
  VOCATIONAL = 'VOCATIONAL',
}

/**
 * Enrollment Status
 */
export enum EnrollmentStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  ENROLLED = 'ENROLLED',
  TRANSFERRED = 'TRANSFERRED',
  WITHDRAWN = 'WITHDRAWN',
  GRADUATED = 'GRADUATED',
  SUSPENDED = 'SUSPENDED',
  EXPELLED = 'EXPELLED',
}

/**
 * Student Status
 */
export enum StudentStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  TRANSFERRED = 'TRANSFERRED',
  GRADUATED = 'GRADUATED',
  SUSPENDED = 'SUSPENDED',
  EXPELLED = 'EXPELLED',
  DROPPED_OUT = 'DROPPED_OUT',
  ON_LEAVE = 'ON_LEAVE',
}

/**
 * Promotion Status
 */
export enum PromotionStatus {
  PROMOTED = 'PROMOTED',
  DETAINED = 'DETAINED',
  CONDITIONALLY_PROMOTED = 'CONDITIONALLY_PROMOTED',
  PENDING = 'PENDING',
}
