import {test as baseFixture} from "@playwright/test"
import * as testdata from "./load-testdata"
import PageManager from "../pages/page-manager";

type Object = {
    pageManager: PageManager
    userLoginTestdata: any,
    contactUsTestdata: any
    productSearchTestdata:any
}

export const test = baseFixture.extend<Object>({
    pageManager: async ({page}, use) => {
        await use(new PageManager(page))
    },
    userLoginTestdata: async ({}, use) => {
        testdata.userLoginTestdata.HappyPath.password = process.env.LOGIN_PASSWORD || "admin@123";
        await use(testdata.userLoginTestdata)
    },
    contactUsTestdata: async ({}, use) => {
        await use(testdata.contactUsTestdata)
    },
    productSearchTestdata: async ({}, use) => {
        await use(testdata.productSearchTestdata)
    }
})