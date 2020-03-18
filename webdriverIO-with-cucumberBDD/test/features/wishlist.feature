Feature: Adding items to wishlist

    As a user on the video game page
    I want to add items to the wishlist
    Because I will purchase them later

    Background:
    
        Given I am on the video game page

    Scenario: Adding items to wishlist
	    When I click to add item to wishlist
        Then I should see the items on the wishlist page