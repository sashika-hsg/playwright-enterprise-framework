import { test, expect } from "@fixtures/test.fixtures";

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`${name} is not set`);
  }
  return value;
}

test.describe("Login – Smoke", () => {

  test("@smoke valid user is redirected to landing page after login", async ({ loginFlow, page }) => {
    // Arrange
    const email = requireEnv("VALID_USER_EMAIL");
    const password = requireEnv("VALID_USER_PASSWORD");

    // Act
    await loginFlow.login(email, password);

    // Assert — landing page navigation
    await expect(page).toHaveURL(/account/i);
  });

});
