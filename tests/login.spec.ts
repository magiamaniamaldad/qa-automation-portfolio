import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';

test.describe('Login functionality', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('should login successfully with valid credentials', async () => {
    await loginPage.login('standard_user', 'secret_sauce');

    await expect(loginPage.inventoryList).toBeVisible();
  });

  test('should display an error with invalid credentials', async () => {
    await loginPage.login('invalid_user', 'wrong_password');

    await expect(loginPage.errorMessage).toBeVisible();
    await expect(loginPage.errorMessage).toContainText(
      'Username and password do not match'
    );
  });

  test('should require a username when fields are empty', async () => {
    await loginPage.loginButton.click();

    await expect(loginPage.errorMessage).toContainText(
      'Username is required'
    );
  });
});
