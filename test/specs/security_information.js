const page_objects = require('../pageobjects/page_objects.js')
describe("Test Suites", () => {

    it("Change PIN", async () => {
        await page_objects.initializeAppForLogin()
        await page_objects.SuccessfulLogin('didie', 'Required@123')
        await $('~Maybe later').click() //To remove the biometrics popup
        await page_objects.changeTransactionPIN('2222', '1234', '1234')
        await page_objects.performLogout()
    })

    it("Change Password", async () => {
        await page_objects.initializeAppForLogin()
        await page_objects.SuccessfulLogin('didie', 'Required@12345')
        await $('~Maybe later').click() //To remove the biometrics popup
        await page_objects.changeAccountPassword('Required@12345', 'Required@123', 'Required@123')
        await page_objects.performLogout()
    })
})

after(() => {
    require('./signup.js')
});