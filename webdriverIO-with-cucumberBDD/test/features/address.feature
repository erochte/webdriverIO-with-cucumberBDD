Feature: Pdating address information

    As a user after I login
    I want update my address information
    Because I want to make sure my account information is up to date

    Background:
    
        Given I am on the log in page

    Scenario Outline: Performing a logout operation with passing test data as data table
        When I login using email and password <email> <password> into the text box
        And I enter address information using first name, last name, email, city, street, zip code and phone number <first name> <last name> <address email> <city> <street> <emailzip code> <phone number> into the text box 
        Then I should see the login link

        Examples:
        |email| |password| |first name| |last name| |address email| |city| |street| |zip code| |phone number|
        |"evan.rochte@auticon.us"| |"Ussncc1701a"| |"Evan"| |"Rochte"| |"evan.rochte@auticon.us"| |"Beverly Hills"| |"1234 5th"| |"90210"| |"555-867-5309"|
