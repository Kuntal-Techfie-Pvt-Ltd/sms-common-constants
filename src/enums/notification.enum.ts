/**
 * Notification Related Enums
 */

/**
 * Notification Type
 */
export enum NotificationType {
  // General
  INFO = 'INFO',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS',

  // Academic
  ASSIGNMENT = 'ASSIGNMENT',
  EXAM_SCHEDULE = 'EXAM_SCHEDULE',
  RESULT_PUBLISHED = 'RESULT_PUBLISHED',
  ATTENDANCE_ALERT = 'ATTENDANCE_ALERT',

  // Communication
  ANNOUNCEMENT = 'ANNOUNCEMENT',
  MESSAGE = 'MESSAGE',
  REMINDER = 'REMINDER',

  // Payment
  FEE_DUE = 'FEE_DUE',
  PAYMENT_RECEIVED = 'PAYMENT_RECEIVED',
  PAYMENT_OVERDUE = 'PAYMENT_OVERDUE',

  // Event
  EVENT_INVITATION = 'EVENT_INVITATION',
  EVENT_REMINDER = 'EVENT_REMINDER',
  EVENT_CANCELLATION = 'EVENT_CANCELLATION',

  // Bus Tracking
  BUS_ARRIVAL = 'BUS_ARRIVAL',
  BUS_DEPARTURE = 'BUS_DEPARTURE',
  BUS_DELAY = 'BUS_DELAY',

  // Security
  SECURITY_ALERT = 'SECURITY_ALERT',
  VISITOR_CHECKIN = 'VISITOR_CHECKIN',

  // LMS
  NEW_CONTENT = 'NEW_CONTENT',
  LIVE_CLASS = 'LIVE_CLASS',
  COURSE_COMPLETION = 'COURSE_COMPLETION',

  // System
  SYSTEM_UPDATE = 'SYSTEM_UPDATE',
  MAINTENANCE = 'MAINTENANCE',
}

/**
 * Notification Priority
 */
export enum NotificationPriority {
  LOW = 'LOW',
  NORMAL = 'NORMAL',
  HIGH = 'HIGH',
  URGENT = 'URGENT',
}

/**
 * Notification Status
 */
export enum NotificationStatus {
  PENDING = 'PENDING',
  SENT = 'SENT',
  DELIVERED = 'DELIVERED',
  READ = 'READ',
  FAILED = 'FAILED',
  EXPIRED = 'EXPIRED',
}

/**
 * Notification Channel
 */
export enum NotificationChannel {
  EMAIL = 'EMAIL',
  SMS = 'SMS',
  PUSH = 'PUSH',
  IN_APP = 'IN_APP',
  WHATSAPP = 'WHATSAPP',
}

/**
 * Template Status
 */
export enum TemplateStatus {
  DRAFT = 'DRAFT',
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  ARCHIVED = 'ARCHIVED',
}

/**
 * Template Category
 */
export enum TemplateCategory {
  ACADEMIC = 'ACADEMIC',
  PAYMENT = 'PAYMENT',
  COMMUNICATION = 'COMMUNICATION',
  EVENT = 'EVENT',
  BUS_TRACKING = 'BUS_TRACKING',
  SECURITY = 'SECURITY',
  LMS = 'LMS',
  SYSTEM = 'SYSTEM',
  GENERAL = 'GENERAL',
}

/**
 * Notification Recipient Type
 */
export enum NotificationRecipientType {
  USER = 'USER',
  ROLE = 'ROLE',
  CLASS = 'CLASS',
  SCHOOL = 'SCHOOL',
  ALL = 'ALL',
  CUSTOM = 'CUSTOM',
}
