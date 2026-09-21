import { test, expect } from '@playwright/test';

test.describe('Login functionality', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should log in successfully with valid credentials', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/inventory/);
    await expect(page.locator('.inventory_list')).toBeVisible();
  });

  test('should display an error with invalid credentials', async ({ page }) => {
    await page.getByPlaceholder('Username').fill('invalid_user');
    await page.getByPlaceholder('Password').fill('wrong_password');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.locator('[data-test="error"]')).toBeVisible();
    await expect(page.locator('[data-test="error"]')).toContainText(
      'Username and password do not match'
    );
  });

  test('should require a username when fields are empty', async ({ page }) => {
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page.locator('[data-test="error"]')).toContainText(
      'Username is required'
    );
  });

});
