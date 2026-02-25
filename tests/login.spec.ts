import {test, expect} from '@playwright/test';

test('User Logs In', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/login');

    await page.getByLabel('Username').fill('tomsmith');
    await page.getByLabel('Password').fill('SuperSecretPassword!');

    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page).toHaveURL(/secure/);
    await expect(page.getByText('You logged into a secure area!')).toBeVisible();
    
});

test('Invalid Details', async ({page}) => {

    await page.goto('https://the-internet.herokuapp.com/login');

    await page.getByLabel('Username').fill('jumaallan');
    await page.getByLabel('Password').fill('IsthisYou!');
    await page.getByRole('button', {name: 'Login'}).click();

    await expect(page).toHaveURL(/login/);
    await expect(page.getByText('Your username is invalid!')).toBeVisible();

});