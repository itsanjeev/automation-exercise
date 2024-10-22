import {test} from "../config/base-fixture";
import {expect} from "@playwright/test";

test('Should be able scroll down and add third last product to Cart', async ({pageManager, productSearchTestdata}) => {
    await pageManager.productPage.goTo();
    await pageManager.productPage.productSearchViaCategory(productSearchTestdata)
    await pageManager.productPage.addProductToCartByIndexFromLast(3)
    expect(await pageManager.productPage.isProductAddedToCart()).toBe(true)
})