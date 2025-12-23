import{test, expect} from '@fixtures/testFixtures';

test.describe('locked out login flow', () => {
    test('@regression Locked account cannot login and sees appropriate error message',
    async ({ loginFlow, loginPage }) => {
        await loginFlow.attemptLogin(
                process.env.LOCKED_USER_EMAIL!, process.env.LOCKED_USER_PASSWORD!);               
        const isErrorVisible = await loginPage.isLoginErrorVisible();
        expect(isErrorVisible).toBe(true);            
        const errorText = await loginPage.getErrorMessageText();
        expect(errorText).toContain('Invalid email or password');
    });
});
