import { expect } from "@playwright/test";

export class Cartpage {
  constructor(page) {
    this.page = page;
    this.cart = this.page.locator("#cartur");
  }
  async viewCart() {
    await this.cart.click();
  }

async checkAddedProduct(productName) {
await expect(
  this.page.getByText(productName).first()
).toBeVisible();  
}
}
