import {chromium, test} from "@playwright/test"

test('Login test demo ', async() => {
  
    const browser = await chromium.launch({
        headless: false
    })
    //a single browser
    const context = await browser.newContext()

    //a single tab in a browser
    const page = await context.newPage();

    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.hover("//a[@role='button']//span[@class='title'][normalize-space()='My account']");
    // await page.click("text=Login")
    //we can write text click like following as well
    await page.click("'Login'")

    await page.fill("//input[@id='input-email']", "osama.altaf385@gmail.com")
    await page.fill("//input[@id='input-password']", "Pass1234")
    await page.click("//input[@value='Login']");

    await page.waitForTimeout(5000);

    
    const page1 = await context.newPage()
    await page1.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
    await page.waitForTimeout(5000);


    const context2 = await browser.newContext()
    const page2 = await context2.newPage()
    await page2.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/login")
    await page2.waitForTimeout(5000);


})
