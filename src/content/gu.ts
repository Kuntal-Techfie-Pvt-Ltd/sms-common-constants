/**
 * UI Content Dictionary — GU
 * Source of truth for control names, labels, and other UI text shown to users,
 * shared between sms-web and the mobile apps. Namespaced by surface ("web"/"app")
 * because the two products have different screens, not just different languages.
 *
 * DO NOT hand-edit generated sections without updating the source locale files this
 * was generated from (sms-web/src/locales, apps/kuntalstechfie-app/src/i18n/locales)
 * to keep them in sync, or intentionally diverge and note why.
 */
import { UiContentDictionary } from './content.types';

export const UI_CONTENT_GU: UiContentDictionary = {
  "web": {
    "common": {
      "submit": "સબમિટ કરો",
      "cancel": "રદ કરો",
      "save": "સાચવો",
      "delete": "કાઢી નાખો",
      "edit": "સંપાદિત કરો",
      "view": "જુઓ",
      "search": "શોધો",
      "filter": "ફિલ્ટર",
      "close": "બંધ કરો",
      "back": "પાછળ",
      "next": "આગળ",
      "previous": "પહેલા",
      "continue": "ચાલુ રાખો",
      "confirm": "પુષ્ટિ કરો",
      "loading": "લોડ થઈ રહ્યું છે...",
      "noData": "કોઈ ડેટા ઉપલબ્ધ નથી",
      "actions": "ક્રિયાઓ",
      "status": "સ્થિતિ",
      "active": "સક્રિય",
      "inactive": "નિષ્ક્રિય",
      "select": "પસંદ કરો",
      "all": "બધા",
      "none": "કોઈ નહીં",
      "yes": "હા",
      "no": "ના"
    },
    "auth": {
      "login": "લૉગિન",
      "signIn": "સાઇન ઇન કરો",
      "signingIn": "સાઇન ઇન થઈ રહ્યું છે...",
      "signOut": "લૉગઆઉટ",
      "logout": "લૉગઆઉટ",
      "username": "વપરાશકર્તા નામ",
      "password": "પાસવર્ડ",
      "confirmPassword": "પાસવર્ડ પુષ્ટિ કરો",
      "forgotPassword": "પાસવર્ડ ભૂલી ગયા?",
      "rememberMe": "મને યાદ રાખો",
      "signInToAccount": "તમારા એકાઉન્ટમાં સાઇન ઇન કરો",
      "enterUsername": "તમારું વપરાશકર્તા નામ દાખલ કરો",
      "enterPassword": "તમારો પાસવર્ડ દાખલ કરો",
      "invalidCredentials": "અમાન્ય વપરાશકર્તા નામ અથવા પાસવર્ડ",
      "loginFailed": "લૉગિન નિષ્ફળ",
      "loginSuccess": "સફળતાપૂર્વક લૉગિન",
      "connectionError": "એક ભૂલ આવી. કૃપા કરીને તમારું કનેક્શન તપાસો અને ફરી પ્રયાસ કરો.",
      "dontHaveAccount": "એકાઉન્ટ નથી?",
      "registerCompany": "તમારી કંપની નોંધાવો",
      "registerEntity": "સ્કૂલ/ટ્યુશન/પ્રોગ્રામ નોંધાવો",
      "enrollProgram": "પ્રોગ્રામમાં નોંધણી કરો",
      "loginInstruction": "તમારી નોંધાયેલી ઓળખપત્રો સાથે લૉગિન કરો અથવા ઉપર એક નવો એકાઉન્ટ નોંધાવો.",
      "selectAccount": "એક એકાઉન્ટ પસંદ કરો",
      "chooseAccount": "તમે કયા એકાઉન્ટની પ્રવેશ મેળવવા માંગો છો તે પસંદ કરો",
      "selectRole": "ભૂમિકા પસંદ કરો",
      "chooseRole": "આ સત્ર માટે તમારી ભૂમિકા પસંદ કરો",
      "availableAccounts": "ઉપલબ્ધ એકાઉન્ટ્સ",
      "availableRoles": "ઉપલબ્ધ ભૂમિકાઓ",
      "backToAccountSelection": "એકાઉન્ટ પસંદગી પર પાછળ જાઓ",
      "signedInAs": "તરીકે સાઇન ઇન કર્યું",
      "accountType": {
        "school": "સ્કૂલ",
        "learning": "શીખવું"
      },
      "roles": {
        "admin": "વ્યવસ્થાપક",
        "teacher": "શિક્ષક",
        "student": "વિદ્યાર્થી",
        "parent": "પિતા",
        "security": "સુરક્ષા"
      }
    },
    "navigation": {
      "dashboard": "ડેશબોર્ડ",
      "students": "વિદ્યાર્થીઓ",
      "staff": "સ્ટાફ",
      "parents": "પિતા",
      "attendance": "હાજરી",
      "fees": "ફી",
      "tasks": "કાર્યો",
      "documents": "દસ્તાવેજો",
      "notifications": "સૂચનાઓ",
      "settings": "સેટિંગ્સ",
      "history": "ઇતિહાસ",
      "results": "પરિણામો",
      "messages": "સંદેશાઓ",
      "calendar": "કેલેન્ડર",
      "busTracking": "બસ ટ્રૅકિંગ",
      "profile": "પ્રોફાઇલ",
      "security": "સુરક્ષા",
      "language": "ભાષા"
    },
    "dashboard": {
      "welcome": "સ્વાગત છે",
      "overview": "સંખ્યાબંધ અવલોકન",
      "statistics": "આંકડાઓ",
      "recentActivity": "તાજેતરની પ્રવૃત્તિ",
      "quickActions": "ઝડપી ક્રિયાઓ",
      "totalStudents": "કુલ વિદ્યાર્થીઓ",
      "activeTeachers": "સક્રિય શિક્ષકો",
      "monthlyRevenue": "માસિક આવક",
      "attendanceRate": "હાજરી દર",
      "currentGPA": "વર્તમાન GPA",
      "assignmentsDue": "બાકી असाइनमेंटs",
      "liveClassesToday": "આજની લાઇવ ક્લાસો",
      "studentsEnrolled": "નોંધાયેલા વિદ્યાર્થીઓ",
      "pendingApprovals": "પેન્ડિંગ મંજૂરીઓ",
      "activeClasses": "સક્રિય ક્લાસો",
      "revenueThisMonth": "આ મહિનાની આવક"
    }
  },
  "app": {}
};
