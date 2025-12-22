/**
 * bootstrap.js
 * Enterprise Playwright Automation Framework scaffold
 * Safe to run multiple times
 */

const fs = require('fs');
const path = require('path');

console.log('\n🚀 Initialising ENTERPRISE Playwright framework...\n');

// ---------------------------
// Folder structure definition
// ---------------------------
const folders = [
  // Core architecture layers
  'src/config',
  'src/core',
  'src/adapters/api',
  'src/adapters/storage',
  'src/data/builders',
  'src/data/factories',
  'src/pages',
  'src/flows',
  'src/fixtures',
  'src/utils',

  // Test layers
  'src/tests/ui/smoke',
  'src/tests/ui/regression',
  'src/tests/api',

  // Documentation
  'docs',

  // Infrastructure
  '.github/workflows',
  'scripts',
  '.auth'
];

// ---------------------------
// Minimal placeholder files
// ---------------------------
const files = {
  'README.md': '# Playwright Enterprise Automation Framework\n\nArchitecture-first QA automation framework.',
  'docs/ARCHITECTURE.md': '# Architecture\n\nTests → Flows → Pages → Core → Adapters → Data',
  'docs/TEST_STRATEGY.md': '# Test Strategy\n\nSmoke, Regression, and API test scope.',
  '.gitignore': 'node_modules/\n.env\nplaywright-report/\n',
  '.nvmrc': '22',

  // Framework skeleton (empty by design)
  'src/core/basePage.ts': '',
  'src/flows/loginFlow.ts': '',
  'src/pages/loginPage.ts': '',
  'src/fixtures/testFixtures.ts': ''
};

// ---------------------------
// Create folders
// ---------------------------
folders.forEach(folder => {
  const fullPath = path.join(__dirname, folder);
  if (!fs.existsSync(fullPath)) {
    fs.mkdirSync(fullPath, { recursive: true });
    console.log(`📁 Created folder: ${folder}`);
  }
});

// ---------------------------
// Create files (idempotent)
// ---------------------------
Object.entries(files).forEach(([filePath, content]) => {
  const fullPath = path.join(__dirname, filePath);
  const dir = path.dirname(fullPath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  if (!fs.existsSync(fullPath)) {
    fs.writeFileSync(fullPath, content);
    console.log(`📄 Created file: ${filePath}`);
  }
});

console.log('\n✅ Framework structure created successfully!\n');
