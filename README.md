# SMS Common Constants

Centralized constants, enums, and type definitions for SMS backend microservices.

## Overview

This package provides a single source of truth for all shared constants, enums, and type definitions used across the SMS (School Management System) backend microservices. By centralizing these values, we ensure consistency, reduce duplication, and make maintenance easier.

## Features

- 📋 **API Response Codes** - Standardized success and error codes
- 🏷️ **Enums** - Type-safe enumerations for all entities
- ⚙️ **Configuration Constants** - System-wide configuration values
- 📦 **TypeScript Support** - Full type definitions included
- 🔄 **Easy Imports** - Clean, organized exports

## Installation

### In the same monorepo

Link the package to your microservice:

```bash
cd your-microservice
npm link ../sms-common-constants
```

### Or add as a dependency

Add to your `package.json`:

```json
{
  "dependencies": {
    "@sms/common-constants": "file:../sms-common-constants"
  }
}
```

Then install:

```bash
npm install
```

## Building

Build the TypeScript files to JavaScript:

```bash
cd sms-common-constants
npm run build
```

The compiled files will be in the `dist/` directory.

## Usage

### API Response Codes

```typescript
import { SUCCESS_CODES, ERROR_CODES, API_CODES } from '@sms/common-constants';

// Using success codes
return {
  ...SUCCESS_CODES.CREATE_SUCCESS,
  data: newStudent,
};
// Output: { code: 'SC002', message: 'Created successfully.', data: {...} }

// Using error codes
throw new HttpException(ERROR_CODES.STUDENT_NOT_FOUND, HttpStatus.NOT_FOUND);
// Output: { code: 'EC101', message: 'Student not found.' }

// Using combined codes
const responseCode = isSuccess ? API_CODES.COMMON_SUCCESS : API_CODES.UNKNOWN_ERROR;
```

### Enums

```typescript
import {
  UserRole,
  AttendanceStatus,
  PaymentStatus,
  Gender,
  GradeLevel,
  NotificationType,
} from '@sms/common-constants';

// Using enums in entities
@Entity()
export class User {
  @Column({
    type: 'enum',
    enum: UserRole,
    default: UserRole.STUDENT,
  })
  role: UserRole;

  @Column({
    type: 'enum',
    enum: Gender,
  })
  gender: Gender;
}

// Using enums in services
if (user.role === UserRole.TEACHER) {
  // Teacher-specific logic
}

// Using enums in DTOs
export class CreateAttendanceDto {
  @IsEnum(AttendanceStatus)
  status: AttendanceStatus;
}

// Using role groups
import { RoleGroups } from '@sms/common-constants';

const isAdmin = RoleGroups.ADMIN_ROLES.includes(user.role);
const isTeacher = RoleGroups.TEACHING_ROLES.includes(user.role);
```

### Configuration Constants

```typescript
import {
  PAGINATION,
  AUTH,
  FILE_UPLOAD,
  VALIDATION,
  SCHOOL,
  HTTP_STATUS,
} from '@sms/common-constants';

// Pagination
@Get()
async findAll(@Query() query: PaginationDto) {
  const page = query.page || PAGINATION.DEFAULT_PAGE;
  const limit = Math.min(query.limit || PAGINATION.DEFAULT_LIMIT, PAGINATION.MAX_LIMIT);
  // ...
}

// File upload validation
if (file.size > FILE_UPLOAD.MAX_FILE_SIZE_BYTES) {
  throw new Error('File too large');
}

if (!FILE_UPLOAD.ALLOWED_IMAGE_TYPES.includes(file.mimetype)) {
  throw new Error('Invalid file type');
}

// Authentication
const token = this.jwtService.sign(payload, {
  expiresIn: AUTH.JWT_EXPIRY,
});

// Validation
if (password.length < AUTH.PASSWORD_MIN_LENGTH) {
  throw new Error('Password too short');
}

if (!VALIDATION.EMAIL_REGEX.test(email)) {
  throw new Error('Invalid email format');
}

// HTTP Status
return res.status(HTTP_STATUS.CREATED).json(response);
```

## Package Structure

```
sms-common-constants/
├── src/
│   ├── api-codes/           # API response codes
│   │   ├── api-codes.types.ts
│   │   ├── success-codes.ts
│   │   ├── error-codes.ts
│   │   └── index.ts
│   ├── enums/               # Enumerations
│   │   ├── academic.enum.ts
│   │   ├── attendance.enum.ts
│   │   ├── common.enum.ts
│   │   ├── notification.enum.ts
│   │   ├── payment.enum.ts
│   │   ├── transport.enum.ts
│   │   ├── user-roles.enum.ts
│   │   └── index.ts
│   ├── config/              # Configuration constants
│   │   ├── constants.ts
│   │   └── index.ts
│   └── index.ts             # Main entry point
├── dist/                    # Compiled JavaScript (generated)
├── package.json
├── tsconfig.json
└── README.md
```

