$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/features/new_registiration.feature");
formatter.feature({
  "line": 1,
  "name": "New user registration functionality tests",
  "description": "",
  "id": "new-user-registration-functionality-tests",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4057259900,
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
  "duration": 10772866800,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2968259700,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_can_see_email_area()"
});
formatter.result({
  "duration": 66228900,
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
  "duration": 56718600,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_enters_a_randomly_generated_email()"
});
formatter.result({
  "duration": 307109300,
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
  "duration": 181996100,
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
  "duration": 170005800,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_clicks_on_the_submit_button()"
});
formatter.result({
  "duration": 116572400,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_should_close_popup_message()"
});
formatter.result({
  "duration": 3511736800,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_should_land_on_home_page()"
});
formatter.result({
  "duration": 110437000,
  "status": "passed"
});
formatter.after({
  "duration": 953334000,
  "status": "passed"
});
formatter.before({
  "duration": 3506605600,
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
  "duration": 12568144800,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 3172491300,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_can_see_email_area()"
});
formatter.result({
  "duration": 90300000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify that user can successfully verify account via an email.",
  "description": "",
  "id": "new-user-registration-functionality-tests;verify-that-user-can-successfully-verify-account-via-an-email.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 25,
      "value": "# Each email confirmation requires a new instance of new email account creation"
    },
    {
      "line": 26,
      "value": "# In this scenario I only provide a validation of already registered and confirmed account"
    },
    {
      "line": 27,
      "value": "# to show how same steps can be used for the same purposes"
    }
  ],
  "line": 29,
  "name": "User opens Email Page",
  "keyword": "Given "
});
formatter.step({
  "line": 30,
  "name": "User enters \"check24qa\" and \"\u00266Mu2tafa\" and logs in",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User enters into confirmation email",
  "keyword": "When "
});
formatter.step({
  "line": 32,
  "name": "User should see confirmation button and click on it",
  "keyword": "Then "
});
formatter.match({
  "location": "New_RegistrationSteps.user_opens_email_page()"
});
formatter.result({
  "duration": 4156982500,
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
  "duration": 3414301400,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_enters_into_confirmation_email()"
});
formatter.result({
  "duration": 697124100,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_should_see_confirmation_button_and_click_on_it()"
});
formatter.result({
  "duration": 1348508700,
  "status": "passed"
});
formatter.after({
  "duration": 693194000,
  "status": "passed"
});
formatter.before({
  "duration": 3541534000,
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
  "duration": 12669507700,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2845329100,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_can_see_email_area()"
});
formatter.result({
  "duration": 74839100,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Verify that user cannot register when entering very short password.",
  "description": "",
  "id": "new-user-registration-functionality-tests;verify-that-user-cannot-register-when-entering-very-short-password.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 35,
      "value": "# Again, I used random e-mail address for the sake of the test case"
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
        "12",
        "12"
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
  "name": "User should be notified with \"Das Passwort sollte zwischen 6 und 50 Zeichen lang sein.\" on password error",
  "keyword": "Then "
});
formatter.match({
  "location": "New_RegistrationSteps.user_is_on_registiration_page()"
});
formatter.result({
  "duration": 62638300,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_enters_randomly_generated_email_and_following_details_for_registration(DataTable)"
});
formatter.result({
  "duration": 533382400,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_clicks_on_the_submit_button()"
});
formatter.result({
  "duration": 105939400,
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
  "duration": 1231472200,
  "status": "passed"
});
formatter.after({
  "duration": 872926800,
  "status": "passed"
});
formatter.before({
  "duration": 3496885300,
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
  "duration": 11679168200,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2954552600,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_can_see_email_area()"
});
formatter.result({
  "duration": 127518300,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Verify that user cannot register when password and repeating password do not match.",
  "description": "",
  "id": "new-user-registration-functionality-tests;verify-that-user-cannot-register-when-password-and-repeating-password-do-not-match.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 45,
      "value": "# Random e-mail address"
    }
  ],
  "line": 47,
  "name": "User is on registiration page",
  "keyword": "Given "
});
formatter.step({
  "line": 48,
  "name": "User enters randomly generated email and following details for registration",
  "rows": [
    {
      "cells": [
        "password",
        "repeatpassword"
      ],
      "line": 49
    },
    {
      "cells": [
        "1234pwdee",
        "pwd345455"
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
  "name": "User should be notified with \"Die Passwörter stimmen nicht überein.\" on password error",
  "keyword": "Then "
});
formatter.match({
  "location": "New_RegistrationSteps.user_is_on_registiration_page()"
});
formatter.result({
  "duration": 29346500,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_enters_randomly_generated_email_and_following_details_for_registration(DataTable)"
});
formatter.result({
  "duration": 728201700,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_clicks_on_the_submit_button()"
});
formatter.result({
  "duration": 213663700,
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
  "duration": 1119278300,
  "status": "passed"
});
formatter.after({
  "duration": 883024000,
  "status": "passed"
});
formatter.before({
  "duration": 3486908900,
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
  "duration": 13601386400,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_navigates_to_registration_page()"
});
formatter.result({
  "duration": 2863733500,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_can_see_email_area()"
});
formatter.result({
  "duration": 129444600,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Verify that user cannot register when trying to use an invalid e-mail format.",
  "description": "",
  "id": "new-user-registration-functionality-tests;verify-that-user-cannot-register-when-trying-to-use-an-invalid-e-mail-format.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 55,
      "value": "# E-mail address without @ sign"
    }
  ],
  "line": 57,
  "name": "User is on registiration page",
  "keyword": "Given "
});
formatter.step({
  "line": 58,
  "name": "User enters following details for registration",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "repeatpassword"
      ],
      "line": 59
    },
    {
      "cells": [
        "noatsignail3.com",
        "1234pwd",
        "1234pwd"
      ],
      "line": 60
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "User clicks on the submit button",
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "User should be notified with \"Bitte geben Sie eine gültige E-Mail-Adresse an.\" on email error",
  "keyword": "Then "
});
formatter.match({
  "location": "New_RegistrationSteps.user_is_on_registiration_page()"
});
formatter.result({
  "duration": 45451600,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_enters_following_details_for_registration(DataTable)"
});
formatter.result({
  "duration": 653002200,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_clicks_on_the_submit_button()"
});
formatter.result({
  "duration": 127543200,
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
  "duration": 806279300,
  "status": "passed"
});
formatter.after({
  "duration": 884273700,
  "status": "passed"
});
});