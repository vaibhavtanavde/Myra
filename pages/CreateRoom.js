const { expect } = require("@playwright/test")

exports.CreateRoom = class CreateRoom {

    constructor(page) {
        this.page = page
        this.roomNo = page.locator("//input[@id='roomName']")
        this.roomType = page.locator("//select[@id='type']")
        this.accessible = page.locator("//select[@id='accessible']")
        this.roomPrice = page.locator("//input[@id='roomPrice']")
        this.wifi = page.locator("//input[@id='wifiCheckbox']")
        this.tv = page.locator("//input[@id='tvCheckbox']")
        this.safe = page.locator("//input[@id='safeCheckbox']")
        this.create_button = page.locator("//button[@id='createRoom']")
    }

    async createroom() {
        await this.roomNo.fill('106')
        await this.roomType.selectOption({ label: 'Family' })
        await this.accessible.selectOption({ label: 'true' })
        await this.roomPrice.fill('700')
        await this.wifi.click()
        await this.tv.click()
        await this.safe.click()
        await this.create_button.click()

    }

    async validate_room() {
        await expect(this.page.locator('p[id^="roomName"]')).toContainText('106')
    }
}