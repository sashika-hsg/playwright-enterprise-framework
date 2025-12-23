import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "@core/basePage";

export class LoginPage extends BasePage {
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;
  private readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page);

    this.usernameInput = page.locator('[data-test="email"]');
    this.passwordInput = page.locator('[data-test="password"]');
    this.loginButton = page.locator('[data-test="login-submit"]');
    this.errorMessage = page.locator('[data-test="login-error"]');
   
  }
  async enterEmail(email: string): Promise<void> {
    await this.usernameInput.fill(email);
  }

  async enterPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async waitForLoginForm(): Promise<void> {
    await this.usernameInput.waitFor({ state: "visible" });
    await this.passwordInput.waitFor({ state: "visible" });
    await this.loginButton.waitFor({ state: "visible" });
  }
  async isLoginErrorVisible(): Promise<boolean> {
    return await this.errorMessage.isVisible();
  }
  async getErrorMessageText(): Promise<string> {
    return (await this.errorMessage.textContent()) ?? '';
  }

  async submitLogin(): Promise<void> {
  await this.loginButton.waitFor({ state: 'visible' });
  await this.loginButton.waitFor({ state: 'attached' });
  await expect(this.loginButton).toBeEnabled();
  await this.loginButton.scrollIntoViewIfNeeded();
  await this.loginButton.click();
}
async waitForLoginError(): Promise<void> {
  await this.errorMessage.waitFor({ state: 'visible', timeout: 5000 });
}
}
