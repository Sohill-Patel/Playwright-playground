import { PlaywrightTestConfig } from "@playwright/test";
import { config } from "dotenv";

config();
const testConfig: PlaywrightTestConfig = {
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
  retries: 1,
  reporter: [
    ["line"],
    ["allure-playwright"],
  ],
};
export default testConfig;
