# Denowatts Role-Based Permissions and GraphQL Web Frontend Testing

## Project Overview

This Playwright testing project is designed to validate the role-based permissions system and GraphQL API integration for the Denowatts web portal. The project focuses on testing authentication flows and comparing site access permissions between UI and API responses for different user roles.

## 🎯 Project Purpose

The main objectives of this testing suite are:
- **Authentication Testing**: Verify login functionality for different user roles
- **Permission Validation**: Compare site access between UI and API responses
- **Role-Based Access Control**: Ensure proper site visibility based on user permissions
- **GraphQL Integration**: Validate GraphQL API responses against UI behavior

## 🏗️ Project Structure

```
my-playwright-project/
├── 📁 pages/                          # Page Object Models
│   ├── 📁 login/                      # Login page objects for different roles
│   │   ├── company-login.page.ts      # Company user login
│   │   ├── guest-login.page.ts        # Guest user login
│   │   └── super-admin-login.page.ts  # Super admin login
│   └── site-selector.page.ts          # Site selection page object
├── 📁 tests/                          # Test specifications
│   ├── 📁 authentication/             # Authentication test suites
│   │   ├── company-login.spec.ts      # Company user authentication
│   │   ├── guest-login.spec.ts        # Guest user authentication
│   │   └── super-admin-login.spec.ts  # Super admin authentication
│   └── 📁 e2e/                        # End-to-end test suites
│       ├── company-site.spec.ts       # Company user site access
│       ├── guest-site.spec.ts         # Guest user site access
│       └── super-admin-site.spec.ts   # Super admin site access
├── 📁 utils/                          # Utility functions
│   ├── authUtils.ts                   # Authentication token management
│   └── backendUtils.ts                # GraphQL API utilities
├── 📄 package.json                    # Project dependencies
├── 📄 playwright.config.ts            # Playwright configuration
├── 📄 tsconfig.json                   # TypeScript configuration
└── 📄 README.md                       # This file
```

## 👥 User Roles Tested

### 1. **Company-Based User**
- **Email**: `domain.permission@bookingdei.com`
- **Purpose**: Tests company-level permissions and site access
- **Scope**: Limited to company-specific sites

### 2. **Guest User**
- **Purpose**: Tests guest-level permissions and restricted access
- **Scope**: Minimal site access with limited permissions

### 3. **Super Admin User**
- **Purpose**: Tests administrative-level permissions and full access
- **Scope**: Access to all sites and administrative functions

## 🧪 Test Categories

### Authentication Tests (`/tests/authentication/`)
- **API-based authentication** using GraphQL mutations
- **Token management** and storage
- **Login validation** for each user role

### End-to-End Tests (`/tests/e2e/`)
- **UI vs API comparison** for site access
- **Permission validation** across different user roles
- **Site count verification** between frontend and backend

## 🔧 Technical Stack

- **Testing Framework**: Playwright 1.30.0
- **Language**: TypeScript
- **API**: GraphQL with node-fetch
- **Browser**: Chromium (Desktop)
- **Base URL**: `https://stage.portal.denowatts.com`

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository** (if applicable)
2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install Playwright browsers**:
   ```bash
   npx playwright install
   ```

### Running Tests

#### Run All Tests
```bash
npm test
```

#### Run Specific Test Categories
```bash
# Authentication tests only
npx playwright test tests/authentication/

# E2E tests only
npx playwright test tests/e2e/

# Specific user role tests
npx playwright test tests/authentication/company-login.spec.ts
npx playwright test tests/e2e/company-site.spec.ts
```

#### Run Tests with UI Mode
```bash
npx playwright test --ui
```

## 📊 Test Reports

After running tests, you can view detailed reports:

### HTML Report
```bash
npx playwright show-report
```

### Trace Viewer
```bash
npx playwright show-trace test-results/[test-name]/trace.zip
```

## 🔍 Key Features

### 1. **Page Object Model Pattern**
- Organized page interactions in reusable classes
- Maintainable and scalable test structure
- Clear separation of concerns

### 2. **Authentication Token Management**
- Secure token storage in local files
- Automatic token retrieval for API calls
- Error handling for missing tokens

### 3. **GraphQL Integration**
- Direct API testing with GraphQL queries
- Comparison between UI and API responses
- Error handling for GraphQL errors

### 4. **Comprehensive Site Testing**
- Dynamic site count verification
- Dropdown scrolling for large site lists
- UI vs API data comparison

## 🛠️ Configuration

### Playwright Configuration (`playwright.config.ts`)
- **Base URL**: `https://stage.portal.denowatts.com`
- **Browser**: Desktop Chromium
- **Headless Mode**: Disabled (for debugging)
- **Video Recording**: On first retry
- **Trace Recording**: Enabled
- **Timeout**: 60 seconds

### Test Structure
- **Test Directory**: `./tests`
- **Page Objects**: `./pages`
- **Utilities**: `./utils`

## 📝 Test Data Management

### Authentication Tokens
- Stored in text files for each user role
- Automatic token retrieval and validation
- Secure token handling

### Test Credentials
- **Company User**: `domain.permission@bookingdei.com`
- **Guest User**: [Configured in respective test files]
- **Super Admin**: [Configured in respective test files]

## 🔒 Security Considerations

- **Credentials**: Stored in test files (consider environment variables for production)
- **Tokens**: Stored locally in text files
- **API Endpoints**: Using staging environment
- **Network Security**: HTTPS endpoints only

## 🐛 Debugging

### Common Issues
1. **Token Expiration**: Re-run authentication tests
2. **Network Issues**: Check staging environment availability
3. **UI Changes**: Update selectors in page objects

### Debug Commands
```bash
# Run tests in headed mode
npx playwright test --headed

# Run with debug logging
DEBUG=pw:api npx playwright test

# Run specific test with trace
npx playwright test --trace on
```

## 📈 Future Enhancements

- [ ] Add more user roles and permission levels
- [ ] Implement parallel test execution
- [ ] Add visual regression testing
- [ ] Integrate with CI/CD pipeline
- [ ] Add performance testing scenarios
- [ ] Implement data-driven testing

## 🤝 Contributing

1. Follow the existing code structure
2. Add appropriate test descriptions
3. Update page objects for UI changes
4. Maintain test data consistency
- [ ] Add more user roles and permission levels
- [ ] Implement parallel test execution
- [ ] Add visual regression testing
- [ ] Integrate with CI/CD pipeline
- [ ] Add performance testing scenarios
- [ ] Implement data-driven testing

## 📞 Support

For questions or issues related to this testing project:
- Check the test reports for detailed error information
- Review the Playwright documentation
- Contact the development team for environment-specific issues

---

**Last Updated**: December 2024
**Version**: 1.0.0
**Environment**: Staging (`stage.portal.denowatts.com`) 