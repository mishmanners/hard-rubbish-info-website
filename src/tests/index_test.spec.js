const { test, expect } = require('@playwright/test');

test('home page should load and have the "repurposeful" h1 heading', async ({ page }) => {
    await page.goto('http://localhost:8080/index'); // Replace with your actual URL

    const heading = await page.locator('h1');
    await expect(heading).toHaveText('RePurposeful');
});

test('website should load without errors', async ({ page }) => {
    const response = await page.goto('http://localhost:8080/index');
    expect(response.ok()).toBeTruthy();
    expect(page.url()).toBe('http://localhost:8080/index');
});