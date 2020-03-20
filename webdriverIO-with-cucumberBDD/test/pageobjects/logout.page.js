import Page from './page';
import utl   from '../../utilities/common-utilities';

class LogoutPage extends Page {

// define elements
    get emailInput() { return $('//input[@id="Email"]');}
    get passwordInput() { return $('//input[@id="Password"]');}
    get loginButton() { return $('//input[@type="submit" and @value="Log in"]');}
    get logoutLink() { return $('//a[contains(text(),"Log out")]');}
    get loginLink() { return $('//a[@class="ico-login"]');}


    // define or overwrite page method

    open () {
        browser.maximizeWindow();
        super.open('login'); // this will append 'login to the base URL
        // browser.pause(3000);

        // your page specific method
    }


loginPage (email, password){
    this.emailInput.setValue(email);
    this.passwordInput.setValue(password);
    this.loginButton.click();
    this.logoutLink.click();
}


    isLoginLinkShowing()
    {
       this.loginLink.waitForDisplayed(7000);
       return this.loginLink.isDisplayed(); 
    }

}

export default new LogoutPage()
