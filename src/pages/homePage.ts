import {Locator, Page} from '@playwright/test';
import {BasePage} from '@core/basePage';

export class HomePage extends BasePage {
    private readonly signInButton: Locator;

    constructor(page: Page) {
        super(page);
        this.signInButton = page.getByTestId('nav-sign-in');
    }
    /**Click on sign in button */
    async clickSignIn():Promise<void>{
        await this.signInButton.click();    
    } 
} 