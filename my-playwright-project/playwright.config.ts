import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',                  // Path to test directory
  timeout: 60000,                      // Set timeout for tests
  use: {
    baseURL: 'https://stage.portal.denowatts.com',  // Base URL for your app
    headless: false,                   // Set to false to see the browser in action
    video: 'on-first-retry',           // Record videos for failed tests
    trace: 'on',                       // Keep traces for debugging
  },
  reporter: [
    ['list'],                          // Console output of test progress
    ['html', { open: 'always' }],      // HTML report generation
  ],
  projects: [
    {
      name: 'Desktop Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
   
  ],
});
