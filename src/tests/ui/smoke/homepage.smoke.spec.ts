import { test, expect } from "@fixtures/test.fixtures";

test.describe("Homepage Smoke Tests", () => {
    test("@smoke Verify whether home page loads",
     async ({ homeFlow }) => {
        await homeFlow.navigateToHome();
        const homePageTitle = await homeFlow.verifyHomePageTitle();
        expect(homePageTitle).toBe("Practice Software Testing - Toolshop - v5.0");
    });
});