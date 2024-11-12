import { expect } from 'webdriverio'
import { touchAction } from 'webdriverio'
import * as webdriverio from 'webdriverio';

class PageObjects {
    // Locators that can be reused
    get inputUsername() {
        return $('//android.widget.EditText[@index=4]');
    }
    get inputPassword() {
        return $('//android.widget.EditText[@index=5]');
    }
    get btnSubmit() {
        return $('~Log in');
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
    get sendMoneyButton() {
        return $('~Send Money');
    }
    get sendToGigbancUser() {
        return $('~Send to Gigbanc user');
    }
    get userGigtag() {
        return $('//android.widget.EditText[@index=1]');
    }
    get userNarration() {
        return $('//android.widget.EditText[@index=5]');
    }
    get userAmount() {
        return $('//android.widget.EditText[@index=7]');
    }
    get nextButton() {
        return $('~Next')
    }
    get enterPIN() {
        return $('//android.view.View[@index=10]')
    }
    get requestMoneyButton() {
        return $('~Request Money')
    }
    get sendPaymentLink() {
        return $('~Send Payment link\nReceive money from people using a payment link')
    }
    get fundWallet() {
        return $('~Fund Wallet\nFund your wallet using a payment link')
    }
    get fromOtherBank() {
        return $('~From Other Bank\nShare your account details to receive from local bank')
    }
    get enterAmount() {
        return $('//android.widget.EditText[@index=1]')
    }
    get continuebutton() {
        return $('~Continue')
    }
    get cardDetails() {
        return $('//android.widget.EditText[@index=3]')
    }
    get nairaAccountDetails() {
        return $('~Naira Account Details')
    }
    get parentElement() {
        return $('//android.view.View[@index=0]')
    }
    get childElement() {
        return $('//android.view.View[@index=10]')
    }
    //This method starts the App(by clicking on the Login button on onboarding screen)
    async initializeAppForLogin() {
        await browser.pause(3000);
        const gigLogin = await $('~Log in');
        await gigLogin.click();
        await browser.pause(3000);
    }
    //This method starts the App(by clicking on the SignUp button on onboarding screen)
    async initializeAppForSignUp() {
        await browser.pause(3000);
        const gigRegister = await $('~Register');
        await gigRegister.click();
        await browser.pause(3000);
    }
    async pop() {
        this.popUpp.click()
    }
    //This method is for successful Login scenarios
    async SuccessfulLogin(username, password) {
        await this.inputUsername.click()
        await this.inputUsername.setValue(username)
        await this.inputPassword.click()
        await this.inputPassword.setValue(password)
        await driver.hideKeyboard()
        await this.btnSubmit.click()
        await browser.pause(1000)
    }
    //This method is for Unsuccessful Login scenarios
    async UnSuccessfulLogin(username, password) {
        await this.inputUsername.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.click();
        await this.inputPassword.setValue(password);
        await driver.hideKeyboard()
        browser.keys('Tab') //used to remove focus on the keyboard
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
        await browser.pause(1000)
        if (invalidCredentials) {
            console.log("Test Passed for negative scenario")
        } else {
            console.log("Test Failed for negative scenario")
        }
    }
    async signup(signupFirstName, signupMiddleName, signupLastName, signupEmailAddress, signupPhoneNumber,
        signupPassword, signupConfirmPassword) {
        await browser.pause(3000)
        const firstName = $('//android.widget.ScrollView/android.widget.EditText[1]')
        await firstName.click()
        await firstName.addValue(signupFirstName)
        await browser.pause(2000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const middleName = $('//android.widget.ScrollView/android.widget.EditText[2]')
        await middleName.click()
        await middleName.addValue(signupMiddleName)
        await browser.pause(2000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const lastName = $('//android.widget.ScrollView/android.widget.EditText[3]')
        await lastName.click()
        await lastName.addValue(signupLastName)
        await browser.pause(2000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const emailAddress = $('//android.widget.ScrollView/android.widget.EditText[4]')
        await emailAddress.click()
        await emailAddress.addValue(signupEmailAddress)
        await browser.pause(2000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        // const phoneNumber = $('//android.view.View[@content-desc="Phone Number"]/android.widget.EditText')
        // await phoneNumber.click()
        const phoneNumber = $('//android.widget.EditText[@index=1]')
        await phoneNumber.click()
        await phoneNumber.addValue(signupPhoneNumber)
        await browser.pause(2000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const pass_word = $('//android.widget.ScrollView/android.widget.EditText[5]')
        await pass_word.click()
        await pass_word.addValue(signupPassword)
        await browser.pause(2000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const confirmPassword = $('//android.widget.ScrollView/android.widget.EditText[6]')
        await confirmPassword.click()
        await confirmPassword.addValue(signupConfirmPassword)
        await browser.pause(2000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const register = $('(//android.view.View[@content-desc="Register"])[2]')
        await register.click()
        await browser.pause(3000)
        const goToDashboard = $('//android.view.View[@content-desc="Go to Dashboard"]')
        //$(//android.view.View[@content-desc="Go to Dashboard"])
        await goToDashboard.click()
        await browser.pause(3000)
    }

    //Method to send pament link
    async sending_payment_link_to_another_user(na_me, email, myAmount, myNarration) {
        await browser.pause(3000)
        await this.requestMoneyButton.click()
        await browser.pause(1000)
        await this.sendPaymentLink.click()
        const sendersName = $('//android.widget.EditText[@index=1]')
        sendersName.click()
        sendersName.setValue(na_me)
        await driver.hideKeyboard()
        await browser.pause(2000)
        const sendersEmail = $('//android.widget.EditText[@index=2]')
        sendersEmail.click()
        sendersEmail.setValue(email)
        await driver.hideKeyboard()
        await browser.pause(2000)
        const relationshipButton = $('//android.view.View[@hint="Relationship with Sender"]')
        relationshipButton.click()
        await browser.pause(2000)
        const selectRelationship = $('~Family')
        selectRelationship.click()
        await browser.pause(2000)
        const enter_Amount = $('//android.widget.EditText[@index=4]')
        enter_Amount.click()
        enter_Amount.setValue(myAmount)
        await driver.hideKeyboard()
        const na_rration = $('//android.widget.EditText[@index=6]')
        na_rration.click()
        na_rration.setValue(myNarration)
        await browser.pause(2000)
        const sendPaymentLinkButon = $('~Send Payment Link')
        sendPaymentLinkButon.click()
        await browser.pause(2000)
        const go_to_dashboard = $('~Go to Dashboard')
        go_to_dashboard.click()
        await browser.pause(5000)
    }
    //Method to fund wallet directly
    async fund_user_wallet(fundingAmount, cardPin, cardExpiryDate, cvvPIN, cardOTP) {
        await browser.pause(3000)
        await this.requestMoneyButton.click()
        await browser.pause(3000)
        await this.fundWallet.click()
        await browser.pause(3000)
        await this.enterAmount.click()
        await browser.pause(3000)
        await this.enterAmount.setValue(fundingAmount)
        await browser.pause(3000)
        await this.continuebutton.click()
        //await browser.pause(30000)
        await this.cardDetails.waitForDisplayed({ timeout: 60000 })//wait until card details is displayed before clicking
        await this.cardDetails.click()
        await this.cardDetails.setValue(cardPin)
        await driver.hideKeyboard()
        browser.keys('Tab')
        await browser.pause(3000)
        const expiryDate = $('//android.widget.EditText[@index=13]')
        expiryDate.click()
        expiryDate.setValue(cardExpiryDate)
        await driver.hideKeyboard()
        browser.keys('Tab')
        await browser.pause(3000)
        const cvv = $('//android.widget.EditText[@index=16]')
        await cvv.click()
        await cvv.setValue(cvvPIN)
        await driver.hideKeyboard()
        browser.keys('Tab')
        await browser.pause(5000)
        const payButton = $('//android.widget.Button[@index=19]')
        await payButton.click()
        await browser.pause(3000)
        const proceed = $('//android.widget.Button[@text="Proceed"]')
        await proceed.click()
        await browser.pause(3000)
        const enterOTP = $('//android.widget.EditText[@index=0]')
        await enterOTP.click()
        await enterOTP.setValue(cardOTP)
        await driver.pressKeyCode(67)
        // await enterOTP.addValue('\uE003')//To remove one number with backspack on the keyboard
        await browser.pause(3000)
        const submitOTP = $('//android.widget.Button[@text="Submit OTP"]')
        await submitOTP.click()
        await browser.pause(3000)
        const go_to_dashboard = $('~Go to Dashboard')
        go_to_dashboard.click()
        await browser.pause(5000)
    }

    //Method to view account details
    async view_user_account_details() {
        await browser.pause(3000)
        await this.requestMoneyButton.click()
        await browser.pause(1000)
        await this.fromOtherBank.click()
        const isTextVisible = this.nairaAccountDetails.isDisplayed()
        if (isTextVisible) {
            console.log('Account details is present on the screen.')
        } else {
            console.log('Account is not present on the screen.')
        }
        await browser.pause(1000)
        const backButton1 = $('//android.widget.Button[@index=0]')
        backButton1.click()
        await browser.pause(1000)
        const backButton2 = $('//android.widget.Button[@index=0]')
        backButton2.click()
    }

    //Method to Send money to gigbanc user(via gigtag)
    async sendMoneyToGigbancUser(gigtag, narration, amount, PIN) {
        await browser.pause(3000)
        await this.sendMoneyButton.click()
        await browser.pause(2000)
        await this.sendToGigbancUser.click()
        await browser.pause(2000)
        const mygigtag = $('//android.widget.EditText[@index=1]')
        await mygigtag.click()
        await mygigtag.setValue(gigtag)
        await driver.hideKeyboard()
        browser.keys('Tab') //remove focus on keyboard 
        await browser.pause(2000)
        await this.userNarration.click()
        await this.userNarration.setValue(narration)
        await driver.hideKeyboard()
        await browser.pause(2000)
        browser.keys('Tab')
        await this.userAmount.click()
        await this.userAmount.setValue(amount)
        await driver.hideKeyboard()
        await browser.pause(2000)
        browser.keys('Tab')
        await this.nextButton.click()
        await browser.pause(3000)
        //enter transaction pin
        const enterPIN = $('.android.widget.EditText')//by class
        await enterPIN.click()
        await enterPIN.setValue(PIN)
        await browser.pause(2000)
        const go_to_dashboard = $('~Go to Dashboard')
        go_to_dashboard.click()
        await browser.pause(5000)
    }

    // Send to Local Bank
    async localBankTransfer(accessBank, accountNumber, NGN_Amount, Narr_ation, PIN) {
        await browser.pause(3000)
        const sendMoney = $('~Send Money')
        await sendMoney.click()
        await browser.pause(3000)
        const sendToBank = $('~Send to Banks')
        await sendToBank.click()
        await browser.pause(3000)
        const co_ntinue = $('~Continue')
        await co_ntinue.click()
        await browser.pause(3000)
        const selectLocalBank = $('android=new UiSelector().className("android.view.View").instance(8)')
        await selectLocalBank.click()

        // search for access bank here
        
        await browser.pause(5000)
        const search = $('~Select a bank\nSearch')
        await search.click()
        await search.addValue(accessBank)
        await browser.pause(3000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const selectAccessBank = $('Ac\nAccess Bank')
        await selectAccessBank.click()
        await browser.pause(3000)
        const enterAccountNumber = $('//android.widget.EditText[@index=1]')
        await enterAccountNumber.click()
        await enterAccountNumber.setValue(accountNumber)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        await browser.pause(3000)
        const enterNGN = $('//android.widget.EditText[@index=2]')
        await enterNGN.click()
        await enterNGN.setValue(NGN_Amount)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const setNarration = $('//android.widget.EditText[@index=5]')
        await setNarration.click()
        await setNarration.setValue(Narr_ation)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const c_ontinue = $('~Continue')
        await c_ontinue.click()
        await browser.pause(3000)
        //enter transaction pin
        const enterPIN = $('.android.widget.EditText')//by class
        await enterPIN.click()
        await enterPIN.setValue(PIN)
        await browser.pause(3000)
        const go_to_dashboard = $('~Go to Dashboard')
        go_to_dashboard.click()
        await browser.pause(3000)
        await $('~Settings\nTab 5 of 5').click()
    }

    async sendTo_USD_Bank(usdBankName, usdAccountName, usdAccountNumber, usdAccountEmailAddress,
        usdAccountRoutingNumber, usdAccountSwiftCode, sendingAmounttt, addresss, usdNarration, pinn) {
        await browser.pause(2000)
        const sendMoney = $('~Send Money')
        await sendMoney.click()
        await browser.pause(2000)
        const sendToBank = $('~Send to Banks')
        await sendToBank.click()
        await browser.pause(2000)
        const selectUSD = $('//android.view.View[contains(@content-desc, "US Dollar")]')
        await selectUSD.click()
        await browser.pause(2000)
        const co_ntinue = $('~Continue')
        await co_ntinue.click()
        await browser.pause(2000)
        const selectTransferType = $('~Transfer Type')
        await selectTransferType.click()
        await browser.pause(2000)
        const foreign = $('~Foreign')
        await foreign.click()
        const continuee = $('~Continue')
        await continuee.click()
        await browser.pause(2000)
        const receipientBankName = $('//android.widget.EditText[@index=0]')
        await receipientBankName.click()
        await receipientBankName.addValue(usdBankName)
        await browser.pause(2000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const receipientAccountName = $('//android.widget.EditText[@index=1]')
        await receipientAccountName.click()
        await receipientAccountName.addValue(usdAccountName)
        await browser.pause(2000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const receipientAccountNumber = $('//android.widget.EditText[@index=2]')
        await receipientAccountNumber.click()
        await receipientAccountNumber.addValue(usdAccountNumber)
        await browser.pause(2000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const receipientEmailAddress = $('//android.widget.EditText[@index=3]')
        await receipientEmailAddress.click()
        await receipientEmailAddress.addValue(usdAccountEmailAddress)
        await browser.pause(2000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const receipientRoutingNumber = $('//android.widget.EditText[@index=4]')
        await receipientRoutingNumber.click()
        await receipientRoutingNumber.addValue(usdAccountRoutingNumber)
        await browser.pause(2000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const receipientSwiftCode = $('//android.widget.EditText[@index=5]')
        await receipientSwiftCode.click()
        await receipientSwiftCode.addValue(usdAccountSwiftCode)
        await browser.pause(2000)
        // await driver.hideKeyboard()
        await browser.keys('Tab')
        const sendingAmount = $('//android.widget.EditText[@index=6]')
        await sendingAmount.click()
        await sendingAmount.setValue(sendingAmounttt)
        await browser.pause(2000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const receipientAddress = $('//android.widget.EditText[@index=7]')
        await receipientAddress.click()
        await receipientAddress.addValue(addresss)
        await browser.pause(2000)
        //await driver.hideKeyboard()
        await browser.keys('Tab')
        const inputUSDNarration = $('//android.widget.EditText[@index=10]')
        await inputUSDNarration.click()
        await inputUSDNarration.addValue(usdNarration)
        await browser.pause(2000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const continueee = $('~Continue')
        await continueee.click()
        await browser.pause(3000)
        //enter transaction pin
        const enterPIN = $('.android.widget.EditText')//by class
        await enterPIN.click()
        await enterPIN.setValue(pinn)
        await browser.pause(3000)
        const go_to_dashboard = $('~Go to Dashboard')
        await go_to_dashboard.click()
        await browser.pause(3000)
    }
    // // RETRY ACTION HERE
    //  retryAction = async (action, maxRetries = 3) => {
    //     for (let attempt = 1; attempt <= maxRetries; attempt++) {
    //         try {
    //             await action();
    //             return;
    //         } catch (error) {
    //             if (attempt === maxRetries) throw error;
    //             console.warn(`Attempt ${attempt} failed. Retrying...`);
    //         }
    //     }
    // };



    // async sendTo_EUR_Bank(eurBankName, eurAccountName, eurAccountEmailAddress, eurAccountSwiftCode, eurAccountNumber, 
    //                       eurPostalCode, eurStreetNumber, eurStreetName, eurCityName, eurCountryName, eurSendingAmount, eurNarration, eurPin) {

    //     await retryAction(async () => $('~Send Money').click());
    //     await browser.pause(2000);
    //     await retryAction(async () => $('~Send to Banks').click());
    //     await browser.pause(2000);

    //     await retryAction(async () => $('//android.view.View[contains(@content-desc, "European Union Euro")]').click());
    //     await browser.pause(2000);
    //     await retryAction(async () => $('~Continue').click());

    //     await retryAction(async () => {
    //         const receipientBankName = $('new UiSelector().className("android.widget.EditText").instance(0)');
    //         await receipientBankName.click();
    //         await receipientBankName.addValue(eurBankName);
    //     });
    //     await browser.pause(2000);
    //     await driver.hideKeyboard();
    //     await browser.keys('Tab');

    //     await retryAction(async () => {
    //         const receipientAccountName = $('//android.widget.EditText[@index=1]');
    //         await receipientAccountName.click();
    //         await receipientAccountName.addValue(eurAccountName);
    //     });
    //     await browser.pause(2000);
    //     await driver.hideKeyboard();
    //     await browser.keys('Tab');

    //     await retryAction(async () => {
    //         const receipientEmailAddress = $('//android.widget.EditText[@index=2]');
    //         await receipientEmailAddress.click();
    //         await receipientEmailAddress.addValue(eurAccountEmailAddress);
    //     });
    //     await browser.pause(2000);
    //     await driver.hideKeyboard();
    //     await browser.keys('Tab');

    //     await retryAction(async () => {
    //         const receipientSwiftCode = $('//android.widget.EditText[@index=3]');
    //         await receipientSwiftCode.click();
    //         await receipientSwiftCode.addValue(eurAccountSwiftCode);
    //     });
    //     await browser.pause(2000);
    //     await driver.hideKeyboard();
    //     await browser.keys('Tab');

    //     await retryAction(async () => {
    //         const receipientAccountNumber = $('//android.widget.EditText[@index=4]');
    //         await receipientAccountNumber.click();
    //         await receipientAccountNumber.addValue(eurAccountNumber);
    //     });
    //     await browser.pause(2000);
    //     await driver.hideKeyboard();
    //     await browser.keys('Tab');

    //     await retryAction(async () => {
    //         const receipientPostalCode = $('//android.widget.EditText[@index=5]');
    //         await receipientPostalCode.click();
    //         await receipientPostalCode.addValue(eurPostalCode);
    //     });
    //     await browser.pause(2000);
    //     await browser.keys('Tab');

    //     await retryAction(async () => {
    //         const receipientStreetNumber = $('//android.widget.EditText[@index=6]');
    //         await receipientStreetNumber.click();
    //         await receipientStreetNumber.setValue(eurStreetNumber);
    //     });
    //     await browser.keys('Tab');

    //     await retryAction(async () => {
    //         const receipientStreetName = $('//android.widget.EditText[@index=6]');
    //         await receipientStreetName.click();
    //         await receipientStreetName.setValue(eurStreetName);
    //     });
    //     await browser.pause(2000);
    //     await driver.hideKeyboard();
    //     await browser.keys('Tab');

    //     await retryAction(async () => {
    //         const receipientCityName = $('//android.widget.EditText[@index=7]');
    //         await receipientCityName.click();
    //         await receipientCityName.setValue(eurCityName);
    //     });
    //     await browser.pause(3000);
    //     await driver.hideKeyboard();
    //     await browser.keys('Tab');

    //     await retryAction(async () => {
    //         const receipientCountryName = $('//android.widget.EditText[@index=6]');
    //         await receipientCountryName.click();
    //         await receipientCountryName.addValue(eurCountryName);
    //     });
    //     await browser.pause(3000);
    //     await driver.hideKeyboard();
    //     await browser.keys('Tab');

    //     await retryAction(async () => {
    //         const sendinggAmount = $('//android.widget.EditText[@index=7]');
    //         await sendinggAmount.click();
    //         await sendinggAmount.setValue(eurSendingAmount);
    //     });
    //     await browser.pause(3000);
    //     await browser.keys('Tab');

    //     await retryAction(async () => {
    //         const inputNarration = $('//android.widget.EditText[@index=6]');
    //         await inputNarration.click();
    //         await inputNarration.setValue(eurNarration);
    //     });
    //     await browser.pause(3000);
    //     await browser.keys('Tab');

    //     await retryAction(async () => $('~Continue').click());
    //     await browser.pause(3000);

    //     await retryAction(async () => {
    //         const enterPIN = $('.android.widget.EditText');
    //         await enterPIN.click();
    //         await enterPIN.setValue(eurPin);
    //     });
    //     await browser.pause(3000);

    //     await retryAction(async () => $('~Go to Dashboard').click());
    //     await browser.pause(3000);

    //     await retryAction(async () => $('~Settings\nTab 5 of 5').click());
    // }


    // async retryAction(action, maxRetries = 3) {
    //     for (let attempt = 1; attempt <= maxRetries; attempt++) {
    //         try {
    //             await action();
    //             return;
    //         } catch (error) {
    //             if (attempt === maxRetries) throw error;
    //             console.warn(`Attempt ${attempt} failed. Retrying...`);
    //         }
    //     }
    // }
    // send to EUR Bank
    async sendTo_EUR_Bank(eurBankName, eurAccountName, eurAccountEmailAddress, eurAccountSwiftCode, eurAccountNumber,
        eurPostalCode, eurStreetNumber, eurStreetName, eurCityName, eurCountryName, eurSendingAmount, eurNarration, eurPin) {
        await browser.pause(2000)
        const sendMoney = $('~Send Money')
        await sendMoney.click()
        await browser.pause(2000)
        const sendToBank = $('~Send to Banks')
        await sendToBank.click()
        await browser.pause(2000)
        const selectEUR = $('//android.view.View[contains(@content-desc, "European Union Euro")]')
        await selectEUR.click()
        await browser.pause(2000)
        const co_ntinue = $('~Continue')
        await co_ntinue.click()
        await browser.pause(2000)
        const receipientBankName = $('//android.widget.EditText[@index=0]')
        await receipientBankName.click()
        await receipientBankName.addValue(eurBankName)
        await browser.pause(2000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const receipientAccountName = $('//android.widget.EditText[@index=1]')
        await receipientAccountName.click()
        await receipientAccountName.addValue(eurAccountName)
        await browser.pause(2000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const receipientEmailAddress = $('//android.widget.EditText[@index=2]')
        await receipientEmailAddress.click()
        await receipientEmailAddress.addValue(eurAccountEmailAddress)
        await browser.pause(2000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const receipientSwiftCode = $('//android.widget.EditText[@index=3]')
        await receipientSwiftCode.click()
        await receipientSwiftCode.addValue(eurAccountSwiftCode)
        await browser.pause(2000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const receipientAccountNumber = $('//android.widget.EditText[@index=4]')
        await receipientAccountNumber.click()
        await receipientAccountNumber.addValue(eurAccountNumber)
        await browser.pause(2000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const receipientPostalCode = $('//android.widget.EditText[@index=5]')
        await receipientPostalCode.click()
        await receipientPostalCode.addValue(eurPostalCode)
        await browser.pause(2000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        // At this point, the screen changes, and the xpath locator reassigns the postions to elements


        const maxRetries = 3;
        let attempt = 0;

        while (attempt < maxRetries) {
            try {
                const receipientStreetNumber = $('//android.widget.EditText[@index=6]');

                await receipientStreetNumber.click();
                await receipientStreetNumber.setValue(eurStreetNumber);

                await browser.pause(2000);

                // Exit the loop if the actions succeed without error
                break;

            } catch (error) {
                attempt++;
                console.warn(`Attempt ${attempt} failed. Retrying...`);

                // If max retries reached, throw the error
                if (attempt === maxRetries) throw error;
            }
        }
        const maxRetries1 = 3;
        let attempt1 = 0;

        while (attempt1 < maxRetries1) {
            try {
                const receipientStreetName = $('//android.widget.EditText[@index=7]');

                await receipientStreetName.click();
                await receipientStreetName.setValue(eurStreetName);

                await browser.pause(2000);

                // Exit the loop if the actions succeed without error
                break;

            } catch (error) {
                attempt1++;
                console.warn(`Attempt ${attempt1} failed. Retrying...`);

                // If max retries reached, throw the error
                if (attempt1 === maxRetries1) throw error;
            }
        }
        const maxRetries2 = 3;
        let attempt2 = 0;

        while (attempt2 < maxRetries2) {
            try {
                const receipientCityName = $('//android.widget.EditText[@index=6]');

                await receipientCityName.click();
                await receipientCityName.setValue(eurCityName);

                await browser.pause(2000);

                // Exit the loop if the actions succeed without error
                break;

            } catch (error) {
                attempt++;
                console.warn(`Attempt ${attempt2} failed. Retrying...`);

                // If max retries reached, throw the error
                if (attempt === maxRetries2) throw error;
            }
        }

        // const receipientStreetNumber = $('//android.widget.EditText[@index=6]')
        // await receipientStreetNumber.click()
        // await receipientStreetNumber.setValue(eurStreetNumber)
        // await browser.pause(2000)
        // await driver.hideKeyboard()
        // await browser.keys('Tab')
        // const receipientStreetName = $('//android.widget.EditText[@index=6]')
        // await receipientStreetName.click()
        // await receipientStreetName.setValue(eurStreetName)
        // await browser.pause(2000)
        // await driver.hideKeyboard()
        // await browser.keys('Tab')
        // const receipientCityName = $('//android.widget.EditText[@index=7]')
        // await receipientCityName.click()
        // await receipientCityName.setValue(eurCityName)
        // await browser.pause(3000)
        // await driver.hideKeyboard()
        // await browser.keys('Tab')
        const receipientCountryName = $('//android.widget.EditText[@index=6]')
        await receipientCountryName.click()
        await receipientCountryName.addValue(eurCountryName)
        await browser.pause(3000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const sendinggAmount = $('//android.widget.EditText[@index=7]')
        await sendinggAmount.click()
        await sendinggAmount.setValue(eurSendingAmount)
        await browser.pause(3000)
        //await driver.hideKeyboard()
        await browser.keys('Tab')
        const inputNarration = $('//android.widget.EditText[@index=6]')
        await inputNarration.click()
        await inputNarration.setValue(eurNarration)
        await browser.pause(3000)
        //await driver.hideKeyboard()
        await browser.keys('Tab')
        const continueee = $('~Continue')
        await continueee.click()
        await browser.pause(3000)
        //enter transaction pin
        const enterPIN = $('.android.widget.EditText')//by class
        await enterPIN.click()
        await enterPIN.setValue(eurPin)
        await browser.pause(3000)
        const go_to_dashboard = $('~Go to Dashboard')
        go_to_dashboard.click()
        await browser.pause(3000)
        await $('~Settings\nTab 5 of 5').click()
    }
    // send to GBP Bank
    async sendTo_GBP_Bank(gbpBankName, gbpAccountName, gbpAccountNumber, gbpAccountEmailAddress,
        gbpAccountRoutingNumber, gbpAccountSwiftCode, gbpSendingAmount, gbpAddresss, gbpNarration, PIN) {
        await browser.pause(3000)
        const sendMoney = $('~Send Money')
        await sendMoney.click()
        await browser.pause(3000)
        const sendToBank = $('~Send to Banks')
        await sendToBank.click()
        await browser.pause(3000)
        const selectGBP = $('//android.view.View[contains(@content-desc, "British Pound")]')
        await selectGBP.click()
        await browser.pause(3000)
        const co_ntinue = $('~Continue')
        await co_ntinue.click()
        await browser.pause(3000)
        const receipientBankName = $('//android.widget.EditText[@index=0]')
        await receipientBankName.click()
        await receipientBankName.addValue(gbpBankName)
        await browser.pause(3000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const receipientAccountName = $('//android.widget.EditText[@index=1]')
        await receipientAccountName.click()
        await receipientAccountName.addValue(gbpAccountName)
        await browser.pause(3000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const receipientAccountNumber = $('//android.widget.EditText[@index=2]')
        await receipientAccountNumber.click()
        await receipientAccountNumber.addValue(gbpAccountNumber)
        await browser.pause(3000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const receipientEmailAddress = $('//android.widget.EditText[@index=3]')
        await receipientEmailAddress.click()
        await receipientEmailAddress.addValue(gbpAccountEmailAddress)
        await browser.pause(3000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const receipientRoutingNumber = $('//android.widget.EditText[@index=4]')
        await receipientRoutingNumber.click()
        await receipientRoutingNumber.addValue(gbpAccountRoutingNumber)
        await browser.pause(3000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const receipientSwiftCode = $('//android.widget.EditText[@index=5]')
        await receipientSwiftCode.click()
        await receipientSwiftCode.addValue(gbpAccountSwiftCode)
        await browser.pause(3000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const sendingAmount = $('//android.widget.EditText[@text="Recipient Account Number"]')
        await sendingAmount.click()
        await sendingAmount.addValue(gbpSendingAmount)
        await browser.pause(3000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const receipientAddress = $('//android.widget.EditText[@index=7]')
        await receipientAddress.click()
        await receipientAddress.addValue(gbpAddresss)
        await browser.pause(3000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const inputNarration = $('//android.widget.EditText[@index=8]')
        await inputNarration.click()
        await inputNarration.addValue(gbpNarration)
        await browser.pause(3000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        //enter transaction pin
        const enterPIN = $('.android.widget.EditText')//by class
        await enterPIN.click()
        await enterPIN.setValue(PIN)
        await browser.pause(3000)
        const go_to_dashboard = $('~Go to Dashboard')
        go_to_dashboard.click()
        await browser.pause(3000)
        await $('~Settings\nTab 5 of 5').click()
    }

    //Wallet Conversion
    async walletConversion(amount_to_convert, PIN) {
        await browser.pause(3000)
        const sendMoney = $('~Send Money')
        await sendMoney.click()
        await browser.pause(3000)
        const convertButton = $('~Convert between Gigwallets')
        await convertButton.click()
        await browser.pause(3000)
        const enterAmountToConvert = $('//android.widget.EditText[@index=2]')
        await enterAmountToConvert.click()
        enterAmountToConvert.setValue(amount_to_convert)
        await browser.pause(3000)
        await driver.hideKeyboard()
        browser.keys('Tab')
        await browser.pause(3000)
        const cont_inue = $('~Continue')
        await cont_inue.click()
        await browser.pause(3000)
        //enter transaction pin
        const enterPIN = $('.android.widget.EditText')//by class
        await enterPIN.click()
        await enterPIN.setValue(PIN)
        await browser.pause(3000)
        const go_to_dashboard = $('~Go to Dashboard')
        go_to_dashboard.click()
        await browser.pause(3000)
        await $('~Settings\nTab 5 of 5').click()
    }

    //Card Creation
    async cardCreation(CREATION_AMOUNT, CARD_CREATION_PIN, CONFIRM_CARD_CREATION_PIN) {
        await browser.pause(3000)
        const cardHome = await $('~Cards\nTab 2 of 5')
        await cardHome.click()
        await browser.pause(10000)
        const virtualCard = await $('~Create a virtual card')
        await virtualCard.click()
        await browser.pause(3000)
        const selectUSD = await $('~$\nDollar')
        await selectUSD.click()
        await browser.pause(3000)
        const continueWithUSDoption = await $('~Continue')
        await continueWithUSDoption.click()
        await browser.pause(3000)
        const awarenessScreen = await $('~Got it')
        await awarenessScreen.click()
        await browser.pause(3000)
        const enterCreationAmount = await $('//android.widget.EditText[@index=4]')
        await enterCreationAmount.click()
        enterCreationAmount.setValue(CREATION_AMOUNT)
        await browser.pause(3000)
        const continueCreation = await $('~Continue')
        await continueCreation.click()
        await browser.pause(3000)
        //enter card creation pin
        const enter_new_card_pin = $('.android.widget.EditText')//by class
        await enter_new_card_pin.setValue(CARD_CREATION_PIN)
        await browser.pause(5000)
        //confirm card creation pin
        const confirm_new_card_pin = $('.android.widget.EditText')//by class
        await confirm_new_card_pin.click()
        await confirm_new_card_pin.setValue(CONFIRM_CARD_CREATION_PIN)
        await browser.pause(10000)
        await $('~Go to Card').click()
        await browser.pause(5000)
        await $('~Settings\nTab 5 of 5').click()
    }

    //Card Funding
    async fundCard(funding_value) {
        await browser.pause(3000)
        const cardHome = await $('~Cards\nTab 2 of 5')
        await cardHome.click()
        await browser.pause(10000)
        const click_on_card = await $('//android.widget.ImageView[@index=1]')
        await click_on_card.click()
        await browser.pause(3000)
        const fund_card = await $('~Fund card')
        await fund_card.click()
        await browser.pause(3000)
        const enter_funding_amount = await $('//android.widget.EditText[@index=3]')
        await enter_funding_amount.click()
        await enter_funding_amount.addValue(funding_value)
        await browser.pause(3000)
        const continueButton = await $('~Continue')
        await continueButton.click()
        await browser.pause(3000)
        const goToCard = await $('~Go to Card')
        await goToCard.click()
        await browser.pause(5000)
        const settings = await $('~Settings\nTab 5 of 5')
        await settings.click()
    }
    //Card Withdrawal
    async withdrawCard(withdrawal_value) {
        await browser.pause(3000)
        const cardHome = await $('~Cards\nTab 2 of 5')
        await cardHome.click()
        await browser.pause(10000)
        const click_on_card = await $('//android.widget.ImageView[@index=1]')
        await click_on_card.click()
        await browser.pause(3000)
        const withdrawCard = await $('~Withdraw')
        await withdrawCard.click()
        await browser.pause(3000)
        const enter_Amount_to_withdraw = await $('//android.widget.EditText[@index=3]')
        await enter_Amount_to_withdraw.click()
        await enter_Amount_to_withdraw.addValue(withdrawal_value)
        await browser.pause(3000)
        const continueButton = await $('~Continue')
        await continueButton.click()
        await browser.pause(3000)
        const goToCard = await $('~Go to Card')
        await goToCard.click()
        await browser.pause(5000)
        const settings = await $('~Settings\nTab 5 of 5')
        await settings.click()
    }
    // View Card Details
    async viewCardDetails(PIN) {
        await browser.pause(3000)
        const cardHome = await $('~Cards\nTab 2 of 5')
        await cardHome.click()
        await browser.pause(10000)
        const click_on_card = await $('//android.widget.ImageView[@index=1]')
        await click_on_card.click()
        await browser.pause(3000)
        const optionsIcon = await $('.android.view.View') // class
        await optionsIcon.click()
        await browser.pause(3000)
        const viewCardDetails = await $('~View card details')
        await viewCardDetails.click()
        await browser.pause(3000)
        //enter transaction pin
        const viewcardPIN = $('.android.widget.EditText')//by class
        await viewcardPIN.setValue(PIN)
        await browser.pause(10000)
        const backIcon1 = await $('//android.widget.Button[@index=0]')
        await backIcon1.click()
        await browser.pause(3000)
        const backIcon2 = await $('//android.widget.Button[@index=0]')
        await backIcon2.click()
        await browser.pause(5000)
        const settings = await $('~Settings\nTab 5 of 5')
        await settings.click()
    }
    // Change Card PIN
    async changeCardPIN(PIN, NEW_PIN, CONFIRM_NEW_PIN) {
        await browser.pause(3000)
        const cardHome = await $('~Cards\nTab 2 of 5')
        await cardHome.click()
        await browser.pause(10000)
        const click_on_card = await $('//android.widget.ImageView[@index=1]')
        await click_on_card.click()
        await browser.pause(3000)
        // const optionIcon = await $('//android.widget.ScrollView/android.view.View[4]');
        // await optionIcon.click()
        const optionsIcon1 = await $('//android.view.View[@index=7]')
        await optionsIcon1.click()
        await browser.pause(3000)
        const changeCardPIN = await $('~Change Security PIN')
        await changeCardPIN.click()
        await browser.pause(3000)
        //enter transaction pin
        const enter_pin = $('.android.widget.EditText')//by class
        await enter_pin.setValue(PIN)
        await browser.pause(5000)
        //enter new card pin
        const enter_new_card_pin = $('.android.widget.EditText')//by class
        await enter_new_card_pin.setValue(NEW_PIN)
        await browser.pause(5000)
        //confirm new card pin
        const confirm_new_card_pin = $('.android.widget.EditText')//by class
        await confirm_new_card_pin.click()
        await confirm_new_card_pin.setValue(CONFIRM_NEW_PIN)
        await browser.pause(10000)
        await $('~Go to Card').click()
        await browser.pause(5000)
        await $('~Settings\nTab 5 of 5').click()
    }
    // Freeze Card
    async freezeCard() {
        await browser.pause(3000)
        const cardHome = await $('~Cards\nTab 2 of 5')
        await cardHome.click()
        await browser.pause(10000)
        const click_on_card = await $('//android.widget.ImageView[@index=1]')
        await click_on_card.click()
        await browser.pause(4000)
        // const optionIcon = await $('//android.widget.ScrollView/android.view.View[4]')
        // optionIcon.click()
        const optionsIcon1 = await $('//android.view.View[@index=7]')
        await optionsIcon1.click()
        await browser.pause(3000)
        const viewCardDetails = await $('//android.widget.ImageView[@content-desc="Freeze card"]')
        await viewCardDetails.click()
        await browser.pause(3000)
        const freezeCardButton = await $('//android.view.View[@index=7]')
        await freezeCardButton.click()
        await browser.pause(5000)
        const goToCard = await $('~Go to Card')
        await goToCard.click()
        await browser.pause(5000)
        const settings = await $('~Settings\nTab 5 of 5')
        await settings.click()
    }
    // Unfreeze Card
    async unfreezeCard() {
        await browser.pause(3000)
        const cardHome = await $('~Cards\nTab 2 of 5')
        await cardHome.click()
        await browser.pause(10000)
        const unfreeze = await $('~Unfreeze card')
        unfreeze.click()
        await browser.pause(5000)
        const goToCard = await $('~Go to Card')
        await goToCard.click()
        await browser.pause(5000)
        const settings = await $('~Settings\nTab 5 of 5')
        await settings.click()
    }

    // View Card Details
    async cardDeletion() {
        await browser.pause(3000)
        const cardHome = await $('~Cards\nTab 2 of 5')
        await cardHome.click()
        await browser.pause(10000)
        const click_on_card = await $('//android.widget.ImageView[@index=1]')
        await click_on_card.click()
        await browser.pause(3000)
        // const optionsIcon = await $('.android.view.View') // class
        // await optionsIcon.click()
        const optionsIcon1 = await $('//android.view.View[@index=7]')
        await optionsIcon1.click()
        await browser.pause(3000)
        const delete_card = await $('~Delete card')
        await delete_card.click()
        await browser.pause(3000)

        const deleteCard = await $('~Delete card')
        await deleteCard.click()
        await browser.pause(3000)

        const goToCard = await $('~Go to Card')
        await goToCard.click()
        const settings = await $('~Settings\nTab 5 of 5')
        await settings.click()
    }

    // Purchase Airtime
    async airtimePurchase(airtime_amount, phone_no, PIN) {
        await browser.pause(3000)
        const payBills = await $('~Pay Bills\nTab 3 of 5')
        await payBills.click()
        await browser.pause(1000)
        const buyAirtime = await $('~Buy Airtime')
        await buyAirtime.click()
        await browser.pause(5000)
        const chooseNetwork = await $('//android.widget.ImageView[@index=0]')
        await chooseNetwork.click()
        await browser.pause(3000)
        await driver.hideKeyboard()
        browser.keys('Tab')
        const enter_amount = await $('//android.widget.EditText[@index=3]')
        await enter_amount.click()
        await enter_amount.setValue(airtime_amount)
        await browser.pause(3000)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const enter_phone_number = await $('//android.widget.EditText[@index=6]')
        //await enter_phone_number.click()
        await enter_phone_number.setValue(phone_no)
        await browser.pause(3000)
        await driver.hideKeyboard()
        await browser.pause(3000)
        const conti_nue = $('~Continue')
        await conti_nue.click()
        await browser.pause(3000)
        //enter transaction pin
        const enterPIN = $('.android.widget.EditText')
        await enterPIN.click()
        await enterPIN.setValue(PIN)
        await browser.pause(3000)
        const great = $('~Great')
        await great.click()

    }

    // Purchase Data
    async dataPurchase(number, PIN) {
        await browser.pause(3000)
        const buyData = await $('~Internet/Data')
        await buyData.click()
        await browser.pause(3000)
        const chooseServiceProvider = await $('~Choose a Service Provider')
        await chooseServiceProvider.click()
        await browser.pause(3000)
        const chooseNetwork = await $('~mtn')
        await chooseNetwork.click()
        await browser.pause(3000)
        const remove_buttomsheet = await $('//android.widget.Button[@index=0]')
        await remove_buttomsheet.click()
        await browser.pause(3000)
        const choosePackage = await $('~Choose Package')
        await choosePackage.click()
        await browser.pause(3000)

        const chooseDataBundle = await $('~MTN 50 MB for ₦100')
        await chooseDataBundle.click()
        await browser.pause(3000)
        const enter_number = await $('//android.widget.EditText[@index=4]')
        await enter_number.click()
        await enter_number.setValue(number)
        await browser.pause(3000)
        const continu_e = $('~Continue')
        await continu_e.click()
        await browser.pause(3000)

        //enter transaction pin
        const enter_pin = $('.android.widget.EditText')
        await enter_pin.click()
        await enter_pin.setValue(PIN)
        await browser.pause(3000)
        const great_button = $('~Great')
        await great_button.click()

        const settings = await $('~Settings\nTab 5 of 5')
        await settings.click()
    }
    // Purchase Electricity
    async electricityPurchase(electricity_amount, meterNumber) {
        await browser.pause(3000)
        const buyElectricity = await $('~Electricity')
        await buyElectricity.click()
        await browser.pause(3000)
        const chooseServiceProvider = await $('~Choose a Service Provider')
        await chooseServiceProvider.click()
        await browser.pause(3000)
        const serviceProvider = await $('~E\nEnugu Disco Electricity')
        await serviceProvider.click()
        await browser.pause(3000)
        const choosePackageButton = await $('~Choose Package')
        await choosePackageButton.click()
        await browser.pause(3000)
        const choosePackage = await $('//android.view.View[@index=0]')
        await choosePackage.click()
        await browser.pause(3000)
        const enter_amount = await $('//android.widget.EditText[@index=2]')
        await enter_amount.click()
        await enter_amount.setValue(electricity_amount)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        await browser.pause(3000)
        const meter_number = await $('//android.widget.EditText[@index=2]')
        await meter_number.click()
        await meter_number.setValue(meterNumber)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        await browser.pause(3000)
        const continu_e = $('~Continue')
        await continu_e.click()
        await browser.pause(3000)
        //enter transaction pin
        const enter_pin = $('.android.widget.EditText')
        await enter_pin.click()
        await enter_pin.setValue(PIN)
        await browser.pause(3000)
        const great_button = $('~Great')
        await great_button.click()
        const settings = await $('~Settings\nTab 5 of 5')
        await settings.click()

    }
    // Purchase Cabkes
    async cablePurchase() {
        const buyCable = await $('~Cable')
        await buyCable.click()
    }

    async changeTransactionPIN(PINN, NEW_ACCOUNT_PIN, CONFIRM_NEW_ACCOUNT_PIN) {
        await browser.pause(3000)
        const settings = await $('~Settings\nTab 5 of 5')
        await settings.click()
        const security_info = await $('~Security Information')
        await security_info.click()
        const change_pin = await $('~Change PIN')
        await change_pin.click()
        //enter transaction pin
        const enter_pin = $('.android.widget.EditText')//by class
        await enter_pin.setValue(PINN)
        await browser.pause(5000)
        //enter new account pin
        const enter_new_account_pin = $('.android.widget.EditText')//by class
        await enter_new_account_pin.setValue(NEW_ACCOUNT_PIN)
        await browser.pause(5000)
        //confirm new account pin
        const confirm_new_account_pin = $('.android.widget.EditText')//by class
        await confirm_new_account_pin.click()
        await confirm_new_account_pin.setValue(CONFIRM_NEW_ACCOUNT_PIN)
        await browser.pause(10000)
        await $('~Go to Dashboard').click()
        await browser.pause(3000)
        await $('~Settings\nTab 5 of 5').click()
    }

    async changeAccountPassword(CurrentPassword, NewPassword, ConfirmNewPassword) {
        await browser.pause(3000)
        const settings = await $('~Settings\nTab 5 of 5')
        await settings.click()
        const security_info = await $('~Security Information')
        await security_info.click()
        const change_password = await $('~Change Password')
        await change_password.click()
        const current_password = await $('//android.widget.EditText[@index=2]')
        await current_password.click()
        await current_password.setValue(CurrentPassword)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const new_password = await $('//android.widget.EditText[@index=3]')
        await new_password.click()
        await new_password.setValue(NewPassword)
        await driver.hideKeyboard()
        await browser.keys('Tab')
        const confirm_new_password = await $('//android.widget.EditText[@index=4]')
        await confirm_new_password.click()
        await confirm_new_password.setValue(ConfirmNewPassword)
        await $('~Reset Password').click()
        await browser.pause(3000)
        await $('~Go to Dashboard').click()
        await browser.pause(3000)
        await $('~Settings\nTab 5 of 5').click()
    }



}


module.exports = new PageObjects();
