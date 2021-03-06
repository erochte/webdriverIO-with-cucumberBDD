import { Given } from 'cucumber';
import loginPage from '../pageobjects/login.page';
import registerPage from '../pageobjects/register.page';
import searchPage from '../pageobjects/search.page';
import addToCartPage from '../pageobjects/addtocart.page';
import comparePage from '../pageobjects/compare.page';
import contactusPage from '../pageobjects/contactus.page';
import wishlistPage from '../pageobjects/wishlist.page';
import logoutPage from '../pageobjects/logout.page';


Given('I am on the login page', function () {
  // Write code here that turns the phrase above into concrete actions
  loginPage.open();     // navigating to login page
  browser.getTitle().should.equal('Your store. Login');
});

Given('I am on the registration page', function () {
  registerPage.open();
  browser.getTitle().should.equal('Your store. Register');
});

Given('I am on the search page', function () {
  searchPage.open();
  browser.getTitle().should.equal('Your store. Search');
});

Given('I am on the new products page', function () {
  browser.maximizeWindow();
  addToCartPage.open();
  browser.getTitle().should.equal('Your store. New Products');
});

Given('I am on the homepage', function () {
  browser.maximizeWindow();
  comparePage.open();
  browser.getTitle().should.equal('Your store');
});

Given('I am on the contact us page', function () {
  browser.maximizeWindow();
  contactusPage.open();
  browser.getTitle().should.equal('Your store. Contact Us');
  contactusPage.submit();
  contactusPage.isnoNameText().should.be.true;
});

Given('I am on the video game page', function () {
  wishlistPage.open();
  browser.getTitle().should.equal('Your store. Video Games');
});

Given('I am on the home page', function () {
  logoutPage.open();
  browser.getTitle().should.equal('Your store. Login');
});
