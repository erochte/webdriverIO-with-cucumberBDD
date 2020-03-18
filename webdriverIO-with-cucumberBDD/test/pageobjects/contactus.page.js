import Page from './page';
import utl   from '../../utilities/common-utilities';

class contactUsPage extends Page {

// define elements
    get submitInput() { return $('//input[@name="send-email"]');}
    get noNameText() { return $('//span[@id="FullName-error"]');}
    get nameInput() { return $('//input[@id="FullName"]');}
    get emailInput() { return $('//input[@id="Email"]');}
    get enquiryInput() { return $('//textarea[@id="Enquiry"]');}
    get successBanner() { return $('//div[@class="result"]');}


    // define or overwrite page method

    open () {
        super.open('contactus') // this will append 'login to the base URL
        // browser.pause(3000);

        // your page specific method
    }
   submit () {
    this.submitInput.click();
   }

   isnoNameText()
    {
       this.noNameText.waitForDisplayed(3000);
       return this.noNameText.isDisplayed(); 
    }

    contact (name, email, enquiry){
        this.nameInput.setValue(name);
        this.emailInput.setValue(email);
	    this.enquiryInput.setValue(enquiry);
        this.submitInput.click();
    }

issuccessBanner()
    {
       this.successBanner.waitForDisplayed(3000);
       return this.successBanner.isDisplayed(); 
    }

}

export default new contactUsPage()
