Feature: Login functionality tests
#You can select a browser as chrome" or "firefox" by simply entering your choice to properties/config.properties file
#Then Bonigarcia’s webdriver manager will take care of the rest

  Background: User logs into Check24 WebPage
  
    Given User opens Check24 WebPage
     And User navigates to login page
     And User can see login email area
     And User is on login page
     And User enters following details for login
      | email                | password  | 
      | yolmustafa@gmail.com | &6Mu2tafa |      
     And  User clicks on the login button
    When  User should close popup message
     Then User should land on home page after login

    Scenario: Search a destination for having some good time
  
    Given User should land on travel page
     And User enters duration as "10" days
      And User enters destination as "izmir"
      And User enters airport as "stuttgart"   
      And User enters arrival date as "30.08.2019"
      And User enters return date as "10.09.2019"
     When User clicks on the find a trip button
     Then User should get at least one result 