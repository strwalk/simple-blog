import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/article/666');
});

test.describe('Article Page', () => {
  test('Title', async ({ page }) => {
    const titleLocator = page.getByRole('heading');
    await expect(titleLocator).toBeVisible();
  });

  test('Article', async ({ page }) => {
    const articleLocator = page.locator('section > p').first();
    await expect(articleLocator).toBeVisible();
  });

  test('Back Button', async ({ page }) => {
    const buttonLocator = page.getByRole('link', { name: '記事一覧に戻る' });
    await expect(buttonLocator).toBeVisible();
    await buttonLocator.click();
    await expect(page).toHaveURL('/');
  });
});
