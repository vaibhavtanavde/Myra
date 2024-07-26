const { expect } = require("@playwright/test")

exports.DeleteRoom = class DeleteRoom {

    constructor(page) {
        this.page = page
        this.deleteRoom = page.locator("//span[@class='fa fa-remove roomDelete']")

    }

    async deleteroom() {
        await this.deleteRoom.click()

    }

    async validate_deleteroom() {
        await expect(this.page.locator('p[id^="roomName"]')).toHaveCount(0)
    }
}