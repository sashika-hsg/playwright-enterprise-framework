import { Locator, Page } from "@playwright/test";
import { BasePage } from "@core/base.page";

export class LoginPage extends BasePage {
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;

  constructor(protected readonly page: Page) {
    super(page);
    this.usernameInput = page.locator('[data-test="email"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-submit"]');
    this.errorMessage = page.locator('[data-test="login-error"]');
  }
  async open(): Promise<void> {
    await this.page.goto("/auth/login");
    await this.waitForDomContentLoaded();
  }
  async enterEmail(email: string): Promise<void> {
    await this.fill(this.usernameInput, email);
  }

  async enterPassword(password: string): Promise<void> {
    await this.fill(this.passwordInput, password);
  }
  async waitForLoginError(): Promise<void> {
    await this.errorMessage.waitFor({ state: "visible", timeout: 5000 });
  }
  async isErrorVisible(): Promise<boolean> {
    return this.isVisible(this.errorMessage);
  }
  async getErrorText(): Promise<string | null> {
    return this.getText(this.errorMessage);
  }

  async waitForLoginForm(): Promise<void> {
    await this.usernameInput.waitFor({ state: "visible" });
    await this.passwordInput.waitFor({ state: "visible" });
    await this.loginButton.waitFor({ state: "visible" });
  }

  async submitLogin(): Promise<void> {
    await this.loginButton.waitFor({ state: "visible" });
    await this.loginButton.waitFor({ state: "attached" });
    await this.loginButton.scrollIntoViewIfNeeded();
    await this.loginButton.click();
  }
}
