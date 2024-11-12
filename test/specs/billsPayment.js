const page_objects = require('../pageobjects/page_objects.js')

describe('Bills Payment Test Suites', () => {
    it('Airtime Purchase', async () => {
        await page_objects.initializeAppForLogin()
        await page_objects.SuccessfulLogin('didie', 'Required@123')
        await $('~Maybe later').click() //To remove the biometrics popup
        await page_objects.airtimePurchase('50', '07067015404', '1234')
    });

    it('Data Purchase', async () => {
        await page_objects.dataPurchase('07067015404', '1234')
        await page_objects.performLogout()
    });

    it('Electricity Purchase', async () => {
        await page_objects.electricityPurchase('45068083026', '1234')
        await page_objects.performLogout()
    });

    it('Cable Purchase', async () => {
        await page_objects.cablePurchase('07067015404', '1234')
        await page_objects.performLogout()
    });

    after(() => {
        require('./request_money.js')
    });

});


