// @ts-check
import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";

test("login", async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await page.pause();
  await login.login("John", "user@123");
});
