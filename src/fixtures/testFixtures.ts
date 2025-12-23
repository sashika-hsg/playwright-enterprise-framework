import {test as base} from '@playwright/test';
import { LoginFlow } from '@flows/loginFlow';
import { HomePage } from '@pages/homePage';

type AppFixtures = {
    loginFlow: LoginFlow;
    homepage: HomePage;
};
export const test = base.extend<AppFixtures>({
    loginFlow: async ({page}, use) => {
        const loginFlow = new LoginFlow(page);
        await use(loginFlow);
    },
    homepage: async ({page}, use) => {
        const homepage = new HomePage(page);
        await use(homepage);
    }
})

export {expect} from '@playwright/test';    