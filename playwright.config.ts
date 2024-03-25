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
  testDir:"./tests/",
  projects: [
    {
      name: 'Prof1',
      use: { pName: 'Profile 1 tests'},
      testDir: "./tests/group1/"
    },
    {
      name: 'Prof2',
      use: {
        pName: 'Profile 2 tests',
        video: "off",
        trace: "off",
        screenshot: "off"
      },
      retries: 0,
      testDir: "./tests/group2/"
    }
  ],
  retries: 1,
  reporter: [
    ["line"],
    ["allure-playwright"],
  ],
};
export default testConfig;
