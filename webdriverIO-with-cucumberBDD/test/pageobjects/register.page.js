import Page from './page';
import utl   from '../../utilities/common-utilities';


class RegisterPage extends Page {

// define elements
    get firstNameInput() { return $('//input[@id="FirstName"]');}
    get lastNameInput() {return $('//input[@id="LastName"]');}
    get validEmailInput() {return $('//input[@id="Email"]');}
    get validPasswordInput() {return $('//input[@id="Password"]');}
    get confirmPasswordInput() {return $('//input[@id="ConfirmPassword"]');}
    get registerButtonInput() {return $('//input[@id="register-button"]');}
    get successText() {return $('//div[@class="result"]');}

    // define or overwrite page method

    open () {
        super.open('register') // this will append 'register to the base URL
        // browser.pause(3000);

        // your page specific method
    }

    register (firstName, lastName, email, password, confirmPassword){
        this.firstNameInput.setValue(firstName);
        this.lastNameInput.setValue(lastName);
        this.validEmailInput.setValue(email);
        this.validPasswordInput.setValue(password);
        this.confirmPasswordInput.setValue(confirmPassword);
        this.registerButtonInput.click();
        
    }

    isRegistrationComplete()
    {
       this.successText.waitForDisplayed(3000);
       return this.successText.isDisplayed(); 
    }

}

export default new RegisterPage()