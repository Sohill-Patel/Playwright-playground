import { PlaywrightTestConfig } from "@playwright/test";
import { Profile } from "./fixture/testFixture";
import { config } from "dotenv";

config();
const testConfig: PlaywrightTestConfig<Profile> = {
  use: {
    headless: process.env.HEADLESS !== 'false' ||
      process.env.HEADLESS === undefined,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
    trace: "retain-on-failure",
    launchOptions: {
      slowMo: 900,
    },
  },
  projects: [
    {
      name: 'Prof1',
      use: { pName: 'Profile 1 tests'},
    },
    {
      name: 'Prof2',
      use: { pName: 'Profile 2 tests'},
    }
  ],
  retries: 1,
  reporter: [
    ["line"],
    ["allure-playwright"],
  ],
};
export default testConfig;
