
const page_objects = require('../pageobjects/page_objects');

describe('Login Test Suites', () => {
    // //NEGATIVE TEST CASES
    it("Send money to local bank", async () => {
        await page_objects.clearFields()
        await page_objects.SuccessfulLogin('momma', 'Required@123')
        //await $('~Later').click()
        await page_objects.sendMoney('onowu', 'Test Transfer', '100')

    });
});