import { test, expect } from '@playwright/test';

test.describe('Users API', () => {

  test('should return a list of users', async ({ request }) => {
    const response = await request.get(
      'https://jsonplaceholder.typicode.com/users'
    );

    expect(response.status()).toBe(200);

    const users = await response.json();

    expect(Array.isArray(users)).toBeTruthy();
    expect(users.length).toBeGreaterThan(0);
  });

  test('should return a specific user', async ({ request }) => {
    const response = await request.get(
      'https://jsonplaceholder.typicode.com/users/1'
    );

    expect(response.status()).toBe(200);

    const user = await response.json();

    expect(user).toHaveProperty('id', 1);
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('email');
  });

  test('should return 404 for a nonexistent user', async ({ request }) => {
    const response = await request.get(
      'https://jsonplaceholder.typicode.com/users/9999'
    );

    expect(response.status()).toBe(404);
  });

});
