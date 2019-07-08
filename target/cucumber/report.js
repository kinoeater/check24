$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/features/travelsearch.feature");
formatter.feature({
  "line": 1,
  "name": "Travel Search functionality tests",
  "description": "",
  "id": "travel-search-functionality-tests",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4153922900,
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
  "duration": 10187891500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 1208587700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_can_see_login_email_area()"
});
formatter.result({
  "duration": 52025900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 33528500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_following_details_for_login(DataTable)"
});
formatter.result({
  "duration": 406488200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 132091800,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_should_close_popup_message()"
});
formatter.result({
  "duration": 3706005500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_land_on_home_page_after_login()"
});
formatter.result({
  "duration": 59900,
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
  "duration": 3807012100,
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
  "duration": 521392400,
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
  "duration": 278911900,
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
  "duration": 336637300,
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
  "duration": 1854861700,
  "status": "passed"
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
  "duration": 1106563700,
  "status": "passed"
});
formatter.match({
  "location": "TravelSearchSteps.user_clicks_on_the_find_a_trip_button()"
});
formatter.result({
  "duration": 5487102700,
  "status": "passed"
});
formatter.match({
  "location": "TravelSearchSteps.user_is_presented_at_least_one_search_result()"
});
formatter.result({
  "duration": 242826600,
  "status": "passed"
});
formatter.after({
  "duration": 1078900900,
  "status": "passed"
});
});