# Installing SMS Common Constants from GitLab

The `@sms/common-constants` package is now available on GitLab and can be used in all SMS microservices.

## 🔗 GitLab Repository

**Repository URL:** https://gitlab.com/company-backend-developers/sms-common-constants.git

---

## 📦 Installation Methods

### Method 1: Install from GitLab (Recommended for Production)

Add the package to your microservice's `package.json`:

```json
{
  "dependencies": {
    "@sms/common-constants": "git+https://gitlab.com/company-backend-developers/sms-common-constants.git"
  }
}
```

Then install:

```bash
npm install
```

Or install directly:

```bash
npm install git+https://gitlab.com/company-backend-developers/sms-common-constants.git
```

### Method 2: Install Specific Version/Tag

```bash
# Install specific branch
npm install git+https://gitlab.com/company-backend-developers/sms-common-constants.git#main

# Install specific tag (when available)
npm install git+https://gitlab.com/company-backend-developers/sms-common-constants.git#v1.0.0

# Install specific commit
npm install git+https://gitlab.com/company-backend-developers/sms-common-constants.git#c1c9b3f
```

In `package.json`:

```json
{
  "dependencies": {
    "@sms/common-constants": "git+https://gitlab.com/company-backend-developers/sms-common-constants.git#v1.0.0"
  }
}
```

### Method 3: Using SSH (If you have SSH access)

```bash
npm install git+ssh://git@gitlab.com/company-backend-developers/sms-common-constants.git
```

In `package.json`:

```json
{
  "dependencies": {
    "@sms/common-constants": "git+ssh://git@gitlab.com/company-backend-developers/sms-common-constants.git"
  }
}
```

### Method 4: For Local Development

If you want to use a local copy for development:

```bash
cd your-microservice
npm install file:../sms-common-constants
```

---

## 🚀 Usage in Microservices

### Step 1: Add to package.json

**For `sms-subscription` service:**

```bash
cd sms-backend/sms-subscription

# Add to package.json
npm install git+https://gitlab.com/company-backend-developers/sms-common-constants.git --save
```

**For `sms-auth` service:**

```bash
cd sms-backend/sms-auth

# Add to package.json
npm install git+https://gitlab.com/company-backend-developers/sms-common-constants.git --save
```

**For `sms-user` service:**

```bash
cd sms-backend/sms-user

# Add to package.json
npm install git+https://gitlab.com/company-backend-developers/sms-common-constants.git --save
```

### Step 2: Import and Use

After installation, you can import constants in your TypeScript files:

```typescript
import {
  SUCCESS_CODES,
  ERROR_CODES,
  UserRole,
  AttendanceStatus,
  PaymentStatus,
  PAGINATION,
  AUTH,
  HTTP_STATUS,
} from '@sms/common-constants';

// Use in your code
@Controller('students')
export class StudentController {
  @Post()
  async create(@Body() dto: CreateStudentDto) {
    const student = await this.studentService.create(dto);
    return {
      ...SUCCESS_CODES.STUDENT_ENROLLED_SUCCESS,
      data: student,
    };
  }

  @Get()
  async findAll(@Query('page') page?: number) {
    const currentPage = page || PAGINATION.DEFAULT_PAGE;
    // ...
  }
}
```

---

## 🔄 Updating the Package

### Update to Latest Version

```bash
npm update @sms/common-constants
```

Or reinstall:

```bash
npm install git+https://gitlab.com/company-backend-developers/sms-common-constants.git --force
```

### Check Current Version

```bash
npm list @sms/common-constants
```

---

## 🔐 Authentication (If Required)

If the GitLab repository is private and requires authentication:

### Option 1: Using Personal Access Token

1. Generate a Personal Access Token in GitLab:
   - Go to GitLab → Settings → Access Tokens
   - Create token with `read_repository` scope

2. Use in package.json:

```json
{
  "dependencies": {
    "@sms/common-constants": "git+https://oauth2:YOUR_TOKEN@gitlab.com/company-backend-developers/sms-common-constants.git"
  }
}
```

### Option 2: Using SSH Keys

1. Add your SSH key to GitLab:
   - Go to GitLab → Settings → SSH Keys
   - Add your public key

2. Use SSH URL:

```json
{
  "dependencies": {
    "@sms/common-constants": "git+ssh://git@gitlab.com/company-backend-developers/sms-common-constants.git"
  }
}
```

