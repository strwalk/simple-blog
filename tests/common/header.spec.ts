import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test.describe('Header', () => {
  test('Title', async ({ page }) => {
    const headerTitleLocator = page.locator('header').getByRole('heading', {
      name: 'SIMPLE BLOG',
    });
    await expect(headerTitleLocator).toBeVisible();
    await headerTitleLocator.click();
    await expect(page).toHaveURL('/');
  });

  test('Contact', async ({ page }) => {
    const contactLocator = page.locator('header > nav > ul > li > a');
    await expect(contactLocator).toHaveText('CONTACT');
    await contactLocator.click();
    await expect(page).toHaveURL('/form');
  });
});
