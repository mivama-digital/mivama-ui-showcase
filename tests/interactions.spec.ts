import { expect, test } from "@playwright/test";

test("dialog traps focus, closes with Escape, and restores focus", async ({ page }) => {
  await page.goto("/overlays/dialog");
  const trigger = page.getByRole("button", { name: "Invite collaborators" });

  await trigger.click();
  const dialog = page.getByRole("dialog", { name: "Invite collaborators" });
  const email = dialog.getByRole("textbox", { name: "Email address" });
  const close = dialog.getByRole("button", { name: "Close" });
  await expect(dialog).toBeVisible();

  await close.focus();
  await page.keyboard.press("Tab");
  await expect(email).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(close).toBeFocused();

  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
});

test("sheet closes with Escape and restores focus", async ({ page }) => {
  await page.goto("/overlays/sheet");
  const trigger = page.getByRole("button", { name: "Open right" });

  await trigger.click();
  const dialog = page.getByRole("dialog", { name: "Right sheet" });
  const firstSwitch = dialog.getByRole("switch", { name: "Email alerts" });
  const close = dialog.getByRole("button", { name: "Close" });
  await expect(dialog).toBeVisible();

  await close.focus();
  await page.keyboard.press("Tab");
  await expect(firstSwitch).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(close).toBeFocused();

  await page.keyboard.press("Escape");
  await expect(dialog).toBeHidden();
  await expect(trigger).toBeFocused();
});

test("tabs support arrow-key navigation", async ({ page }) => {
  await page.goto("/navigation");
  const tabs = page.getByRole("tablist", { name: "horizontal default tabs" });
  const overview = tabs.getByRole("tab", { name: "Overview" });
  const activity = tabs.getByRole("tab", { name: "Activity" });

  await overview.focus();
  await page.keyboard.press("ArrowRight");
  await expect(activity).toBeFocused();
  await page.keyboard.press("Enter");
  await expect(activity).toHaveAttribute("aria-selected", "true");
});

test("mobile sidebar opens as a sheet and restores focus", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 900 });
  await page.goto("/layout");
  const trigger = page.getByRole("button", { name: "Toggle showcase sidebar" });
  await expect(page.locator('[data-slot="sidebar"]')).toHaveCount(0);

  await trigger.click();
  const sidebar = page.getByRole("dialog", { name: "Sidebar" });
  await expect(sidebar).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(sidebar).toBeHidden();
  await expect(trigger).toBeFocused();
});