## API Code Categories

### Success Codes (SC001-SC300)

- **SC001-SC020**: General Success
- **SC021-SC040**: Authentication Success
- **SC041-SC060**: Student Management Success
- **SC061-SC080**: Attendance Success
- **SC081-SC100**: Academic Success
- **SC101-SC120**: Fee & Payment Success
- **SC121-SC140**: Communication Success
- **SC141-SC160**: Bus Tracking Success
- **SC161-SC180**: Document Management Success
- **SC181-SC200**: Task Management Success
- **SC201-SC220**: Report & Analytics Success
- **SC221-SC240**: LMS Success
- **SC241-SC260**: Security Success
- **SC261-SC280**: Inventory Success
- **SC281-SC300**: Event Management Success

### Error Codes (EC001-EC800)

- **EC001-EC020**: General Errors
- **EC021-EC050**: Authentication & Authorization Errors
- **EC051-EC100**: User & Role Errors
- **EC101-EC150**: Student Management Errors
- **EC151-EC180**: School & Class Errors
- **EC181-EC200**: Teacher & Staff Errors
- **EC201-EC250**: Academic & Examination Errors
- **EC251-EC270**: Curriculum & Syllabus Errors
- **EC271-EC300**: Fee & Payment Errors
- **EC301-EC330**: Communication Errors
- **EC331-EC350**: Attendance Errors
- **EC351-EC380**: Bus Tracking & Transport Errors
- **EC381-EC400**: Document & File Errors
- **EC401-EC420**: Task & Assignment Errors
- **EC421-EC440**: Report & Analytics Errors
- **EC441-EC470**: LMS Errors
- **EC471-EC500**: Event & Extra-Curricular Errors
- **EC501-EC530**: Infrastructure & Facility Errors
- **EC531-EC550**: Scheduling & Timetable Errors
- **EC551-EC580**: HR & Payroll Errors
- **EC581-EC600**: Library & Resources Errors
- **EC601-EC620**: Security Errors
- **EC621-EC640**: Feedback & Survey Errors
- **EC641-EC660**: Disciplinary & Achievement Errors
- **EC661-EC670**: Parent Meeting Errors
- **EC671-EC680**: Volunteer & Community Errors
- **EC681-EC700**: Financial Aid & Scholarship Errors
- **EC701-EC730**: Research & IP Errors
- **EC731-EC760**: Alumni & Fundraising Errors
- **EC761-EC780**: Partnership & Collaboration Errors
- **EC781-EC800**: Integration & System Errors

## Available Enums

### User Management

- `UserRole` - All system roles (Admin, Teacher, Student, Parent, etc.)
- `RoleGroups` - Grouped roles for permission management

### Common

- `Status` - General status values
- `ApprovalStatus` - Approval workflow states
- `Gender` - Gender options
- `BloodGroup` - Blood group types
- `DayOfWeek` - Days of the week
- `Month` - Months of the year
- `Priority` - Priority levels
- `Visibility` - Visibility levels
- `CommunicationChannel` - Communication channels
- `Language` - Supported languages
- `Timezone` - Timezone values
- `Currency` - Currency codes (ISO 4217)
- `FileType` - Supported file types
- `DocumentType` - Document categories
- `AcademicTerm` - Academic terms/semesters
- `SchoolBoard` - School boards/curricula

### Academic

- `GradeLevel` - Grade/class levels
- `GradingSystem` - Grading systems
- `LetterGrade` - Letter grades
- `ExamType` - Types of exams
- `AssignmentStatus` - Assignment statuses
- `SubjectCategory` - Subject categories
- `EnrollmentStatus` - Enrollment statuses
- `StudentStatus` - Student statuses
- `PromotionStatus` - Promotion statuses

### Attendance

- `AttendanceStatus` - Attendance statuses
- `LeaveType` - Types of leave
- `LeaveStatus` - Leave approval statuses

### Payment

- `PaymentStatus` - Payment statuses
- `PaymentMethod` - Payment methods
- `FeeType` - Types of fees
- `FeeFrequency` - Fee payment frequencies
- `InvoiceStatus` - Invoice statuses
- `TransactionType` - Transaction types

### Notification

- `NotificationType` - Types of notifications
- `NotificationPriority` - Notification priorities
- `NotificationStatus` - Notification statuses
- `NotificationRecipientType` - Recipient types

