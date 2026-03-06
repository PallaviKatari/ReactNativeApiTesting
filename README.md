# React Native API Unit Testing Demo

![React Native](https://img.shields.io/badge/React%20Native-0.84-blue)
![Jest](https://img.shields.io/badge/Jest-Testing-red)
![Testing Library](https://img.shields.io/badge/Testing%20Library-React%20Native-green)
![License](https://img.shields.io/badge/license-MIT-lightgrey)

A demo project that demonstrates **Unit Testing for API calls in React Native using Jest and React Native Testing Library**.

This project shows how to:

* Test React Native components
* Mock API calls
* Test loading state
* Test successful API responses
* Test API failures
* Write maintainable unit tests

---

# Project Overview

Modern React Native applications frequently interact with APIs.
To ensure reliability, **API-related components should be unit tested**.

This demo demonstrates a **User Profile screen** that fetches user data from an API and renders it.

The component handles three states:

1. Loading
2. Success
3. Error

Each state is tested using **Jest**.

---

# Project Structure

```
RNApiTestDemo
│
├── apiService.js        # API service
├── UserProfile.js       # React Native component
├── UserProfile.test.js  # Jest unit tests
├── package.json
└── README.md
```

---

# Technologies Used

| Technology                   | Purpose                            |
| ---------------------------- | ---------------------------------- |
| React Native                 | Mobile UI framework                |
| Jest                         | Testing framework                  |
| React Native Testing Library | Component testing utilities        |
| react-test-renderer          | React component renderer for tests |

---

# Installation

Clone the repository:

```
git clone https://github.com/yourusername/RNApiTestDemo.git
```

Navigate into the project:

```
cd RNApiTestDemo
```

Install dependencies:

```
npm install
```

---

# Required Testing Packages

Install testing dependencies:

```
npm install --save-dev jest
npm install --save-dev @testing-library/react-native
npm install --save-dev react-test-renderer
```

If using React Native CLI, Jest may already be configured.

---

# API Service Example

The API service fetches user data.

```
fetchUser(userId)
```

In real applications this would call:

```
https://api.example.com/users/{id}
```

For testing purposes we **mock the API**.

---

# Mocking API Calls

Unit tests should **not make real network requests**.

Instead, we mock the API:

```
jest.mock('./apiService')
```

Then define the expected response.

Example success response:

```
fetchUser.mockResolvedValueOnce(mockUserData)
```

Example failure response:

```
fetchUser.mockRejectedValueOnce(new Error("Network error"))
```

This allows full control of API behavior during tests.

---

# Unit Tests Implemented

The project contains three unit tests.

## 1 Loading State Test

Verifies the component shows a loading indicator when the API request begins.

Test checks:

* Loading element exists
* API request has started

---

## 2 Successful API Response

Verifies the component correctly renders user data when the API call succeeds.

Test checks:

* User name renders
* User email renders

---

## 3 API Error Handling

Verifies the component handles API failures correctly.

Test checks:

* Error message renders
* Component does not crash

---

# Running Tests

Run all tests:

```
npm test
```

or

```
npx jest
```

---

# Run Tests in Watch Mode

Useful during development.

```
npm test -- --watch
```

Jest will automatically rerun tests when files change.

---

# Example Test Output

```
PASS UserProfile.test.js
  UserProfile Component
   ✓ renders loading initially
   ✓ renders user data after API call
   ✓ renders error message if API fails

Test Suites: 1 passed
Tests:       3 passed
```

---

# Code Coverage

Run tests with coverage:

```
npm test -- --coverage
```

Example output:

```
File            % Stmts   % Branch   % Funcs   % Lines
UserProfile.js      100        100       100       100
apiService.js       100        100       100       100
```

Coverage reports are generated in:

```
/coverage
```

---

# Best Practices for React Native Unit Testing

✔ Mock external services
✔ Test behavior instead of implementation
✔ Write small focused tests
✔ Test user-visible output
✔ Avoid real network calls

---

# Testing Strategy

The testing strategy used in this project follows a layered approach.

| Layer       | Tested                     |
| ----------- | -------------------------- |
| Component   | UI rendering               |
| Service     | API abstraction            |
| Integration | Component + mocked service |

---

# Continuous Integration (Optional)

Tests can be integrated with CI tools such as:

* GitHub Actions
* Jenkins
* GitLab CI
* Bitbucket Pipelines

Example CI step:

```
npm install
npm test
```

---

# Why Unit Testing Matters

Unit testing helps:

* Detect bugs early
* Improve code reliability
* Enable safer refactoring
* Improve developer confidence
* Document expected behavior

---

# Future Improvements

Possible extensions for this project:

* Snapshot testing
* Integration testing
* Redux store testing
* React Query testing
* API caching tests

---

# License

MIT License

---

# Author

Pallavi Katari

---

# Summary

This project demonstrates how to:

* Perform **Unit Testing in React Native**
* Mock **API calls with Jest**
* Test **loading, success, and error states**
* Use **React Native Testing Library effectively**

This structure reflects **real-world testing patterns used in production React Native applications**.
