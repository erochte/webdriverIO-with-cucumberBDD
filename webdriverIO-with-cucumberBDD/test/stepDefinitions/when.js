import { When } from 'cucumber';
import loginPage from '../pageobjects/login.page';
import registerPage from '../pageobjects/register.page';
import searchPage from '../pageobjects/search.page';
import addToCartPage from '../pageobjects/addtocart.page';
import comparePage from '../pageobjects/compare.page';
import contactusPage from '../pageobjects/contactus.page';
import wishlistPage from '../pageobjects/wishlist.page';

When(/^I login with email and password "([^"]*)" "([^"]*)" into the text box$/, function (arg1, arg2) {
    loginPage.login(arg1, arg2);
});

When(/^I register using fist name, last name, email, password and confirm password "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" "([^"]*)" into the text box$/, function (arg1, arg2, arg3, arg4, arg5) {
    registerPage.register(arg1, arg2, arg3, arg4, arg5);
});

When(/^I search using search term "([^"]*)" into the text box$/, function (arg1) {
    searchPage.search(arg1);
});

When(/^I add game to cart$/, function () {
    addToCartPage.cart();
});

When(/^I add controllers to compare$/, function () {
    comparePage.compare();
});

When(/^I submit name, email and enquiry "([^"]*)" "([^"]*)" "([^"]*)" in the text box$/, function (arg1, arg2, arg3) {
    contactusPage.contact(arg1, arg2, arg3);
});

When(/^I click to add item to wishlist$/, function () {
    wishlistPage.wishlistClick();
});