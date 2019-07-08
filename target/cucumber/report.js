$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/features/travelsearch.feature");
formatter.feature({
  "line": 1,
  "name": "Travel Search functionality tests",
  "description": "",
  "id": "travel-search-functionality-tests",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4075143600,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 2,
      "value": "#You can select a browser as chrome\" or \"firefox\" by simply entering your choice to properties/config.properties file"
    },
    {
      "line": 3,
      "value": "#Then Bonigarcia’s webdriver manager will take care of the rest"
    }
  ],
  "line": 5,
  "name": "User logs into Check24 WebPage",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 7,
  "name": "User opens Check24 WebPage",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "User navigates to login page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User can see login email area",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User is on login page",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enters following details for login",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 12
    },
    {
      "cells": [
        "testworld@gmail.com",
        "\u00266Mu2tafa"
      ],
      "line": 13
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User clicks on the login button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User should close popup message",
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "User should land on home page after login",
  "keyword": "Then "
});
formatter.match({
  "location": "New_RegistrationSteps.user_opens_check24_webpage()"
});
formatter.result({
  "duration": 16907021300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 1112436500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_can_see_login_email_area()"
});
formatter.result({
  "duration": 37344100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 45363400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_following_details_for_login(DataTable)"
});
formatter.result({
  "duration": 481322100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 225411100,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_should_close_popup_message()"
});
formatter.result({
  "duration": 3704915000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_land_on_home_page_after_login()"
});
formatter.result({
  "duration": 26400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Search a destination for having some good time",
  "description": "",
  "id": "travel-search-functionality-tests;search-a-destination-for-having-some-good-time",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 20,
  "name": "User should land on travel page",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "User enters duration as \"10\" days",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "User enters arrival date as \"10.09.2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "User enters return date as \"19.09.2019\"",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "User enters destination as \"Side \u0026 Alanya\"",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "User enters airport as \"stutt\"",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "User clicks on the find a trip button",
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "User is presented at least one search result",
  "keyword": "Then "
});
formatter.match({
  "location": "TravelSearchSteps.user_should_land_on_travel_page()"
});
formatter.result({
  "duration": 3847573700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 25
    }
  ],
  "location": "TravelSearchSteps.user_enters_duration_as_something_days(String)"
});
formatter.result({
  "duration": 474738500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10.09.2019",
      "offset": 29
    }
  ],
  "location": "TravelSearchSteps.user_enters_arrival_date_as_something(String)"
});
formatter.result({
  "duration": 224500600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "19.09.2019",
      "offset": 28
    }
  ],
  "location": "TravelSearchSteps.user_enters_return_date_as_something(String)"
});
formatter.result({
  "duration": 281881000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Side \u0026 Alanya",
      "offset": 28
    }
  ],
  "location": "TravelSearchSteps.user_enters_destination_as_something(String)"
});
formatter.result({
  "duration": 360939500,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d75.0.3770.100)\nBuild info: version: \u00273.11.0\u0027, revision: \u0027e59cfb3\u0027, time: \u00272018-03-11T20:26:55.152Z\u0027\nSystem info: host: \u0027DESKTOP-U9KGDGS\u0027, ip: \u0027192.168.1.42\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 75.0.3770.100, chrome: {chromedriverVersion: 75.0.3770.8 (681f24ea911fe7..., userDataDir: C:\\Users\\musta\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62367}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 4738bbb2340a20beed4eaae16e726d0f\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:545)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:279)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:83)\r\n\tat pageObjects.Travel_Page.enterDestination(Travel_Page.java:98)\r\n\tat stepDefinitions.TravelSearchSteps.user_enters_destination_as_something(TravelSearchSteps.java:38)\r\n\tat ✽.And User enters destination as \"Side \u0026 Alanya\"(src/test/java/resources/features/travelsearch.feature:24)\r\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "stutt",
      "offset": 24
    }
  ],
  "location": "TravelSearchSteps.user_enters_airport_as_something(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TravelSearchSteps.user_clicks_on_the_find_a_trip_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "TravelSearchSteps.user_is_presented_at_least_one_search_result()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1726433500,
  "status": "passed"
});
});