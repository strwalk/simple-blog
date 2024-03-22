import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/form');
});

test.describe('Form Page', () => {
  test('Title', async ({ page }) => {
    await expect(
      page.getByRole('heading', { name: 'お問い合わせフォーム' })
    ).toBeVisible();
  });

  test('Form', async ({ page }) => {
    await expect(page.getByLabel('メールアドレス')).toBeVisible();
    await expect(page.getByLabel('お名前')).toBeVisible();
    await expect(page.getByLabel('お問い合わせ内容')).toBeVisible();
    await expect(page.getByRole('button', { name: '送信' })).toBeVisible();
  });
});
