import {Page} from '@playwright/test';
import { LoginPage } from '@pages/loginPage';

export class LoginFlow{
    private readonly loginPage : LoginPage;

    constructor(page: Page){
        this.loginPage = new LoginPage(page);
    }
    /**Logs in using calid user credentials
     * Represents the login flow of the application
     * @param email - The user's email address.
     * @param password - The user's password.
     */
    async loginAsValidUser(email: string, password: string): Promise<void>{
        await this.loginPage.enterEmail(email);
        await this.loginPage.enterPassword(password);
        await this.loginPage.submitLogin();
        await this.loginPage.waitForPageLoad();
    }
     

}