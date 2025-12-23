# 🧩 Playwright Enterprise Framework – Architecture Contract

## 1. Purpose of This Document

This document defines the **non-negotiable architectural contract** for the Playwright automation framework.

The goal of this framework is to be:

- scalable
- maintainable
- opinionated
- enforceable by TypeScript
- suitable for real engineering teams (not demo automation)

> **This framework prioritises correctness, clarity, and long-term maintainability over speed of writing tests.**

---

## 2. High-Level Architecture

### Layered Model

Test
└── Flow (business workflow)
└── Page (UI mechanics)
└── BasePage (shared UI helpers)
└── Playwright Page

Each layer has **strict responsibilities** and **explicit restrictions**.

---

## 3. Folder Structure (Source of Truth)

src/
├── pages/ # Page Objects (UI mechanics only)
│ ├── base.page.ts
│ ├── login.page.ts
│ └── home.page.ts
│
├── flows/ # Business workflows (orchestration only)
│ └── loginFlow.ts
│
├── fixtures/ # Playwright fixtures (dependency wiring)
│ └── test.fixtures.ts
│
├── tests/
│ └── ui/
│ ├── smoke/
│ │ └── login.smoke.spec.ts
│ └── regression/
│ └── login.locked.regression.spec.ts
│
└── config/ # (optional) env / config helpers

Folder placement is **part of enforcement**.  
Logic placed in the wrong folder is considered an architectural defect.

---

## 4. Responsibilities by Layer

---

## 4.1 Tests (`*.spec.ts`)

### Purpose

Tests express **intent and verification only**.

### Tests MUST:

- call **Flows**, not Pages
- contain all `expect()` assertions
- read configuration (env vars) explicitly
- be deterministic and independent

### Tests MUST NOT:

- use `page.locator()`
- instantiate Page objects
- orchestrate UI steps
- contain business logic
- contain reusable helpers

### Example (Correct)

```ts
await loginFlow.login(email, password);
await expect(page).toHaveURL(/dashboard/);

4.2 Flows (*.flow.ts)
Purpose
    -Flows represent business workflows composed of multiple Page actions.

Flows MUST:
    -orchestrate Page actions
    -expose read-only state when required
    -be reusable across smoke and regression tests

Flows MUST NOT:
    -contain expect()
    assert success or failure
    -import Playwright Page
    -Expose UI locators

Example (Correct)


export class LoginFlow {
  constructor(private readonly loginPage: LoginPage) {}

  async login(email: string, password: string) {
    await this.loginPage.open();
    await this.loginPage.enterEmail(email);
    await this.loginPage.enterPassword(password);
    await this.loginPage.submit();
  }
}

4.3 Pages (*.page.ts)
Purpose
    Pages encapsulate UI mechanics only.

Pages MUST:
    -define locators
    -perform atomic UI actions
    -expose UI state (text, visibility)

Pages MUST NOT:
    -contain expect()
    -validate business outcomes
    -know test intent
    -reference other Pages

Example (Correct)

async isErrorVisible(): Promise<boolean> {
  return this.isVisible(this.errorMessage);
}


4.4 BasePage (base.page.ts)
Purpose
    BasePage provides shared UI mechanics, not behaviour.

BasePage MAY contain:
    -click(locator)
    -fill(locator, value)
    -waitForDomContentLoaded()
    -isVisible(locator)
    -getText(locator)

BasePage MUST NOT:
    -assert anything
    -navigate to URLs
    -take screenshots for test logic
    -contain business meaning

Access Rules
    -helpers are protected
    -usable only by Page subclasses
    -not accessible to tests


5. Fixtures (test.fixtures.ts)
Purpose
    Fixtures are the composition root of the framework.

They wire:
    -Playwright page
    -Page Objects
    -Flows

Fixtures MUST:
    -construct Pages internally
    -inject Pages into Flows
    -expose Flows only to tests

Fixtures MUST NOT:
    -expose Pages directly to tests
    -contain assertions
    -contain test logic

Example (Correct)
loginFlow: async ({ page }, use) => {
  const loginPage = new LoginPage(page);
  const loginFlow = new LoginFlow(loginPage);
  await use(loginFlow);
}


6. Smoke vs Regression Tests

Smoke Tests
    -validate availability and access
    -minimal assertions
    -URL-based or high-level checks
    -no data mutation
    -fastest execution

Regression Tests
    -deeper validation
    -negative scenarios
    -UI content assertions
    -edge cases

Smoke tests define architecture quality.
Regression tests define functional confidence.


7. Environment Variables & Configuration
Rules
    -All credentials come from .env or CI secrets
    -No hardcoded credentials
    -Missing env vars must fail fast

Pattern Used

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is not set`);
  }
  return value;
}

This ensures:
    -type safety
    -deterministic failures
    -CI stability

8. Forbidden Patterns (Hard Rules)
🚫 expect() in Pages or Flows
🚫 page.locator() in Tests
🚫 Tests instantiating Pages
🚫 Flows importing Playwright Page
🚫 Generic helpers with business meaning
🚫 BasePage acting as a “dumping ground”

Any of the above is considered a framework violation.

9. Why This Architecture Exists
This framework is designed to:
    -Scale to hundreds of tests
    -survive UI refactors
    -support multiple contributors
    -be reviewed and reasoned about easily
    -behave predictably in CI/CD
    -More tests ≠ better framework.
    -Better boundaries = better outcomes.

10. Final Principle
If a change makes it easier to write a bad test, it is the wrong change.
If a change makes it harder to misuse the framework, it is the right one.
```
