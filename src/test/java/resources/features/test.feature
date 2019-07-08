Feature: New user registration confirmation functionality tests
# You can select a browser as chrome" or "firefox" by simply entering your choice to properties/config.properties file
# Then Bonigarcia’s webdriver manager will take care of the rest

     Scenario: Verify that user can successfully verify account via an email.    
    # Each email confirmation requires a new instance of new email account creation 
    # In this scenario I only provide a validation of already registered and confirmed account
    # to show how same steps can be used for the same purposes
  
    Given User opens Email Page
      And User enters "check24qa" and "&6Mu2tafa" and logs in     
      When User enters into confirmation email
     Then User should see confirmation button and click on it

  