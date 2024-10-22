import {Page} from "@playwright/test";
import LoginPage from "./login-page";

export default class PageManager {
    private  readonly page: Page;

    private _loginPage: LoginPage | null = null;

    constructor(page: Page) {
        this.page = page;
    }

    public get loginPage(){
        if (!this._loginPage) {
            this._loginPage = new LoginPage(this.page);
        }
        return this._loginPage;
    }
}