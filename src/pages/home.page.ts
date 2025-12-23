import {Locator, Page} from '@playwright/test';
import {BasePage} from '@core/base.page';

export class HomePage extends BasePage {
    private readonly signInButton: Locator;

    constructor(page: Page) {
        super(page);
        this.signInButton = page.locator('[data-test="nav-sign-in"]');
    }
    /**Click on sign in button */
    async clickSignIn():Promise<void>{
        await this.signInButton.waitFor({ state: "visible" });
        console.log(this.signInButton.textContent)
        await this.signInButton.click();    
    } 
} 