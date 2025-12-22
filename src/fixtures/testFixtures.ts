import {test as base} from '@playwright/test';
import { LoginFlow } from '@flows/loginFlow';

type AppFixtures = {
    loginFlow: LoginFlow;
};
export const test = base.extend<AppFixtures>({
    loginFlow: async ({page}, use) => {
        const loginFlow = new LoginFlow(page);
        await use(loginFlow);
    }
})
export {expect} from '@playwright/test';    