import { defineConfig, devices } from "@playwright/test";

const projects = [
  {
    name: "chromium",
    use: { ...devices["Desktop Chrome"] },
  },
  {
    name: "firefox",
    use: { ...devices["Desktop Firefox"] },
  },
];

if (process.env.CI || process.env.PLAYWRIGHT_WEBKIT) {
  projects.push({
    name: "webkit",
    use: { ...devices["Desktop Safari"] },
  });
}

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: Boolean(process.env.CI),
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: "http://127.0.0.1:3107",
    trace: "retain-on-failure",
  },
  expect: {
    toHaveScreenshot: {
      animations: "disabled",
      maxDiffPixelRatio: 0.01,
    },
  },
  projects,
  webServer: {
    command: process.env.PLAYWRIGHT_PRODUCTION
      ? "npm run build && npm run start -- --hostname 127.0.0.1 --port 3107"
      : "npm run dev -- --hostname 127.0.0.1 --port 3107",
    url: "http://127.0.0.1:3107/healthz",
    reuseExistingServer: false,
    timeout: 120_000,
  },
});
