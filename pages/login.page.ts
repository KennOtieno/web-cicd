import { Page } from "@playwright/test";

export class LoginPage {
    constructor(private page: Page) {}

    async goto() {
        await this.page.goto('https://the-internet.herokuapp.com/login');

    }

    async login(username: string, password: string) {
        await this.page.getByLabel('Username').fill('tomsmith');
        await this.page.getByLabel('Password').fill('SuperSecretPassword!');
        await this.page.getByRole('button', {name: Login}).click();
    }
}