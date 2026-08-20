// @ts-check
import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.js";
import { HomePage } from "../pages/HomePage.js";
import { Cartpage } from "../pages/CartPage.js";

test("user can log in and log out @sanity", async ({ page }) => {
  const login = new LoginPage(page);

  await login.gotoLoginPage();
  await login.login("madavv", "User@123");
  await expect.poll(() => login.isLoggedIn()).toBeTruthy();

  await login.logout();
  await expect.poll(() => login.isLoggedOut()).toBeTruthy();
});

test("user can add a product from the home page", async ({ page }) => {
  const login = new LoginPage(page);
  const home = new HomePage(page);

  await login.gotoLoginPage();
  await login.login("madavv", "User@123");
  await home.addProduct("Nexus 6");
});

test("cart contains the added product", async ({ page }) => {
  const login = new LoginPage(page);
  const home = new HomePage(page);
  const cart = new Cartpage(page);

  await login.gotoLoginPage();
  await login.login("madavv", "User@123");
  await home.addProduct("Nexus 6");
  await cart.viewCart();
  await cart.checkAddedProduct("Nexus 6");
});
