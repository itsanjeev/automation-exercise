import {test} from "../config/base-fixture"
import {expect} from "@playwright/test";

test('Should be able to login', async ({pageManager, userLoginTestdata}) => {
    await pageManager.loginPage.goTo();
    await pageManager.loginPage.login(userLoginTestdata.HappyPath.username, userLoginTestdata.HappyPath.password)
    expect(await pageManager.loginPage.isUserLoggedIn()).toBe(true);
})

test('Should not be able to login with Invalid user', async ({pageManager, userLoginTestdata}) => {
    await pageManager.loginPage.goTo();
    await pageManager.loginPage.login(userLoginTestdata.InvalidLogin.username, userLoginTestdata.InvalidLogin.password)
    expect(await pageManager.loginPage.isUserLoggedIn()).toBe(false);
    const errorMessage = await pageManager.loginPage.getErrorMessage();
    expect(errorMessage).toBe("Your email or password is incorrect!");
})