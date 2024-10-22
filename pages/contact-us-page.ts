import {Page} from "@playwright/test";
import BasePage from "./base-page";

export default class ContactUsPage extends BasePage {

    protected get namePlaceholder() {
        return this.page.getByPlaceholder('Name');
    }

    protected get emailPlaceholder() {
        return this.page.getByPlaceholder('Email', {exact: true})
    }

    protected get subjectPlaceHolder() {
        return this.page.getByPlaceholder('Subject')
    }

    protected get messagePlaceHolder() {
        return this.page.getByPlaceholder('Your Message Here')
    }

    protected get fileUploadInput() {
        return this.page.locator('input[name="upload_file"]')
    }

    protected get submitBtn() {
        return this.page.getByRole('button', {name: 'Submit'})
    }

    constructor(page: Page) {
        super(page)
    }

    async goTo() {
        await this.page.goto("/contact_us")
    }

    async submitContactUsForm(data: any, isFileUploadNeeded: boolean = false) {
        await this.emailPlaceholder.fill(data.email)
        await this.namePlaceholder.fill(data.name)
        await this.subjectPlaceHolder.fill(data.subject)
        await this.messagePlaceHolder.fill(data.message)
        if (isFileUploadNeeded) {
            await this.fileUploadInput.setInputFiles(data.fileToUploadPath)
        }
        this.page.on('dialog', (dialog) => {
            dialog.accept()
        })
        await this.submitBtn.click()
    }

    async getSuccessAlertMessage() {
        return await this.page.locator('#contact-page').getByText('Success! Your details have').textContent()
    }
}