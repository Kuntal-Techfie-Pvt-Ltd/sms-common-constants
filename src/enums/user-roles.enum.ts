/**
 * User Role Enums
 * Defines all possible user roles in the SMS system
 */
export enum UserRole {
  // System Roles
  SUPER_ADMIN = 'SUPER_ADMIN',
  SYSTEM_ADMIN = 'SYSTEM_ADMIN',

  // Company/Organization Roles
  COMPANY_SUPER_ADMIN = 'COMPANY_SUPER_ADMIN', // Can do anything in company
  COMPANY_ADMIN = 'COMPANY_ADMIN',
  COMPANY_MANAGER = 'COMPANY_MANAGER',

  // School Management Roles
  SCHOOL_SUPER_ADMIN = 'SCHOOL_SUPER_ADMIN', // Superadmin for all schools
  SCHOOL_ADMIN = 'SCHOOL_ADMIN',
  PRINCIPAL = 'PRINCIPAL',
  VICE_PRINCIPAL = 'VICE_PRINCIPAL',
  ACADEMIC_COORDINATOR = 'ACADEMIC_COORDINATOR',

  // Teaching Staff
  TEACHER = 'TEACHER',
  SUBSTITUTE_TEACHER = 'SUBSTITUTE_TEACHER',
  HEAD_TEACHER = 'HEAD_TEACHER',
  TEACHING_ASSISTANT = 'TEACHING_ASSISTANT',

  // Tuition Roles
  TUITION_SUPER_ADMIN = 'TUITION_SUPER_ADMIN', // Handles all tuitions
  TUITION_ADMIN = 'TUITION_ADMIN', // Specific tuition admin/owner
  TUTOR = 'TUTOR', // Individual tutor

  // Other-Program Roles
  PROGRAM_SUPER_ADMIN = 'PROGRAM_SUPER_ADMIN', // Handles all other-programs
  PROGRAM_ADMIN = 'PROGRAM_ADMIN', // Specific program admin
  PROGRAM_INSTRUCTOR = 'PROGRAM_INSTRUCTOR', // Program instructor/facilitator

  // Non-Teaching Staff
  LIBRARIAN = 'LIBRARIAN',
  LAB_ASSISTANT = 'LAB_ASSISTANT',
  COUNSELOR = 'COUNSELOR',
  NURSE = 'NURSE',
  ACCOUNTANT = 'ACCOUNTANT',
  RECEPTIONIST = 'RECEPTIONIST',

  // Transport Staff
  DRIVER = 'DRIVER',
  TRANSPORT_COORDINATOR = 'TRANSPORT_COORDINATOR',

  // Security Staff
  SECURITY_GUARD = 'SECURITY_GUARD',
  SECURITY_SUPERVISOR = 'SECURITY_SUPERVISOR',

  // Students & Parents
  STUDENT = 'STUDENT',
  PARENT = 'PARENT',
  GUARDIAN = 'GUARDIAN',

  // External Roles
  EXTERNAL_LEARNER = 'EXTERNAL_LEARNER',
  ALUMNI = 'ALUMNI',
  VISITOR = 'VISITOR',
}

/**
 * Role Groups for easier permission management
 */
export const RoleGroups = {
  ADMIN_ROLES: [
    UserRole.SUPER_ADMIN,
    UserRole.SYSTEM_ADMIN,
    UserRole.COMPANY_SUPER_ADMIN,
    UserRole.COMPANY_ADMIN,
    UserRole.SCHOOL_SUPER_ADMIN,
    UserRole.SCHOOL_ADMIN,
    UserRole.TUITION_SUPER_ADMIN,
    UserRole.TUITION_ADMIN,
    UserRole.PROGRAM_SUPER_ADMIN,
    UserRole.PROGRAM_ADMIN,
  ],
  MANAGEMENT_ROLES: [
    UserRole.PRINCIPAL,
    UserRole.VICE_PRINCIPAL,
    UserRole.ACADEMIC_COORDINATOR,
    UserRole.COMPANY_MANAGER,
  ],
  TEACHING_ROLES: [
    UserRole.TEACHER,
    UserRole.SUBSTITUTE_TEACHER,
    UserRole.HEAD_TEACHER,
    UserRole.TEACHING_ASSISTANT,
    UserRole.TUTOR,
    UserRole.PROGRAM_INSTRUCTOR,
  ],
  STAFF_ROLES: [
    UserRole.LIBRARIAN,
    UserRole.LAB_ASSISTANT,
    UserRole.COUNSELOR,
    UserRole.NURSE,
    UserRole.ACCOUNTANT,
    UserRole.RECEPTIONIST,
  ],
  TRANSPORT_ROLES: [UserRole.DRIVER, UserRole.TRANSPORT_COORDINATOR],
  SECURITY_ROLES: [UserRole.SECURITY_GUARD, UserRole.SECURITY_SUPERVISOR],
  STUDENT_ROLES: [UserRole.STUDENT, UserRole.EXTERNAL_LEARNER],
  PARENT_ROLES: [UserRole.PARENT, UserRole.GUARDIAN],
};
