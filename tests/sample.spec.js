require('@playwright/test')
const {test,expect} = require('@playwright/test')

test.skip ("My First first test",async function({page}){
    expect(12).toBe(12)
})

test.skip ("My Seocnd first test",async function({page}){
    expect("Master Blaster").toContain("Blaster")
})

test.skip ("My Third first test",async function({page}){
    expect(122).toBe(122)
})

test ("Verify Google title",async function({page}){
    await page.goto("https://www.google.com/")
    
    const url = await page.url()
    const title = await page.title()

    await expect(page).toHaveTitle("Google")

    await expect(page).toHaveTitle("Yahoo")

    console.log("Title is "+url)
})