import {test,expect} from '@playwright/test';

test('My First Test',async({page})=>{

    //Handle pop-up (accept cookies) and I am a robot checkbox
    
    await page.goto('https://www.bing.com');
    
    await page.getByRole('combobox', { name: 'Search' }).fill('Playwright');
    await page.getByRole('combobox', { name: 'Search' }).press('Enter');
    await page.waitForTimeout(2000);
    const result = await page.locator('h2').allTextContents();
    expect(result.length).toBeGreaterThan(0);
})