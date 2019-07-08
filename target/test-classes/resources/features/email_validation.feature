Feature: Email confirmation
#You can select a browser as chrome" or "firefox" by simply entering your choice to properties/config.properties file
#Then Bonigarcia’s webdriver manager will take care of the rest

  
  Scenario: Verify that user can successfully register with suitable credentials.
 
    Given User opens Check24 WebPage
     When User navigates to registration page
     Then User can see email area
    Given User is on registiration page
      And User enters a randomly generated email
      And User enters Password as "9876Strong!"
      And User enters Repeating Password as "9876Strong!" 
      And User clicks on the submit button
     Then User should close popup message
      And User should land on home page


  Scenario: Verify that user can successfully verify account via an email.    
  # Each email confirmation requires a new instance of new email account creation 
  # In this scenario I only provide a validation of already registered and confirmed account
  # Please Note that in the above scenario a random generated email is used, but in this
  # email a real email used which has a confirmation email in it
  # The purpose here is showing how same steps can be used for real email same purposes
  
    Given User opens Email Page
      And User enters "check24qa" and "&6Mu2tafa" and logs in     
      When User searches and enters into confirmation email
     Then User should see confirmation button and click on it
  
