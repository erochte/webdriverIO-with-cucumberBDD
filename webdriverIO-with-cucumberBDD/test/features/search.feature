Feature: Search for Nintendo

    As a user on the search page
    I want to search for Switch games
    Because I have a Nintendo Switch

    Background:
    
        Given I am on the search page

    Scenario Outline: Performing a search with passing test data as data table
        When I search using search term <searchterm> into the text box
        Then I should see the search results

        Examples:
        |searchterm|
       |"Switch"| 