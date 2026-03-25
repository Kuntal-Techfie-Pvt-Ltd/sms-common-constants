/**
 * SMS Common Constants - Usage Examples
 *
 * This file demonstrates how to use the constants package in your microservices.
 * Copy these examples to your actual service files.
 */

// ============================================================================
// EXAMPLE 1: API Response Codes in NestJS Controller
// ============================================================================

import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { SUCCESS_CODES, ERROR_CODES } from '@sms/common-constants';

@Controller('students')
export class StudentControllerExample {
  @Post()
  async createStudent(@Body() createDto: any) {
    // After successful creation
    return {
      ...SUCCESS_CODES.STUDENT_ENROLLED_SUCCESS,
      data: { id: '123', name: 'John Doe' },
    };
    // Response: { code: 'SC041', message: 'Student enrolled successfully.', data: {...} }
  }

  @Get(':id')
  async getStudent(@Param('id') id: string) {
    const student = null; // simulate not found

    if (!student) {
      throw new HttpException(ERROR_CODES.STUDENT_NOT_FOUND, HttpStatus.NOT_FOUND);
    }

    return {
      ...SUCCESS_CODES.COMMON_SUCCESS,
      data: student,
    };
  }

  @Put(':id')
  async updateStudent(@Param('id') id: string, @Body() updateDto: any) {
    return {
      ...SUCCESS_CODES.UPDATE_SUCCESS,
      data: { id, ...updateDto },
    };
  }

  @Delete(':id')
  async deleteStudent(@Param('id') id: string) {
    return SUCCESS_CODES.DELETE_SUCCESS;
  }
}

// ============================================================================
// EXAMPLE 2: Enums in TypeORM Entities
// ============================================================================

import { Entity, Column, PrimaryColumn, CreateDateColumn } from 'typeorm';
import {
  UserRole,
  Gender,
  Status,
  AttendanceStatus,
  PaymentStatus,
  StudentStatus,
} from '@sms/common-constants';

@Entity('users')
export class UserEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column({ unique: true })
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

  @CreateDateColumn()
  createdAt: Date;
}

@Entity('attendance')
export class AttendanceEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  studentId: string;

  @Column({
    type: 'enum',
    enum: AttendanceStatus,
  })
  status: AttendanceStatus;

  @Column({ type: 'date' })
  date: Date;
}

@Entity('payments')
export class PaymentEntity {
  @PrimaryColumn()
  id: string;

  @Column()
  studentId: string;

  @Column({ type: 'decimal', precision: 12, scale: 2 })
  amount: number;

  @Column({
    type: 'enum',
    enum: PaymentStatus,
    default: PaymentStatus.PENDING,
  })
  status: PaymentStatus;
}

// ============================================================================
// EXAMPLE 3: Enums in DTOs with Validation
// ============================================================================

import { IsEnum, IsNotEmpty, IsString, IsEmail, MinLength, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserRole, Gender, AttendanceStatus } from '@sms/common-constants';

export class CreateUserDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({ enum: UserRole })
  @IsEnum(UserRole)
  role: UserRole;

  @ApiProperty({ enum: Gender })
  @IsEnum(Gender)
  gender: Gender;

  @ApiProperty()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(128)
  password: string;
}

export class MarkAttendanceDto {
  @ApiProperty()
  @IsNotEmpty()
  @IsString()
  studentId: string;

  @ApiProperty({ enum: AttendanceStatus })
  @IsEnum(AttendanceStatus)
  status: AttendanceStatus;

  @ApiProperty()
  @IsNotEmpty()
  date: string;
}

// ============================================================================
// EXAMPLE 4: Using Configuration Constants
// ============================================================================

import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AUTH, PAGINATION, VALIDATION, FILE_UPLOAD, SCHOOL, GRADING } from '@sms/common-constants';

@Injectable()
export class AuthServiceExample {
  constructor(private jwtService: JwtService) {}

  generateToken(user: any) {
    const payload = { sub: user.id, email: user.email, role: user.role };

    return {
      accessToken: this.jwtService.sign(payload, {
        expiresIn: AUTH.JWT_EXPIRY, // '24h'
      }),
      refreshToken: this.jwtService.sign(payload, {
        expiresIn: AUTH.REFRESH_TOKEN_EXPIRY, // '7d'
      }),
    };
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

  validateEmail(email: string): boolean {
    return VALIDATION.EMAIL_REGEX.test(email);
  }

  validateMobileNumber(mobile: string): boolean {
    return VALIDATION.MOBILE_NUMBER_REGEX.test(mobile);
  }
}

@Injectable()
export class StudentServiceExample {
  async findAll(page?: number, limit?: number) {
    const currentPage = page || PAGINATION.DEFAULT_PAGE;
    const pageLimit = Math.min(limit || PAGINATION.DEFAULT_LIMIT, PAGINATION.MAX_LIMIT);

    const skip = (currentPage - 1) * pageLimit;

    // Use with TypeORM
    // return this.studentRepository.findAndCount({
    //   skip,
    //   take: pageLimit,
    // });

    return { items: [], total: 0 };
  }

