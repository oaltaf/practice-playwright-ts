import {test} from '@playwright/test'


test('handling alerts ', async({page}) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo");

    page.on("dialog",async (alert) => {
        const text = alert.defaultValue();
        console.log(text);
        await alert.accept();
    })

  await page.locator("button:has-text('Click Me')").nth(0).click();
})


test('Model Alert', async ({page}) => { 
  await page.goto("https://www.lambdatest.com/selenium-playground/bootstrap-modal-demo");
  await page.click("//button[@data-target='#myModal']");
  await page.click("//div[@id='myModal']//button[@type='button'][normalize-space()='Save Changes']")

 })