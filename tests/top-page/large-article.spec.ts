import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Large Article', () => {
  test('Title', async ({ page }) => {
    const titleLocator = page
      .getByTestId('large-article')
      .first()
      .getByRole('heading');

    await expect(titleLocator).toBeVisible();
  });

  test('Text', async ({ page }) => {
    const textLocator = page
      .getByTestId('large-article')
      .first()
      .getByRole('paragraph');

    await expect(textLocator).toBeVisible();
  });

  test('Article', async ({ page }) => {
    await page.getByTestId('large-article').first().click();
    await expect(page).toHaveURL(/article\/[0-9a-zA-Z]+$/);
  });
});
