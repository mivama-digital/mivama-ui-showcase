import { expect, test } from "@playwright/test";

import { overlayCases, selectTheme, showcaseRoutes, themes } from "./routes";

test.skip(({ browserName }) => browserName !== "chromium", "Visual baselines are reviewed in Chromium.");

for (const theme of themes) {
  for (const route of showcaseRoutes) {
    test(`@visual ${theme} ${route}`, async ({ page }) => {
      await selectTheme(page, theme);
      await page.goto(route);
      await page.locator("html[data-hydrated=true]").waitFor();
      await expect(page).toHaveScreenshot(
        `${theme}-${route === "/" ? "home" : route.slice(1).replaceAll("/", "-")}.png`,
        { fullPage: true },
      );
    });
  }

  for (const overlay of overlayCases) {
    test(`@visual ${theme} open ${overlay.snapshot}`, async ({ page }) => {
      await selectTheme(page, theme);
      await page.goto(overlay.route);
      await page.locator("html[data-hydrated=true]").waitFor();
      await page.getByRole("button", { name: overlay.trigger, exact: true }).click();
      await expect(page.getByRole("dialog", { name: overlay.name, exact: true })).toBeVisible();
      await expect(page).toHaveScreenshot(`${theme}-${overlay.snapshot}-open.png`);
    });
  }
}
