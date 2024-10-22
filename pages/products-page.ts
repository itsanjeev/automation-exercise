import {Page} from "@playwright/test";
import BasePage from "./base-page";

export default class ProductsPage extends BasePage {


    constructor(page: Page) {
        super(page)
    }

    async goTo() {
        await this.page.goto("/products")
    }

    async productSearchViaCategory(data: any) {
        const categoryElement = await this.page.locator(`a[href="#${data.category}"]`)
        await categoryElement.scrollIntoViewIfNeeded()
        await categoryElement.click()
        await this.page.getByRole('link', {name: data.product}).click()
    }

    async isItemAvailableAfterCategorySearch(item: string) {
        const ele = this.page.getByText(item).nth(1)
        await ele.waitFor({state: "visible"})
        return ele.isVisible()
    }

    async addProductToCartByIndexFromLast(index: number) {
        const products = await this.page.locator('.features_items .single-products')
        const productCount = await products.count();
        const thirdLastProductIndex = productCount - index
        await products.nth(thirdLastProductIndex).scrollIntoViewIfNeeded();
        await this.page.locator('.features_items .single-products').nth(3).getByRole('link', {name: 'Add to cart'}).nth(0).click()
    }

    async isProductAddedToCart() {
        const element = this.page.getByText('Your product has been added')
        await element.waitFor({state: "visible"})
        await element.waitFor({state: "attached"})
        return element.isVisible()
    }
}