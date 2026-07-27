import { expect, test } from "@playwright/test";

import { overlayCases, showcaseRoutes } from "./routes";

for (const route of showcaseRoutes) {
  test(`${route} fits a 320px viewport`, async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 900 });
    await page.goto(route);

    const horizontalScroll = await page.evaluate(() => {
      window.scrollTo({ left: document.documentElement.scrollWidth, top: 0 });
      const scrollPosition = window.scrollX;
      window.scrollTo({ left: 0, top: 0 });
      return scrollPosition;
    });

    expect(horizontalScroll).toBe(0);
  });
}

for (const overlay of overlayCases) {
  test(`${overlay.snapshot} fits a 320px viewport when open`, async ({ page }) => {
    await page.setViewportSize({ width: 320, height: 900 });
    await page.goto(overlay.route);
    await page.getByRole("button", { name: overlay.trigger, exact: true }).click();

    const dialog = page.getByRole("dialog", { name: overlay.name, exact: true });
    await expect(dialog).toBeVisible();
    await dialog.evaluate(async (element) => {
      await Promise.all(element.getAnimations().map((animation) => animation.finished));
    });
    const box = await dialog.boundingBox();
    expect(box).not.toBeNull();
    expect(box!.x).toBeGreaterThanOrEqual(-1);
    expect(box!.y).toBeGreaterThanOrEqual(-1);
    expect(box!.x + box!.width).toBeLessThanOrEqual(321);
    expect(box!.y + box!.height).toBeLessThanOrEqual(901);
  });
}
