import{test, expect} from '@fixtures/testFixtures';

// ⚠️ TEMPORARILY DISABLED
// Login submission is disabled due to account lock / environment issue.
// See README: Known Issues section.
test.skip('@smoke User can login with valid credentials(blocked by account lock)',
    async ({ loginFlow, page }) => {
     await loginFlow.attemptLogin(
            process.env.USER_EMAIL ?? 'customer@practicesoftwaretesting.com',
            process.env.USER_PASSWORD ?? 'welcome01'
        );
        console.log('FINAL URL:', page.url());

        // Verify successful login by checking for a specific element on the landing page
        await expect(page).toHaveURL(/account|profile\dashboard/i);
    });

test('@smoke User can access login page',
     async ({loginFlow, page }) => {
    await loginFlow.loginPageIsVisible();
});
