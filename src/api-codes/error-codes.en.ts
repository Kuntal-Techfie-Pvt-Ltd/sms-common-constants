import { ApiCodeCollection } from './api-codes.types';

/**
 * Error Response Codes (EC)
 * Format: EC{XXX} where XXX is a three-digit number
 *
 * Categories:
 * EC001-EC020: General Errors
 * EC021-EC050: Authentication & Authorization Errors
 * EC051-EC100: User & Role Errors
 * EC101-EC150: Student Management Errors
 * EC151-EC200: Academic Errors
 * EC201-EC250: Fee & Payment Errors
 * EC251-EC300: Communication Errors
 * EC301-EC350: Bus Tracking Errors
 * EC351-EC400: Document & File Errors
 * EC401-EC450: Task & Assignment Errors
 * EC451-EC500: LMS Errors
 * EC501-EC550: Event & Extra-Curricular Errors
 * EC551-EC600: Infrastructure Errors
 * EC601-EC650: HR & Payroll Errors
 * EC651-EC700: Library & Resources Errors
 * EC701-EC750: Research & IP Errors
 * EC751-EC800: Alumni & Fundraising Errors
 */
export const ERROR_CODES: ApiCodeCollection = {
  // General Errors (EC001-EC020)
  UNKNOWN_ERROR: {
    code: 'EC001',
    message: 'Unknown error occurred.',
  },
  INTERNAL_SERVER_ERROR: {
    code: 'EC002',
    message: 'Internal server error.',
  },
  NOT_FOUND: {
    code: 'EC003',
    message: 'Record not found.',
  },
  VALIDATION_ERROR: {
    code: 'EC004',
    message: 'Validation error. Please enter valid data.',
  },
  PAYLOAD_MISMATCH: {
    code: 'EC005',
    message: 'Mandatory field not passed.',
  },
  INVALID_DATA: {
    code: 'EC006',
    message: 'Invalid data provided.',
  },
  DUPLICATE_NOT_ALLOWED: {
    code: 'EC007',
    message: 'Duplicate entry not allowed.',
  },
  UPDATE_NOT_POSSIBLE: {
    code: 'EC008',
    message: 'Unable to update record.',
  },
  DATE_RANGE_VALIDATION: {
    code: 'EC009',
    message: 'Start date must be before end date.',
  },

  // Authentication & Authorization Errors (EC021-EC050)
  AUTHENTICATION_ERROR: {
    code: 'EC021',
    message: 'Please authenticate.',
  },
  INVALID_TOKEN: {
    code: 'EC022',
    message: 'Invalid or expired token.',
  },
  INVALID_EMAIL_OR_PASSWORD: {
    code: 'EC023',
    message: 'Incorrect email or password.',
  },
  INVALID_OTP: {
    code: 'EC024',
    message: 'Invalid OTP.',
  },
  OTP_EXPIRED: {
    code: 'EC025',
    message: 'OTP expired. Please request a new one.',
  },
  INVALID_OTP_WITH_ATTEMPTS: {
    code: 'EC026',
    message: 'Invalid OTP. You have <remaining_attempts>/<max_attempts> attempts left.',
  },
  ACCOUNT_LOCKED: {
    code: 'EC027',
    message: 'Account locked due to multiple failed attempts. Try again after <lock_time> minutes.',
  },
  FORBIDDEN: {
    code: 'EC028',
    message: 'Access forbidden.',
  },
  MISSING_PERMISSION_FOR_REQUEST: {
    code: 'EC029',
    message: 'User does not have permission for this operation.',
  },
  INSUFFICIENT_USER_PRIVILEGE: {
    code: 'EC030',
    message: 'Insufficient user privilege. Contact administrator.',
  },

  // User & Role Errors (EC051-EC100)
  USER_NOT_FOUND: {
    code: 'EC051',
    message: 'User not found.',
  },
  EMAIL_TAKEN: {
    code: 'EC052',
    message: 'Email already registered.',
  },
  NOT_VALID_EMAIL: {
    code: 'EC053',
    message: 'Invalid email address.',
  },
  PASSWORD_NOT_FOUND: {
    code: 'EC054',
    message: 'Password not set.',
  },
  PASSWORD_NOT_MATCHED: {
    code: 'EC055',
    message: 'Passwords do not match.',
  },
  USER_DEACTIVATED: {
    code: 'EC056',
    message: 'User account is deactivated.',
  },
  INVALID_ROLE: {
    code: 'EC057',
    message: 'Invalid user role.',
  },
  INVALID_MOBILE_NUMBER: {
    code: 'EC058',
    message: 'Invalid mobile number.',
  },
  INVALID_DIAL_CODE: {
    code: 'EC059',
    message: 'Invalid country dial code.',
  },

  // Student Management Errors (EC101-EC150)
  STUDENT_NOT_FOUND: {
    code: 'EC101',
    message: 'Student not found.',
  },
  STUDENT_ALREADY_ENROLLED: {
    code: 'EC102',
    message: 'Student already enrolled in this class.',
  },
  STUDENT_SUSPENDED: {
    code: 'EC103',
    message: 'Student is suspended.',
  },
  STUDENT_ALREADY_GRADUATED: {
    code: 'EC104',
    message: 'Student has already graduated.',
  },
  PARENT_NOT_FOUND: {
    code: 'EC105',
    message: 'Parent not found.',
  },
  STUDENT_PARENT_MISMATCH: {
    code: 'EC106',
    message: 'Student and parent relationship not found.',
  },
  PARENT_CONSENT_REQUIRED: {
    code: 'EC107',
    message: 'Parent consent required.',
  },
  INVALID_ENROLLMENT_DATE: {
    code: 'EC108',
    message: 'Invalid enrollment date.',
  },
  TRANSFER_REQUEST_NOT_FOUND: {
    code: 'EC109',
    message: 'Transfer request not found.',
  },
  TRANSFER_ALREADY_PROCESSED: {
    code: 'EC110',
    message: 'Transfer request already processed.',
  },
  EMERGENCY_CONTACT_NOT_FOUND: {
    code: 'EC111',
    message: 'Emergency contact not found.',
  },
  MEDICAL_RECORD_NOT_FOUND: {
    code: 'EC112',
    message: 'Medical record not found.',
  },
  ALLERGY_INFORMATION_REQUIRED: {
    code: 'EC113',
    message: 'Allergy information required.',
  },

  // School & Class Errors (EC151-EC180)
  SCHOOL_NOT_FOUND: {
    code: 'EC151',
    message: 'School not found.',
  },
  CLASS_NOT_FOUND: {
    code: 'EC152',
    message: 'Class not found.',
  },
  CLASS_CAPACITY_EXCEEDED: {
    code: 'EC153',
    message: 'Class capacity exceeded.',
  },
  CLASS_CANCELLED: {
    code: 'EC154',
    message: 'Class has been cancelled.',
  },
  SUBJECT_NOT_FOUND: {
    code: 'EC155',
    message: 'Subject not found.',
  },
  SECTION_NOT_FOUND: {
    code: 'EC156',
    message: 'Section not found.',
  },
  CLASSROOM_UNAVAILABLE: {
    code: 'EC157',
    message: 'Classroom not available.',
  },
  DEPARTMENT_NOT_FOUND: {
    code: 'EC158',
    message: 'Department not found.',
  },

  // Teacher & Staff Errors (EC181-EC200)
  TEACHER_NOT_FOUND: {
    code: 'EC159',
    message: 'Teacher not found.',
  },
  TEACHER_ON_LEAVE: {
    code: 'EC160',
    message: 'Teacher is on leave.',
  },
  TEACHER_UNAVAILABLE: {
    code: 'EC161',
    message: 'Teacher not available at this time.',
  },
  SUBSTITUTE_TEACHER_NOT_FOUND: {
    code: 'EC162',
    message: 'Substitute teacher not found.',
  },
  STAFF_NOT_FOUND: {
    code: 'EC163',
    message: 'Staff member not found.',
  },

  // Academic & Examination Errors (EC201-EC250)
  ASSIGNMENT_NOT_FOUND: {
    code: 'EC201',
    message: 'Assignment not found.',
  },
  ASSIGNMENT_SUBMISSION_CLOSED: {
    code: 'EC202',
    message: 'Assignment submission deadline has passed.',
  },
  EXAM_NOT_FOUND: {
    code: 'EC203',
    message: 'Exam not found.',
  },
  EXAM_ALREADY_SCHEDULED: {
    code: 'EC204',
    message: 'Exam already scheduled at this time.',
  },
  INVALID_EXAM_DATE: {
    code: 'EC205',
    message: 'Invalid exam date.',
  },
  GRADE_NOT_FOUND: {
    code: 'EC206',
    message: 'Grade not found.',
  },
  INVALID_GRADE_VALUE: {
    code: 'EC207',
    message: 'Invalid grade value.',
  },
  RESULT_NOT_FOUND: {
    code: 'EC208',
    message: 'Result not found.',
  },
  RESULT_ALREADY_PUBLISHED: {
    code: 'EC209',
    message: 'Result already published.',
  },
  HOMEWORK_NOT_FOUND: {
    code: 'EC210',
    message: 'Homework not found.',
  },
  HOMEWORK_ALREADY_SUBMITTED: {
    code: 'EC211',
    message: 'Homework already submitted.',
  },
  PROJECT_NOT_FOUND: {
    code: 'EC212',
    message: 'Project not found.',
  },
  PROJECT_SUBMISSION_CLOSED: {
    code: 'EC213',
    message: 'Project submission deadline has passed.',
  },

  // Curriculum & Syllabus Errors (EC251-EC270)
  CURRICULUM_NOT_FOUND: {
    code: 'EC251',
    message: 'Curriculum not found.',
  },
  SYLLABUS_NOT_FOUND: {
    code: 'EC252',
    message: 'Syllabus not found.',
  },
  LESSON_PLAN_NOT_FOUND: {
    code: 'EC253',
    message: 'Lesson plan not found.',
  },
  COURSE_NOT_FOUND: {
    code: 'EC254',
    message: 'Course not found.',
  },

  // Fee & Payment Errors (EC271-EC300)
  FEE_STRUCTURE_NOT_FOUND: {
    code: 'EC271',
    message: 'Fee structure not found.',
  },
  FEE_ALREADY_PAID: {
    code: 'EC272',
    message: 'Fee already paid.',
  },
  INVALID_FEE_AMOUNT: {
    code: 'EC273',
    message: 'Invalid fee amount.',
  },
  PAYMENT_FAILED: {
    code: 'EC274',
    message: 'Payment failed.',
  },
  PAYMENT_PENDING: {
    code: 'EC275',
    message: 'Payment is pending.',
  },
  PAYMENT_GATEWAY_ERROR: {
    code: 'EC276',
    message: 'Payment gateway error.',
  },
  REFUND_NOT_POSSIBLE: {
    code: 'EC277',
    message: 'Refund not possible.',
  },

  // Communication Errors (EC301-EC330)
  NOTIFICATION_FAILED: {
    code: 'EC301',
    message: 'Failed to send notification.',
  },
  EMAIL_ERROR: {
    code: 'EC302',
    message: 'Unable to send email.',
  },
  SMS_ERROR: {
    code: 'EC303',
    message: 'Unable to send SMS.',
  },
  MESSAGE_DELIVERY_FAILED: {
    code: 'EC304',
    message: 'Message delivery failed.',
  },
  COMMUNICATION_NOT_FOUND: {
    code: 'EC305',
    message: 'Communication record not found.',
  },

  // Attendance Errors (EC331-EC350)
  ATTENDANCE_ALREADY_MARKED: {
    code: 'EC331',
    message: 'Attendance already marked for this date.',
  },
  INVALID_ATTENDANCE_STATUS: {
    code: 'EC332',
    message: 'Invalid attendance status.',
  },
  SCHOOL_HOURS_EXCEEDED: {
    code: 'EC333',
    message: 'Attendance marking outside school hours.',
  },

  // Bus Tracking & Transport Errors (EC351-EC380)
  BUS_NOT_FOUND: {
    code: 'EC351',
    message: 'Bus not found.',
  },
  BUS_ROUTE_NOT_FOUND: {
    code: 'EC352',
    message: 'Bus route not found.',
  },
  DRIVER_NOT_FOUND: {
    code: 'EC353',
    message: 'Driver not found.',
  },
  DRIVER_UNAVAILABLE: {
    code: 'EC354',
    message: 'Driver not available.',
  },
  INVALID_BUS_LOCATION: {
    code: 'EC355',
    message: 'Invalid bus location.',
  },
  TRANSPORT_ROUTE_NOT_AVAILABLE: {
    code: 'EC356',
    message: 'Transport route not available.',
  },
  BUS_MAINTENANCE_REQUIRED: {
    code: 'EC357',
    message: 'Bus under maintenance.',
  },

  // Document & File Errors (EC381-EC400)
  DOCUMENT_NOT_FOUND: {
    code: 'EC381',
    message: 'Document not found.',
  },
  FILE_NOT_FOUND: {
    code: 'EC382',
    message: 'File not found.',
  },
  FILE_UPLOAD_ERROR: {
    code: 'EC383',
    message: 'File upload failed.',
  },
  INVALID_FILE_FORMAT: {
    code: 'EC384',
    message: 'Invalid file format.',
  },
  FILE_SIZE_EXCEEDED: {
    code: 'EC385',
    message: 'File size exceeded limit.',
  },
  CERTIFICATE_NOT_FOUND: {
    code: 'EC386',
    message: 'Certificate not found.',
  },
  CERTIFICATE_ALREADY_ISSUED: {
    code: 'EC387',
    message: 'Certificate already issued.',
  },

  // Task & Assignment Errors (EC401-EC420)
  TASK_NOT_FOUND: {
    code: 'EC401',
    message: 'Task not found.',
  },
  TASK_ALREADY_COMPLETED: {
    code: 'EC402',
    message: 'Task already completed.',
  },

  // Report & Analytics Errors (EC421-EC440)
  REPORT_GENERATION_FAILED: {
    code: 'EC421',
    message: 'Failed to generate report.',
  },
  INSUFFICIENT_DATA_FOR_REPORT: {
    code: 'EC422',
    message: 'Insufficient data for report generation.',
  },

  // LMS Errors (EC441-EC470)
  LIVE_CLASS_NOT_AVAILABLE: {
    code: 'EC441',
    message: 'Live class not available.',
  },
  STUDY_MATERIAL_NOT_FOUND: {
    code: 'EC442',
    message: 'Study material not found.',
  },
  QUIZ_NOT_FOUND: {
    code: 'EC443',
    message: 'Quiz not found.',
  },
  QUIZ_ALREADY_SUBMITTED: {
    code: 'EC444',
    message: 'Quiz already submitted.',
  },

  // Event & Extra-Curricular Errors (EC471-EC500)
  EVENT_NOT_FOUND: {
    code: 'EC471',
    message: 'Event not found.',
  },
  EVENT_REGISTRATION_CLOSED: {
    code: 'EC472',
    message: 'Event registration closed.',
  },
  FIELD_TRIP_NOT_FOUND: {
    code: 'EC473',
    message: 'Field trip not found.',
  },
  FIELD_TRIP_REGISTRATION_CLOSED: {
    code: 'EC474',
    message: 'Field trip registration closed.',
  },
  SPORTS_TEAM_NOT_FOUND: {
    code: 'EC475',
    message: 'Sports team not found.',
  },
  TEAM_CAPACITY_EXCEEDED: {
    code: 'EC476',
    message: 'Team capacity exceeded.',
  },
  CLUB_NOT_FOUND: {
    code: 'EC477',
    message: 'Club not found.',
  },
  CLUB_MEMBERSHIP_FULL: {
    code: 'EC478',
    message: 'Club membership is full.',
  },
  EXTRA_CURRICULAR_NOT_FOUND: {
    code: 'EC479',
    message: 'Extra-curricular activity not found.',
  },
  EXTRA_CURRICULAR_REGISTRATION_CLOSED: {
    code: 'EC480',
    message: 'Extra-curricular registration closed.',
  },

  // Infrastructure & Facility Errors (EC501-EC530)
  FACILITY_NOT_AVAILABLE: {
    code: 'EC501',
    message: 'Facility not available.',
  },
  BOOKING_CONFLICT: {
    code: 'EC502',
    message: 'Booking conflict detected.',
  },
  LAB_NOT_FOUND: {
    code: 'EC503',
    message: 'Laboratory not found.',
  },
  LAB_BOOKING_NOT_AVAILABLE: {
    code: 'EC504',
    message: 'Laboratory booking not available.',
  },
  EQUIPMENT_NOT_FOUND: {
    code: 'EC505',
    message: 'Equipment not found.',
  },
  EQUIPMENT_UNAVAILABLE: {
    code: 'EC506',
    message: 'Equipment not available.',
  },
  RESOURCE_NOT_FOUND: {
    code: 'EC507',
    message: 'Resource not found.',
  },
  RESOURCE_UNAVAILABLE: {
    code: 'EC508',
    message: 'Resource not available.',
  },
  INVENTORY_ITEM_NOT_FOUND: {
    code: 'EC509',
    message: 'Inventory item not found.',
  },
  INSUFFICIENT_INVENTORY: {
    code: 'EC510',
    message: 'Insufficient inventory.',
  },
  MAINTENANCE_REQUEST_NOT_FOUND: {
    code: 'EC511',
    message: 'Maintenance request not found.',
  },
  MAINTENANCE_ALREADY_SCHEDULED: {
    code: 'EC512',
    message: 'Maintenance already scheduled.',
  },

  // Scheduling & Timetable Errors (EC531-EC550)
  SCHEDULE_CONFLICT: {
    code: 'EC531',
    message: 'Schedule conflict detected.',
  },
  TIMETABLE_NOT_FOUND: {
    code: 'EC532',
    message: 'Timetable not found.',
  },
  TIMETABLE_CONFLICT: {
    code: 'EC533',
    message: 'Timetable conflict detected.',
  },
  CALENDAR_EVENT_NOT_FOUND: {
    code: 'EC534',
    message: 'Calendar event not found.',
  },
  HOLIDAY_NOT_FOUND: {
    code: 'EC535',
    message: 'Holiday not found.',
  },
  SCHOOL_YEAR_NOT_FOUND: {
    code: 'EC536',
    message: 'School year not found.',
  },
  INVALID_SCHOOL_YEAR: {
    code: 'EC537',
    message: 'Invalid school year.',
  },
  SEMESTER_NOT_FOUND: {
    code: 'EC538',
    message: 'Semester not found.',
  },
  INVALID_SEMESTER: {
    code: 'EC539',
    message: 'Invalid semester.',
  },

  // HR & Payroll Errors (EC551-EC580)
  POSITION_NOT_FOUND: {
    code: 'EC551',
    message: 'Position not found.',
  },
  SALARY_NOT_FOUND: {
    code: 'EC552',
    message: 'Salary record not found.',
  },
  PAYROLL_NOT_FOUND: {
    code: 'EC553',
    message: 'Payroll not found.',
  },
  LEAVE_REQUEST_NOT_FOUND: {
    code: 'EC554',
    message: 'Leave request not found.',
  },
  LEAVE_ALREADY_APPROVED: {
    code: 'EC555',
    message: 'Leave already approved.',
  },
  INSUFFICIENT_LEAVE_BALANCE: {
    code: 'EC556',
    message: 'Insufficient leave balance.',
  },
  TRAINING_NOT_FOUND: {
    code: 'EC557',
    message: 'Training not found.',
  },
  TRAINING_REGISTRATION_CLOSED: {
    code: 'EC558',
    message: 'Training registration closed.',
  },
  PERFORMANCE_REVIEW_NOT_FOUND: {
    code: 'EC559',
    message: 'Performance review not found.',
  },
  PERFORMANCE_REVIEW_ALREADY_DONE: {
    code: 'EC560',
    message: 'Performance review already completed.',
  },

  // Library & Resources Errors (EC581-EC600)
  LIBRARY_BOOK_NOT_FOUND: {
    code: 'EC581',
    message: 'Library book not found.',
  },
  BOOK_ALREADY_ISSUED: {
    code: 'EC582',
    message: 'Book already issued.',
  },
  BOOK_OVERDUE: {
    code: 'EC583',
    message: 'Book return overdue.',
  },

  // Security Errors (EC601-EC620)
  SECURITY_GUARD_NOT_FOUND: {
    code: 'EC601',
    message: 'Security guard not found.',
  },
  SECURITY_CHECK_FAILED: {
    code: 'EC602',
    message: 'Security check failed.',
  },
  VISITOR_NOT_FOUND: {
    code: 'EC603',
    message: 'Visitor not found.',
  },

  // Feedback & Survey Errors (EC621-EC640)
  FEEDBACK_NOT_FOUND: {
    code: 'EC621',
    message: 'Feedback not found.',
  },
  SURVEY_NOT_FOUND: {
    code: 'EC622',
    message: 'Survey not found.',
  },
  SURVEY_ALREADY_COMPLETED: {
    code: 'EC623',
    message: 'Survey already completed.',
  },
  SURVEY_EXPIRED: {
    code: 'EC624',
    message: 'Survey has expired.',
  },

  // Disciplinary & Achievement Errors (EC641-EC660)
  DISCIPLINARY_ACTION_NOT_FOUND: {
    code: 'EC641',
    message: 'Disciplinary action not found.',
  },
  DISCIPLINARY_ACTION_ALREADY_RECORDED: {
    code: 'EC642',
    message: 'Disciplinary action already recorded.',
  },
  ACHIEVEMENT_NOT_FOUND: {
    code: 'EC643',
    message: 'Achievement not found.',
  },
  ACHIEVEMENT_ALREADY_AWARDED: {
    code: 'EC644',
    message: 'Achievement already awarded.',
  },

  // Parent Meeting Errors (EC661-EC670)
  PARENT_MEETING_NOT_FOUND: {
    code: 'EC661',
    message: 'Parent meeting not found.',
  },
  PARENT_MEETING_ALREADY_SCHEDULED: {
    code: 'EC662',
    message: 'Parent meeting already scheduled.',
  },

  // Volunteer & Community Errors (EC671-EC680)
  VOLUNTEER_OPPORTUNITY_NOT_FOUND: {
    code: 'EC671',
    message: 'Volunteer opportunity not found.',
  },
  VOLUNTEER_REGISTRATION_CLOSED: {
    code: 'EC672',
    message: 'Volunteer registration closed.',
  },

  // Financial Aid & Scholarship Errors (EC681-EC700)
  SCHOLARSHIP_NOT_FOUND: {
    code: 'EC681',
    message: 'Scholarship not found.',
  },
  SCHOLARSHIP_APPLICATION_CLOSED: {
    code: 'EC682',
    message: 'Scholarship application closed.',
  },
  SCHOLARSHIP_ALREADY_APPLIED: {
    code: 'EC683',
    message: 'Scholarship already applied.',
  },
  FINANCIAL_AID_NOT_FOUND: {
    code: 'EC684',
    message: 'Financial aid not found.',
  },
  FINANCIAL_AID_ALREADY_APPLIED: {
    code: 'EC685',
    message: 'Financial aid already applied.',
  },

  // Research & IP Errors (EC701-EC730)
  RESEARCH_PROJECT_NOT_FOUND: {
    code: 'EC701',
    message: 'Research project not found.',
  },
  RESEARCH_PROJECT_ALREADY_STARTED: {
    code: 'EC702',
    message: 'Research project already started.',
  },
  GRANT_NOT_FOUND: {
    code: 'EC703',
    message: 'Grant not found.',
  },
  GRANT_ALREADY_APPLIED: {
    code: 'EC704',
    message: 'Grant already applied.',
  },
  PUBLICATION_NOT_FOUND: {
    code: 'EC705',
    message: 'Publication not found.',
  },
  PUBLICATION_ALREADY_SUBMITTED: {
    code: 'EC706',
    message: 'Publication already submitted.',
  },
  PATENT_NOT_FOUND: {
    code: 'EC707',
    message: 'Patent not found.',
  },
  PATENT_ALREADY_FILED: {
    code: 'EC708',
    message: 'Patent already filed.',
  },
  INTELLECTUAL_PROPERTY_NOT_FOUND: {
    code: 'EC709',
    message: 'Intellectual property not found.',
  },
  INTELLECTUAL_PROPERTY_ALREADY_REGISTERED: {
    code: 'EC710',
    message: 'Intellectual property already registered.',
  },
  TRADEMARK_NOT_FOUND: {
    code: 'EC711',
    message: 'Trademark not found.',
  },
  TRADEMARK_ALREADY_REGISTERED: {
    code: 'EC712',
    message: 'Trademark already registered.',
  },
  COPYRIGHT_NOT_FOUND: {
    code: 'EC713',
    message: 'Copyright not found.',
  },
  COPYRIGHT_ALREADY_REGISTERED: {
    code: 'EC714',
    message: 'Copyright already registered.',
  },

  // Alumni & Fundraising Errors (EC731-EC760)
  ALUMNI_NOT_FOUND: {
    code: 'EC731',
    message: 'Alumni not found.',
  },
  ALUMNI_ALREADY_REGISTERED: {
    code: 'EC732',
    message: 'Alumni already registered.',
  },
  DONATION_NOT_FOUND: {
    code: 'EC733',
    message: 'Donation not found.',
  },
  DONATION_ALREADY_PROCESSED: {
    code: 'EC734',
    message: 'Donation already processed.',
  },
  FUNDRAISER_NOT_FOUND: {
    code: 'EC735',
    message: 'Fundraiser not found.',
  },
  FUNDRAISER_ALREADY_COMPLETED: {
    code: 'EC736',
    message: 'Fundraiser already completed.',
  },

  // Partnership & Collaboration Errors (EC761-EC780)
  SPONSORSHIP_NOT_FOUND: {
    code: 'EC761',
    message: 'Sponsorship not found.',
  },
  SPONSORSHIP_ALREADY_ACTIVE: {
    code: 'EC762',
    message: 'Sponsorship already active.',
  },
  PARTNERSHIP_NOT_FOUND: {
    code: 'EC763',
    message: 'Partnership not found.',
  },
  PARTNERSHIP_ALREADY_ESTABLISHED: {
    code: 'EC764',
    message: 'Partnership already established.',
  },
  COLLABORATION_NOT_FOUND: {
    code: 'EC765',
    message: 'Collaboration not found.',
  },
  COLLABORATION_ALREADY_ACTIVE: {
    code: 'EC766',
    message: 'Collaboration already active.',
  },

  // Integration & System Errors (EC781-EC800)
  INTEGRATION_ERROR: {
    code: 'EC781',
    message: 'Integration token is invalid.',
  },
  API_KEY_INVALID: {
    code: 'EC782',
    message: 'Invalid API key.',
  },
  API_KEY_EXPIRED: {
    code: 'EC783',
    message: 'API key expired.',
  },
  RATE_LIMIT_EXCEEDED: {
    code: 'EC784',
    message: 'Rate limit exceeded.',
  },
  SERVICE_UNAVAILABLE: {
    code: 'EC785',
    message: 'Service temporarily unavailable.',
  },

  // RBAC Management Errors (EC801-EC840)
  ROLE_NOT_FOUND: {
    code: 'EC801',
    message: 'Role not found.',
  },
  ROLE_ALREADY_EXISTS: {
    code: 'EC802',
    message: 'Role with this name already exists.',
  },
  ROLE_IN_USE: {
    code: 'EC803',
    message: 'Role is in use and cannot be deleted.',
  },
  GROUP_NOT_FOUND: {
    code: 'EC804',
    message: 'Group not found.',
  },
  GROUP_ALREADY_EXISTS: {
    code: 'EC805',
    message: 'Group with this name already exists.',
  },
  GROUP_IN_USE: {
    code: 'EC806',
    message: 'Group is in use and cannot be deleted.',
  },
  SCREEN_NOT_FOUND: {
    code: 'EC807',
    message: 'Screen not found.',
  },
  SCREEN_ALREADY_EXISTS: {
    code: 'EC808',
    message: 'Screen with this name already exists.',
  },
  SCREEN_ALREADY_ASSIGNED: {
    code: 'EC809',
    message: 'Screen is already assigned to this group.',
  },
  SCREEN_NOT_ASSIGNED: {
    code: 'EC810',
    message: 'Screen is not assigned to this group.',
  },
  ACTION_NOT_FOUND: {
    code: 'EC811',
    message: 'Action not found.',
  },
  ACTION_ALREADY_EXISTS: {
    code: 'EC812',
    message: 'Action with this name already exists.',
  },
  ACTION_ALREADY_ASSIGNED: {
    code: 'EC813',
    message: 'Action is already assigned to this group screen.',
  },
  ACTION_NOT_ASSIGNED: {
    code: 'EC814',
    message: 'Action is not assigned to this group screen.',
  },
  USER_ROLE_ALREADY_ASSIGNED: {
    code: 'EC815',
    message: 'Role is already assigned to this user.',
  },
  USER_ROLE_NOT_ASSIGNED: {
    code: 'EC816',
    message: 'Role is not assigned to this user.',
  },
  USER_GROUP_ALREADY_ASSIGNED: {
    code: 'EC817',
    message: 'Group is already assigned to this user.',
  },
  USER_GROUP_NOT_ASSIGNED: {
    code: 'EC818',
    message: 'Group is not assigned to this user.',
  },
  PERMISSION_DENIED: {
    code: 'EC819',
    message: 'Permission denied for this operation.',
  },
  INVALID_ROLE_TYPE: {
    code: 'EC820',
    message: 'Invalid role type specified.',
  },
  INVALID_ENTITY_TYPE: {
    code: 'EC821',
    message: 'Invalid entity type specified.',
  },
  GROUP_MAPPING_NOT_FOUND: {
    code: 'EC822',
    message: 'Group mapping not found.',
  },
  GROUP_MAPPING_ALREADY_EXISTS: {
    code: 'EC823',
    message: 'Group mapping already exists.',
  },
  MODULE_NOT_FOUND: {
    code: 'EC824',
    message: 'Module not found.',
  },
  MODULE_ALREADY_EXISTS: {
    code: 'EC825',
    message: 'Module with this name already exists.',
  },
  MODULE_IN_USE: {
    code: 'EC826',
    message: 'Module is in use and cannot be deleted.',
  },
  FEATURE_NOT_FOUND: {
    code: 'EC827',
    message: 'Feature not found.',
  },
  FEATURE_ALREADY_EXISTS: {
    code: 'EC828',
    message: 'Feature with this name already exists in this module.',
  },
  FEATURE_IN_USE: {
    code: 'EC829',
    message: 'Feature is in use and cannot be deleted.',
  },
  INVALID_MODULE_ID: {
    code: 'EC830',
    message: 'Invalid module ID provided.',
  },
  PARENT_MODULE_NOT_FOUND: {
    code: 'EC831',
    message: 'Parent module not found.',
  },
  CIRCULAR_MODULE_DEPENDENCY: {
    code: 'EC832',
    message: 'Circular dependency detected in module hierarchy.',
  },

  // Content Management Errors (EC841-EC860)
  CONTENT_NOT_FOUND: {
    code: 'EC841',
    message: 'Content not found.',
  },
  CONTENT_ALREADY_EXISTS: {
    code: 'EC842',
    message: 'Content with this key and language already exists.',
  },
  CONTENT_KEY_REQUIRED: {
    code: 'EC843',
    message: 'Content key is required.',
  },
  INVALID_CONTENT_FORMAT: {
    code: 'EC844',
    message: 'Invalid content format provided.',
  },
  CONTENT_NOT_PUBLISHED: {
    code: 'EC845',
    message: 'Content is not published.',
  },
  CONTENT_ALREADY_PUBLISHED: {
    code: 'EC846',
    message: 'Content is already published.',
  },
  LANGUAGE_CODE_REQUIRED: {
    code: 'EC847',
    message: 'Language code is required.',
  },
  INVALID_LANGUAGE_CODE: {
    code: 'EC848',
    message: 'Invalid language code provided.',
  },
  CONTENT_BULK_UPLOAD_FAILED: {
    code: 'EC849',
    message: 'Content bulk upload failed.',
  },
  CONTENT_VERSION_NOT_FOUND: {
    code: 'EC850',
    message: 'Content version not found.',
  },

  // Master Data Errors (EC861-EC880)
  MASTER_DATA_NOT_FOUND: {
    code: 'EC861',
    message: 'Master data not found.',
  },
  MASTER_DATA_ALREADY_EXISTS: {
    code: 'EC862',
    message: 'Master data with this name already exists.',
  },
  LANGUAGE_NOT_FOUND: {
    code: 'EC863',
    message: 'Language not found.',
  },
  LANGUAGE_ALREADY_EXISTS: {
    code: 'EC864',
    message: 'Language with this code already exists.',
  },
  STATE_NOT_FOUND: {
    code: 'EC865',
    message: 'State not found.',
  },
  STATE_ALREADY_EXISTS: {
    code: 'EC866',
    message: 'State with this name already exists.',
  },
  SUBJECT_ALREADY_EXISTS: {
    code: 'EC868',
    message: 'Subject with this name already exists.',
  },
  DEPARTMENT_ALREADY_EXISTS: {
    code: 'EC870',
    message: 'Department with this name already exists.',
  },
  DESIGNATION_NOT_FOUND: {
    code: 'EC871',
    message: 'Designation not found.',
  },
  DESIGNATION_ALREADY_EXISTS: {
    code: 'EC872',
    message: 'Designation with this name already exists.',
  },
  GRADE_ALREADY_EXISTS: {
    code: 'EC874',
    message: 'Grade with this name already exists.',
  },
  HOUSE_NOT_FOUND: {
    code: 'EC875',
    message: 'House not found.',
  },
  HOUSE_ALREADY_EXISTS: {
    code: 'EC876',
    message: 'House with this name already exists.',
  },
  CURRENCY_NOT_FOUND: {
    code: 'EC877',
    message: 'Currency not found.',
  },
  CURRENCY_ALREADY_EXISTS: {
    code: 'EC878',
    message: 'Currency with this code already exists.',
  },
  COUNTRY_NOT_FOUND: {
    code: 'EC879',
    message: 'Country not found.',
  },
  COUNTRY_ALREADY_EXISTS: {
    code: 'EC880',
    message: 'Country with this code already exists.',
  },
  CLASS_ALREADY_EXISTS: {
    code: 'EC882',
    message: 'Class with this name already exists.',
  },
  TASK_ALREADY_EXISTS: {
    code: 'EC884',
    message: 'Task with this name already exists.',
  },
  KNOWN_LANGUAGE_NOT_FOUND: {
    code: 'EC885',
    message: 'Known language not found.',
  },
  KNOWN_LANGUAGE_ALREADY_EXISTS: {
    code: 'EC886',
    message: 'Known language already exists.',
  },
  INVALID_MASTER_DATA_TYPE: {
    code: 'EC887',
    message: 'Invalid master data type specified.',
  },
  MASTER_DATA_IN_USE: {
    code: 'EC888',
    message: 'Master data is in use and cannot be deleted.',
  },

  // Company Operations Errors (EC889-EC900)
  COMPANY_NOT_FOUND: {
    code: 'EC889',
    message: 'Company not found.',
  },
  COMPANY_ALREADY_EXISTS: {
    code: 'EC890',
    message: 'Company with this name already exists.',
  },
  COMPANY_USER_NOT_FOUND: {
    code: 'EC891',
    message: 'Company user not found.',
  },
  COMPANY_USER_ALREADY_EXISTS: {
    code: 'EC892',
    message: 'Company user already exists.',
  },
  SCHOOL_ALREADY_EXISTS: {
    code: 'EC894',
    message: 'School with this name already exists.',
  },
  COACHING_NOT_FOUND: {
    code: 'EC895',
    message: 'Coaching provider not found.',
  },
  COACHING_ALREADY_EXISTS: {
    code: 'EC896',
    message: 'Coaching provider already exists.',
  },
  TUITION_NOT_FOUND: {
    code: 'EC897',
    message: 'Tuition provider not found.',
  },
  TUITION_ALREADY_EXISTS: {
    code: 'EC898',
    message: 'Tuition provider already exists.',
  },
  SETTINGS_NOT_FOUND: {
    code: 'EC899',
    message: 'Settings not found.',
  },
  SUBSCRIPTION_NOT_FOUND: {
    code: 'EC900',
    message: 'Subscription not found.',
  },
  SUBSCRIPTION_ALREADY_ACTIVE: {
    code: 'EC901',
    message: 'Subscription is already active.',
  },
  SUBSCRIPTION_EXPIRED: {
    code: 'EC902',
    message: 'Subscription has expired.',
  },
  INVALID_SUBSCRIPTION_PLAN: {
    code: 'EC903',
    message: 'Invalid subscription plan specified.',
  },
  ORGANIZATION_NOT_ASSIGNED: {
    code: 'EC904',
    message: 'Organization is not assigned to this company.',
  },
  ORGANIZATION_ALREADY_ASSIGNED: {
    code: 'EC905',
    message: 'Organization is already assigned to this company.',
  },
};
