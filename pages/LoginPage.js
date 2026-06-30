export class LoginPage {
  constructor(page) {
    this.page = page;

    // Locators  from github
    this.usernameInput = page.locator("#loginusername");
    this.passwordInput = page.locator("#loginpassword");
    this.loginButton = page.locator(
      '//*[@id="logInModal"]/div/div/div[3]/button[2]',
    );
    this.errorMessage = page.locator(".error-message");
    this.loginLink = page.locator("#login2");
    this.logoutLink = page.locator("#logout2");
    this.welcomeUser = page.locator("#nameofuser");
  }

  async login(username, password) {
    await this.loginLink.click();
    await this.enterUsername(username);
    await this.enterPassword(password);
    await this.clickLogin();
  }

  async logout() {
    await this.logoutLink.click();
  }

  async isLoggedIn() {
    return await this.welcomeUser.isVisible();
  }

  async isLoggedOut() {
    return await this.loginLink.isVisible();
  }

  // Actions
  async gotoLoginPage() {
    await this.page.goto("https://demoblaze.com/");
  }

  async enterUsername(username) {
    await this.usernameInput.fill(username);
  }

  async enterPassword(password) {
    await this.passwordInput.fill(password);
  }

  async clickLogin() {
    await this.loginButton.click();
  }
}
