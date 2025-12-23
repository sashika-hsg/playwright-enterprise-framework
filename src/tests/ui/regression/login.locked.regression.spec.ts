import { test, expect } from "@fixtures/test.fixtures";

test.describe("Login – Regression", () => {
  test("@regression user can see error message for invalid credentials", 
    async ({loginFlow,  }) => {
        const lockedUserEmail = process.env.LOCKED_USER_EMAIL;
        const lockedUserPassword = process.env.LOCKED_USER_PASSWORD;
        if (!lockedUserEmail || !lockedUserPassword) {
            throw new Error("LOCKED_USER_EMAIL or LOCKED_USER_PASSWORD is not set");
        }
        await loginFlow.login(lockedUserEmail,lockedUserPassword);
        const isErrorVisible = await loginFlow.isLoginErrorVisible();
        const errorText = await loginFlow.getLoginErrorText();

    expect(await loginFlow.isLoginErrorVisible()).toBe(true);
    expect(await loginFlow.getLoginErrorText()).toContain("Invalid email or password");
  });
});
