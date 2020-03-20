Feature: Performing a logout

    As a user on the home page
    I want to login and logout
    Because I want to make sure my account is valid

    Background:
    
        Given I am on the home page

    Scenario Outline: Performing a logout operation with passing test data as data table
        When I login using email and password <email> <password> into the text box
        Then I should see the login link

        Examples:
        |email| |password|
        |"evan.rochte@auticon.us"| |"Ussncc1701a"|