  validateClassCapacity(currentCount: number): boolean {
    return currentCount < SCHOOL.MAX_CLASS_CAPACITY;
  }

  calculateGrade(marks: number): string {
    if (marks >= GRADING.DISTINCTION_PERCENTAGE) {
      return 'Distinction';
    } else if (marks >= GRADING.FIRST_CLASS_PERCENTAGE) {
      return 'First Class';
    } else if (marks >= GRADING.SECOND_CLASS_PERCENTAGE) {
      return 'Second Class';
    } else if (marks >= GRADING.PASSING_PERCENTAGE) {
      return 'Pass';
    } else {
      return 'Fail';
    }
  }
}

@Injectable()
export class FileUploadServiceExample {
  validateImageUpload(file: Express.Multer.File): void {
    // Check file size
    if (file.size > FILE_UPLOAD.MAX_IMAGE_SIZE_MB * 1024 * 1024) {
      throw new Error(`Image size must not exceed ${FILE_UPLOAD.MAX_IMAGE_SIZE_MB}MB`);
    }

    // Check file type
    if (!FILE_UPLOAD.ALLOWED_IMAGE_TYPES.includes(file.mimetype)) {
      throw new Error(
        `Invalid image type. Allowed types: ${FILE_UPLOAD.ALLOWED_IMAGE_TYPES.join(', ')}`
      );
    }
  }

  validateDocumentUpload(file: Express.Multer.File): void {
    if (file.size > FILE_UPLOAD.MAX_DOCUMENT_SIZE_MB * 1024 * 1024) {
      throw new Error(`Document size must not exceed ${FILE_UPLOAD.MAX_DOCUMENT_SIZE_MB}MB`);
    }

    if (!FILE_UPLOAD.ALLOWED_DOCUMENT_TYPES.includes(file.mimetype)) {
      throw new Error(`Invalid document type`);
    }
  }
}

// ============================================================================
// EXAMPLE 5: Using Role Groups for Authorization
// ============================================================================

import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { UserRole, RoleGroups } from '@sms/common-constants';

@Injectable()
export class RolesGuardExample implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.get<UserRole[]>('roles', context.getHandler());

    if (!requiredRoles) {
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user;

    // Admin users have access to everything
    if (RoleGroups.ADMIN_ROLES.includes(user.role)) {
      return true;
    }

    // Management roles have extended permissions
    if (RoleGroups.MANAGEMENT_ROLES.includes(user.role)) {
      // Add management-specific logic
    }

    // Teaching staff permissions
    if (RoleGroups.TEACHING_ROLES.includes(user.role)) {
      // Add teaching-specific logic
    }

    // Check if user role matches required roles
    return requiredRoles.some((role) => user.role === role);
  }
}

// Usage in controller
import { SetMetadata, UseGuards } from '@nestjs/common';

export const Roles = (...roles: UserRole[]) => SetMetadata('roles', roles);

@Controller('admin')
@UseGuards(RolesGuardExample)
export class AdminControllerExample {
  @Get()
  @Roles(UserRole.SUPER_ADMIN, UserRole.SCHOOL_ADMIN)
  getDashboard() {
    return { message: 'Admin dashboard' };
  }

  @Post('users')
  @Roles(...RoleGroups.ADMIN_ROLES) // Use role group
  createUser() {
    return { message: 'User created' };
  }
}

// ============================================================================
// EXAMPLE 6: Conditional Logic with Enums
// ============================================================================

import { AttendanceStatus, PaymentStatus, StudentStatus } from '@sms/common-constants';

@Injectable()
export class BusinessLogicExample {
  processAttendance(status: AttendanceStatus) {
    switch (status) {
      case AttendanceStatus.PRESENT:
        // Mark as present
        break;
      case AttendanceStatus.ABSENT:
        // Send notification to parent
        break;
      case AttendanceStatus.LATE:
        // Record late arrival
        break;
      case AttendanceStatus.ON_LEAVE:
        // Check if leave is approved
        break;
      default:
        throw new Error('Invalid attendance status');
    }
  }

