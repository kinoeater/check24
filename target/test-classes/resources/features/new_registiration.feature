Feature: New user registration functionality tests
# You can select a browser as chrome" or "firefox" by simply entering your choice to properties/config.properties file
# Then Bonigarcia’s webdriver manager will take care of the rest

  Background: User lands on check24 page, then navigates to registiration page
  
    Given User opens Check24 WebPage
     When User navigates to registration page
     Then User can see email area
  
  Scenario: User successfully registers to check24 web page
  # Used basic parameterization for password and repeated password
  # If same email is used in one of the successful registrations beforehand, system will reject it if we use it second time.
  # To avoid this, I added a few lines that creates random e-mail addresses for registration purposes
  
    Given User is on registiration page
      And User enters a randomly generated email
      And User enters Password as "9876Strong!"
      And User enters Repeating Password as "9876Strong!" 
      And User clicks on the submit button
     Then User should close popup message
      And User should land on home page
  
  Scenario: Invalid Registration when entering very short password
  # Again, I used random e-mail address for the sake of the test case
  
    Given User is on registiration page
      And User enters randomly generated email and following details for registration
      | password | repeatpassword | 
      | 12       | 12             | 
     When User clicks on the submit button
     Then User should be notified with "Das Passwort sollte zwischen 6 und 50 Zeichen lang sein." on password error
  
  Scenario: Invalid Registration when password and repeating password do not match
  # Random e-mail address 
  
    Given User is on registiration page
      And User enters randomly generated email and following details for registration
      | password  | repeatpassword | 
      | 1234pwdee | pwd345455      | 
     When User clicks on the submit button
     Then User should be notified with "Die Passwörter stimmen nicht überein." on password error
  
  Scenario: Invalid Registration when trying to use an invalid e-mail format
  # E-mail address without @ sign
  
    Given User is on registiration page
      And User enters following details for registration
      | email            | password | repeatpassword | 
      | noatsignail3.com | 1234pwd  | 1234pwd        | 
     When User clicks on the submit button
     Then User should be notified with "Bitte geben Sie eine gültige E-Mail-Adresse an." on email error
  
  
