export class HomePage {
  constructor(page) {
    this.page = page;
    this.selectMobiles = page.getByRole("link", { name: "Phones" });
    this.selectSamsungPhone = page.getByRole("link", {
      name: "Samsung galaxy s6",
    });
    this.addCartButton = page.getByText("Add to cart");
  }

  async openMobiles() {
    await this.selectMobiles.click();
  }

  async adds6ToCart() {
    await this.selectSamsungPhone.click();
  }

  async addProduct(productName) {
    this.page.once("dialog", async (dialog) => {
      console.log("-----------------------------------");
      console.log(dialog.message());
      await dialog.accept();
    });

    await this.page.getByRole("link", { name: productName }).click();
    await this.page.getByRole("link", { name: "Add to cart" }).click();
  }
}
