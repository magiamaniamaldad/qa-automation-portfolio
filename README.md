# 🧪 QA Automation Portfolio

A hands-on QA automation project built with **Playwright** and **TypeScript**, focused on functional testing, validation, and reliable test design.

This repository is part of my technical QA portfolio and documents my progress building practical automated testing workflows.

## 🔍 What I'm Testing

The current test suite covers authentication scenarios, including:

- ✅ Successful login with valid credentials
- ❌ Login attempt with invalid credentials
- 📝 Validation of required fields
- 🔎 Verification of expected UI behavior and error messages

## 🛠️ Tech Stack

- **TypeScript**
- **Playwright**
- **Node.js**
- **Git & GitHub**
- **GitHub Actions**

## 📂 Project Structure

```text
qa-automation-portfolio/
├── .github/
│   └── workflows/
│       └── playwright.yml
├── tests/
│   └── login.spec.ts
├── .gitignore
├── package.json
├── playwright.config.ts
└── README.md


```

## 🚀 Running the Tests

Install dependencies:

```bash
npm install
```

Install the Playwright browser:

```bash
npx playwright install chromium
```

Run the test suite:

```bash
npm test
```

Run tests directly with Playwright:

```bash
npx playwright test
```

View the Playwright HTML report:

```bash
npx playwright show-report
```

## ⚙️ Continuous Integration

This project uses **GitHub Actions** to automatically run the Playwright test suite on pushes and pull requests to the `main` branch.

The CI workflow:

1. Checks out the repository
2. Sets up Node.js
3. Installs project dependencies
4. Installs Chromium
5. Runs the Playwright tests
6. Uploads the Playwright test report

## 🎯 Project Goals

This project is designed to practice and demonstrate:

- Test case design
- Functional QA automation
- UI validation
- Negative testing
- TypeScript-based test development
- Continuous Integration
- Debugging and maintenance of automated tests

## 🔜 Next Steps

- Add API testing scenarios
- Introduce Page Object Model (POM)
- Add additional validation and edge cases
- Expand browser coverage
- Improve test reporting

---

### 👩🏻‍💻 About Me

I'm **Victoria Antelo**, a QA and data validation professional with experience in functional analysis, manual QA, data validation and AI evaluation.

I'm currently expanding my technical QA toolkit through automation, API testing and backend/data validation projects.
