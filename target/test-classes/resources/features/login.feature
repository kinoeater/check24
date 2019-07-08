Feature: Login functionality tests
#You can select a browser as chrome" or "firefox" by simply entering your choice to properties/config.properties file
#Then Bonigarcia’s webdriver manager will take care of the rest

  Background: User lands on check24 page, then navigates to login page
  
    Given User opens Check24 WebPage
     When User navigates to login page
     Then User can see login email area
  
  Scenario: Successful login with correct credentials
  
    Given User is on login page
      And User enters following details for login
      | email               | password  | 
      | kinoeater@gmail.com | &6Mu2tafa | 
     When User clicks on the login button
     Then User should close popup message
      And User should land on home page after login
  
  Scenario: Unsuccessful login with incorrect email
  
    Given User is on login page
      And User enters following details for login
      | email            | password  | 
      | ssyyol@gmail.com | &6Mu2tafa | 
     When User clicks on the login button
     Then User should be notified with "E-Mail-Adresse oder Passwort ist nicht korrekt." on login email-pwd error
  
  Scenario: Unsuccessful login with incorrect password
  
    Given User is on login page
      And User enters following details for login
      | email                | password  | 
      | yolmustafa@gmail.com | incorrect | 
     When User clicks on the login button
     Then User should be notified with "E-Mail-Adresse oder Passwort ist nicht korrekt." on login email-pwd error
  
  Scenario: Unsuccessful login with empty email
  
    Given User is on login page
      And User enters following details for login
      | email | password  | 
      |       | &6Mu2tafa | 
     When User clicks on the login button
     Then User should be notified with "Bitte geben Sie Ihre E-Mail-Adresse an" on login email error
  
  Scenario: Unsuccessful login with empty password
  
    Given User is on login page
      And User enters following details for login
      | email                | password | 
      | yolmustafa@gmail.com |          | 
     When User clicks on the login button
     Then User should be notified with "Bitte geben Sie Ihr Passwort an." on empty password error
  
  Scenario: Unsuccessful login with empty email and empty password
  
    Given User is on login page
      And User enters following details for login
      | email | password | 
      |       |          | 
     When User clicks on the login button
     Then User should be notified with "Bitte geben Sie Ihre E-Mail-Adresse an" on login email error
     Then User should be notified with "Bitte geben Sie Ihr Passwort an." on empty password error
  
  