  processPayment(payment: any) {
    if (payment.status === PaymentStatus.PENDING) {
      // Process payment
      payment.status = PaymentStatus.PROCESSING;
    } else if (payment.status === PaymentStatus.COMPLETED) {
      // Send receipt
    } else if (payment.status === PaymentStatus.FAILED) {
      // Retry or notify user
    }
  }

  canEnroll(student: any): boolean {
    return (
      student.status === StudentStatus.ACTIVE &&
      student.status !== StudentStatus.SUSPENDED &&
      student.status !== StudentStatus.EXPELLED
    );
  }
}

// ============================================================================
// EXAMPLE 7: Database Queries with Enums
// ============================================================================

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, In } from 'typeorm';
import { UserRole, Status, RoleGroups } from '@sms/common-constants';

@Injectable()
export class UserRepositoryExample {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) {}

  // Find all active teachers
  async findActiveTeachers() {
    return this.userRepository.find({
      where: {
        role: In(RoleGroups.TEACHING_ROLES),
        status: Status.ACTIVE,
      },
    });
  }

  // Find all admins
  async findAdmins() {
    return this.userRepository.find({
      where: {
        role: In(RoleGroups.ADMIN_ROLES),
      },
    });
  }

  // Find users by role
  async findByRole(role: UserRole) {
    return this.userRepository.find({
      where: { role },
    });
  }
}

// ============================================================================
// EXAMPLE 8: Response Formatting Helper
// ============================================================================

import { SUCCESS_CODES, ERROR_CODES, HTTP_STATUS } from '@sms/common-constants';

export class ResponseHelperExample {
  static success(code: keyof typeof SUCCESS_CODES, data?: any) {
    return {
      ...SUCCESS_CODES[code],
      data,
    };
  }

  static error(code: keyof typeof ERROR_CODES) {
    return ERROR_CODES[code];
  }

  static paginated(code: keyof typeof SUCCESS_CODES, items: any[], meta: any) {
    return {
      ...SUCCESS_CODES[code],
      data: items,
      meta,
    };
  }
}

// Usage
@Controller('students')
export class StudentControllerWithHelper {
  @Get()
  async findAll() {
    const students = [{ id: '1', name: 'John' }];

    return ResponseHelperExample.paginated('LISTING_SUCCESS', students, {
      page: 1,
      limit: 10,
      total: 1,
    });
  }

  @Post()
  async create(@Body() dto: any) {
    const student = { id: '2', name: 'Jane' };
    return ResponseHelperExample.success('STUDENT_ENROLLED_SUCCESS', student);
  }
}

// ============================================================================
// EXAMPLE 9: Custom Validation Decorators
// ============================================================================

import { registerDecorator, ValidationOptions, ValidationArguments } from 'class-validator';
import { VALIDATION } from '@sms/common-constants';

export function IsValidMobileNumber(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isValidMobileNumber',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          return typeof value === 'string' && VALIDATION.MOBILE_NUMBER_REGEX.test(value);
        },
        defaultMessage(args: ValidationArguments) {
          return 'Mobile number must be 10-15 digits';
        },
      },
    });
  };
}

// Usage in DTO
export class CreateStudentDtoWithValidation {
  @IsValidMobileNumber()
  mobileNumber: string;
}

// ============================================================================
// EXAMPLE 10: HTTP Status Codes Usage
// ============================================================================

import { HttpException } from '@nestjs/common';
import { HTTP_STATUS } from '@sms/common-constants';

@Injectable()
export class HttpExampleService {
  throwNotFound(message: string) {
    throw new HttpException(message, HTTP_STATUS.NOT_FOUND);
  }

  throwBadRequest(message: string) {
    throw new HttpException(message, HTTP_STATUS.BAD_REQUEST);
  }

  throwUnauthorized() {
    throw new HttpException('Unauthorized', HTTP_STATUS.UNAUTHORIZED);
  }

  throwForbidden() {
    throw new HttpException('Forbidden', HTTP_STATUS.FORBIDDEN);
  }
}

/**
 * ============================================================================
 * HOW TO USE THIS FILE:
 * ============================================================================
 *
 * 1. Copy the examples you need to your microservice
 * 2. Import the required constants/enums from '@sms/common-constants'
 * 3. Adapt the examples to your specific use case
 * 4. Enjoy type-safe, consistent code!
 *
 * ============================================================================
 */
