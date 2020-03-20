import { Then } from 'cucumber';
import loginPage from '../pageobjects/login.page';
import registerPage from '../pageobjects/register.page';
import searchPage from '../pageobjects/search.page';
import addToCartPage from '../pageobjects/addtocart.page';
import comparePage from '../pageobjects/compare.page';
import contactusPage from '../pageobjects/contactus.page';
import wishlistPage from '../pageobjects/wishlist.page';
import logoutPage from '../pageobjects/logout.page';



Then('I should see the logout link', function() {
  loginPage.isLogoutShowing().should.be.true;
});


Then('I should see the success text', function() {
  registerPage.isRegistrationComplete().should.be.true;
});

Then('I should see the search results', function() {
  searchPage.isSearchComplete().should.be.true;
});

Then('I am on the shopping cart', function() {
  addToCartPage.isShoppingCartVisible().should.be.true;
});

Then('I am on comparison page', function() {
  comparePage.isCompareLoaded().should.be.true;
});


Then('I should see the success banner', function() {
  contactusPage.issuccessBanner().should.be.true;
});


Then('I should see the items on the wishlist page', function() {
  wishlistPage.iswishlistVisible().should.be.true;
});

Then('I should see the login link', function() {
  logoutPage.isLoginLinkShowing().should.be.true;
});
