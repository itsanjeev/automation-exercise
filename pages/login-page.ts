import {Page} from "@playwright/test";
import BasePage from "./base-page";

export default class LoginPage extends BasePage {

    protected get usernameInput() {
        return this.page.locator('form').filter({hasText: 'Login'}).getByPlaceholder('Email Address')
    }

    protected get passwordInput() {
        return this.page.locator('form').filter({hasText: 'Login'}).getByPlaceholder('Password')
    }

    protected get loginBtn() {
        return this.page.getByRole('button', {name: 'Login'})
    }

    protected get logoutLnk() {
        return this.page.getByRole('link', {name: 'Logout'});
    }

    protected get errorMessageTxt() {
        return this.page.getByText('Your email or password is incorrect!')
    }

    constructor(page: Page) {
        super(page)
    }

    async goTo() {
        await this.page.goto("/login")
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginBtn.click()
    }

    async isUserLoggedIn() {
        return await this.logoutLnk.isVisible()
    }

    async getErrorMessage() {
        return await this.errorMessageTxt.textContent()
    }

}