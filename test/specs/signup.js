const page_objects = require('../my_pageobjects/page_objects.js');

describe('Sigup Test Suites', () => {
    // //NEGATIVE TEST CASES
    it("SignUp with correct gigtag and correct password", async () => {
        await page_objects.initializeApp()//create for signup here
        await page_objects.clearFields()
    });

    after(() => {
        require('./login.js')
    });
});