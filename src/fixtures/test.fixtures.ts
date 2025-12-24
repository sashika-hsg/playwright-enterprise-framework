import { test as base } from "@playwright/test";

import { LoginFlow } from "@flows/login.flow";
import { HomeFlow } from "@flows/home.flow";

import { LoginPage } from "@pages/login.page";
import { HomePage } from "@pages/home.page";

type AppFixtures = {
  loginFlow: LoginFlow;
  homeFlow: HomeFlow;
};

export const test = base.extend<AppFixtures>({
  loginFlow: async ({ page }, use) => {
    const loginPage = new LoginPage(page);   
    const loginFlow = new LoginFlow(loginPage);
    await use(loginFlow);
  },
  homeFlow: async ({ page }, use) => {
    const homePage = new HomePage(page);   
    const homeFlow = new HomeFlow(homePage);
    await use(homeFlow);
  }
});

export { expect } from "@playwright/test";
