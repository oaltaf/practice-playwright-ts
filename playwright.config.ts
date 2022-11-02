import type { PlaywrightTestConfig } from '@playwright/test';


const config: PlaywrightTestConfig = {
  // testMatch: ["tests/basicinteractions.test.ts"],
  use: {
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure"
  },
  retries: 0,
  reporter: [
    ["dot"],
    ["html", {open: "always"}],
    ["json", {outputFile: "jsonReports/jsonReport.json"}]
  ]
};

export default config;
