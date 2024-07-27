const { expect } = require("@playwright/test")

exports.UpdateRoom = class UpdateRoom {

    constructor(page) {
        this.page = page
        this.roomDetails = page.locator('p[id^="roomName"]')
        this.edit_button = page.locator("//button[@class='btn btn-outline-primary float-right']")
        this.roomNo = page.locator("//input[@id='roomName']")
        this.roomType = page.locator("//select[@id='type']")
        this.roomPrice = page.locator("//input[@id='roomPrice']")
        this.refreshments = page.locator("//input[@id='refreshCheckbox']")
        this.description = page.locator("//textarea[@id='description']")
        this.update_button = page.locator("//button[@id='update']")
        this.rooms_button = page.locator('a.nav-link', { hasText: 'Rooms' })

    }

    async updateroom() {
        const roomNameElements = await this.page.locator('p[id^="roomName"]').elementHandles();
        for (const element of roomNameElements) {
            const textContent = await element.textContent();
            if (textContent.includes('106')) {
                // Click the specific room element
                await element.click();
                break;
            }
        }
        await this.edit_button.click()
        await this.roomNo.fill('107')
        await this.roomType.selectOption({ label: 'Single' })
        await this.roomPrice.fill('800')
        await this.refreshments.click()
        await this.description.fill('Test for Myra')
        await this.update_button.click()
        await this.rooms_button.click()

    }

    async validate_updateroom() {
        //await expect(this.page.locator('p[id^="roomName"]')).toContainText('107')
        const roomNameElements = await this.page.locator('p[id^="roomName"]').elementHandles()
        for (const element of roomNameElements) {
            const textContent = await element.textContent();
            if (textContent.includes('107')) {
                console.log('Found room with name 107');
            } else {
                console.log('Room name does not contain 107');
            }
        }
    }
}