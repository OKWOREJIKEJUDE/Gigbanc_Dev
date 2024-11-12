const page_objects = require('../pageobjects/page_objects.js')
describe("Test Suites", () => {

    it("Card Creation", async () => {
        await page_objects.initializeAppForLogin()
        await page_objects.SuccessfulLogin('didie', 'Required@123')
        await $('~Maybe later').click() //To remove the biometrics popup
        await page_objects.cardCreation('5', '8888', '8888')
        await page_objects.performLogout()
    })

    it("Card Funding", async () => {
        await page_objects.SuccessfulLogin('didie', 'Required@123')
        await page_objects.fundCard('5')
        await page_objects.performLogout()
    })

    it("Card Withdrawal", async () => {
        await page_objects.SuccessfulLogin('didie', 'Required@123')
        await page_objects.withdrawCard('10')
        await page_objects.performLogout()
    })
  
    it("Freeze Card", async () => {
        await page_objects.SuccessfulLogin('didie', 'Required@123')
        await page_objects.freezeCard()
        await page_objects.performLogout()
    })

    it("Unfreeze Card", async () => {
        await page_objects.SuccessfulLogin('didie', 'Required@123')
        await page_objects.unfreezeCard()
        await page_objects.performLogout()
    })

    it("View Card Details", async () => {
        await page_objects.SuccessfulLogin('didie', 'Required@123')
        await page_objects.viewCardDetails('1234')
        await page_objects.performLogout()
    })
    
    it("Change Card PIN", async () => {
        await page_objects.SuccessfulLogin('didie', 'Required@123')
        await page_objects.changeCardPIN('1234', '5555', '5555')
        await page_objects.performLogout()
    })

    it("Card Deletion", async () => {
        await page_objects.SuccessfulLogin('didie', 'Required@123')
        await page_objects.cardDeletion()
        await page_objects.performLogout()
    })
})

after(() => {
    require('./billsPayment.js')
});