import { test } from "@playwright/test";

test('handling dropdown', async ({page}) => { 
    page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")
 })