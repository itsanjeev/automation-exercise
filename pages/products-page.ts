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

}