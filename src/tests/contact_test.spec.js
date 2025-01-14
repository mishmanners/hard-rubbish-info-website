const { test, expect } = require('@playwright/test');

test('Contact form should be filled out correctly', async ({ page }) => {
    await page.goto('http://localhost:8080/contact');

    await page.fill('#name', 'John Doe');
    await page.fill('#email', 'john.doe@example.com');
    await page.fill('#message', 'This is a test message.');

    await expect(page.locator('#name')).toHaveValue('John Doe');
    await expect(page.locator('#email')).toHaveValue('john.doe@example.com');
    await expect(page.locator('#message')).toHaveValue('This is a test message.');
});