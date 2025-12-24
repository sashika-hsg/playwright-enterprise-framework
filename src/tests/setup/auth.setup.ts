import { test as setup, expect } from "@playwright/test";

const AUTH_FILE = ".auth/customer01.json";

setup("authenticate customer user", async ({ page }) => {
  await page.goto("/auth/login");

  await page.locator('[data-test="email"]').fill(process.env.VALID_USER_EMAIL!);
  await page.locator('[data-test="password"]').fill(process.env.VALID_USER_PASSWORD!);
  await page.locator('[data-test="login-submit"]').click();

  await expect(page.locator('[data-test="nav-menu"]')).toBeVisible();

  await page.context().storageState({ path: AUTH_FILE });
});
