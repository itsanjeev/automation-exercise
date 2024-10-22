import {Page} from "@playwright/test";
import LoginPage from "./login-page";
import ContactUsPage from "./contact-us-page";
import ProductsPage from "./products-page";

export default class PageManager {
    private readonly page: Page;

    private _loginPage: LoginPage | null = null;
    private _contactUsPage: ContactUsPage | null = null;
    private _productsPage: ProductsPage | null = null;

    constructor(page: Page) {
        this.page = page;
    }

    public get loginPage() {
        if (!this._loginPage) {
            this._loginPage = new LoginPage(this.page);
        }
        return this._loginPage;
    }


    public get contactUsPage() {
        if (!this._contactUsPage) {
            this._contactUsPage = new ContactUsPage(this.page);
        }
        return this._contactUsPage;
    }

    public get productPage() {
        if (!this._productsPage) {
            this._productsPage = new ProductsPage(this.page);
        }
        return this._productsPage;
    }
}