import {test} from "../config/base-fixture";
import {expect} from "@playwright/test";

test('Should be able submit contact form', async ({pageManager, contactUsTestdata}) => {
    await pageManager.contactUsPage.goTo();
    await pageManager.contactUsPage.submitContactUsForm(contactUsTestdata.happyPath)
    expect(await pageManager.contactUsPage.getSuccessAlertMessage()).toBe("Success! Your details have been submitted successfully.")
})