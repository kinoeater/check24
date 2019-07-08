$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("email_validation.feature");
formatter.feature({
  "line": 1,
  "name": "Email confirmation",
  "description": "",
  "id": "email-confirmation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4477479800,
  "status": "passed"
});
formatter.scenario({
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
  "line": 6,
  "name": "Verify that user can successfully register with suitable credentials.",
  "description": "",
  "id": "email-confirmation;verify-that-user-can-successfully-register-with-suitable-credentials.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "User opens Check24 WebPage",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "User navigates to registration page",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "User can see email area",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User is on registiration page",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "User enters a randomly generated email",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User enters Password as \"9876Strong!\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User enters Repeating Password as \"9876Strong!\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User clicks on the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "User should close popup message",
  "keyword": "Then "
});
formatter.step({
  "line": 17,
  "name": "User should land on home page",
  "keyword": "And "
});
formatter.match({
  "location": "New_RegistrationSteps.user_opens_check24_webpage()"
});
formatter.result({
  "duration": 4558208100,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2358712600,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_can_see_email_area()"
});
formatter.result({
  "duration": 38552600,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_is_on_registiration_page()"
});
formatter.result({
  "duration": 50758200,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_enters_a_randomly_generated_email()"
});
formatter.result({
  "duration": 225619400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9876Strong!",
      "offset": 25
    }
  ],
  "location": "New_RegistrationSteps.user_enters_password_as_something(String)"
});
formatter.result({
  "duration": 171313400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9876Strong!",
      "offset": 35
    }
  ],
  "location": "New_RegistrationSteps.user_enters_repeating_password_as_something(String)"
});
formatter.result({
  "duration": 161605500,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_clicks_on_the_submit_button()"
});
formatter.result({
  "duration": 118851700,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_should_close_popup_message()"
});
formatter.result({
  "duration": 3015965100,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_should_land_on_home_page()"
});
formatter.result({
  "duration": 44440400,
  "status": "passed"
});
formatter.after({
  "duration": 771771100,
  "status": "passed"
});
formatter.before({
  "duration": 3431963000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Verify that user can successfully verify account via an email.",
  "description": "",
  "id": "email-confirmation;verify-that-user-can-successfully-verify-account-via-an-email.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 21,
      "value": "# Each email confirmation requires a new instance of new email account creation"
    },
    {
      "line": 22,
      "value": "# In this scenario I only provide a validation of already registered and confirmed account"
    },
    {
      "line": 23,
      "value": "# Please Note that in the above scenario a random generated email is used, but in this"
    },
    {
      "line": 24,
      "value": "# email a real email used which has a confirmation email in it"
    },
    {
      "line": 25,
      "value": "# The purpose here is showing how same steps can be used for real email same purposes"
    }
  ],
  "line": 27,
  "name": "User opens Email Page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "User enters \"check24qa\" and \"\u00266Mu2tafa\" and logs in",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "User searches and enters into confirmation email",
  "keyword": "When "
});
formatter.step({
  "line": 30,
  "name": "User should see confirmation button and click on it",
  "keyword": "Then "
});
formatter.match({
  "location": "New_RegistrationSteps.user_opens_email_page()"
});
formatter.result({
  "duration": 6689883900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "check24qa",
      "offset": 13
    },
    {
      "val": "\u00266Mu2tafa",
      "offset": 29
    }
  ],
  "location": "New_RegistrationSteps.user_enters_something_and_something_and_logs_in(String,String)"
});
formatter.result({
  "duration": 3268791800,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_searches_and_enters_into_confirmation_email()"
});
formatter.result({
  "duration": 1107490400,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_should_see_confirmation_button_and_click_on_it()"
});
formatter.result({
  "duration": 1316962600,
  "error_message": "java.lang.AssertionError: Unable to wait and click on the WebElement, using locator: \u003c[[ChromeDriver: chrome on XP (6598307341eee66f10d1cb970408a5d5)] -\u003e xpath: //a[contains(text(),\u0027bestätigen\u0027)]]\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat pageObjects.BasePage.waitAndClickElement(BasePage.java:46)\r\n\tat stepDefinitions.New_RegistrationSteps.user_should_see_confirmation_button_and_click_on_it(New_RegistrationSteps.java:155)\r\n\tat ✽.Then User should see confirmation button and click on it(email_validation.feature:30)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1115472500,
  "status": "passed"
});
formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality tests",
  "description": "",
  "id": "login-functionality-tests",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3435025000,
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
  "name": "User lands on check24 page, then navigates to login page",
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
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User can see login email area",
  "keyword": "Then "
});
formatter.match({
  "location": "New_RegistrationSteps.user_opens_check24_webpage()"
});
formatter.result({
  "duration": 45419013400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 1104857300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_can_see_login_email_area()"
});
formatter.result({
  "duration": 70795300,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Successful login with correct credentials",
  "description": "",
  "id": "login-functionality-tests;successful-login-with-correct-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 13,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 14,
  "name": "User enters following details for login",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 15
    },
    {
      "cells": [
        "kinoeater@gmail.com",
        "\u00266Mu2tafa"
      ],
      "line": 16
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "User clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "User should close popup message",
  "keyword": "Then "
});
formatter.step({
  "line": 19,
  "name": "User should land on home page after login",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 38025500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_following_details_for_login(DataTable)"
});
formatter.result({
  "duration": 316051900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 112750600,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_should_close_popup_message()"
});
formatter.result({
  "duration": 4404036600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_land_on_home_page_after_login()"
});
formatter.result({
  "duration": 84600,
  "status": "passed"
});
formatter.after({
  "duration": 817837700,
  "status": "passed"
});
formatter.before({
  "duration": 3444688900,
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
  "name": "User lands on check24 page, then navigates to login page",
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
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User can see login email area",
  "keyword": "Then "
});
formatter.match({
  "location": "New_RegistrationSteps.user_opens_check24_webpage()"
});
formatter.result({
  "duration": 15218976900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 1508832200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_can_see_login_email_area()"
});
formatter.result({
  "duration": 41867300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Unsuccessful login with incorrect email",
  "description": "",
  "id": "login-functionality-tests;unsuccessful-login-with-incorrect-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 23,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 24,
  "name": "User enters following details for login",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 25
    },
    {
      "cells": [
        "ssyyol@gmail.com",
        "\u00266Mu2tafa"
      ],
      "line": 26
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "User clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "User should be notified with \"E-Mail-Adresse oder Passwort ist nicht korrekt.\" on login email-pwd error",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 39228200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_following_details_for_login(DataTable)"
});
formatter.result({
  "duration": 291559800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 121336300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "E-Mail-Adresse oder Passwort ist nicht korrekt.",
      "offset": 30
    }
  ],
  "location": "LoginSteps.user_should_be_notified_with_something_on_login_emailpwd_error(String)"
});
formatter.result({
  "duration": 648300900,
  "status": "passed"
});
formatter.after({
  "duration": 802206700,
  "status": "passed"
});
formatter.before({
  "duration": 3454755700,
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
  "name": "User lands on check24 page, then navigates to login page",
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
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User can see login email area",
  "keyword": "Then "
});
formatter.match({
  "location": "New_RegistrationSteps.user_opens_check24_webpage()"
});
formatter.result({
  "duration": 48645454200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 1685435500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_can_see_login_email_area()"
});
formatter.result({
  "duration": 67179500,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Unsuccessful login with incorrect password",
  "description": "",
  "id": "login-functionality-tests;unsuccessful-login-with-incorrect-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "User enters following details for login",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 34
    },
    {
      "cells": [
        "yolmustafa@gmail.com",
        "incorrect"
      ],
      "line": 35
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "User clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 37,
  "name": "User should be notified with \"E-Mail-Adresse oder Passwort ist nicht korrekt.\" on login email-pwd error",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 33132800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_following_details_for_login(DataTable)"
});
formatter.result({
  "duration": 311788000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 105211200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "E-Mail-Adresse oder Passwort ist nicht korrekt.",
      "offset": 30
    }
  ],
  "location": "LoginSteps.user_should_be_notified_with_something_on_login_emailpwd_error(String)"
});
formatter.result({
  "duration": 793897000,
  "status": "passed"
});
formatter.after({
  "duration": 778630800,
  "status": "passed"
});
formatter.before({
  "duration": 3652529800,
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
  "name": "User lands on check24 page, then navigates to login page",
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
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User can see login email area",
  "keyword": "Then "
});
formatter.match({
  "location": "New_RegistrationSteps.user_opens_check24_webpage()"
});
formatter.result({
  "duration": 15386530200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 930421500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_can_see_login_email_area()"
});
formatter.result({
  "duration": 37721700,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Unsuccessful login with empty email",
  "description": "",
  "id": "login-functionality-tests;unsuccessful-login-with-empty-email",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 41,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 42,
  "name": "User enters following details for login",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 43
    },
    {
      "cells": [
        "",
        "\u00266Mu2tafa"
      ],
      "line": 44
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 45,
  "name": "User clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 46,
  "name": "User should be notified with \"Bitte geben Sie Ihre E-Mail-Adresse an\" on login email error",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 26735000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_following_details_for_login(DataTable)"
});
formatter.result({
  "duration": 249822300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 108008800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bitte geben Sie Ihre E-Mail-Adresse an",
      "offset": 30
    }
  ],
  "location": "LoginSteps.user_should_be_notified_with_something_on_login_email_error(String)"
});
formatter.result({
  "duration": 684625500,
  "status": "passed"
});
formatter.after({
  "duration": 819522500,
  "status": "passed"
});
formatter.before({
  "duration": 3425348300,
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
  "name": "User lands on check24 page, then navigates to login page",
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
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User can see login email area",
  "keyword": "Then "
});
formatter.match({
  "location": "New_RegistrationSteps.user_opens_check24_webpage()"
});
formatter.result({
  "duration": 13598645700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 822832000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_can_see_login_email_area()"
});
formatter.result({
  "duration": 55612500,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Unsuccessful login with empty password",
  "description": "",
  "id": "login-functionality-tests;unsuccessful-login-with-empty-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 50,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "User enters following details for login",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 52
    },
    {
      "cells": [
        "yolmustafa@gmail.com",
        ""
      ],
      "line": 53
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "User clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 55,
  "name": "User should be notified with \"Bitte geben Sie Ihr Passwort an.\" on empty password error",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 26782300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_following_details_for_login(DataTable)"
});
formatter.result({
  "duration": 289967400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 155428200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bitte geben Sie Ihr Passwort an.",
      "offset": 30
    }
  ],
  "location": "LoginSteps.user_should_be_notified_with_something_on_empty_password_error(String)"
});
formatter.result({
  "duration": 606513000,
  "status": "passed"
});
formatter.after({
  "duration": 866251900,
  "status": "passed"
});
formatter.before({
  "duration": 3421180000,
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
  "name": "User lands on check24 page, then navigates to login page",
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
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User can see login email area",
  "keyword": "Then "
});
formatter.match({
  "location": "New_RegistrationSteps.user_opens_check24_webpage()"
});
formatter.result({
  "duration": 20330467600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 1796484100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_can_see_login_email_area()"
});
formatter.result({
  "duration": 35220900,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Unsuccessful login with empty email and empty password",
  "description": "",
  "id": "login-functionality-tests;unsuccessful-login-with-empty-email-and-empty-password",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 59,
  "name": "User is on login page",
  "keyword": "Given "
});
formatter.step({
  "line": 60,
  "name": "User enters following details for login",
  "rows": [
    {
      "cells": [
        "email",
        "password"
      ],
      "line": 61
    },
    {
      "cells": [
        "",
        ""
      ],
      "line": 62
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "User clicks on the login button",
  "keyword": "When "
});
formatter.step({
  "line": 64,
  "name": "User should be notified with \"Bitte geben Sie Ihre E-Mail-Adresse an\" on login email error",
  "keyword": "Then "
});
formatter.step({
  "line": 65,
  "name": "User should be notified with \"Bitte geben Sie Ihr Passwort an.\" on empty password error",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 26320800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_following_details_for_login(DataTable)"
});
formatter.result({
  "duration": 222746800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 107421300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bitte geben Sie Ihre E-Mail-Adresse an",
      "offset": 30
    }
  ],
  "location": "LoginSteps.user_should_be_notified_with_something_on_login_email_error(String)"
});
formatter.result({
  "duration": 785794100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bitte geben Sie Ihr Passwort an.",
      "offset": 30
    }
  ],
  "location": "LoginSteps.user_should_be_notified_with_something_on_empty_password_error(String)"
});
formatter.result({
  "duration": 72054200,
  "status": "passed"
});
formatter.after({
  "duration": 820571300,
  "status": "passed"
});
formatter.uri("new_registiration.feature");
formatter.feature({
  "line": 1,
  "name": "New user registration functionality tests",
  "description": "",
  "id": "new-user-registration-functionality-tests",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3319483700,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 2,
      "value": "# You can select a browser as chrome\" or \"firefox\" by simply entering your choice to properties/config.properties file"
    },
    {
      "line": 3,
      "value": "# Then Bonigarcia’s webdriver manager will take care of the rest"
    }
  ],
  "line": 5,
  "name": "User lands on check24 page, then navigates to registiration page",
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
  "name": "User navigates to registration page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User can see email area",
  "keyword": "Then "
});
formatter.match({
  "location": "New_RegistrationSteps.user_opens_check24_webpage()"
});
formatter.result({
  "duration": 5432297900,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2225544100,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_can_see_email_area()"
});
formatter.result({
  "duration": 35721500,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Verify that user can successfully register with suitable credentials.",
  "description": "",
  "id": "new-user-registration-functionality-tests;verify-that-user-can-successfully-register-with-suitable-credentials.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 12,
      "value": "# Used basic parameterization for password and repeated password"
    },
    {
      "line": 13,
      "value": "# If same email is used in one of the successful registrations beforehand, system will reject it if we use it second time."
    },
    {
      "line": 14,
      "value": "# To avoid this, I added a few lines that creates random e-mail addresses for registration purposes"
    }
  ],
  "line": 16,
  "name": "User is on registiration page",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User enters a randomly generated email",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "User enters Password as \"9876Strong!\"",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "User enters Repeating Password as \"9876Strong!\"",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "User clicks on the submit button",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "User should close popup message",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": "User should land on home page",
  "keyword": "And "
});
formatter.match({
  "location": "New_RegistrationSteps.user_is_on_registiration_page()"
});
formatter.result({
  "duration": 26722800,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_enters_a_randomly_generated_email()"
});
formatter.result({
  "duration": 248923200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9876Strong!",
      "offset": 25
    }
  ],
  "location": "New_RegistrationSteps.user_enters_password_as_something(String)"
});
formatter.result({
  "duration": 194898600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "9876Strong!",
      "offset": 35
    }
  ],
  "location": "New_RegistrationSteps.user_enters_repeating_password_as_something(String)"
});
formatter.result({
  "duration": 219389100,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_clicks_on_the_submit_button()"
});
formatter.result({
  "duration": 168115000,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_should_close_popup_message()"
});
formatter.result({
  "duration": 2616587600,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_should_land_on_home_page()"
});
formatter.result({
  "duration": 73570800,
  "status": "passed"
});
formatter.after({
  "duration": 854941800,
  "status": "passed"
});
formatter.before({
  "duration": 3468820300,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 2,
      "value": "# You can select a browser as chrome\" or \"firefox\" by simply entering your choice to properties/config.properties file"
    },
    {
      "line": 3,
      "value": "# Then Bonigarcia’s webdriver manager will take care of the rest"
    }
  ],
  "line": 5,
  "name": "User lands on check24 page, then navigates to registiration page",
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
  "name": "User navigates to registration page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User can see email area",
  "keyword": "Then "
});
formatter.match({
  "location": "New_RegistrationSteps.user_opens_check24_webpage()"
});
formatter.result({
  "duration": 69363694900,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 4082059800,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_can_see_email_area()"
});
formatter.result({
  "duration": 43222000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify that user cannot register when entering very short password.",
  "description": "",
  "id": "new-user-registration-functionality-tests;verify-that-user-cannot-register-when-entering-very-short-password.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "# Again, I used random e-mail address for the sake of the test case"
    }
  ],
  "line": 27,
  "name": "User is on registiration page",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "User enters randomly generated email and following details for registration",
  "rows": [
    {
      "cells": [
        "password",
        "repeatpassword"
      ],
      "line": 29
    },
    {
      "cells": [
        "12",
        "12"
      ],
      "line": 30
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User clicks on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User should be notified with \"Das Passwort sollte zwischen 6 und 50 Zeichen lang sein.\" on password error",
  "keyword": "Then "
});
formatter.match({
  "location": "New_RegistrationSteps.user_is_on_registiration_page()"
});
formatter.result({
  "duration": 34369400,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_enters_randomly_generated_email_and_following_details_for_registration(DataTable)"
});
formatter.result({
  "duration": 543932800,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_clicks_on_the_submit_button()"
});
formatter.result({
  "duration": 94229000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Das Passwort sollte zwischen 6 und 50 Zeichen lang sein.",
      "offset": 30
    }
  ],
  "location": "New_RegistrationSteps.user_should_be_notified_with_something_on_password_error(String)"
});
formatter.result({
  "duration": 1414842700,
  "status": "passed"
});
formatter.after({
  "duration": 783195000,
  "status": "passed"
});
formatter.before({
  "duration": 3436037400,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 2,
      "value": "# You can select a browser as chrome\" or \"firefox\" by simply entering your choice to properties/config.properties file"
    },
    {
      "line": 3,
      "value": "# Then Bonigarcia’s webdriver manager will take care of the rest"
    }
  ],
  "line": 5,
  "name": "User lands on check24 page, then navigates to registiration page",
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
  "name": "User navigates to registration page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User can see email area",
  "keyword": "Then "
});
formatter.match({
  "location": "New_RegistrationSteps.user_opens_check24_webpage()"
});
formatter.result({
  "duration": 41590085100,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2552021500,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_can_see_email_area()"
});
formatter.result({
  "duration": 83829000,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify that user cannot register when password and repeating password do not match.",
  "description": "",
  "id": "new-user-registration-functionality-tests;verify-that-user-cannot-register-when-password-and-repeating-password-do-not-match.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 35,
      "value": "# Random e-mail address"
    }
  ],
  "line": 37,
  "name": "User is on registiration page",
  "keyword": "Given "
});
formatter.step({
  "line": 38,
  "name": "User enters randomly generated email and following details for registration",
  "rows": [
    {
      "cells": [
        "password",
        "repeatpassword"
      ],
      "line": 39
    },
    {
      "cells": [
        "1234pwdee",
        "pwd345455"
      ],
      "line": 40
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "User clicks on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 42,
  "name": "User should be notified with \"Die Passwörter stimmen nicht überein.\" on password error",
  "keyword": "Then "
});
formatter.match({
  "location": "New_RegistrationSteps.user_is_on_registiration_page()"
});
formatter.result({
  "duration": 25432300,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_enters_randomly_generated_email_and_following_details_for_registration(DataTable)"
});
formatter.result({
  "duration": 502130200,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_clicks_on_the_submit_button()"
});
formatter.result({
  "duration": 122201500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Die Passwörter stimmen nicht überein.",
      "offset": 30
    }
  ],
  "location": "New_RegistrationSteps.user_should_be_notified_with_something_on_password_error(String)"
});
formatter.result({
  "duration": 591500500,
  "status": "passed"
});
formatter.after({
  "duration": 775434700,
  "status": "passed"
});
formatter.before({
  "duration": 3414012700,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 2,
      "value": "# You can select a browser as chrome\" or \"firefox\" by simply entering your choice to properties/config.properties file"
    },
    {
      "line": 3,
      "value": "# Then Bonigarcia’s webdriver manager will take care of the rest"
    }
  ],
  "line": 5,
  "name": "User lands on check24 page, then navigates to registiration page",
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
  "name": "User navigates to registration page",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User can see email area",
  "keyword": "Then "
});
formatter.match({
  "location": "New_RegistrationSteps.user_opens_check24_webpage()"
});
formatter.result({
  "duration": 4882601100,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2865798600,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_can_see_email_area()"
});
formatter.result({
  "duration": 46348700,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Verify that user cannot register when trying to use an invalid e-mail format.",
  "description": "",
  "id": "new-user-registration-functionality-tests;verify-that-user-cannot-register-when-trying-to-use-an-invalid-e-mail-format.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 45,
      "value": "# E-mail address without @ sign"
    }
  ],
  "line": 47,
  "name": "User is on registiration page",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "User enters following details for registration",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "repeatpassword"
      ],
      "line": 49
    },
    {
      "cells": [
        "noatsignail3.com",
        "1234pwd",
        "1234pwd"
      ],
      "line": 50
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "User clicks on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 52,
  "name": "User should be notified with \"Bitte geben Sie eine gültige E-Mail-Adresse an.\" on email error",
  "keyword": "Then "
});
formatter.match({
  "location": "New_RegistrationSteps.user_is_on_registiration_page()"
});
formatter.result({
  "duration": 55757400,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_enters_following_details_for_registration(DataTable)"
});
formatter.result({
  "duration": 465879700,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_clicks_on_the_submit_button()"
});
formatter.result({
  "duration": 128804000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Bitte geben Sie eine gültige E-Mail-Adresse an.",
      "offset": 30
    }
  ],
  "location": "New_RegistrationSteps.user_should_be_notified_with_something_on_email_error(String)"
});
formatter.result({
  "duration": 642735400,
  "status": "passed"
});
formatter.after({
  "duration": 746899700,
  "status": "passed"
});
formatter.uri("travelsearch.feature");
formatter.feature({
  "line": 1,
  "name": "Travel Search functionality tests",
  "description": "",
  "id": "travel-search-functionality-tests",
  "keyword": "Feature"
});
formatter.before({
  "duration": 3454104700,
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
  "duration": 6002699100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 910729200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_can_see_login_email_area()"
});
formatter.result({
  "duration": 60393500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 33661600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_following_details_for_login(DataTable)"
});
formatter.result({
  "duration": 357407100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 127853900,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_should_close_popup_message()"
});
formatter.result({
  "duration": 3923801100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_land_on_home_page_after_login()"
});
formatter.result({
  "duration": 30200,
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
  "duration": 5944378800,
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
  "duration": 453046500,
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
  "duration": 291844900,
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
  "duration": 328291200,
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
  "duration": 1827286100,
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
  "duration": 1036028900,
  "status": "passed"
});
formatter.match({
  "location": "TravelSearchSteps.user_clicks_on_the_find_a_trip_button()"
});
formatter.result({
  "duration": 6952888800,
  "status": "passed"
});
formatter.match({
  "location": "TravelSearchSteps.user_is_presented_at_least_one_search_result()"
});
formatter.result({
  "duration": 397462400,
  "status": "passed"
});
formatter.after({
  "duration": 940892600,
  "status": "passed"
});
});