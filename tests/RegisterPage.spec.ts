import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.goto('https://www.facebook.com/');
    await page.getByTestId('royal_email').fill('thammisettivenkaiah');
    await page.locator('#passContainer').click();
    await page.getByTestId('royal_pass').fill('chandana@143');
    await page.getByTestId('royal_login_button').click();
});