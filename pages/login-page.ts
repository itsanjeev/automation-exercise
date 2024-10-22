import {Page} from "@playwright/test";
import BasePage from "./base-page";

export default class LoginPage extends  BasePage{

    constructor(page:Page) {
        super(page)
    }

    async goTo(){
        await this.page.goto("/login")
    }

    async login(username:string , password:string){

    }
}