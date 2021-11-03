import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';

test('basic test 1', async ({ }) => {
  const browser = await chromium.launch({
    args: ['--disable-dev-shm-usage']
  });
  const page = await (await browser.newContext()).newPage();
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});