import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';
import { LoginPage } from '../../page/Login.page';

test('basic test 1', async ({ }) => {
  const browser = await chromium.launch({
    args: ['--disable-dev-shm-usage']
  });
  const page = await (await browser.newContext()).newPage();
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  const title2 = page.locator('.navbar__inner .navbar__item ').first();
  console.log(await title2.getAttribute("href"))
  await expect(title).toHaveText('Playwright');
});

test.only('Method hierarchy', ({ page }) => {
  const login: LoginPage = new LoginPage(page);
  login.WhichMethodisCalled();
});