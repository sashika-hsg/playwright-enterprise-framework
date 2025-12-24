# Enterprise QA Automation Framework  
### Playwright + TypeScript | Senior Test Analyst Portfolio Project

This repository contains an enterprise-style QA automation framework built from scratch using Playwright and TypeScript.

It is designed to reflect how automation is architected, scaled, and maintained in long-running enterprise systems, not just how tests are written.

The framework demonstrates senior-level decision-making around test architecture, stability, CI integration, execution strategy, and maintainability — based on patterns used in large delivery teams and production environments.


## What This Framework Demonstrates

This project demonstrates how a Senior Test Analyst approaches automation beyond basic test scripting:

- **Layered automation architecture**  
  Clear separation between Page Objects, Business Flows, Test Orchestration, Core Utilities, and Test Data Builders — enabling scalability and long-term maintainability.

- **Test stability and resilience by design**  
  Built-in retries, traces, screenshots, and video capture on failure to support fast root-cause analysis in CI pipelines.

- **Realistic suite strategy**  
  Smoke and regression suites aligned to how delivery teams validate builds in CI/CD, rather than running all tests indiscriminately.

- **CI-first mindset**  
  Tests are designed to run reliably in headless CI environments with controlled test data, defensive waits, and deterministic assertions.

- **Enterprise-ready execution patterns**  
  Configuration, environment handling, and reporting structured to support multiple environments and future expansion across teams.


## Tech Stack

- **Playwright** – Modern, reliable browser automation with native support for parallel execution, tracing, and cross-browser testing.
- **TypeScript** – Strong typing to improve maintainability, refactoring safety, and long-term framework evolution.
- **Node.js** – Lightweight runtime aligned with modern frontend and test tooling ecosystems.
- **GitHub Actions** – CI execution for pull-request validation, regression checks, and artifact retention.
- **HTML Reports / Allure (optional)** – Actionable reporting with screenshots, traces, and failure diagnostics.

## Target Application Under Test (AUT)

- **Practice Software Testing** – Public demo application used to simulate real-world UI workflows without proprietary dependencies.

The focus of this repository is **framework quality and automation design**, not the complexity of the demo application itself.

## Architectural Design Patterns Used

This framework is intentionally designed as a pattern-driven learning and
portfolio project, demonstrating how different design patterns are applied
together in real-world automation systems.

Patterns used include:

- **Page Object Model (POM)** – Encapsulates UI locators and atomic actions
- **Screenplay / Task Pattern** – Business-level workflows composed of page actions
- **Builder Pattern** – Fluent test data creation for readability and flexibility
- **Factory Pattern** – Dynamic creation of users, browsers, and environments
- **Strategy Pattern** – Pluggable execution and authentication strategies
- **Facade Pattern** – Simplified APIs exposed to test cases
- **Utility Pattern** – Shared cross-cutting helpers (waits, logging, assertions)

The goal is not to over-engineer, but to demonstrate *intentional architectural
choices* and provide a practical learning ground for advanced automation design.


## Project Structure (High Level)

src/
├── pages/            # POM – locators & atomic UI actions
├── flows/            # Screenplay / business workflows
├── builders/         # Test data builders
├── factories/        # User / browser / env factories
├── strategies/       # Execution & auth strategies
├── facades/          # Simplified test APIs
├── fixtures/         # Playwright fixtures
├── utils/            # Helpers & cross-cutting concerns
├── tests/
│   ├── smoke/
│   └── regression/
└── config/


## Test Execution Strategy

- **Smoke tests**  
  Lightweight, deterministic tests designed to validate critical paths on every CI run.

- **Regression tests**  
  Broader functional coverage intended for scheduled or pre-release execution.

This separation reflects real delivery constraints where feedback speed and reliability
are more valuable than raw test volume.

## Configuration & Environment Handling

- Environment-specific values are externalised using environment variables.
- Sensitive data is never committed to source control.
- CI pipelines inject secrets securely via GitHub Actions.

This approach mirrors how automation frameworks are managed in regulated
or security-sensitive enterprise environments.

## Reporting & Diagnostics

Each test run produces:
- HTML execution reports
- Screenshots on failure
- Playwright traces for deep debugging
- Optional video recordings

These artifacts are critical in CI environments where failures must be
diagnosed without re-running tests locally.



## Known Issues / Limitations

- UI login submission is temporarily restricted due to account lockout
  behaviour on the public demo site after repeated automated attempts.
- Smoke tests currently validate login page accessibility and negative paths only.
- Full authentication flows will be re-enabled once a stable test account
  or authentication bypass is available.

This limitation is handled deliberately to preserve CI reliability and
avoid flaky or destructive test behaviour — a common challenge in real projects.

## Roadmap

Planned enhancements:
- API test integration alongside UI flows
- Service-level contract validation
- Data-driven execution strategies
- Allure reporting with historical trends
- Multi-environment execution support

This repository is actively evolving as a learning and portfolio project.

