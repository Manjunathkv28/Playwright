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
  cart.viewCart();
  await page.waitForTimeout(5000);

  await cart.checkAddedProduct("Nexus hasdj6");

  // await home.openMobiles();
  // await home.adds6ToCart();
});
