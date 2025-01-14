const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  use: {
    baseURL: 'http://localhost:5000',
    headless: true,
    viewport: { width: 1280, height: 720 },
  },
  webServer: {
    command: 'npm run start',
    port: 5000,
    reuseExistingServer: !process.env.CI,
    timeout: 120 * 1000
  },
  reporter: [['html'], ['list']],
  workers: 1
});