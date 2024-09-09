
class PageObjects {
    get inputUsername() {
        return $('//android.widget.EditText[@index=2]');
    }
    get inputPassword() {
        return $('//android.widget.EditText[@index=3]');
    }
    get btnSubmit() {
        return $('//android.view.View[@index=5]');
    }
    get popUpp() {
        return $('~Later');
    }
    get bellIcon() {
        return $('//android.widget.ImageView[@index=2]')
    }
    get logOut() {
        return $('~Log out');
    }
    get logOutButton() {
        return $('~Log out');
    }
    get sendMoneyButton(){
        return $('~Send Money');
    }
    get sendToGigbancUser(){
        return $('~Send to Gigbanc user');
    }
    get userGigtag(){
        return $('//android.widget.EditText[@index=1]');
    }
    get userNarration(){
        return $('//android.widget.EditText[@index=2]');
    }
    get userAmount(){
        return $('//android.widget.EditText[@index=4]');
    }
    get nextButton(){
        return $('~Next')
    }
    
    
    //This method starts the App
    // async initializeApp() {
    //     await browser.pause(3000);
    //     const gigLogin = await $('~Log in');
    //     await gigLogin.click();
    //     await browser.pause(3000);
    // }
    async initializeApp() {
        await browser.pause(3000);
        const gigRegister = await $('~Log in');
        await gigRegister.click();
        await browser.pause(3000);
    }
    async pop() {
        this.popUpp.click()
    }
    async SuccessfulLogin(username, password) {
        await this.inputUsername.click()
        await this.inputUsername.setValue(username)
        await this.inputPassword.click()
        await this.inputPassword.setValue(password)
        await driver.hideKeyboard()
        await this.btnSubmit.click()
    }
    async UnSuccessfulLogin(username, password) {
        await this.inputUsername.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.click();
        await this.inputPassword.setValue(password);
        await driver.hideKeyboard()
        browser.keys('Tab')
        await this.btnSubmit.click();
    }
    //Clears the field on the login so user can enter another wrong details 
    async clearFields() {
        await this.inputUsername.setValue('')
        await this.inputPassword.setValue('')
    }
    //Check the presence of Bellicon on the Login screen 
    async verifyBellIconPresence() {
        const isBellIconVisible = await this.bellIcon.isDisplayed()
        if (isBellIconVisible) {
            console.log('Positive scenarios test has passed');
        } else {
            console.log('Positive scenarios test has failed');
        }
    }
    //Method to Logout from the dashboard
    async performLogout() {
        await this.logOut.click()
        await browser.pause(1000);
        await this.logOutButton.click()
    }
    //This method verifies the invalid credentials error message that pops up on the login screen
    async verifyInvalidCredentials() {
        const invalidCredentials = await $('~invalid login credentials')
        await browser.pause(1000);
        if (invalidCredentials) {
            console.log("Test Passed for negative scenario")
        } else {
            console.log("Test Failed for negative scenario")
        }
    }
    //Method to Send money to gigbanc user(via gigtag)
    async sendMoney(gigtag, narration, amount) {
        await this.sendMoneyButton.click()
        await browser.pause(1000)
        await this.sendToGigbancUser.click()
        await browser.pause(1000)
        await this.userGigtag.click()
        await this.userGigtag.setValue(gigtag)
        await browser.pause(1000)
        await this.userNarration.click()
        await this.userNarration.setValue(narration)
        await browser.pause(1000)
        await this.userAmount.click()
        await this.userAmount.setValue(amount)
        await browser.pause(1000)
        await this.nextButton.click()
        await browser.pause(1000)
    }
}

module.exports = new PageObjects();
