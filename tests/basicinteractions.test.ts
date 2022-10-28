import {expect, test} from '@playwright/test'

test('Interation with inputs', async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")

    const input_message = page.locator("input#user-message");
    await input_message.scrollIntoViewIfNeeded();
    console.log(await input_message.getAttribute("placeholder"));

    expect(input_message).toHaveAttribute("placeholder", "Please enter your Message");
    console.log('Before entering the data: ' + await input_message.inputValue());

    await input_message.type("hi osama");
    console.log('After entering the data: ' + await input_message.inputValue());
})


test('should ', async({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")

    const sum1Input = page.locator("#sum1")

    const sum2Input = page.locator("#sum2")

    const getValuesBtn = page.locator("//button[normalize-space()='Get values']")

    let num1 = 121
    let num2 = 546

    await sum1Input.type("" + num1);
    await sum2Input.type("" + num2);

    await getValuesBtn.click();

    const result = page.locator("#addmessage")
    console.log(await result.textContent());

    let expectedResult = num1 + num2;
    expect(result).toHaveText("" + expectedResult);


  
})

test.only('Checkbox testing ', async({ page }) => {
  await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo");

  const singleCheckbox = await page.locator("id=isAgeSelected")
  await singleCheckbox.check()
  expect(singleCheckbox).toBeChecked();
})
