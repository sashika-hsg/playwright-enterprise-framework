import {test as base} from '@playwright/test';
import { LoginFlow } from '@flows/loginFlow';
import { HomePage } from '@pages/homePage';
import { LoginPage } from '@pages/loginPage';

type AppFixtures = {
    loginFlow: LoginFlow;
    homepage: HomePage;
    loginPage: LoginPage;
};
export const test = base.extend<AppFixtures>({
    loginFlow: async ({page}, use) => {
        const loginFlow = new LoginFlow(page);
        await use(loginFlow);
    },
    homepage: async ({page}, use) => {
        const homepage = new HomePage(page);
        await use(homepage);
    },
    loginPage: async ({page}, use) => {
        const loginPage = new LoginPage(page);
        await use(loginPage);
    }  
})

export {expect} from '@playwright/test';    