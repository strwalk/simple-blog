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

  test('Modal', async ({ page }) => {
    await page.getByLabel('メールアドレス').fill('test@test');
    await page.getByLabel('お名前').fill('山田 太郎');
    await page.getByLabel('お問い合わせ内容').fill('test');
    await page.getByRole('button', { name: '送信' }).click();

    await expect(page.getByTestId('modal')).toBeVisible();
    await expect(
      page.getByText('以下の内容でお問い合わせを受け付けました')
    ).toBeVisible();
    await expect(page.getByTestId('modal-email')).toHaveText('test@test');
    await expect(page.getByTestId('modal-username')).toHaveText('山田 太郎');
    await expect(page.getByTestId('modal-message')).toHaveText('test');

    await page.getByRole('button', { name: '閉じる' }).click();
    await expect(page.getByTestId('modal')).toBeHidden();
  });
});
