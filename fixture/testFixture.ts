import { test as base } from "@playwright/test";

export type Profile = {
  pName: string,
}


const test = base.extend<Profile, {} >({
//   loginPage: async ({ page }, use) => {
//     await use(new LoginPage(page));
//   },

	// profile: ({ pName: "default" }),
	pName: "default",

});

export default test;
export const expect = test.expect;
