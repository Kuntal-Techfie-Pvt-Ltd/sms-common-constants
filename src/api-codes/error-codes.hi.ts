import { ApiCodeCollection } from './api-codes.types';

/**
 * त्रुटि प्रतिक्रिया कोड (EC)
 * प्रारूप: EC{XXX} जहां XXX एक तीन अंकीय संख्या है
 * हिंदी भाषा संस्करण
 */
export const ERROR_CODES_HI: ApiCodeCollection = {
  // सामान्य त्रुटियां (EC001-EC020)
  UNKNOWN_ERROR: {
    code: 'EC001',
    message: 'एक अज्ञात त्रुटि हुई।',
  },
  INTERNAL_SERVER_ERROR: {
    code: 'EC002',
    message: 'आंतरिक सर्वर त्रुटि।',
  },
  NOT_FOUND: {
    code: 'EC003',
    message: 'रिकॉर्ड नहीं मिला।',
  },
  VALIDATION_ERROR: {
    code: 'EC004',
    message: 'सत्यापन त्रुटि। कृपया मान्य डेटा दर्ज करें।',
  },
  PAYLOAD_MISMATCH: {
    code: 'EC005',
    message: 'अनिवार्य क्षेत्र पारित नहीं किया गया।',
  },
  INVALID_DATA: {
    code: 'EC006',
    message: 'अमान्य डेटा प्रदान किया गया।',
  },
  DUPLICATE_NOT_ALLOWED: {
    code: 'EC007',
    message: 'डुप्लिकेट प्रविष्टि की अनुमति नहीं है।',
  },
  UPDATE_NOT_POSSIBLE: {
    code: 'EC008',
    message: 'रिकॉर्ड को अपडेट करने में असमर्थ।',
  },
  DATE_RANGE_VALIDATION: {
    code: 'EC009',
    message: 'प्रारंभ तिथि समाप्ति तिथि से पहले होनी चाहिए।',
  },

  // प्रमाणीकरण और प्राधिकरण त्रुटियां (EC021-EC050)
  AUTHENTICATION_ERROR: {
    code: 'EC021',
    message: 'कृपया प्रमाणित करें।',
  },
  INVALID_TOKEN: {
    code: 'EC022',
    message: 'अमान्य या समाप्त टोकन।',
  },
  INVALID_EMAIL_OR_PASSWORD: {
    code: 'EC023',
    message: 'गलत ईमेल या पासवर्ड।',
  },
  INVALID_OTP: {
    code: 'EC024',
    message: 'अमान्य OTP।',
  },
  OTP_EXPIRED: {
    code: 'EC025',
    message: 'OTP समाप्त हो गया। कृपया एक नया अनुरोध करें।',
  },
  INVALID_OTP_WITH_ATTEMPTS: {
    code: 'EC026',
    message: 'अमान्य OTP। आपके पास <remaining_attempts>/<max_attempts> प्रयास बचे हैं।',
  },
  ACCOUNT_LOCKED: {
    code: 'EC027',
    message:
      'कई विफल प्रयासों के कारण खाता लॉक किया गया। <lock_time> मिनट के बाद फिर से प्रयास करें।',
  },
  FORBIDDEN: {
    code: 'EC028',
    message: 'पहुंच निषिद्ध।',
  },
  MISSING_PERMISSION_FOR_REQUEST: {
    code: 'EC029',
    message: 'उपयोगकर्ता को इस ऑपरेशन की अनुमति नहीं है।',
  },
  INSUFFICIENT_USER_PRIVILEGE: {
    code: 'EC030',
    message: 'अपर्याप्त उपयोगकर्ता विशेषाधिकार। व्यवस्थापक से संपर्क करें।',
  },

  // उपयोगकर्ता और भूमिका त्रुटियां (EC051-EC100)
  USER_NOT_FOUND: {
    code: 'EC051',
    message: 'उपयोगकर्ता नहीं मिला।',
  },
  EMAIL_TAKEN: {
    code: 'EC052',
    message: 'ईमेल पहले से पंजीकृत है।',
  },
  NOT_VALID_EMAIL: {
    code: 'EC053',
    message: 'अमान्य ईमेल पता।',
  },
  PASSWORD_NOT_FOUND: {
    code: 'EC054',
    message: 'पासवर्ड सेट नहीं किया गया।',
  },
  PASSWORD_NOT_MATCHED: {
    code: 'EC055',
    message: 'पासवर्ड मेल नहीं खाते।',
  },
  USER_DEACTIVATED: {
    code: 'EC056',
    message: 'उपयोगकर्ता खाता निष्क्रिय है।',
  },
  INVALID_ROLE: {
    code: 'EC057',
    message: 'अमान्य उपयोगकर्ता भूमिका।',
  },
  INVALID_MOBILE_NUMBER: {
    code: 'EC058',
    message: 'अमान्य मोबाइल नंबर।',
  },
  INVALID_DIAL_CODE: {
    code: 'EC059',
    message: 'अमान्य देश डायल कोड।',
  },

  // छात्र प्रबंधन त्रुटियां (EC101-EC150)
  STUDENT_NOT_FOUND: {
    code: 'EC101',
    message: 'छात्र नहीं मिला।',
  },
  STUDENT_ALREADY_ENROLLED: {
    code: 'EC102',
    message: 'छात्र पहले से नामांकित है।',
  },
  STUDENT_SUSPENDED: {
    code: 'EC103',
    message: 'छात्र निलंबित है।',
  },
  STUDENT_ALREADY_GRADUATED: {
    code: 'EC104',
    message: 'छात्र पहले से स्नातक हो चुका है।',
  },
  PARENT_NOT_FOUND: {
    code: 'EC105',
    message: 'माता-पिता नहीं मिले।',
  },
  STUDENT_PARENT_MISMATCH: {
    code: 'EC106',
    message: 'छात्र और माता-पिता का संबंध नहीं मिला।',
  },
  PARENT_CONSENT_REQUIRED: {
    code: 'EC107',
    message: 'माता-पिता की सहमति आवश्यक है।',
  },
  INVALID_ENROLLMENT_DATE: {
    code: 'EC108',
    message: 'अमान्य नामांकन तिथि।',
  },
  TRANSFER_REQUEST_NOT_FOUND: {
    code: 'EC109',
    message: 'स्थानांतरण अनुरोध नहीं मिला।',
  },
  TRANSFER_ALREADY_PROCESSED: {
    code: 'EC110',
    message: 'स्थानांतरण अनुरोध पहले से संसाधित हो चुका है।',
  },
  EMERGENCY_CONTACT_NOT_FOUND: {
    code: 'EC111',
    message: 'आपातकालीन संपर्क नहीं मिला।',
  },
  MEDICAL_RECORD_NOT_FOUND: {
    code: 'EC112',
    message: 'चिकित्सा रिकॉर्ड नहीं मिला।',
  },
  ALLERGY_INFORMATION_REQUIRED: {
    code: 'EC113',
    message: 'एलर्जी की जानकारी आवश्यक है।',
  },

  // स्कूल और कक्षा त्रुटियां (EC151-EC180)
  SCHOOL_NOT_FOUND: {
    code: 'EC151',
    message: 'स्कूल नहीं मिला।',
  },
  CLASS_NOT_FOUND: {
    code: 'EC152',
    message: 'कक्षा नहीं मिली।',
  },
  CLASS_CAPACITY_EXCEEDED: {
    code: 'EC153',
    message: 'कक्षा की क्षमता पार हो गई है।',
  },
  CLASS_CANCELLED: {
    code: 'EC154',
    message: 'कक्षा रद्द कर दी गई है।',
  },
  SUBJECT_NOT_FOUND: {
    code: 'EC155',
    message: 'विषय नहीं मिला।',
  },
  SECTION_NOT_FOUND: {
    code: 'EC156',
    message: 'अनुभाग नहीं मिला।',
  },
  CLASSROOM_UNAVAILABLE: {
    code: 'EC157',
    message: 'कक्षा उपलब्ध नहीं है।',
  },
  DEPARTMENT_NOT_FOUND: {
    code: 'EC158',
    message: 'विभाग नहीं मिला।',
  },

  // शिक्षक और कर्मचारी त्रुटियां (EC181-EC200)
  TEACHER_NOT_FOUND: {
    code: 'EC159',
    message: 'शिक्षक नहीं मिला।',
  },
  TEACHER_ON_LEAVE: {
    code: 'EC160',
    message: 'शिक्षक छुट्टी पर है।',
  },
  TEACHER_UNAVAILABLE: {
    code: 'EC161',
    message: 'शिक्षक इस समय उपलब्ध नहीं है।',
  },
  SUBSTITUTE_TEACHER_NOT_FOUND: {
    code: 'EC162',
    message: 'प्रतिस्थापन शिक्षक नहीं मिला।',
  },
  STAFF_NOT_FOUND: {
    code: 'EC163',
    message: 'कर्मचारी नहीं मिला।',
  },

  // शैक्षणिक और परीक्षा त्रुटियां (EC201-EC250)
  ASSIGNMENT_NOT_FOUND: {
    code: 'EC201',
    message: 'कार्य नहीं मिला।',
  },
  ASSIGNMENT_SUBMISSION_CLOSED: {
    code: 'EC202',
    message: 'कार्य प्रस्तुत करने की समय सीमा समाप्त हो गई है।',
  },
  EXAM_NOT_FOUND: {
    code: 'EC203',
    message: 'परीक्षा नहीं मिली।',
  },
  EXAM_ALREADY_SCHEDULED: {
    code: 'EC204',
    message: 'परीक्षा पहले से इस समय निर्धारित है।',
  },
  INVALID_EXAM_DATE: {
    code: 'EC205',
    message: 'अमान्य परीक्षा तिथि।',
  },
  GRADE_NOT_FOUND: {
    code: 'EC206',
    message: 'ग्रेड नहीं मिला।',
  },
  INVALID_GRADE_VALUE: {
    code: 'EC207',
    message: 'अमान्य ग्रेड मान।',
  },
  RESULT_NOT_FOUND: {
    code: 'EC208',
    message: 'परिणाम नहीं मिला।',
  },
  RESULT_ALREADY_PUBLISHED: {
    code: 'EC209',
    message: 'परिणाम पहले से प्रकाशित हो चुका है।',
  },
  HOMEWORK_NOT_FOUND: {
    code: 'EC210',
    message: 'होमवर्क नहीं मिला।',
  },
  HOMEWORK_ALREADY_SUBMITTED: {
    code: 'EC211',
    message: 'होमवर्क पहले से प्रस्तुत कर दिया गया है।',
  },
  PROJECT_NOT_FOUND: {
    code: 'EC212',
    message: 'प्रोजेक्ट नहीं मिला।',
  },
  PROJECT_SUBMISSION_CLOSED: {
    code: 'EC213',
    message: 'प्रोजेक्ट प्रस्तुत करने की समय सीमा समाप्त हो गई है।',
  },

  // पाठ्यक्रम और पाठ्यक्रम त्रुटियां (EC251-EC270)
  CURRICULUM_NOT_FOUND: {
    code: 'EC251',
    message: 'पाठ्यक्रम नहीं मिला।',
  },
  SYLLABUS_NOT_FOUND: {
    code: 'EC252',
    message: 'पाठ्यक्रम नहीं मिला।',
  },
  LESSON_PLAN_NOT_FOUND: {
    code: 'EC253',
    message: 'पाठ योजना नहीं मिली।',
  },
  COURSE_NOT_FOUND: {
    code: 'EC254',
    message: 'कोर्स नहीं मिला।',
  },

  // शुल्क और भुगतान त्रुटियां (EC271-EC300)
  FEE_STRUCTURE_NOT_FOUND: {
    code: 'EC271',
    message: 'शुल्क संरचना नहीं मिली।',
  },
  FEE_ALREADY_PAID: {
    code: 'EC272',
    message: 'शुल्क पहले से भुगतान हो चुका है।',
  },
  INVALID_FEE_AMOUNT: {
    code: 'EC273',
    message: 'अमान्य शुल्क राशि।',
  },
  PAYMENT_FAILED: {
    code: 'EC274',
    message: 'भुगतान विफल।',
  },
  PAYMENT_PENDING: {
    code: 'EC275',
    message: 'भुगतान लंबित है।',
  },
  PAYMENT_GATEWAY_ERROR: {
    code: 'EC276',
    message: 'भुगतान गेटवे त्रुटि।',
  },
  REFUND_NOT_POSSIBLE: {
    code: 'EC277',
    message: 'रिफंड संभव नहीं है।',
  },

  // संचार त्रुटियां (EC301-EC330)
  NOTIFICATION_FAILED: {
    code: 'EC301',
    message: 'सूचना भेजने में विफल।',
  },
  EMAIL_ERROR: {
    code: 'EC302',
    message: 'ईमेल भेजने में असमर्थ।',
  },
  SMS_ERROR: {
    code: 'EC303',
    message: 'SMS भेजने में असमर्थ।',
  },
  MESSAGE_DELIVERY_FAILED: {
    code: 'EC304',
    message: 'संदेश वितरण विफल।',
  },
  COMMUNICATION_NOT_FOUND: {
    code: 'EC305',
    message: 'संचार रिकॉर्ड नहीं मिला।',
  },

  // उपस्थिति त्रुटियां (EC331-EC350)
  ATTENDANCE_ALREADY_MARKED: {
    code: 'EC331',
    message: 'इस तिथि के लिए उपस्थिति पहले से चिह्नित है।',
  },
  INVALID_ATTENDANCE_STATUS: {
    code: 'EC332',
    message: 'अमान्य उपस्थिति स्थिति।',
  },
  SCHOOL_HOURS_EXCEEDED: {
    code: 'EC333',
    message: 'स्कूल के घंटों के बाहर उपस्थिति चिह्नित करना।',
  },

  // बस ट्रैकिंग और परिवहन त्रुटियां (EC351-EC380)
  BUS_NOT_FOUND: {
    code: 'EC351',
    message: 'बस नहीं मिली।',
  },
  BUS_ROUTE_NOT_FOUND: {
    code: 'EC352',
    message: 'बस मार्ग नहीं मिला।',
  },
  DRIVER_NOT_FOUND: {
    code: 'EC353',
    message: 'चालक नहीं मिला।',
  },
  DRIVER_UNAVAILABLE: {
    code: 'EC354',
    message: 'चालक उपलब्ध नहीं है।',
  },
  INVALID_BUS_LOCATION: {
    code: 'EC355',
    message: 'अमान्य बस स्थान।',
  },
  TRANSPORT_ROUTE_NOT_AVAILABLE: {
    code: 'EC356',
    message: 'परिवहन मार्ग उपलब्ध नहीं है।',
  },
  BUS_MAINTENANCE_REQUIRED: {
    code: 'EC357',
    message: 'बस रखरखाव में है।',
  },

  // दस्तावेज़ और फ़ाइल त्रुटियां (EC381-EC400)
  DOCUMENT_NOT_FOUND: {
    code: 'EC381',
    message: 'दस्तावेज़ नहीं मिला।',
  },
  FILE_NOT_FOUND: {
    code: 'EC382',
    message: 'फ़ाइल नहीं मिली।',
  },
  FILE_UPLOAD_ERROR: {
    code: 'EC383',
    message: 'फ़ाइल अपलोड विफल।',
  },
  INVALID_FILE_FORMAT: {
    code: 'EC384',
    message: 'अमान्य फ़ाइल प्रारूप।',
  },
  FILE_SIZE_EXCEEDED: {
    code: 'EC385',
    message: 'फ़ाइल आकार सीमा से अधिक हो गया।',
  },
  CERTIFICATE_NOT_FOUND: {
    code: 'EC386',
    message: 'प्रमाणपत्र नहीं मिला।',
  },
  CERTIFICATE_ALREADY_ISSUED: {
    code: 'EC387',
    message: 'प्रमाणपत्र पहले से जारी हो चुका है।',
  },

  // कार्य और असाइनमेंट त्रुटियां (EC401-EC420)
  TASK_NOT_FOUND: {
    code: 'EC401',
    message: 'कार्य नहीं मिला।',
  },
  TASK_ALREADY_COMPLETED: {
    code: 'EC402',
    message: 'कार्य पहले से पूर्ण है।',
  },

  // रिपोर्ट और विश्लेषण त्रुटियां (EC421-EC440)
  REPORT_GENERATION_FAILED: {
    code: 'EC421',
    message: 'रिपोर्ट बनाने में विफल।',
  },
  INSUFFICIENT_DATA_FOR_REPORT: {
    code: 'EC422',
    message: 'रिपोर्ट बनाने के लिए अपर्याप्त डेटा।',
  },

  // LMS त्रुटियां (EC441-EC470)
  LIVE_CLASS_NOT_AVAILABLE: {
    code: 'EC441',
    message: 'लाइव क्लास उपलब्ध नहीं है।',
  },
  STUDY_MATERIAL_NOT_FOUND: {
    code: 'EC442',
    message: 'अध्ययन सामग्री नहीं मिली।',
  },
  QUIZ_NOT_FOUND: {
    code: 'EC443',
    message: 'क्विज़ नहीं मिली।',
  },
  QUIZ_ALREADY_SUBMITTED: {
    code: 'EC444',
    message: 'क्विज़ पहले से प्रस्तुत कर दी गई है।',
  },

  // घटना और पाठ्येतर त्रुटियां (EC471-EC500)
  EVENT_NOT_FOUND: {
    code: 'EC471',
    message: 'घटना नहीं मिली।',
  },
  EVENT_REGISTRATION_CLOSED: {
    code: 'EC472',
    message: 'घटना पंजीकरण बंद हो गया है।',
  },
  FIELD_TRIP_NOT_FOUND: {
    code: 'EC473',
    message: 'भ्रमण नहीं मिला।',
  },
  FIELD_TRIP_REGISTRATION_CLOSED: {
    code: 'EC474',
    message: 'भ्रमण पंजीकरण बंद हो गया है।',
  },
  SPORTS_TEAM_NOT_FOUND: {
    code: 'EC475',
    message: 'खेल टीम नहीं मिली।',
  },
  TEAM_CAPACITY_EXCEEDED: {
    code: 'EC476',
    message: 'टीम की क्षमता पार हो गई है।',
  },
  CLUB_NOT_FOUND: {
    code: 'EC477',
    message: 'क्लब नहीं मिला।',
  },
  CLUB_MEMBERSHIP_FULL: {
    code: 'EC478',
    message: 'क्लब की सदस्यता भर चुकी है।',
  },
  EXTRA_CURRICULAR_NOT_FOUND: {
    code: 'EC479',
    message: 'पाठ्येतर गतिविधि नहीं मिली।',
  },
  EXTRA_CURRICULAR_REGISTRATION_CLOSED: {
    code: 'EC480',
    message: 'पाठ्येतर पंजीकरण बंद हो गया है।',
  },

  // अवसंरचना और सुविधा त्रुटियां (EC501-EC530)
  FACILITY_NOT_AVAILABLE: {
    code: 'EC501',
    message: 'सुविधा उपलब्ध नहीं है।',
  },
  BOOKING_CONFLICT: {
    code: 'EC502',
    message: 'बुकिंग संघर्ष का पता चला।',
  },
  LAB_NOT_FOUND: {
    code: 'EC503',
    message: 'प्रयोगशाला नहीं मिली।',
  },
  LAB_BOOKING_NOT_AVAILABLE: {
    code: 'EC504',
    message: 'प्रयोगशाला बुकिंग उपलब्ध नहीं है।',
  },
  EQUIPMENT_NOT_FOUND: {
    code: 'EC505',
    message: 'उपकरण नहीं मिला।',
  },
  EQUIPMENT_UNAVAILABLE: {
    code: 'EC506',
    message: 'उपकरण उपलब्ध नहीं है।',
  },
  RESOURCE_NOT_FOUND: {
    code: 'EC507',
    message: 'संसाधन नहीं मिला।',
  },
  RESOURCE_UNAVAILABLE: {
    code: 'EC508',
    message: 'संसाधन उपलब्ध नहीं है।',
  },
  INVENTORY_ITEM_NOT_FOUND: {
    code: 'EC509',
    message: 'इन्वेंटरी आइटम नहीं मिला।',
  },
  INSUFFICIENT_INVENTORY: {
    code: 'EC510',
    message: 'अपर्याप्त इन्वेंटरी।',
  },
  MAINTENANCE_REQUEST_NOT_FOUND: {
    code: 'EC511',
    message: 'रखरखाव अनुरोध नहीं मिला।',
  },
  MAINTENANCE_ALREADY_SCHEDULED: {
    code: 'EC512',
    message: 'रखरखाव पहले से निर्धारित है।',
  },

  // अनुसूची और समय सारणी त्रुटियां (EC531-EC550)
  SCHEDULE_CONFLICT: {
    code: 'EC531',
    message: 'अनुसूची संघर्ष का पता चला।',
  },
  TIMETABLE_NOT_FOUND: {
    code: 'EC532',
    message: 'समय सारणी नहीं मिली।',
  },
  TIMETABLE_CONFLICT: {
    code: 'EC533',
    message: 'समय सारणी संघर्ष का पता चला।',
  },
  CALENDAR_EVENT_NOT_FOUND: {
    code: 'EC534',
    message: 'कैलेंडर घटना नहीं मिली।',
  },
  HOLIDAY_NOT_FOUND: {
    code: 'EC535',
    message: 'छुट्टी नहीं मिली।',
  },
  SCHOOL_YEAR_NOT_FOUND: {
    code: 'EC536',
    message: 'स्कूल वर्ष नहीं मिला।',
  },
  INVALID_SCHOOL_YEAR: {
    code: 'EC537',
    message: 'अमान्य स्कूल वर्ष।',
  },
  SEMESTER_NOT_FOUND: {
    code: 'EC538',
    message: 'सेमेस्टर नहीं मिला।',
  },
  INVALID_SEMESTER: {
    code: 'EC539',
    message: 'अमान्य सेमेस्टर।',
  },

  // RBAC प्रबंधन त्रुटियां (EC801-EC840)
  ROLE_NOT_FOUND: {
    code: 'EC801',
    message: 'भूमिका नहीं मिली।',
  },
  ROLE_ALREADY_EXISTS: {
    code: 'EC802',
    message: 'इस नाम से भूमिका पहले से मौजूद है।',
  },
  ROLE_IN_USE: {
    code: 'EC803',
    message: 'भूमिका उपयोग में है और हटाई नहीं जा सकती।',
  },
  GROUP_NOT_FOUND: {
    code: 'EC804',
    message: 'समूह नहीं मिला।',
  },
  GROUP_ALREADY_EXISTS: {
    code: 'EC805',
    message: 'इस नाम से समूह पहले से मौजूद है।',
  },
  GROUP_IN_USE: {
    code: 'EC806',
    message: 'समूह उपयोग में है और हटाया नहीं जा सकता।',
  },
  SCREEN_NOT_FOUND: {
    code: 'EC807',
    message: 'स्क्रीन नहीं मिली।',
  },
  SCREEN_ALREADY_EXISTS: {
    code: 'EC808',
    message: 'इस नाम से स्क्रीन पहले से मौजूद है।',
  },
  SCREEN_ALREADY_ASSIGNED: {
    code: 'EC809',
    message: 'स्क्रीन पहले से इस समूह को नियुक्त है।',
  },
  SCREEN_NOT_ASSIGNED: {
    code: 'EC810',
    message: 'स्क्रीन इस समूह को नियुक्त नहीं है।',
  },
  ACTION_NOT_FOUND: {
    code: 'EC811',
    message: 'कार्रवाई नहीं मिली।',
  },
  ACTION_ALREADY_EXISTS: {
    code: 'EC812',
    message: 'इस नाम से कार्रवाई पहले से मौजूद है।',
  },
  ACTION_ALREADY_ASSIGNED: {
    code: 'EC813',
    message: 'कार्रवाई पहले से इस समूह स्क्रीन को नियुक्त है।',
  },
  ACTION_NOT_ASSIGNED: {
    code: 'EC814',
    message: 'कार्रवाई इस समूह स्क्रीन को नियुक्त नहीं है।',
  },
  USER_ROLE_ALREADY_ASSIGNED: {
    code: 'EC815',
    message: 'भूमिका पहले से इस उपयोगकर्ता को नियुक्त है।',
  },
  USER_ROLE_NOT_ASSIGNED: {
    code: 'EC816',
    message: 'भूमिका इस उपयोगकर्ता को नियुक्त नहीं है।',
  },
  USER_GROUP_ALREADY_ASSIGNED: {
    code: 'EC817',
    message: 'समूह पहले से इस उपयोगकर्ता को नियुक्त है।',
  },
  USER_GROUP_NOT_ASSIGNED: {
    code: 'EC818',
    message: 'समूह इस उपयोगकर्ता को नियुक्त नहीं है।',
  },
  PERMISSION_DENIED: {
    code: 'EC819',
    message: 'इस ऑपरेशन के लिए अनुमति अस्वीकृत।',
  },
  INVALID_ROLE_TYPE: {
    code: 'EC820',
    message: 'अमान्य भूमिका प्रकार निर्दिष्ट।',
  },
  INVALID_ENTITY_TYPE: {
    code: 'EC821',
    message: 'अमान्य इकाई प्रकार निर्दिष्ट।',
  },
  GROUP_MAPPING_NOT_FOUND: {
    code: 'EC822',
    message: 'समूह मैपिंग नहीं मिली।',
  },
  GROUP_MAPPING_ALREADY_EXISTS: {
    code: 'EC823',
    message: 'समूह मैपिंग पहले से मौजूद है।',
  },
  MODULE_NOT_FOUND: {
    code: 'EC824',
    message: 'मॉड्यूल नहीं मिला।',
  },
  MODULE_ALREADY_EXISTS: {
    code: 'EC825',
    message: 'इस नाम से मॉड्यूल पहले से मौजूद है।',
  },
  MODULE_IN_USE: {
    code: 'EC826',
    message: 'मॉड्यूल उपयोग में है और हटाया नहीं जा सकता।',
  },
  FEATURE_NOT_FOUND: {
    code: 'EC827',
    message: 'फीचर नहीं मिला।',
  },
  FEATURE_ALREADY_EXISTS: {
    code: 'EC828',
    message: 'इस नाम से फीचर इस मॉड्यूल में पहले से मौजूद है।',
  },
  FEATURE_IN_USE: {
    code: 'EC829',
    message: 'फीचर उपयोग में है और हटाया नहीं जा सकता।',
  },
  INVALID_MODULE_ID: {
    code: 'EC830',
    message: 'अमान्य मॉड्यूल ID प्रदान की गई।',
  },
  PARENT_MODULE_NOT_FOUND: {
    code: 'EC831',
    message: 'पैरेंट मॉड्यूल नहीं मिला।',
  },
  CIRCULAR_MODULE_DEPENDENCY: {
    code: 'EC832',
    message: 'मॉड्यूल पदानुक्रम में चक्रीय निर्भरता का पता चला।',
  },

  // सामग्री प्रबंधन त्रुटियां (EC841-EC860)
  CONTENT_NOT_FOUND: {
    code: 'EC841',
    message: 'सामग्री नहीं मिली।',
  },
  CONTENT_ALREADY_EXISTS: {
    code: 'EC842',
    message: 'इस कुंजी और भाषा से सामग्री पहले से मौजूद है।',
  },
  CONTENT_KEY_REQUIRED: {
    code: 'EC843',
    message: 'सामग्री कुंजी आवश्यक है।',
  },
  INVALID_CONTENT_FORMAT: {
    code: 'EC844',
    message: 'अमान्य सामग्री प्रारूप प्रदान किया गया।',
  },
  CONTENT_NOT_PUBLISHED: {
    code: 'EC845',
    message: 'सामग्री प्रकाशित नहीं है।',
  },
  CONTENT_ALREADY_PUBLISHED: {
    code: 'EC846',
    message: 'सामग्री पहले से प्रकाशित है।',
  },
  LANGUAGE_CODE_REQUIRED: {
    code: 'EC847',
    message: 'भाषा कोड आवश्यक है।',
  },
  INVALID_LANGUAGE_CODE: {
    code: 'EC848',
    message: 'अमान्य भाषा कोड प्रदान किया गया।',
  },
  CONTENT_BULK_UPLOAD_FAILED: {
    code: 'EC849',
    message: 'सामग्री बल्क अपलोड विफल।',
  },
  CONTENT_VERSION_NOT_FOUND: {
    code: 'EC850',
    message: 'सामग्री संस्करण नहीं मिला।',
  },

  // मास्टर डेटा त्रुटियां (EC861-EC880)
  MASTER_DATA_NOT_FOUND: {
    code: 'EC861',
    message: 'मास्टर डेटा नहीं मिला।',
  },
  MASTER_DATA_ALREADY_EXISTS: {
    code: 'EC862',
    message: 'इस नाम से मास्टर डेटा पहले से मौजूद है।',
  },
  LANGUAGE_NOT_FOUND: {
    code: 'EC863',
    message: 'भाषा नहीं मिली।',
  },
  LANGUAGE_ALREADY_EXISTS: {
    code: 'EC864',
    message: 'इस कोड से भाषा पहले से मौजूद है।',
  },
  STATE_NOT_FOUND: {
    code: 'EC865',
    message: 'राज्य नहीं मिला।',
  },
  STATE_ALREADY_EXISTS: {
    code: 'EC866',
    message: 'इस नाम से राज्य पहले से मौजूद है।',
  },
  SUBJECT_ALREADY_EXISTS: {
    code: 'EC868',
    message: 'इस नाम से विषय पहले से मौजूद है।',
  },
  DEPARTMENT_ALREADY_EXISTS: {
    code: 'EC870',
    message: 'इस नाम से विभाग पहले से मौजूद है।',
  },
  DESIGNATION_NOT_FOUND: {
    code: 'EC871',
    message: 'पदनाम नहीं मिला।',
  },
  DESIGNATION_ALREADY_EXISTS: {
    code: 'EC872',
    message: 'इस नाम से पदनाम पहले से मौजूद है।',
  },
  GRADE_ALREADY_EXISTS: {
    code: 'EC874',
    message: 'इस नाम से ग्रेड पहले से मौजूद है।',
  },
  HOUSE_NOT_FOUND: {
    code: 'EC875',
    message: 'हाउस नहीं मिला।',
  },
  HOUSE_ALREADY_EXISTS: {
    code: 'EC876',
    message: 'इस नाम से हाउस पहले से मौजूद है।',
  },
  CURRENCY_NOT_FOUND: {
    code: 'EC877',
    message: 'मुद्रा नहीं मिली।',
  },
  CURRENCY_ALREADY_EXISTS: {
    code: 'EC878',
    message: 'इस कोड से मुद्रा पहले से मौजूद है।',
  },
  COUNTRY_NOT_FOUND: {
    code: 'EC879',
    message: 'देश नहीं मिला।',
  },
  COUNTRY_ALREADY_EXISTS: {
    code: 'EC880',
    message: 'इस कोड से देश पहले से मौजूद है।',
  },
  CLASS_ALREADY_EXISTS: {
    code: 'EC882',
    message: 'इस नाम से कक्षा पहले से मौजूद है।',
  },
  TASK_ALREADY_EXISTS: {
    code: 'EC884',
    message: 'इस नाम से कार्य पहले से मौजूद है।',
  },
  KNOWN_LANGUAGE_NOT_FOUND: {
    code: 'EC885',
    message: 'ज्ञात भाषा नहीं मिली।',
  },
  KNOWN_LANGUAGE_ALREADY_EXISTS: {
    code: 'EC886',
    message: 'ज्ञात भाषा पहले से मौजूद है।',
  },
  INVALID_MASTER_DATA_TYPE: {
    code: 'EC887',
    message: 'अमान्य मास्टर डेटा प्रकार निर्दिष्ट।',
  },
  MASTER_DATA_IN_USE: {
    code: 'EC888',
    message: 'मास्टर डेटा उपयोग में है और हटाया नहीं जा सकता।',
  },

  // कंपनी संचालन त्रुटियां (EC889-EC905)
  COMPANY_NOT_FOUND: {
    code: 'EC889',
    message: 'कंपनी नहीं मिली।',
  },
  COMPANY_ALREADY_EXISTS: {
    code: 'EC890',
    message: 'इस नाम से कंपनी पहले से मौजूद है।',
  },
  COMPANY_USER_NOT_FOUND: {
    code: 'EC891',
    message: 'कंपनी उपयोगकर्ता नहीं मिला।',
  },
  COMPANY_USER_ALREADY_EXISTS: {
    code: 'EC892',
    message: 'कंपनी उपयोगकर्ता पहले से मौजूद है।',
  },
  SCHOOL_ALREADY_EXISTS: {
    code: 'EC894',
    message: 'इस नाम से स्कूल पहले से मौजूद है।',
  },
  COACHING_NOT_FOUND: {
    code: 'EC895',
    message: 'कोचिंग प्रदाता नहीं मिला।',
  },
  COACHING_ALREADY_EXISTS: {
    code: 'EC896',
    message: 'कोचिंग प्रदाता पहले से मौजूद है।',
  },
  TUITION_NOT_FOUND: {
    code: 'EC897',
    message: 'ट्यूशन प्रदाता नहीं मिला।',
  },
  TUITION_ALREADY_EXISTS: {
    code: 'EC898',
    message: 'ट्यूशन प्रदाता पहले से मौजूद है।',
  },
  SETTINGS_NOT_FOUND: {
    code: 'EC899',
    message: 'सेटिंग्स नहीं मिलीं।',
  },
  SUBSCRIPTION_NOT_FOUND: {
    code: 'EC900',
    message: 'सदस्यता नहीं मिली।',
  },
  SUBSCRIPTION_ALREADY_ACTIVE: {
    code: 'EC901',
    message: 'सदस्यता पहले से सक्रिय है।',
  },
  SUBSCRIPTION_EXPIRED: {
    code: 'EC902',
    message: 'सदस्यता समाप्त हो गई है।',
  },
  INVALID_SUBSCRIPTION_PLAN: {
    code: 'EC903',
    message: 'अमान्य सदस्यता योजना निर्दिष्ट।',
  },
  ORGANIZATION_NOT_ASSIGNED: {
    code: 'EC904',
    message: 'संगठन इस कंपनी को नियुक्त नहीं है।',
  },
  ORGANIZATION_ALREADY_ASSIGNED: {
    code: 'EC905',
    message: 'संगठन पहले से इस कंपनी को नियुक्त है।',
  },
};
