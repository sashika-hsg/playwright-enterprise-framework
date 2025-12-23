import {Page,Locator} from '@playwright/test';
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
    protected async waitForDomContentLoaded(): Promise<void> {
        await this.page.waitForLoadState('domcontentloaded');
   }

   protected async waitForNetworkIdle(): Promise<void> {
        await this.page.waitForLoadState('networkidle');
   }

   protected async scrollIntoView(locator: Locator): Promise<void> {
        await locator.scrollIntoViewIfNeeded();
   }    

   protected async clickElement(locator: Locator): Promise<void> {
        await locator.click();
   }
   protected async getText(locator: Locator): Promise<string|null> {
        return (await locator.textContent());
   }
   protected async isVisible(locator: Locator): Promise<boolean> {
        return await locator.isVisible();
   }
   protected async fill(locator: Locator, text: string): Promise<void> {
        await locator.fill(text);
   }


    //remove from base page 
    // /**Take a screenshot */
    // async takeScreenshot(name: string): Promise<void> {
    //     await this.page.screenshot({ 
    //         path: `playwright-report/screenshots/${name}.png`,
    //         fullPage: true,
    //     });  
}




