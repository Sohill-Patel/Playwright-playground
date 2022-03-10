// import { test, expect } from '@playwright/test';
import test, {expect } from '../../fixture/testFixture';
 
test('basic test 2', async ({ page, pName}) => {
  console.log(pName);

  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});

test('basic test 3', async ({ page, pName}) => {
  console.log(pName);
});