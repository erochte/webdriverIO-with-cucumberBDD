Feature: Registering a user

    As a user on the registration page
    I want to register a user
    Because I want to create an account

    Background:
    
        Given I am on the registration page

    Scenario Outline: Performing a registration operation with passing test data as data table
        When I register using fist name, last name, email, password and confirm password <firstname> <lastname> <email> <password> <confirmpassword> into the text box
        Then I should see the success text

        Examples:
        |firstname| |lastname| |email| |password| |confirmpassword|
       |"Tim"| |"Rochte"| |"test2@test.com"| |"Angel$02"| |"Angel$02"|
