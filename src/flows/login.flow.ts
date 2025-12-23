import { LoginPage } from "../pages/login.page";

export class LoginFlow {
  constructor(private readonly loginPage: LoginPage) {}

  /**
   * Perform login with supplied credentials.
   * This method ONLY performs actions.
   * It does NOT assert outcomes.
   */
  async login(email: string, password: string): Promise<void> {
    await this.loginPage.open();
    await this.loginPage.enterEmail(email);
    await this.loginPage.enterPassword(password);
    await this.loginPage.submitLogin();
  }
    // ---- State exposure (NO assertions) ----
  async isLoginErrorVisible(): Promise<boolean> {
    return this.loginPage.isErrorVisible();
  }

  async getLoginErrorText(): Promise<string | null> {
    return this.loginPage.getErrorText();
  }
}