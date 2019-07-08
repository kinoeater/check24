$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login functionality tests",
  "description": "",
  "id": "login-functionality-tests",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4231195300,
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
  "duration": 7500695900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 786699500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_can_see_login_email_area()"
});
formatter.result({
  "duration": 57318500,
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
  "duration": 30006300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_following_details_for_login(DataTable)"
});
formatter.result({
  "duration": 487636600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 130473700,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_should_close_popup_message()"
});
formatter.result({
  "duration": 2533235100,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_should_land_on_home_page_after_login()"
});
formatter.result({
  "duration": 44600,
  "status": "passed"
});
formatter.after({
  "duration": 831776300,
  "status": "passed"
});
formatter.before({
  "duration": 3466061800,
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
  "duration": 6429323900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 843753500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_can_see_login_email_area()"
});
formatter.result({
  "duration": 50297900,
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
  "duration": 29108900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_following_details_for_login(DataTable)"
});
formatter.result({
  "duration": 515803500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 103526900,
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
  "duration": 800246100,
  "status": "passed"
});
formatter.after({
  "duration": 879262900,
  "status": "passed"
});
formatter.before({
  "duration": 3468746700,
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
  "duration": 15586831300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 770485700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_can_see_login_email_area()"
});
formatter.result({
  "duration": 56769300,
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
  "duration": 30829900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_following_details_for_login(DataTable)"
});
formatter.result({
  "duration": 481999300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 112494400,
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
  "duration": 802367800,
  "status": "passed"
});
formatter.after({
  "duration": 823636900,
  "status": "passed"
});
formatter.before({
  "duration": 3508948300,
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
  "duration": 18600066500,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 762321900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_can_see_login_email_area()"
});
formatter.result({
  "duration": 44678300,
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
  "duration": 38828300,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_following_details_for_login(DataTable)"
});
formatter.result({
  "duration": 341591700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 108073000,
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
  "duration": 658442500,
  "status": "passed"
});
formatter.after({
  "duration": 920306900,
  "status": "passed"
});
formatter.before({
  "duration": 3488167200,
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
  "duration": 28334123900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 798314400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_can_see_login_email_area()"
});
formatter.result({
  "duration": 57994400,
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
  "duration": 40919200,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_following_details_for_login(DataTable)"
});
formatter.result({
  "duration": 456627400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 114719000,
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
  "duration": 657475500,
  "status": "passed"
});
formatter.after({
  "duration": 723328500,
  "status": "passed"
});
formatter.before({
  "duration": 3504133200,
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
  "duration": 11067140900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_navigates_to_login_page()"
});
formatter.result({
  "duration": 845613600,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_can_see_login_email_area()"
});
formatter.result({
  "duration": 64785400,
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
  "duration": 28824900,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_enters_following_details_for_login(DataTable)"
});
formatter.result({
  "duration": 202331000,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_the_login_button()"
});
formatter.result({
  "duration": 115841200,
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
  "duration": 670400500,
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
  "duration": 155292500,
  "status": "passed"
});
formatter.after({
  "duration": 855726600,
  "status": "passed"
});
});