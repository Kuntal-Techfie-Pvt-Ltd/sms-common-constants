# Quick Start Guide - SMS Common Constants

## 1. Build the Package

```bash
cd sms-backend/sms-common-constants
npm install
npm run build
```

## 2. Link to Your Microservice

### Option A: Using npm link (Development)

```bash
# In sms-common-constants directory
npm link

# In your microservice directory (e.g., sms-subscription)
cd ../sms-subscription
npm link @sms/common-constants
```

### Option B: Using file reference (Recommended)

Add to your microservice's `package.json`:

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

## 3. Use in Your Code

### Example 1: API Response Codes in Controllers

```typescript
// src/controllers/student.controller.ts
import { Controller, Get, Post, Body, Param, HttpStatus, HttpException } from '@nestjs/common';
import { SUCCESS_CODES, ERROR_CODES } from '@sms/common-constants';
import { StudentService } from './student.service';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Post()
  async create(@Body() createStudentDto: CreateStudentDto) {
    const student = await this.studentService.create(createStudentDto);

    return {
      ...SUCCESS_CODES.CREATE_SUCCESS,
      data: student,
    };
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const student = await this.studentService.findOne(id);

    if (!student) {
      throw new HttpException(ERROR_CODES.STUDENT_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    return {
      ...SUCCESS_CODES.COMMON_SUCCESS,
      data: student,
    };
  }
}
```

### Example 2: Enums in Entities

```typescript
// src/entities/user.entity.ts
import { Entity, Column, PrimaryColumn } from 'typeorm';
import { UserRole, Gender, Status } from '@sms/common-constants';

@Entity('users')
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

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

  @Column({
    type: 'enum',
    enum: Status,
    default: Status.ACTIVE,
  })
  status: Status;
}
```

### Example 3: Enums in DTOs

```typescript
// src/dto/create-attendance.dto.ts
import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { AttendanceStatus } from '@sms/common-constants';

export class CreateAttendanceDto {
  @IsNotEmpty()
  @IsString()
  studentId: string;

  @IsNotEmpty()
  @IsEnum(AttendanceStatus)
  status: AttendanceStatus;

  @IsNotEmpty()
  @IsString()
  date: string;
}
```

### Example 4: Using Configuration Constants

```typescript
// src/services/auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AUTH, VALIDATION } from '@sms/common-constants';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}

  async generateToken(user: User) {
    const payload = { sub: user.id, email: user.email, role: user.role };

    return {
      accessToken: this.jwtService.sign(payload, {
        expiresIn: AUTH.JWT_EXPIRY,
      }),
      refreshToken: this.jwtService.sign(payload, {
        expiresIn: AUTH.REFRESH_TOKEN_EXPIRY,
      }),
    };
  }

  validateEmail(email: string): boolean {
    return VALIDATION.EMAIL_REGEX.test(email);
  }

  validatePassword(password: string): { valid: boolean; message?: string } {
    if (password.length < AUTH.PASSWORD_MIN_LENGTH) {
      return {
        valid: false,
        message: `Password must be at least ${AUTH.PASSWORD_MIN_LENGTH} characters`,
      };
    }

    if (password.length > AUTH.PASSWORD_MAX_LENGTH) {
      return {
        valid: false,
        message: `Password must not exceed ${AUTH.PASSWORD_MAX_LENGTH} characters`,
      };
    }

    return { valid: true };
  }
}
```

### Example 5: Using Role Groups for Permissions

```typescript
// src/guards/roles.guard.ts
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RoleGroups, UserRole } from '@sms/common-constants';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<UserRole[]>('roles', context.getHandler());

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // Check if user has admin role
    const isAdmin = RoleGroups.ADMIN_ROLES.includes(user.role);
    if (isAdmin) {
      return true; // Admins have access to everything
    }

    // Check if user role is in required roles
    return requiredRoles.some((role) => user.role === role);
  }
}
```

### Example 6: Pagination with Constants

```typescript
// src/controllers/student.controller.ts
import { Controller, Get, Query } from '@nestjs/common';
import { PAGINATION } from '@sms/common-constants';

@Controller('students')
export class StudentController {
  @Get()
  async findAll(@Query('page') page?: number, @Query('limit') limit?: number) {
    const currentPage = page || PAGINATION.DEFAULT_PAGE;
    const pageLimit = Math.min(limit || PAGINATION.DEFAULT_LIMIT, PAGINATION.MAX_LIMIT);

    const students = await this.studentService.findAll({
      page: currentPage,
      limit: pageLimit,
    });

    return {
      data: students,
      meta: {
        page: currentPage,
        limit: pageLimit,
        total: students.length,
      },
    };
  }
}
```

## 4. TypeScript Auto-completion

The package includes full TypeScript definitions, so you'll get auto-completion in your IDE:

```typescript
import { UserRole } from '@sms/common-constants';

// Your IDE will show all available roles
const role = UserRole. // <- Auto-completion shows all roles
```

## 5. Rebuild After Changes

If you make changes to the constants package:

```bash
cd sms-common-constants
npm run build
```

Your microservices will automatically pick up the changes if linked or using file reference.

## 6. Watch Mode (Development)

For active development:

```bash
cd sms-common-constants
npm run watch
```

This will automatically rebuild when you make changes.

## Common Imports

```typescript
// API Codes
import { SUCCESS_CODES, ERROR_CODES, API_CODES } from '@sms/common-constants';

// Enums
import {
  UserRole,
  RoleGroups,
  AttendanceStatus,
  PaymentStatus,
  Gender,
  Status,
  NotificationType,
} from '@sms/common-constants';

// Configuration
import {
  PAGINATION,
  AUTH,
  FILE_UPLOAD,
  VALIDATION,
  SCHOOL,
  HTTP_STATUS,
} from '@sms/common-constants';
```

## Troubleshooting

### Issue: Module not found

**Solution:** Make sure you've built the package and linked/installed it:

```bash
cd sms-common-constants
npm run build
npm link

cd ../your-microservice
npm link @sms/common-constants
```

### Issue: Changes not reflecting

**Solution:** Rebuild the constants package:

```bash
cd sms-common-constants
npm run build
```

### Issue: TypeScript errors

**Solution:** Ensure your microservice's `tsconfig.json` is compatible:

```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "esModuleInterop": true
  }
}
```

## Next Steps

- Read the full [README.md](./README.md) for complete documentation
- Check available enums and constants in the source files
- Use TypeScript auto-completion to explore available values
