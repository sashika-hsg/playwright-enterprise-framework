QA Automation Framework (Playwright + TypeScript) — Enterprise-Style
An enterprise-grade automation framework built to demonstrate Senior Test Analyst / QA Automation Engineer capabilities: maintainable test architecture, scalable patterns, CI-ready execution, and reliable UI + API validation.

This project is intentionally designed as a portfolio-grade framework to reflect how automation is built and maintained in large-scale enterprise and FAANG-style environments.

Tech Stack: Playwright • TypeScript • Node.js • GitHub Actions • HTML Reports • [Allure (optional)]
Target AUT: Practice Software Testing (public demo site)

What this repo demonstrates
Layered automation architecture beyond basic POM (Pages, Business Flows, Core Utilities, Data Builders)
Stable execution practices (retries, traces, screenshots, video on failure)
Suite strategy aligned to real delivery teams (Smoke vs Regression)
CI/CD readiness with GitHub Actions (PR validation, artifact retention, failure diagnostics)
A framework structured to scale across enterprise applications and multiple teams

## Known Issues / Limitations

- UI login submission is temporarily disabled in automation due to
  account lockout behaviour on the demo site after repeated attempts.
- Smoke tests validate login page accessibility only.
- Full authentication flows will be re-enabled once a stable test
  account or auth bypass is available.

This is an intentional decision to keep CI reliable.

### Negative Login Scenarios
- Locked account validation
- Error message assertion
- Defensive handling of async UI states
- Realistic submit behaviour verification