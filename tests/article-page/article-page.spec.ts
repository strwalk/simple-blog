import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/article/clv1wjbhgjwia0814jqjqqdfb');
});

test.describe('Article Page', () => {
  test('Title', async ({ page }) => {
    await expect(page.getByTestId('article-title')).toHaveText('猫');
  });

  test('Article', async ({ page }) => {
    const articleLocator = page
      .getByTestId('article-contents-section')
      .getByRole('paragraph')
      .first();
    await expect(articleLocator).toHaveText('猫猫猫猫猫猫猫猫猫猫猫猫猫猫猫');
  });

  test('Back Button', async ({ page }) => {
    const buttonLocator = page.getByRole('link', { name: '記事一覧に戻る' });
    await expect(buttonLocator).toBeVisible();
    await buttonLocator.click();
    await expect(page).toHaveURL('/');
  });
});
