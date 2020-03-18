import Page from './page';
import utl   from '../../utilities/common-utilities';

class wishlistPage extends Page {

// define elements
    get wishlistItemOne() { return $('//div[@class="item-grid"]//div[1]//div[1]//div[2]//div[3]//div[2]//input[3]');}
    get wishlistItemTwo() { return $('//div[@class="product-grid"]//div[5]//div[1]//div[2]//div[3]//div[2]//input[3]');}
    get wishlistItemThree() { return $('//div[@class="master-wrapper-page"]//div[6]//div[1]//div[2]//div[3]//div[2]//input[3]');}
    //get closeBanner() { return $('//span[@class="close"]');}
    get wishlistLink() { return $('//a[contains(text(),"Wishlist")]');}
    get wishlistText() { return $('//h1[contains(text(),"Wishlist")]');}
    //get wishlistXboxController() { return $('//a[contains(text(),"6022905")]');}
    //get wishlistXboxControllerElite() { return $('//a[contains(text(),"6352703")]');}

    open () {
        super.open('video-games') // this will append 'login to the base URL
        // browser.pause(3000);

        // your page specific method
    }

   wishlistClick () {
    this.wishlistItemOne.click();
    this.wishlistItemTwo.click();
    this.wishlistItemThree.click();
    //this.closeBanner.click();
    this.wishlistLink.click();
   }

   iswishlistVisible(){
    this.wishlistText.waitForDisplayed(7000);
    return this.wishlistText.isDisplayed(); 
}
    }
export default new wishlistPage()