import {test, expect} from '../fixtures/pomFixtures'
import users from '../test-data/users.json' with {type: 'json'}

test.describe("Authentication - Login Test", () => {
    test.beforeEach(async ({loginPage}) => {
        await loginPage.goto();
    });

    test('should display error message with incorrect credentials',async({loginPage}) => {
        await loginPage.login(users.invalidUser.email, users.invalidUser.password)
        await expect(loginPage.loginErrorMessage).toBeVisible()
        await expect(loginPage.loginErrorMessage).toContainText(users.invalidUser.expectedError)

    });

});
