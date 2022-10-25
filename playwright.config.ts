import type { PlaywrightTestConfig } from '@playwright/test';


const config: PlaywrightTestConfig = {
  testMatch: ["tests/recorderd.test.ts"],
  use: {
    headless: false
  },
  reporter: [
    ["dot"],
    ["html", {open: "never"}],
    ["json", {outputFile: "jsonReports/jsonReport.json"}]
  ]
};

export default config;
