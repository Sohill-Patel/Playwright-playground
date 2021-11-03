import { test as base } from "@playwright/test";


const test = base.extend<{ }>({
//   loginPage: async ({ page }, use) => {
//     await use(new LoginPage(page));
//   },
});

export default test;
export const expect = test.expect;
