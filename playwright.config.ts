import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'https://www.amazon.com',
    extraHTTPHeaders: {
      'User-Agent': 'PlaywrightTestBot/1.0',
      'Accept': 'text/html',
    },
  },
  projects: [
    {
      name: 'API Tests',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
});
