import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

    await page.waitForTimeout(5000)
  await page.goto('https://ecommerce-playground.lambdatest.io/');

  await page.hover("//a[@role='button']//span[@class='title'][normalize-space()='My account']");
  await page.getByRole('link', { name: 'Login' }).click();
  await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/login');

  await page.getByPlaceholder('E-Mail Address').click();

  await page.getByPlaceholder('E-Mail Address').fill('osama.altaf385@gmail.com');

  await page.getByPlaceholder('Password').click();

  await page.getByPlaceholder('Password').fill('Pass1234');

  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');

  await page.getByRole('link', { name: ' Edit your account information' }).click();
  await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/edit');

  await page.getByPlaceholder('First Name').click();

  await page.getByPlaceholder('First Name').press('Meta+a');

  await page.getByPlaceholder('First Name').fill('Osama');

  await page.getByRole('button', { name: 'Continue' }).click();
  await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
  await page.waitForTimeout(2000)

  await page.hover("//a[@role='button']//span[@class='title'][normalize-space()='My account']");
  await page.waitForTimeout(2000)
  await page.getByRole('link', { name: 'Logout' }).click();
  await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/logout');

  await page.getByRole('link', { name: 'Continue' }).click();
  await expect(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=common/ho');

});