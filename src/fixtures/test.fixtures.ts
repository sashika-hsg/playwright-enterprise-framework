import { test as base } from "@playwright/test";
import { LoginFlow } from "@flows/login.flow";
import { LoginPage } from "@pages/login.page";

type AppFixtures = {
  loginFlow: LoginFlow;
};

export const test = base.extend<AppFixtures>({
  loginFlow: async ({ page }, use) => {
    const loginPage = new LoginPage(page);   
    const loginFlow = new LoginFlow(loginPage);

    await use(loginFlow);
  }
});

export { expect } from "@playwright/test";
