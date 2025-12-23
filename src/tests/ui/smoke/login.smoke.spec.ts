import{test, expect} from '@fixtures/testFixtures';


test('@smoke User can login with valid credentials',
    async ({ loginFlow, page }) => {
     await loginFlow.loginAsValidUser(
            process.env.USER_EMAIL ?? 'customer@practicesoftwaretesting.com',
            process.env.USER_PASSWORD ?? 'welcome01'
        );

        // Verify successful login by checking for a specific element on the landing page
        await expect(page).toHaveURL(/account|profile\dashboard/i);
    }
)

