// @ts-check
import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { HomePage } from "../pages/HomePage.js";
import { Cartpage } from "../pages/CartPage.js";

test("login", async ({ page }) => {
  const login = new LoginPage(page);
  await login.gotoLoginPage();
  await login.login("madavv", "User@123");

  const home = new HomePage(page);
  await page.pause();
  await home.addProduct("Nexus 6");

  const cart = new Cartpage(page);
  await cart.viewCart();
  await page.waitForTimeout(5000);

  await cart.checkAddedProduct("Nexus 6");

  await login.logout();
  expect(await login.isLoggedOut()).toBeTruthy();

});
