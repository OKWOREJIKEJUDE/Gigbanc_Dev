const page_objects = require('../pageobjects/page_objects.js')

describe('Send Money Test Suites', () => {
    it('Send Money to Gigbanc User', async () => {
        await page_objects.initializeAppForLogin()
        await page_objects.SuccessfulLogin('didie', 'Required@123')
        await $('~Maybe later').click() //To remove the biometrics popup
        await page_objects.sendMoneyToGigbancUser('ejykeman', 'test Transfer', '100', '1234')
        await $('~Settings\nTab 5 of 5').click()
        await page_objects.performLogout()
        
    })

    it.only('Send To Local Bank', async () => {
        await page_objects.initializeAppForLogin()
        await page_objects.SuccessfulLogin('didie', 'Required@123')
        await $('~Maybe later').click() //To remove the biometrics popup
        await page_objects.localBankTransfer('access bank', '0690000033', '100', 'testing funda', '1234')
        await $('~Settings\nTab 5 of 5').click()
        await page_objects.performLogout()
    })

    it('Send To USD Bank', async () => {
        await page_objects.initializeAppForLogin()
        await page_objects.SuccessfulLogin('didie', 'Required@123')
        await browser.pause(5000)
        await $('~Maybe later').click() //To remove the biometrics popup
        await page_objects.sendTo_USD_Bank('Providus Bank PLC', 'Okwor Ejike Jude', '0070075673', 'ejikeo@gigbanc.co', 
        '7A40056', 'BVC390', '100', 'No 2 Nenwe close Abakpa1, Enugu', 'TestingFunda', '1234')
        await $('~Settings\nTab 5 of 5').click()
        await page_objects.performLogout()
    });

    it('Send To EUR Bank', async () => {
        await page_objects.initializeAppForLogin()
        await page_objects.SuccessfulLogin('didie', 'Required@123')
        await $('~Maybe later').click() //To remove the biometrics popup
        await page_objects.sendTo_EUR_Bank('Providus Bank PLC', 'Okwor Ejike Jude', 'ejikeo@gigbanc.co', 'SED7673',  
        '0070075673', 'BVC390', '1A', 'NenweClose', 'Enugu', 'Nigeria', '100', 'testingFunda', '1234')
        await $('~Settings\nTab 5 of 5').click()
        await page_objects.performLogout()
    });

    it('Send To GBP Bank', async () => {
        await page_objects.initializeAppForLogin()
        await page_objects.SuccessfulLogin('didie', 'Required@123')
        await $('~Maybe later').click() //To remove the biometrics popup
        await page_objects.sendTo_GBP_Bank()
        await $('~Settings\nTab 5 of 5').click()
        await page_objects.performLogout()
    });

    it('Wallet Conversion', async () => {
        await page_objects.initializeAppForLogin()
        await page_objects.SuccessfulLogin('didie', 'Required@123')
        await $('~Maybe later').click() //To remove the biometrics popup
        await page_objects.walletConversion('2000', '1234')
        await $('~Settings\nTab 5 of 5').click()
        await page_objects.performLogout()
    });

    // after(() => {
    //     require('./security_information.js')
    // });

});


