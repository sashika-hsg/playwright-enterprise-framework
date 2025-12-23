import {test,expect} from '@fixtures/testFixtures';

test('Home page should load correctly',
    async({homepage,page}) =>{
        await homepage.navigateTo('/');
        await expect(page).toHaveTitle('Practice Software Testing - Toolshop - v5.0')
    }
)