### Transport

- `BusStatus` - Bus statuses
- `RouteStatus` - Route statuses
- `TripStatus` - Trip statuses
- `TripType` - Types of trips
- `StopType` - Stop types
- `DriverStatus` - Driver statuses
- `VehicleType` - Vehicle types
- `MaintenanceType` - Maintenance types

## Configuration Constants

### PAGINATION

- `DEFAULT_PAGE`, `DEFAULT_LIMIT`, `MAX_LIMIT`, `MIN_LIMIT`

### AUTH

- JWT configuration, OTP settings, password requirements, session timeouts

### FILE_UPLOAD

- File size limits, allowed file types for images/documents/videos

### VALIDATION

- Regex patterns for email, phone, etc.
- Min/max length constraints

### SCHOOL

- Class capacity limits, school hours, subject limits

### ATTENDANCE

- Late threshold, half-day threshold, minimum attendance percentage

### GRADING

- Max marks, passing percentage, grading scale

### FEE

- Late fee percentage, early payment discount, reminder schedule

### NOTIFICATION

- Retry attempts, batch size, TTL

### BUS_TRACKING

- Location update interval, geofence radius, speed limits

### CACHE

- TTL values for different cache levels

### RATE_LIMIT

- Rate limiting configuration

### API_KEY

- API key prefix, length, expiry

### SUBSCRIPTION

- Trial period, grace period, renewal reminders

### DATE_TIME

- Date/time formats, timezone defaults

### PATTERNS

- Regex patterns for ULID, UUID, phone numbers, etc.

### HTTP_STATUS

- Standard HTTP status codes

## Best Practices

### 1. Always Use Enums Instead of Magic Strings

❌ **Bad:**

```typescript
user.role = 'TEACHER';
attendance.status = 'PRESENT';
```

✅ **Good:**

```typescript
user.role = UserRole.TEACHER;
attendance.status = AttendanceStatus.PRESENT;
```

### 2. Use API Codes for Consistent Responses

❌ **Bad:**

```typescript
return { message: 'Student created successfully' };
```

✅ **Good:**

```typescript
return {
  ...SUCCESS_CODES.CREATE_SUCCESS,
  data: student,
};
```

### 3. Use Configuration Constants

❌ **Bad:**

```typescript
const limit = query.limit || 10;
if (password.length < 8) { ... }
```

✅ **Good:**

```typescript
const limit = query.limit || PAGINATION.DEFAULT_LIMIT;
if (password.length < AUTH.PASSWORD_MIN_LENGTH) { ... }
```

### 4. Use Role Groups for Permission Checks

❌ **Bad:**

```typescript
const isAdmin =
  user.role === 'SUPER_ADMIN' ||
  user.role === 'SYSTEM_ADMIN' ||
  user.role === 'COMPANY_ADMIN' ||
  user.role === 'SCHOOL_ADMIN';
```

✅ **Good:**

```typescript
const isAdmin = RoleGroups.ADMIN_ROLES.includes(user.role);
```

### 5. Import Only What You Need

❌ **Bad:**

```typescript
import * as Constants from '@sms/common-constants';
```

✅ **Good:**

```typescript
import { UserRole, SUCCESS_CODES, PAGINATION } from '@sms/common-constants';
```

## Development Workflow

### Adding New Constants

1. **Add to appropriate file**: Add new constant/enum to the relevant file in `src/`
2. **Update exports**: Ensure it's exported in the module's `index.ts`
3. **Build**: Run `npm run build`
4. **Test**: Test in a microservice that uses the constant
5. **Document**: Update this README if needed

### Adding New API Codes

1. **Choose category**: Determine if it's a success (SC) or error (EC) code
2. **Find available code**: Check the category range and pick next available number
3. **Add to file**: Add to `success-codes.ts` or `error-codes.ts`
4. **Build**: Run `npm run build`

### Adding New Enums

1. **Create or update enum file**: Add to existing or create new enum file in `src/enums/`
2. **Export**: Add export to `src/enums/index.ts`
3. **Build**: Run `npm run build`
4. **Document**: Add to README enum list

## Versioning

This package follows [Semantic Versioning](https://semver.org/):

- **MAJOR**: Breaking changes (e.g., removing/renaming enums)
- **MINOR**: New features (e.g., adding new enums/constants)
- **PATCH**: Bug fixes (e.g., typo corrections)

## Support

For issues, questions, or contributions:

- Create an issue in the repository
- Contact the SMS development team
- Check the main SMS documentation

## License

MIT
