import {test} from "../config/base-fixture"

test('Should be able to login', async ({pageManager}) => {
    await pageManager.loginPage.goTo();
})