### Option 3: Using .npmrc

Create `.npmrc` in your project root (don't commit this file):

```
//gitlab.com/:_authToken=YOUR_GITLAB_TOKEN
```

Then use regular GitLab URL in package.json.

---

## 📝 Example package.json for Microservices

```json
{
  "name": "sms-subscription",
  "version": "1.0.0",
  "description": "SMS Subscription Service",
  "main": "dist/main.js",
  "scripts": {
    "start": "node dist/main.js",
    "start:dev": "nest start --watch",
    "build": "nest build"
  },
  "dependencies": {
    "@nestjs/common": "^10.0.0",
    "@nestjs/core": "^10.0.0",
    "@nestjs/typeorm": "^10.0.0",
    "typeorm": "^0.3.17",
    "pg": "^8.11.3",

    "@sms/common-constants": "git+https://gitlab.com/company-backend-developers/sms-common-constants.git"
  },
  "devDependencies": {
    "@nestjs/cli": "^10.0.0",
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0"
  }
}
```

---

## 🛠️ CI/CD Integration

### GitLab CI/CD Pipeline

If your microservice uses GitLab CI/CD, add this to your `.gitlab-ci.yml`:

```yaml
before_script:
  # For private repositories - set CI_JOB_TOKEN
  - git config --global url."https://gitlab-ci-token:${CI_JOB_TOKEN}@gitlab.com/".insteadOf "https://gitlab.com/"
  - npm install

build:
  stage: build
  script:
    - npm run build
  artifacts:
    paths:
      - dist/
```

---

## 🔍 Verifying Installation

After installing, verify the package is working:

```typescript
// test-constants.ts
import { SUCCESS_CODES, UserRole, PAGINATION } from '@sms/common-constants';

console.log('Success Codes:', SUCCESS_CODES.CREATE_SUCCESS);
console.log('User Roles:', UserRole.TEACHER);
console.log('Pagination:', PAGINATION.DEFAULT_LIMIT);
```

Run:

```bash
npx ts-node test-constants.ts
```

Expected output:

```
Success Codes: { code: 'SC002', message: 'Created successfully.' }
User Roles: TEACHER
Pagination: 10
```

---

## 📚 Package Contents

The package includes:

- ✅ **230+ API Response Codes** (Success and Error)
- ✅ **60+ Enums** (User roles, statuses, types)
- ✅ **17 Configuration Constant Groups**
- ✅ **Full TypeScript Support** with type definitions
- ✅ **Comprehensive Documentation**

---

## 🐛 Troubleshooting

### Issue: Module not found

**Error:**

```
Cannot find module '@sms/common-constants'
```

**Solution:**

```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Git authentication failed

**Error:**

```
fatal: could not read Username for 'https://gitlab.com'
```

**Solution:** Use SSH URL or Personal Access Token (see Authentication section above)

### Issue: Old version being used

**Solution:**

```bash
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### Issue: TypeScript errors

**Solution:** Ensure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true
  }
}
```

---

## 📦 Deployment Considerations

### For Docker Builds

If building in Docker, ensure Git is installed:

```dockerfile
FROM node:18-alpine

# Install Git for npm install from GitLab
RUN apk add --no-cache git

WORKDIR /app
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

CMD ["node", "dist/main.js"]
```

### For Kubernetes

Set up GitLab credentials as secrets:

```yaml
apiVersion: v1
kind: Secret
metadata:
  name: gitlab-credentials
type: Opaque
stringData:
  .npmrc: |
    //gitlab.com/:_authToken=YOUR_TOKEN
```

---

## 🔗 Useful Links

- **GitLab Repository:** https://gitlab.com/company-backend-developers/sms-common-constants
- **Package Documentation:** See README.md in repository
- **Quick Start Guide:** See QUICK_START.md in repository
- **Usage Examples:** See USAGE_EXAMPLES.ts in repository

---

## 📝 Summary

To use in any microservice:

```bash
# 1. Navigate to your microservice
cd sms-backend/your-microservice

# 2. Install the package
npm install git+https://gitlab.com/company-backend-developers/sms-common-constants.git --save

# 3. Import and use
# (See QUICK_START.md for usage examples)
```

That's it! The package is now available for use in your microservice. 🎉
