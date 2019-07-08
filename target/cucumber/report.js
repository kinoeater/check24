$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("email_validation.feature");
formatter.feature({
  "line": 1,
  "name": "Email confirmation",
  "description": "",
  "id": "email-confirmation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4177537500,
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
  "duration": 51527620400,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 4491474000,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_can_see_email_area()"
});
formatter.result({
  "duration": 91356600,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_is_on_registiration_page()"
});
formatter.result({
  "duration": 55429800,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_enters_a_randomly_generated_email()"
});
formatter.result({
  "duration": 267285800,
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
  "duration": 189358900,
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
  "duration": 152824000,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_clicks_on_the_submit_button()"
});
formatter.result({
  "duration": 121299300,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_should_close_popup_message()"
});
formatter.result({
  "duration": 5406870300,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_should_land_on_home_page()"
});
formatter.result({
  "duration": 45636300,
  "status": "passed"
});
formatter.after({
  "duration": 771752800,
  "status": "passed"
});
formatter.before({
  "duration": 3470174100,
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
  "duration": 9961871100,
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
  "duration": 3339617800,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_searches_and_enters_into_confirmation_email()"
});
formatter.result({
  "duration": 1015088200,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_should_see_confirmation_button_and_click_on_it()"
});
formatter.result({
  "duration": 1913635700,
  "status": "passed"
});
formatter.after({
  "duration": 658177500,
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
  "duration": 3446290600,
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
  "duration": 41361802100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 1551171600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_can_see_login_email_area()"
});
formatter.result({
  "duration": 40920000,
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
  "duration": 32814100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_following_details_for_login(DataTable)"
});
formatter.result({
  "duration": 444684500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 178603700,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_should_close_popup_message()"
});
formatter.result({
  "duration": 4230004400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_land_on_home_page_after_login()"
});
formatter.result({
  "duration": 58400,
  "status": "passed"
});
formatter.after({
  "duration": 904429600,
  "status": "passed"
});
formatter.before({
  "duration": 3564705500,
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
  "duration": 92369537700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 1882506700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_can_see_login_email_area()"
});
formatter.result({
  "duration": 41697100,
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
  "duration": 56705800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_following_details_for_login(DataTable)"
});
formatter.result({
  "duration": 605778000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 160809800,
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
  "duration": 1195085300,
  "status": "passed"
});
formatter.after({
  "duration": 830081500,
  "status": "passed"
});
formatter.before({
  "duration": 3554670400,
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
  "duration": 74479981100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 2324442300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_can_see_login_email_area()"
});
formatter.result({
  "duration": 60811600,
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
  "duration": 69694300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_following_details_for_login(DataTable)"
});
formatter.result({
  "duration": 516333700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 119451800,
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
  "duration": 784446700,
  "status": "passed"
});
formatter.after({
  "duration": 924687900,
  "status": "passed"
});
formatter.before({
  "duration": 3608297400,
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
  "duration": 14021750400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 1108763300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_can_see_login_email_area()"
});
formatter.result({
  "duration": 50199200,
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
  "duration": 38016300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_following_details_for_login(DataTable)"
});
formatter.result({
  "duration": 329644700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 105032700,
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
  "duration": 727871800,
  "status": "passed"
});
formatter.after({
  "duration": 937127700,
  "status": "passed"
});
formatter.before({
  "duration": 3470139900,
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
  "duration": 51902900100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 1223458500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_can_see_login_email_area()"
});
formatter.result({
  "duration": 102105800,
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
  "duration": 26753900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_following_details_for_login(DataTable)"
});
formatter.result({
  "duration": 364815500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 187540500,
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
  "duration": 643612600,
  "status": "passed"
});
formatter.after({
  "duration": 835283500,
  "status": "passed"
});
formatter.before({
  "duration": 3537521000,
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
  "duration": 11007663300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 2025309900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_can_see_login_email_area()"
});
formatter.result({
  "duration": 36728400,
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
  "duration": 41917100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_following_details_for_login(DataTable)"
});
formatter.result({
  "duration": 434912200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 129735000,
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
  "duration": 675985900,
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
  "duration": 204168100,
  "status": "passed"
});
formatter.after({
  "duration": 878269700,
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
  "duration": 3426892000,
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
  "duration": 44221870100,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 4293080800,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_can_see_email_area()"
});
formatter.result({
  "duration": 67091700,
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
  "duration": 41154900,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_enters_a_randomly_generated_email()"
});
formatter.result({
  "duration": 413642200,
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
  "duration": 171130100,
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
  "duration": 153986400,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_clicks_on_the_submit_button()"
});
formatter.result({
  "duration": 118688500,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_should_close_popup_message()"
});
formatter.result({
  "duration": 4104396200,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_should_land_on_home_page()"
});
formatter.result({
  "duration": 75615500,
  "status": "passed"
});
formatter.after({
  "duration": 840115800,
  "status": "passed"
});
formatter.before({
  "duration": 3475570900,
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
  "duration": 22308427900,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2882805100,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_can_see_email_area()"
});
formatter.result({
  "duration": 75748100,
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
  "duration": 66967000,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_enters_randomly_generated_email_and_following_details_for_registration(DataTable)"
});
formatter.result({
  "duration": 513321700,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_clicks_on_the_submit_button()"
});
formatter.result({
  "duration": 96386000,
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
  "duration": 666944400,
  "status": "passed"
});
formatter.after({
  "duration": 899995800,
  "status": "passed"
});
formatter.before({
  "duration": 3496295700,
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
  "duration": 12376759900,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2941228000,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_can_see_email_area()"
});
formatter.result({
  "duration": 109245100,
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
  "duration": 48506400,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_enters_randomly_generated_email_and_following_details_for_registration(DataTable)"
});
formatter.result({
  "duration": 686124500,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_clicks_on_the_submit_button()"
});
formatter.result({
  "duration": 172696800,
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
  "duration": 776933800,
  "status": "passed"
});
formatter.after({
  "duration": 940975900,
  "status": "passed"
});
formatter.before({
  "duration": 3484772700,
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
  "duration": 47134829400,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 3359615300,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_can_see_email_area()"
});
formatter.result({
  "duration": 75724500,
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
  "duration": 80423200,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_enters_following_details_for_registration(DataTable)"
});
formatter.result({
  "duration": 548197800,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_clicks_on_the_submit_button()"
});
formatter.result({
  "duration": 100871500,
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
  "duration": 657901600,
  "status": "passed"
});
formatter.after({
  "duration": 791986700,
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
  "duration": 3491138000,
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
  "duration": 47900699900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 2218593200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_can_see_login_email_area()"
});
formatter.result({
  "duration": 37164900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_is_on_login_page()"
});
formatter.result({
  "duration": 24236800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_following_details_for_login(DataTable)"
});
formatter.result({
  "duration": 422448900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 223940400,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_should_close_popup_message()"
});
formatter.result({
  "duration": 4575713300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_land_on_home_page_after_login()"
});
formatter.result({
  "duration": 57900,
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
  "duration": 11770694100,
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
  "duration": 578816200,
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
  "duration": 227260200,
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
  "duration": 247016500,
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
  "duration": 4155381500,
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
  "duration": 1136331600,
  "status": "passed"
});
formatter.match({
  "location": "TravelSearchSteps.user_clicks_on_the_find_a_trip_button()"
});
formatter.result({
  "duration": 13033941500,
  "status": "passed"
});
formatter.match({
  "location": "TravelSearchSteps.user_is_presented_at_least_one_search_result()"
});
formatter.result({
  "duration": 311069900,
  "status": "passed"
});
formatter.after({
  "duration": 1005219300,
  "status": "passed"
});
});