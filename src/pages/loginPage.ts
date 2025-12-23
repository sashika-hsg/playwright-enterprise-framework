import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "@core/basePage";

export class LoginPage extends BasePage {
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);

    this.usernameInput = page.locator('[data-test="email"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-submit"]');
  }
  async enterEmail(email: string): Promise<void> {
    await this.usernameInput.fill(email);
  }

  async enterPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }
  async submitLogin(): Promise<void> {
    await this.loginButton.click();
  }
  async waitForLoginForm(): Promise<void> {
    await this.usernameInput.waitFor({ state: "visible" });
    await this.passwordInput.waitFor({ state: "visible" });
    await this.loginButton.waitFor({ state: "visible" });
  }
}
