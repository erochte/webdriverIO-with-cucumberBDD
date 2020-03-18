import Page from './page';
import utl   from '../../utilities/common-utilities';

class LoginPage extends Page {

// define elements
    get emailInput() { return $('//input[@id="Email"]');}
    get passwordInput() { return $('//input[@id="Password"]');}
    get loginButton() { return $('//input[@type="submit" and @value="Log in"]');}
    get logoutLink() { return $('//a[@class="ico-logout"]');}


    // define or overwrite page method

    open () {
        super.open('login') // this will append 'login to the base URL
        // browser.pause(3000);

        // your page specific method
    }

    login (email, password){
        this.emailInput.setValue(email);
        this.passwordInput.setValue(password);
        this.loginButton.click();
    }

    isLogoutShowing()
    {
       this.logoutLink.waitForDisplayed(3000);
       return this.logoutLink.isDisplayed(); 
    }

}

export default new LoginPage()