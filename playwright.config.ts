import "tsconfig-paths/register";
import dotenv from "dotenv";
dotenv.config();
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './src',

  timeout: 30_000,

  expect: {
    timeout: 5_000,
  },

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,

  reporter: [
    ['html', { open: 'never' }],
    ['list'],
  ],

  use: {

    baseURL: process.env.BASE_URL ?? 'https://practicesoftwaretesting.com',
    headless: true,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  projects: [
    {
      name:"setup",
      testMatch: /.*\.setup\.ts/
    },
    {
      name: 'chromium',
      dependencies: ['setup'],
      use: { ...devices['Desktop Chrome'],
        storageState: '.auth/customer01.json',
       },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});
