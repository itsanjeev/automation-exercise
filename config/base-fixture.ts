import {test as baseFixture} from "@playwright/test"
import PageManager from "../pages/page-manager";

type testData = {
    pageManager: PageManager
}

export const test = baseFixture.extend<testData>({
    pageManager: async ({page}, use) => {
        await use(new PageManager(page))
    }
})