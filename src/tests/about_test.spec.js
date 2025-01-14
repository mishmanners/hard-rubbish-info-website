const { test, expect } = require('@playwright/test');

test.describe('About Page Links', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('http://localhost:8080/about');
    });

    test('should have five working links', async ({ page }) => {
        const links = await page.$$('a');
        expect(links.length).toBe(5);

        for (const link of links) {
            const href = await link.getAttribute('href');
            const [response] = await Promise.all([
                page.waitForResponse(href),
                link.click(),
            ]);
            expect(response.ok()).toBeTruthy();
            await page.goBack();
        }
    });
});