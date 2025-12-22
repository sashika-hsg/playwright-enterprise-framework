import { Locator, Page } from "@playwright/test";
import { BasePage } from "@core/basePage";

export class LoginPage extends BasePage {
  private readonly usernameInput: Locator;
  private readonly passwordInput: Locator;
  private readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);

    this.usernameInput = page.locator("#username");
    this.passwordInput = page.locator("#password");
    this.loginButton = page.locator('button[type="submit"]');
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
}
