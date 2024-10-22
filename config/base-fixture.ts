import {test as baseFixture} from "@playwright/test"
import * as testdata from "./load-testdata"
import PageManager from "../pages/page-manager";

type Object = {
    pageManager: PageManager
    userLoginTestdata: any
}

export const test = baseFixture.extend<Object>({
    pageManager: async ({page}, use) => {
        await use(new PageManager(page))
    },
    userLoginTestdata: async ({}, use) => {
        testdata.userLoginTestdata.HappyPath.password = process.env.LOGIN_PASSWORD || "";
        await use(testdata.userLoginTestdata)
    }
})