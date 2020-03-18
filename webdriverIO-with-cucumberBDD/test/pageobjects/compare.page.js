import Page from './page';
import utl   from '../../utilities/common-utilities';

class comparePage extends Page {
get videoGame() {return $('//a[contains(text(),"Video Games")]');}
get xboxOne() {return $('//li[@class="inactive"]//a[contains(text(),"Xbox One")]');}
get compareElite() {return $('//div[@class="master-wrapper-page"]//div[6]//div[1]//div[2]//div[3]//div[2]//input[2]');}
get nextPage() {return $('//a[contains(text(),"Next")]');}
get compareOriginal() {return $('//div[@class="master-wrapper-content"]//div[3]//div[1]//div[2]//div[3]//div[2]//input[2]');}
get productComparison() {return $('//a[contains(text(),"product comparison")]');}
get compareProductsPage() {return $('//td[3]//input[1]');}


open (){
    super.open('/')
    //browser.pause(3000);
}
compare() {
    this.videoGame.click();
    this.xboxOne.click();
    this.compareElite.click();
    this.nextPage.click();
    this.compareOriginal.click();
    this.productComparison.click();

}

isCompareLoaded(){
       this.compareProductsPage.waitForDisplayed(7000);
       return this.compareProductsPage.isDisplayed(); 
}
}

export default new comparePage ()