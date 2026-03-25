/**
 * Attendance Related Enums
 */

/**
 * Attendance Status Enum
 * PRESENT / ABSENT / LEAVE / HALF_DAY / MEDICAL / HOLIDAY / RESTRICTED_HOLIDAY
 */
export enum AttendanceStatusEnum {
  PRESENT = 'PRESENT',
  ABSENT = 'ABSENT',
  LEAVE = 'LEAVE',
  HALF_DAY = 'HALF_DAY',
  MEDICAL = 'MEDICAL',
  HOLIDAY = 'HOLIDAY',
  RESTRICTED_HOLIDAY = 'RESTRICTED_HOLIDAY',
}

/**
 * Daily Attendance Status (used in wide daily_*_attendance tables)
 * Matches AttendanceStatusEnum — use this in daily/monthly attendance JSONB day cells.
 */
export enum DailyAttendanceStatus {
  PRESENT = 'PRESENT',
  ABSENT = 'ABSENT',
  LEAVE = 'LEAVE',
  MEDICAL = 'MEDICAL',
  HALF_DAY = 'HALF_DAY',
  HOLIDAY = 'HOLIDAY',
  RESTRICTED_HOLIDAY = 'RESTRICTED_HOLIDAY',
}

/**
 * Attendance Medium
 * How the attendance entry was captured
 * MACHINE / MOBILE / MANUAL / UPLOAD / BIOMETRIC
 */
export enum AttendanceMedium {
  MACHINE = 'MACHINE',       // Biometric punch machine (auto)
  MOBILE = 'MOBILE',         // Mobile app punch in/out by user
  MANUAL = 'MANUAL',         // Admin/teacher manual entry
  UPLOAD = 'UPLOAD',         // CSV/list bulk upload
  BIOMETRIC = 'BIOMETRIC',   // Fingerprint / face recognition
}

/**
 * Attendance Status
 */
export enum AttendanceStatus {
  PRESENT = 'PRESENT',
  ABSENT = 'ABSENT',
  LATE = 'LATE',
  HALF_DAY = 'HALF_DAY',
  EXCUSED = 'EXCUSED',
  ON_LEAVE = 'ON_LEAVE',
  HOLIDAY = 'HOLIDAY',
  SICK_LEAVE = 'SICK_LEAVE',
}

/**
 * Leave Type
 */
export enum LeaveType {
  SICK_LEAVE = 'SICK_LEAVE',
  CASUAL_LEAVE = 'CASUAL_LEAVE',
  MEDICAL_LEAVE = 'MEDICAL_LEAVE',
  EMERGENCY_LEAVE = 'EMERGENCY_LEAVE',
  MATERNITY_LEAVE = 'MATERNITY_LEAVE',
  PATERNITY_LEAVE = 'PATERNITY_LEAVE',
  BEREAVEMENT_LEAVE = 'BEREAVEMENT_LEAVE',
  AUTHORIZED_ABSENCE = 'AUTHORIZED_ABSENCE',
  UNAUTHORIZED_ABSENCE = 'UNAUTHORIZED_ABSENCE',
}

/**
 * Leave Status
 */
export enum LeaveStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  CANCELLED = 'CANCELLED',
}
