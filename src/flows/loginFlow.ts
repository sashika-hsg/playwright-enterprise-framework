import { Page } from "@playwright/test";
import { LoginPage } from "@pages/loginPage";
import { HomePage } from "@pages/homePage";

export class LoginFlow {
  private readonly loginPage: LoginPage;
  private readonly homePage: HomePage;

  constructor(page: Page) {
    this.loginPage = new LoginPage(page);
    this.homePage = new HomePage(page);
  }
  /**Logs in using calid user credentials
   * Represents the login flow of the application
   * @param email - The user's email address.
   * @param password - The user's password.
   */
  async loginAsValidUser(email: string, password: string): Promise<void> {
    //open home page
    await this.homePage.navigateTo("/");
    await this.homePage.waitForPageLoad();
    await this.homePage.clickSignIn();
    
    //perform login
    await this.loginPage.navigateTo("/auth/login");
    await this.loginPage.waitForPageLoad();
    await this.loginPage.enterEmail(email);
    await this.loginPage.enterPassword(password);
    await this.loginPage.submitLogin();
    await this.loginPage.waitForPageLoad();
  }
}
