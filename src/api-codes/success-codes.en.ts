import { ApiCodeCollection } from './api-codes.types';

/**
 * Success Response Codes (SC)
 * Format: SC{XXX} where XXX is a three-digit number
 */
export const SUCCESS_CODES: ApiCodeCollection = {
  // General Success Codes (SC001-SC020)
  COMMON_SUCCESS: {
    code: 'SC001',
    message: 'Success.',
  },
  CREATE_SUCCESS: {
    code: 'SC002',
    message: 'Created successfully.',
  },
  UPDATE_SUCCESS: {
    code: 'SC003',
    message: 'Updated successfully.',
  },
  DELETE_SUCCESS: {
    code: 'SC004',
    message: 'Deleted successfully.',
  },
  LISTING_SUCCESS: {
    code: 'SC005',
    message: 'Listing retrieved successfully.',
  },

  // Authentication Success Codes (SC021-SC040)
  LOGIN_SUCCESS: {
    code: 'SC021',
    message: 'Login successful.',
  },
  LOGOUT_SUCCESS: {
    code: 'SC022',
    message: 'Logout successful.',
  },
  REGISTER_SUCCESS: {
    code: 'SC023',
    message: 'Registration successful. Please validate your email.',
  },
  REFRESH_TOKEN_SUCCESS: {
    code: 'SC024',
    message: 'Token refreshed successfully.',
  },
  PASSWORD_CHANGE_SUCCESS: {
    code: 'SC025',
    message: 'Password changed successfully.',
  },
  FORGOT_PASSWORD_OTP_SUCCESS: {
    code: 'SC026',
    message: 'Password reset OTP sent to email.',
  },
  VALIDATION_OTP_SUCCESS: {
    code: 'SC027',
    message: 'Validation OTP sent to email.',
  },

  // Student Management Success Codes (SC041-SC060)
  STUDENT_ENROLLED_SUCCESS: {
    code: 'SC041',
    message: 'Student enrolled successfully.',
  },
  STUDENT_PROMOTED_SUCCESS: {
    code: 'SC042',
    message: 'Student promoted successfully.',
  },
  STUDENT_TRANSFERRED_SUCCESS: {
    code: 'SC043',
    message: 'Student transferred successfully.',
  },
  PARENT_LINKED_SUCCESS: {
    code: 'SC044',
    message: 'Parent linked successfully.',
  },

  // Attendance Success Codes (SC061-SC080)
  ATTENDANCE_MARKED_SUCCESS: {
    code: 'SC061',
    message: 'Attendance marked successfully.',
  },
  ATTENDANCE_UPDATED_SUCCESS: {
    code: 'SC062',
    message: 'Attendance updated successfully.',
  },

  // Academic Success Codes (SC081-SC100)
  ASSIGNMENT_SUBMITTED_SUCCESS: {
    code: 'SC081',
    message: 'Assignment submitted successfully.',
  },
  GRADE_RECORDED_SUCCESS: {
    code: 'SC082',
    message: 'Grade recorded successfully.',
  },
  EXAM_SCHEDULED_SUCCESS: {
    code: 'SC083',
    message: 'Exam scheduled successfully.',
  },
  RESULT_PUBLISHED_SUCCESS: {
    code: 'SC084',
    message: 'Result published successfully.',
  },
  TEACHER_ASSIGNED_SUCCESS: {
    code: 'SC085',
    message: 'Teacher assigned successfully.',
  },

  // Fee & Payment Success Codes (SC101-SC120)
  FEE_PAYMENT_SUCCESS: {
    code: 'SC101',
    message: 'Fee payment recorded successfully.',
  },
  REFUND_PROCESSED_SUCCESS: {
    code: 'SC102',
    message: 'Refund processed successfully.',
  },
  INVOICE_GENERATED_SUCCESS: {
    code: 'SC103',
    message: 'Invoice generated successfully.',
  },

  // Communication Success Codes (SC121-SC140)
  NOTIFICATION_SENT_SUCCESS: {
    code: 'SC121',
    message: 'Notification sent successfully.',
  },
  MESSAGE_SENT_SUCCESS: {
    code: 'SC122',
    message: 'Message sent successfully.',
  },
  EMAIL_SENT_SUCCESS: {
    code: 'SC123',
    message: 'Email sent successfully.',
  },
  SMS_SENT_SUCCESS: {
    code: 'SC124',
    message: 'SMS sent successfully.',
  },

  // Bus Tracking Success Codes (SC141-SC160)
  BUS_TRACKING_UPDATED_SUCCESS: {
    code: 'SC141',
    message: 'Bus location updated successfully.',
  },
  ROUTE_CREATED_SUCCESS: {
    code: 'SC142',
    message: 'Route created successfully.',
  },
  DRIVER_ASSIGNED_SUCCESS: {
    code: 'SC143',
    message: 'Driver assigned successfully.',
  },

  // Document Management Success Codes (SC161-SC180)
  DOCUMENT_UPLOADED_SUCCESS: {
    code: 'SC161',
    message: 'Document uploaded successfully.',
  },
  DOCUMENT_VERIFIED_SUCCESS: {
    code: 'SC162',
    message: 'Document verified successfully.',
  },
  CERTIFICATE_ISSUED_SUCCESS: {
    code: 'SC163',
    message: 'Certificate issued successfully.',
  },

  // Task Management Success Codes (SC181-SC200)
  TASK_COMPLETED_SUCCESS: {
    code: 'SC181',
    message: 'Task completed successfully.',
  },
  TASK_ASSIGNED_SUCCESS: {
    code: 'SC182',
    message: 'Task assigned successfully.',
  },

  // Report & Analytics Success Codes (SC201-SC220)
  REPORT_GENERATED_SUCCESS: {
    code: 'SC201',
    message: 'Report generated successfully.',
  },
  ANALYTICS_UPDATED_SUCCESS: {
    code: 'SC202',
    message: 'Analytics updated successfully.',
  },

  // LMS Success Codes (SC221-SC240)
  LIVE_CLASS_STARTED_SUCCESS: {
    code: 'SC221',
    message: 'Live class started successfully.',
  },
  STUDY_MATERIAL_ADDED_SUCCESS: {
    code: 'SC222',
    message: 'Study material added successfully.',
  },
  COURSE_COMPLETED_SUCCESS: {
    code: 'SC223',
    message: 'Course completed successfully.',
  },
  QUIZ_SUBMITTED_SUCCESS: {
    code: 'SC224',
    message: 'Quiz submitted successfully.',
  },

  // Security Success Codes (SC241-SC260)
  SECURITY_CHECK_COMPLETED_SUCCESS: {
    code: 'SC241',
    message: 'Security check completed successfully.',
  },
  VISITOR_REGISTERED_SUCCESS: {
    code: 'SC242',
    message: 'Visitor registered successfully.',
  },

  // Inventory Success Codes (SC261-SC280)
  INVENTORY_UPDATED_SUCCESS: {
    code: 'SC261',
    message: 'Inventory updated successfully.',
  },
  STOCK_ORDERED_SUCCESS: {
    code: 'SC262',
    message: 'Stock ordered successfully.',
  },

  // Event Management Success Codes (SC281-SC300)
  EVENT_CREATED_SUCCESS: {
    code: 'SC281',
    message: 'Event created successfully.',
  },
  EVENT_REGISTERED_SUCCESS: {
    code: 'SC282',
    message: 'Event registration successful.',
  },

  // RBAC Management Success Codes (SC301-SC340)
  ROLE_CREATED_SUCCESS: {
    code: 'SC301',
    message: 'Role created successfully.',
  },
  ROLE_UPDATED_SUCCESS: {
    code: 'SC302',
    message: 'Role updated successfully.',
  },
  ROLE_DELETED_SUCCESS: {
    code: 'SC303',
    message: 'Role deleted successfully.',
  },
  ROLE_RETRIEVED_SUCCESS: {
    code: 'SC304',
    message: 'Role retrieved successfully.',
  },
  GROUP_CREATED_SUCCESS: {
    code: 'SC305',
    message: 'Group created successfully.',
  },
  GROUP_UPDATED_SUCCESS: {
    code: 'SC306',
    message: 'Group updated successfully.',
  },
  GROUP_DELETED_SUCCESS: {
    code: 'SC307',
    message: 'Group deleted successfully.',
  },
  SCREEN_ASSIGNED_SUCCESS: {
    code: 'SC308',
    message: 'Screen assigned to group successfully.',
  },
  SCREEN_REMOVED_SUCCESS: {
    code: 'SC309',
    message: 'Screen removed from group successfully.',
  },
  ACTION_ASSIGNED_SUCCESS: {
    code: 'SC310',
    message: 'Action assigned to group screen successfully.',
  },
  ACTION_REMOVED_SUCCESS: {
    code: 'SC311',
    message: 'Action removed from group screen successfully.',
  },
  USER_ROLE_ASSIGNED_SUCCESS: {
    code: 'SC312',
    message: 'Role assigned to user successfully.',
  },
  USER_ROLE_REMOVED_SUCCESS: {
    code: 'SC313',
    message: 'Role removed from user successfully.',
  },
  USER_GROUP_ASSIGNED_SUCCESS: {
    code: 'SC314',
    message: 'Group assigned to user successfully.',
  },
  USER_GROUP_REMOVED_SUCCESS: {
    code: 'SC315',
    message: 'Group removed from user successfully.',
  },
  PERMISSIONS_RETRIEVED_SUCCESS: {
    code: 'SC316',
    message: 'User permissions retrieved successfully.',
  },
  GROUP_MAPPING_CREATED_SUCCESS: {
    code: 'SC317',
    message: 'Group mapping created successfully.',
  },
  GROUP_MAPPING_UPDATED_SUCCESS: {
    code: 'SC318',
    message: 'Group mapping updated successfully.',
  },
  MODULE_CREATED_SUCCESS: {
    code: 'SC319',
    message: 'Module created successfully.',
  },
  MODULE_UPDATED_SUCCESS: {
    code: 'SC320',
    message: 'Module updated successfully.',
  },
  MODULE_DELETED_SUCCESS: {
    code: 'SC321',
    message: 'Module deleted successfully.',
  },
  FEATURE_CREATED_SUCCESS: {
    code: 'SC322',
    message: 'Feature created successfully.',
  },
  FEATURE_UPDATED_SUCCESS: {
    code: 'SC323',
    message: 'Feature updated successfully.',
  },
  FEATURE_DELETED_SUCCESS: {
    code: 'SC324',
    message: 'Feature deleted successfully.',
  },
  SCREEN_CREATED_SUCCESS: {
    code: 'SC325',
    message: 'Screen created successfully.',
  },
  SCREEN_UPDATED_SUCCESS: {
    code: 'SC326',
    message: 'Screen updated successfully.',
  },
  SCREEN_DELETED_SUCCESS: {
    code: 'SC327',
    message: 'Screen deleted successfully.',
  },
  ACTION_CREATED_SUCCESS: {
    code: 'SC328',
    message: 'Action created successfully.',
  },
  ACTION_UPDATED_SUCCESS: {
    code: 'SC329',
    message: 'Action updated successfully.',
  },
  ACTION_DELETED_SUCCESS: {
    code: 'SC330',
    message: 'Action deleted successfully.',
  },

  // Content Management Success Codes (SC341-SC360)
  CONTENT_CREATED_SUCCESS: {
    code: 'SC341',
    message: 'Content created successfully.',
  },
  CONTENT_UPDATED_SUCCESS: {
    code: 'SC342',
    message: 'Content updated successfully.',
  },
  CONTENT_DELETED_SUCCESS: {
    code: 'SC343',
    message: 'Content deleted successfully.',
  },
  CONTENT_RETRIEVED_SUCCESS: {
    code: 'SC344',
    message: 'Content retrieved successfully.',
  },
  CONTENT_PUBLISHED_SUCCESS: {
    code: 'SC345',
    message: 'Content published successfully.',
  },
  CONTENT_UNPUBLISHED_SUCCESS: {
    code: 'SC346',
    message: 'Content unpublished successfully.',
  },
  CONTENT_BULK_UPLOAD_SUCCESS: {
    code: 'SC347',
    message: 'Content bulk upload completed successfully.',
  },

  // Master Data Success Codes (SC361-SC380)
  MASTER_DATA_CREATED_SUCCESS: {
    code: 'SC361',
    message: 'Master data created successfully.',
  },
  MASTER_DATA_UPDATED_SUCCESS: {
    code: 'SC362',
    message: 'Master data updated successfully.',
  },
  MASTER_DATA_DELETED_SUCCESS: {
    code: 'SC363',
    message: 'Master data deleted successfully.',
  },
  MASTER_DATA_RETRIEVED_SUCCESS: {
    code: 'SC364',
    message: 'Master data retrieved successfully.',
  },
  LANGUAGE_CREATED_SUCCESS: {
    code: 'SC365',
    message: 'Language created successfully.',
  },
  STATE_CREATED_SUCCESS: {
    code: 'SC366',
    message: 'State created successfully.',
  },
  SUBJECT_CREATED_SUCCESS: {
    code: 'SC367',
    message: 'Subject created successfully.',
  },
  DEPARTMENT_CREATED_SUCCESS: {
    code: 'SC368',
    message: 'Department created successfully.',
  },
  DESIGNATION_CREATED_SUCCESS: {
    code: 'SC369',
    message: 'Designation created successfully.',
  },
  GRADE_CREATED_SUCCESS: {
    code: 'SC370',
    message: 'Grade created successfully.',
  },
  HOUSE_CREATED_SUCCESS: {
    code: 'SC371',
    message: 'House created successfully.',
  },
  CURRENCY_CREATED_SUCCESS: {
    code: 'SC372',
    message: 'Currency created successfully.',
  },
  COUNTRY_CREATED_SUCCESS: {
    code: 'SC373',
    message: 'Country created successfully.',
  },
  CLASS_CREATED_SUCCESS: {
    code: 'SC374',
    message: 'Class created successfully.',
  },
  TASK_CREATED_SUCCESS: {
    code: 'SC375',
    message: 'Task created successfully.',
  },
  KNOWN_LANGUAGE_CREATED_SUCCESS: {
    code: 'SC376',
    message: 'Known language created successfully.',
  },

  // Company Operations Success Codes (SC381-SC400)
  COMPANY_CREATED_SUCCESS: {
    code: 'SC381',
    message: 'Company created successfully.',
  },
  COMPANY_UPDATED_SUCCESS: {
    code: 'SC382',
    message: 'Company updated successfully.',
  },
  COMPANY_USER_CREATED_SUCCESS: {
    code: 'SC383',
    message: 'Company user created successfully.',
  },
  COMPANY_USER_UPDATED_SUCCESS: {
    code: 'SC384',
    message: 'Company user updated successfully.',
  },
  COMPANY_USER_DELETED_SUCCESS: {
    code: 'SC385',
    message: 'Company user deleted successfully.',
  },
  SCHOOL_CREATED_SUCCESS: {
    code: 'SC386',
    message: 'School created successfully.',
  },
  SCHOOL_UPDATED_SUCCESS: {
    code: 'SC387',
    message: 'School updated successfully.',
  },
  COACHING_CREATED_SUCCESS: {
    code: 'SC388',
    message: 'Coaching provider created successfully.',
  },
  TUITION_CREATED_SUCCESS: {
    code: 'SC389',
    message: 'Tuition provider created successfully.',
  },
  SETTINGS_UPDATED_SUCCESS: {
    code: 'SC390',
    message: 'Settings updated successfully.',
  },
  SETTINGS_RETRIEVED_SUCCESS: {
    code: 'SC391',
    message: 'Settings retrieved successfully.',
  },
  SUBSCRIPTION_ACTIVATED_SUCCESS: {
    code: 'SC392',
    message: 'Subscription activated successfully.',
  },
  SUBSCRIPTION_DEACTIVATED_SUCCESS: {
    code: 'SC393',
    message: 'Subscription deactivated successfully.',
  },
  ORGANIZATION_ASSIGNED_SUCCESS: {
    code: 'SC394',
    message: 'Organization assigned successfully.',
  },
};
