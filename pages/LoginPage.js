exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page
        this.username_button = page.locator("//input[@id='username']")
        this.password_button = page.locator("//input[@id='password']")
        this.login_button = page.locator("//button[@id='doLogin']")
    }

    async goto() {
        await this.page.goto('https://automationintesting.online/#/admin')
    }

    async login(username, password) {
        await this.username_button.fill(username)
        await this.password_button.fill(password)
        await this.login_button.click()

    }
}