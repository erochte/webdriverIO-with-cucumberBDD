import Page from './page';
import utl   from '../../utilities/common-utilities';

class addToCartPage extends Page {
get videoGameLink() {return $('//li[@class="inactive"]//a[contains(text(),"Video Games")]');}
get addToCart() {return $('//div[@class="item-grid"]//div[1]//div[1]//div[2]//div[3]//div[2]//input[1]');}
get shoppingCartBanner() {return $('//a[contains(text(),"shopping cart")]');}
get shoppingCartPage() {return $('//span[contains(text(),"5723316")]');}

open (){
    super.open('newproducts')
    //browser.pause(3000);
}
cart() {
    this.videoGameLink.click();
    this.addToCart.click();
    this.shoppingCartBanner.click();

}

isShoppingCartVisible(){
       this.shoppingCartPage.waitForDisplayed(7000);
       return this.shoppingCartPage.isDisplayed(); 
}
}

export default new addToCartPage ()