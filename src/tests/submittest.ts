const { test, expect } = require('@playwright/test');

test.describe('Search Form Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:5000/search.html');
  });

  test('should have all form elements', async ({ page }) => {
    await expect(page.locator('#item')).toBeVisible();
    await expect(page.locator('#type')).toBeVisible();
    await expect(page.locator('#condition')).toBeVisible();
    await expect(page.locator('#pickup')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
  });

  test('should update condition options when type changes', async ({ page }) => {
    await page.selectOption('#type', 'furniture');
    const options = await page.$$eval('#condition option', options => 
      options.map(option => option.value)
    );
    expect(options).toContain('useable');
    expect(options).toContain('nonuse');
  });

  test('should display results for furniture in useable condition', async ({ page }) => {
    await page.fill('#item', 'couch');
    await page.selectOption('#type', 'furniture');
    await page.selectOption('#condition', 'useable');
    await page.click('button[type="submit"]');

    const results = await page.locator('#results');
    await expect(results).toContainText('Hard Rubbish Rescue');
    await expect(results).toContainText('Facebook Marketplace');
  });
});