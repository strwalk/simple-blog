import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Header', () => {
  test('Title', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'シンプル ブログ' })
    ).toBeVisible();
  });
});
