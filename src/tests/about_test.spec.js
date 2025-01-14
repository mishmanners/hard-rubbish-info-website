const { test, expect } = require('@playwright/test');

test('should have 13 working links on the page', async ({ page }) => {
    // Navigate to the about page
    await page.goto('http://localhost:8080/about');

    // Get all links on the page
    const links = await page.locator('a');
    
    // Check if there are exactly 13 links
    await expect(links).toHaveCount(13);

    // Get all href attributes
    const hrefs = await links.evaluateAll(elements => 
        elements.map(el => el.href)
    );

    // Check each link
    for (const href of hrefs) {
        const response = await page.request.get(href);
        expect(response.ok()).toBeTruthy();
    }
});