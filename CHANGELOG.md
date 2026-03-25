# Changelog

All notable changes to the SMS Common Constants package will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-01-11

### Added

#### API Codes

- Success codes (SC001-SC300) for all major operations
  - General, authentication, student management, attendance, academic
  - Fee & payment, communication, bus tracking, documents
  - Tasks, reports, LMS, security, inventory, events
- Error codes (EC001-EC800) for comprehensive error handling
  - General errors, authentication, user management
  - Student management, academic, payments, communication
  - Attendance, transport, documents, tasks, LMS
  - Events, infrastructure, HR, library, security
  - Feedback, disciplinary, financial aid, research, alumni

#### Enums

- **User Management**: `UserRole`, `RoleGroups`
- **Common**: `Status`, `ApprovalStatus`, `Gender`, `BloodGroup`, `DayOfWeek`, `Month`, `Priority`, `Visibility`, `CommunicationChannel`, `Language`, `Timezone`, `Currency`, `FileType`, `DocumentType`, `AcademicTerm`, `SchoolBoard`
- **Academic**: `GradeLevel`, `GradingSystem`, `LetterGrade`, `ExamType`, `AssignmentStatus`, `SubjectCategory`, `EnrollmentStatus`, `StudentStatus`, `PromotionStatus`
- **Attendance**: `AttendanceStatus`, `LeaveType`, `LeaveStatus`
- **Payment**: `PaymentStatus`, `PaymentMethod`, `FeeType`, `FeeFrequency`, `InvoiceStatus`, `TransactionType`
- **Notification**: `NotificationType`, `NotificationPriority`, `NotificationStatus`, `NotificationRecipientType`
- **Transport**: `BusStatus`, `RouteStatus`, `TripStatus`, `TripType`, `StopType`, `DriverStatus`, `VehicleType`, `MaintenanceType`

#### Configuration Constants

- `PAGINATION` - Page and limit defaults
- `AUTH` - Authentication and authorization settings
- `FILE_UPLOAD` - File upload limits and allowed types
- `VALIDATION` - Regex patterns and validation rules
- `SCHOOL` - School-related constants
- `ATTENDANCE` - Attendance thresholds and rules
- `GRADING` - Grading system constants
- `FEE` - Fee and payment constants
- `NOTIFICATION` - Notification settings
- `BUS_TRACKING` - Bus tracking configuration
- `CACHE` - Cache TTL values
- `RATE_LIMIT` - Rate limiting configuration
- `API_KEY` - API key configuration
- `SUBSCRIPTION` - Subscription settings
- `DATE_TIME` - Date and time formats
- `PATTERNS` - Common regex patterns
- `HTTP_STATUS` - HTTP status codes

#### Documentation

- Comprehensive README with usage examples
- Quick start guide
- TypeScript type definitions
- Changelog

#### Build System

- TypeScript configuration
- Package.json with proper exports
- Build scripts (build, watch, clean)
- .gitignore for clean repository

### Technical Details

- Full TypeScript support with type definitions
- CommonJS module format for compatibility
- Source maps for debugging
- Declaration maps for IDE support

## [Unreleased]

### Planned Features

- Additional enums for specialized modules
- Validation helper functions
- Type guards for enum validation
- Multi-language support for API messages
- Additional configuration constants as needed

---

## Version Guidelines

### Major Version (x.0.0)

- Breaking changes to existing exports
- Renaming or removing enums
- Changing enum value formats
- Restructuring exports

### Minor Version (0.x.0)

- Adding new enums
- Adding new constants
- Adding new API codes
- Non-breaking additions

### Patch Version (0.0.x)

- Bug fixes
- Documentation updates
- Typo corrections
- Internal refactoring (no API changes)
