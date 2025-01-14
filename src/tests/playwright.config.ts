// playwright.config.js
export const timeout = 60000;
export const use = {
    // Other configurations
};

import { defineConfig } from '@playwright/test';

export default defineConfig({
    timeout: 60000,
    use: {
        // Other configurations
    },
    projects: [
        {
            name: 'chromium',
            use: { browserName: 'chromium' },
        },
        {
            name: 'firefox',
            use: { browserName: 'firefox' },
        },
        {
            name: 'webkit',
            use: { browserName: 'webkit' },
        },
    ],
});