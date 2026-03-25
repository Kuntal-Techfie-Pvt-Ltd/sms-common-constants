import { ApiCodeCollection } from './api-codes.types';

/**
 * सफलता प्रतिक्रिया कोड (SC)
 * प्रारूप: SC{XXX} जहां XXX एक तीन अंकीय संख्या है
 * हिंदी भाषा संस्करण
 */
export const SUCCESS_CODES_HI: ApiCodeCollection = {
  // सामान्य सफलता कोड (SC001-SC020)
  COMMON_SUCCESS: {
    code: 'SC001',
    message: 'सफलता।',
  },
  CREATE_SUCCESS: {
    code: 'SC002',
    message: 'सफलतापूर्वक बनाया गया।',
  },
  UPDATE_SUCCESS: {
    code: 'SC003',
    message: 'सफलतापूर्वक अपडेट किया गया।',
  },
  DELETE_SUCCESS: {
    code: 'SC004',
    message: 'सफलतापूर्वक हटाया गया।',
  },
  LISTING_SUCCESS: {
    code: 'SC005',
    message: 'सूची सफलतापूर्वक प्राप्त की गई।',
  },

  // प्रमाणीकरण सफलता कोड (SC021-SC040)
  LOGIN_SUCCESS: {
    code: 'SC021',
    message: 'लॉगिन सफल।',
  },
  LOGOUT_SUCCESS: {
    code: 'SC022',
    message: 'लॉगआउट सफल।',
  },
  REGISTER_SUCCESS: {
    code: 'SC023',
    message: 'पंजीकरण सफल। कृपया अपने ईमेल को सत्यापित करें।',
  },
  REFRESH_TOKEN_SUCCESS: {
    code: 'SC024',
    message: 'टोकन सफलतापूर्वक रीफ्रेश किया गया।',
  },
  PASSWORD_CHANGE_SUCCESS: {
    code: 'SC025',
    message: 'पासवर्ड सफलतापूर्वक बदला गया।',
  },
  FORGOT_PASSWORD_OTP_SUCCESS: {
    code: 'SC026',
    message: 'पासवर्ड रीसेट OTP ईमेल पर भेजा गया।',
  },
  VALIDATION_OTP_SUCCESS: {
    code: 'SC027',
    message: 'सत्यापन OTP ईमेल पर भेजा गया।',
  },

  // छात्र प्रबंधन सफलता कोड (SC041-SC060)
  STUDENT_ENROLLED_SUCCESS: {
    code: 'SC041',
    message: 'छात्र सफलतापूर्वक नामांकित किया गया।',
  },
  STUDENT_PROMOTED_SUCCESS: {
    code: 'SC042',
    message: 'छात्र सफलतापूर्वक प्रोन्नत किया गया।',
  },
  STUDENT_TRANSFERRED_SUCCESS: {
    code: 'SC043',
    message: 'छात्र सफलतापूर्वक स्थानांतरित किया गया।',
  },
  PARENT_LINKED_SUCCESS: {
    code: 'SC044',
    message: 'माता-पिता सफलतापूर्वक जुड़े गए।',
  },

  // उपस्थिति सफलता कोड (SC061-SC080)
  ATTENDANCE_MARKED_SUCCESS: {
    code: 'SC061',
    message: 'उपस्थिति सफलतापूर्वक चिह्नित की गई।',
  },
  ATTENDANCE_UPDATED_SUCCESS: {
    code: 'SC062',
    message: 'उपस्थिति सफलतापूर्वक अपडेट की गई।',
  },

  // शैक्षणिक सफलता कोड (SC081-SC100)
  ASSIGNMENT_SUBMITTED_SUCCESS: {
    code: 'SC081',
    message: 'कार्य सफलतापूर्वक प्रस्तुत किया गया।',
  },
  GRADE_RECORDED_SUCCESS: {
    code: 'SC082',
    message: 'ग्रेड सफलतापूर्वक दर्ज किया गया।',
  },
  EXAM_SCHEDULED_SUCCESS: {
    code: 'SC083',
    message: 'परीक्षा सफलतापूर्वक निर्धारित की गई।',
  },
  RESULT_PUBLISHED_SUCCESS: {
    code: 'SC084',
    message: 'परिणाम सफलतापूर्वक प्रकाशित किए गए।',
  },
  TEACHER_ASSIGNED_SUCCESS: {
    code: 'SC085',
    message: 'शिक्षक सफलतापूर्वक नियुक्त किया गया।',
  },

  // शुल्क और भुगतान सफलता कोड (SC101-SC120)
  FEE_PAYMENT_SUCCESS: {
    code: 'SC101',
    message: 'शुल्क भुगतान सफलतापूर्वक दर्ज किया गया।',
  },
  REFUND_PROCESSED_SUCCESS: {
    code: 'SC102',
    message: 'रिफंड सफलतापूर्वक संसाधित किया गया।',
  },
  INVOICE_GENERATED_SUCCESS: {
    code: 'SC103',
    message: 'चालान सफलतापूर्वक बनाया गया।',
  },

  // संचार सफलता कोड (SC121-SC140)
  NOTIFICATION_SENT_SUCCESS: {
    code: 'SC121',
    message: 'सूचना सफलतापूर्वक भेजी गई।',
  },
  MESSAGE_SENT_SUCCESS: {
    code: 'SC122',
    message: 'संदेश सफलतापूर्वक भेजा गया।',
  },
  EMAIL_SENT_SUCCESS: {
    code: 'SC123',
    message: 'ईमेल सफलतापूर्वक भेजा गया।',
  },
  SMS_SENT_SUCCESS: {
    code: 'SC124',
    message: 'SMS सफलतापूर्वक भेजा गया।',
  },

  // बस ट्रैकिंग सफलता कोड (SC141-SC160)
  BUS_TRACKING_UPDATED_SUCCESS: {
    code: 'SC141',
    message: 'बस स्थान सफलतापूर्वक अपडेट किया गया।',
  },
  ROUTE_CREATED_SUCCESS: {
    code: 'SC142',
    message: 'मार्ग सफलतापूर्वक बनाया गया।',
  },
  DRIVER_ASSIGNED_SUCCESS: {
    code: 'SC143',
    message: 'चालक सफलतापूर्वक नियुक्त किया गया।',
  },

  // दस्तावेज़ प्रबंधन सफलता कोड (SC161-SC180)
  DOCUMENT_UPLOADED_SUCCESS: {
    code: 'SC161',
    message: 'दस्तावेज़ सफलतापूर्वक अपलोड किया गया।',
  },
  DOCUMENT_VERIFIED_SUCCESS: {
    code: 'SC162',
    message: 'दस्तावेज़ सफलतापूर्वक सत्यापित किया गया।',
  },
  CERTIFICATE_ISSUED_SUCCESS: {
    code: 'SC163',
    message: 'प्रमाणपत्र सफलतापूर्वक जारी किया गया।',
  },

  // कार्य प्रबंधन सफलता कोड (SC181-SC200)
  TASK_COMPLETED_SUCCESS: {
    code: 'SC181',
    message: 'कार्य सफलतापूर्वक पूरा किया गया।',
  },
  TASK_ASSIGNED_SUCCESS: {
    code: 'SC182',
    message: 'कार्य सफलतापूर्वक नियुक्त किया गया।',
  },

  // रिपोर्ट और विश्लेषण सफलता कोड (SC201-SC220)
  REPORT_GENERATED_SUCCESS: {
    code: 'SC201',
    message: 'रिपोर्ट सफलतापूर्वक बनाई गई।',
  },
  ANALYTICS_UPDATED_SUCCESS: {
    code: 'SC202',
    message: 'विश्लेषण सफलतापूर्वक अपडेट किया गया।',
  },

  // LMS सफलता कोड (SC221-SC240)
  LIVE_CLASS_STARTED_SUCCESS: {
    code: 'SC221',
    message: 'लाइव क्लास सफलतापूर्वक शुरू की गई।',
  },
  STUDY_MATERIAL_ADDED_SUCCESS: {
    code: 'SC222',
    message: 'अध्ययन सामग्री सफलतापूर्वक जोड़ी गई।',
  },
  COURSE_COMPLETED_SUCCESS: {
    code: 'SC223',
    message: 'पाठ्यक्रम सफलतापूर्वक पूरा किया गया।',
  },
  QUIZ_SUBMITTED_SUCCESS: {
    code: 'SC224',
    message: 'क्विज़ सफलतापूर्वक प्रस्तुत की गई।',
  },

  // सुरक्षा सफलता कोड (SC241-SC260)
  SECURITY_CHECK_COMPLETED_SUCCESS: {
    code: 'SC241',
    message: 'सुरक्षा जांच सफलतापूर्वक पूरी की गई।',
  },
  VISITOR_REGISTERED_SUCCESS: {
    code: 'SC242',
    message: 'आगंतुक सफलतापूर्वक पंजीकृत किया गया।',
  },

  // इन्वेंटरी सफलता कोड (SC261-SC280)
  INVENTORY_UPDATED_SUCCESS: {
    code: 'SC261',
    message: 'इन्वेंटरी सफलतापूर्वक अपडेट की गई।',
  },
  STOCK_ORDERED_SUCCESS: {
    code: 'SC262',
    message: 'स्टॉक सफलतापूर्वक ऑर्डर किया गया।',
  },

  // घटना प्रबंधन सफलता कोड (SC281-SC300)
  EVENT_CREATED_SUCCESS: {
    code: 'SC281',
    message: 'घटना सफलतापूर्वक बनाई गई।',
  },
  EVENT_REGISTERED_SUCCESS: {
    code: 'SC282',
    message: 'घटना पंजीकरण सफल।',
  },

  // RBAC प्रबंधन सफलता कोड (SC301-SC340)
  ROLE_CREATED_SUCCESS: {
    code: 'SC301',
    message: 'भूमिका सफलतापूर्वक बनाई गई।',
  },
  ROLE_UPDATED_SUCCESS: {
    code: 'SC302',
    message: 'भूमिका सफलतापूर्वक अपडेट की गई।',
  },
  ROLE_DELETED_SUCCESS: {
    code: 'SC303',
    message: 'भूमिका सफलतापूर्वक हटाई गई।',
  },
  ROLE_RETRIEVED_SUCCESS: {
    code: 'SC304',
    message: 'भूमिका सफलतापूर्वक प्राप्त की गई।',
  },
  GROUP_CREATED_SUCCESS: {
    code: 'SC305',
    message: 'समूह सफलतापूर्वक बनाया गया।',
  },
  GROUP_UPDATED_SUCCESS: {
    code: 'SC306',
    message: 'समूह सफलतापूर्वक अपडेट किया गया।',
  },
  GROUP_DELETED_SUCCESS: {
    code: 'SC307',
    message: 'समूह सफलतापूर्वक हटाया गया।',
  },
  SCREEN_ASSIGNED_SUCCESS: {
    code: 'SC308',
    message: 'स्क्रीन समूह को सफलतापूर्वक नियुक्त की गई।',
  },
  SCREEN_REMOVED_SUCCESS: {
    code: 'SC309',
    message: 'स्क्रीन समूह से सफलतापूर्वक हटाई गई।',
  },
  ACTION_ASSIGNED_SUCCESS: {
    code: 'SC310',
    message: 'कार्रवाई समूह स्क्रीन को सफलतापूर्वक नियुक्त की गई।',
  },
  ACTION_REMOVED_SUCCESS: {
    code: 'SC311',
    message: 'कार्रवाई समूह स्क्रीन से सफलतापूर्वक हटाई गई।',
  },
  USER_ROLE_ASSIGNED_SUCCESS: {
    code: 'SC312',
    message: 'भूमिका उपयोगकर्ता को सफलतापूर्वक नियुक्त की गई।',
  },
  USER_ROLE_REMOVED_SUCCESS: {
    code: 'SC313',
    message: 'भूमिका उपयोगकर्ता से सफलतापूर्वक हटाई गई।',
  },
  USER_GROUP_ASSIGNED_SUCCESS: {
    code: 'SC314',
    message: 'समूह उपयोगकर्ता को सफलतापूर्वक नियुक्त किया गया।',
  },
  USER_GROUP_REMOVED_SUCCESS: {
    code: 'SC315',
    message: 'समूह उपयोगकर्ता से सफलतापूर्वक हटाया गया।',
  },
  PERMISSIONS_RETRIEVED_SUCCESS: {
    code: 'SC316',
    message: 'उपयोगकर्ता अनुमतियां सफलतापूर्वक प्राप्त की गईं।',
  },
  GROUP_MAPPING_CREATED_SUCCESS: {
    code: 'SC317',
    message: 'समूह मैपिंग सफलतापूर्वक बनाई गई।',
  },
  GROUP_MAPPING_UPDATED_SUCCESS: {
    code: 'SC318',
    message: 'समूह मैपिंग सफलतापूर्वक अपडेट की गई।',
  },
  MODULE_CREATED_SUCCESS: {
    code: 'SC319',
    message: 'मॉड्यूल सफलतापूर्वक बनाया गया।',
  },
  MODULE_UPDATED_SUCCESS: {
    code: 'SC320',
    message: 'मॉड्यूल सफलतापूर्वक अपडेट किया गया।',
  },
  MODULE_DELETED_SUCCESS: {
    code: 'SC321',
    message: 'मॉड्यूल सफलतापूर्वक हटाया गया।',
  },
  FEATURE_CREATED_SUCCESS: {
    code: 'SC322',
    message: 'फीचर सफलतापूर्वक बनाया गया।',
  },
  FEATURE_UPDATED_SUCCESS: {
    code: 'SC323',
    message: 'फीचर सफलतापूर्वक अपडेट किया गया।',
  },
  FEATURE_DELETED_SUCCESS: {
    code: 'SC324',
    message: 'फीचर सफलतापूर्वक हटाया गया।',
  },
  SCREEN_CREATED_SUCCESS: {
    code: 'SC325',
    message: 'स्क्रीन सफलतापूर्वक बनाई गई।',
  },
  SCREEN_UPDATED_SUCCESS: {
    code: 'SC326',
    message: 'स्क्रीन सफलतापूर्वक अपडेट की गई।',
  },
  SCREEN_DELETED_SUCCESS: {
    code: 'SC327',
    message: 'स्क्रीन सफलतापूर्वक हटाई गई।',
  },
  ACTION_CREATED_SUCCESS: {
    code: 'SC328',
    message: 'कार्रवाई सफलतापूर्वक बनाई गई।',
  },
  ACTION_UPDATED_SUCCESS: {
    code: 'SC329',
    message: 'कार्रवाई सफलतापूर्वक अपडेट की गई।',
  },
  ACTION_DELETED_SUCCESS: {
    code: 'SC330',
    message: 'कार्रवाई सफलतापूर्वक हटाई गई।',
  },

  // सामग्री प्रबंधन सफलता कोड (SC341-SC360)
  CONTENT_CREATED_SUCCESS: {
    code: 'SC341',
    message: 'सामग्री सफलतापूर्वक बनाई गई।',
  },
  CONTENT_UPDATED_SUCCESS: {
    code: 'SC342',
    message: 'सामग्री सफलतापूर्वक अपडेट की गई।',
  },
  CONTENT_DELETED_SUCCESS: {
    code: 'SC343',
    message: 'सामग्री सफलतापूर्वक हटाई गई।',
  },
  CONTENT_RETRIEVED_SUCCESS: {
    code: 'SC344',
    message: 'सामग्री सफलतापूर्वक प्राप्त की गई।',
  },
  CONTENT_PUBLISHED_SUCCESS: {
    code: 'SC345',
    message: 'सामग्री सफलतापूर्वक प्रकाशित की गई।',
  },
  CONTENT_UNPUBLISHED_SUCCESS: {
    code: 'SC346',
    message: 'सामग्री सफलतापूर्वक अप्रकाशित की गई।',
  },
  CONTENT_BULK_UPLOAD_SUCCESS: {
    code: 'SC347',
    message: 'सामग्री बल्क अपलोड सफलतापूर्वक पूरा किया गया।',
  },

  // मास्टर डेटा सफलता कोड (SC361-SC380)
  MASTER_DATA_CREATED_SUCCESS: {
    code: 'SC361',
    message: 'मास्टर डेटा सफलतापूर्वक बनाया गया।',
  },
  MASTER_DATA_UPDATED_SUCCESS: {
    code: 'SC362',
    message: 'मास्टर डेटा सफलतापूर्वक अपडेट किया गया।',
  },
  MASTER_DATA_DELETED_SUCCESS: {
    code: 'SC363',
    message: 'मास्टर डेटा सफलतापूर्वक हटाया गया।',
  },
  MASTER_DATA_RETRIEVED_SUCCESS: {
    code: 'SC364',
    message: 'मास्टर डेटा सफलतापूर्वक प्राप्त किया गया।',
  },
  LANGUAGE_CREATED_SUCCESS: {
    code: 'SC365',
    message: 'भाषा सफलतापूर्वक बनाई गई।',
  },
  STATE_CREATED_SUCCESS: {
    code: 'SC366',
    message: 'राज्य सफलतापूर्वक बनाया गया।',
  },
  SUBJECT_CREATED_SUCCESS: {
    code: 'SC367',
    message: 'विषय सफलतापूर्वक बनाया गया।',
  },
  DEPARTMENT_CREATED_SUCCESS: {
    code: 'SC368',
    message: 'विभाग सफलतापूर्वक बनाया गया।',
  },
  DESIGNATION_CREATED_SUCCESS: {
    code: 'SC369',
    message: 'पदनाम सफलतापूर्वक बनाया गया।',
  },
  GRADE_CREATED_SUCCESS: {
    code: 'SC370',
    message: 'ग्रेड सफलतापूर्वक बनाया गया।',
  },
  HOUSE_CREATED_SUCCESS: {
    code: 'SC371',
    message: 'हाउस सफलतापूर्वक बनाया गया।',
  },
  CURRENCY_CREATED_SUCCESS: {
    code: 'SC372',
    message: 'मुद्रा सफलतापूर्वक बनाई गई।',
  },
  COUNTRY_CREATED_SUCCESS: {
    code: 'SC373',
    message: 'देश सफलतापूर्वक बनाया गया।',
  },
  CLASS_CREATED_SUCCESS: {
    code: 'SC374',
    message: 'कक्षा सफलतापूर्वक बनाई गई।',
  },
  TASK_CREATED_SUCCESS: {
    code: 'SC375',
    message: 'कार्य सफलतापूर्वक बनाया गया।',
  },
  KNOWN_LANGUAGE_CREATED_SUCCESS: {
    code: 'SC376',
    message: 'ज्ञात भाषा सफलतापूर्वक बनाई गई।',
  },

  // कंपनी संचालन सफलता कोड (SC381-SC400)
  COMPANY_CREATED_SUCCESS: {
    code: 'SC381',
    message: 'कंपनी सफलतापूर्वक बनाई गई।',
  },
  COMPANY_UPDATED_SUCCESS: {
    code: 'SC382',
    message: 'कंपनी सफलतापूर्वक अपडेट की गई।',
  },
  COMPANY_USER_CREATED_SUCCESS: {
    code: 'SC383',
    message: 'कंपनी उपयोगकर्ता सफलतापूर्वक बनाया गया।',
  },
  COMPANY_USER_UPDATED_SUCCESS: {
    code: 'SC384',
    message: 'कंपनी उपयोगकर्ता सफलतापूर्वक अपडेट किया गया।',
  },
  COMPANY_USER_DELETED_SUCCESS: {
    code: 'SC385',
    message: 'कंपनी उपयोगकर्ता सफलतापूर्वक हटाया गया।',
  },
  SCHOOL_CREATED_SUCCESS: {
    code: 'SC386',
    message: 'स्कूल सफलतापूर्वक बनाया गया।',
  },
  SCHOOL_UPDATED_SUCCESS: {
    code: 'SC387',
    message: 'स्कूल सफलतापूर्वक अपडेट किया गया।',
  },
  COACHING_CREATED_SUCCESS: {
    code: 'SC388',
    message: 'कोचिंग प्रदाता सफलतापूर्वक बनाया गया।',
  },
  TUITION_CREATED_SUCCESS: {
    code: 'SC389',
    message: 'ट्यूशन प्रदाता सफलतापूर्वक बनाया गया।',
  },
  SETTINGS_UPDATED_SUCCESS: {
    code: 'SC390',
    message: 'सेटिंग्स सफलतापूर्वक अपडेट की गईं।',
  },
  SETTINGS_RETRIEVED_SUCCESS: {
    code: 'SC391',
    message: 'सेटिंग्स सफलतापूर्वक प्राप्त की गईं।',
  },
  SUBSCRIPTION_ACTIVATED_SUCCESS: {
    code: 'SC392',
    message: 'सदस्यता सफलतापूर्वक सक्रिय की गई।',
  },
  SUBSCRIPTION_DEACTIVATED_SUCCESS: {
    code: 'SC393',
    message: 'सदस्यता सफलतापूर्वक निष्क्रिय की गई।',
  },
  ORGANIZATION_ASSIGNED_SUCCESS: {
    code: 'SC394',
    message: 'संगठन सफलतापूर्वक नियुक्त किया गया।',
  },
};
