const page_objects = require('../pageobjects/page_objects.js')

describe('Request Money Test Suites', () => {
    it('Payment Link', async () => {
        await page_objects.initializeAppForLogin()
        await page_objects.SuccessfulLogin('didie', 'Required@123')
        await $('~Maybe later').click() //To remove the biometrics popup
        await page_objects.sending_payment_link_to_another_user('Okwor Ejike Jude', 'ejikeo@gigban.co','500', 'Testin Funda' )
        await $('~Settings\nTab 5 of 5').click()
        await page_objects.performLogout()
    });

    it('View WEMA account details', async () => {
        await page_objects.SuccessfulLogin('didie', 'Required@123')
        await page_objects.view_user_account_details()
        await $('~Settings\nTab 5 of 5').click()
        await page_objects.performLogout()
    });

    it('Direct Wallet funding flow', async () => {
        await page_objects.SuccessfulLogin('didie', 'Required@123')
        await page_objects.fund_user_wallet('1000', '4242424242424242', '0931', '812', '123456')
        await $('~Settings\nTab 5 of 5').click()
        await page_objects.performLogout()
    });

    // after(() => {
    //     require('./send_money.js')
    // });

});