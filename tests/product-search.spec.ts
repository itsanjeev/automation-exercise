import {test} from "../config/base-fixture";
import {expect} from "@playwright/test";

test('Should be able search Items through category', async ({pageManager, productSearchTestdata}) => {
    await pageManager.productPage.goTo();
    await pageManager.productPage.productSearchViaCategory(productSearchTestdata)
    expect(await pageManager.productPage.isItemAvailableAfterCategorySearch(productSearchTestdata.productName)).toBe(true);
})