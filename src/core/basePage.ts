import {Page, expect} from '@playwright/test';
/**
 * BasePage class serves as a foundational class for all 
 * page objects in the Playwright Enterprise Framework.
 * it does not contain business logic or selectors 
 * but provides common functionalities that can be 
 * utilized by derived page classes.
 */
export abstract class BasePage {
    protected readonly page: Page;

    /**
     * Initializes a new instance of the BasePage class.
     * @param page - The Playwright Page object representing the browser page.
     */
    constructor(page: Page) {
        this.page = page;
    }   
    /**navigate to the relative url */
    async navigateTo(relativeUrl: string): Promise<void> {
        await this.page.goto(relativeUrl);
    }

    /**wait for page load */
    async waitForPageLoad(): Promise<void> {
        await this.page.waitForLoadState('domcontentloaded');
   }
    
    /**Take a screenshot */
    async takeScreenshot(name: string): Promise<void> {
        await this.page.screenshot({ 
            path: `playwright-report/screenshots/${name}.png`,
            fullPage: true,
        });  
    }
    /**verify page title contains expected text */
    async verifyPageTitle(expectedTitle: string): Promise<void> {
        await expect(this.page).toHaveTitle(expectedTitle);
    }

}
