Feature: Submitting a Contact US inquiry

    As a user on the contact us page
    I to submit an inquiry
    Because I have a question for the site admin

    Background:
    
        Given I am on the contact us page

    Scenario Outline: Filling out the contact us for by passing test data as data table
	    When I submit name, email and enquiry <name> <email> <enquiry> in the text box
        Then I should see the success banner

        Examples:
        |name| |email| |enquiry|
        |"Evan Rochte"| |"evan.rochte@auticon.us"| |"Help!"|
