$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/resources/features/email_validation.feature");
formatter.feature({
  "line": 1,
  "name": "Email confirmation",
  "description": "",
  "id": "email-confirmation",
  "keyword": "Feature"
});
formatter.before({
  "duration": 4230501800,
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
  "line": 5,
  "name": "Verify that user can successfully verify account via an email.",
  "description": "",
  "id": "email-confirmation;verify-that-user-can-successfully-verify-account-via-an-email.",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "comments": [
    {
      "line": 6,
      "value": "# Each email confirmation requires a new instance of new email account creation"
    },
    {
      "line": 7,
      "value": "# In this scenario I only provide a validation of already registered and confirmed account"
    },
    {
      "line": 8,
      "value": "# to show how same steps can be used for the same purposes"
    }
  ],
  "line": 10,
  "name": "User opens Email Page",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "User enters \"check24qa\" and \"\u00266Mu2tafa\" and logs in",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User searches and enters into confirmation email",
  "keyword": "When "
});
formatter.step({
  "line": 13,
  "name": "User should see confirmation button and click on it",
  "keyword": "Then "
});
formatter.match({
  "location": "New_RegistrationSteps.user_opens_email_page()"
});
formatter.result({
  "duration": 2973636700,
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
  "duration": 3010654100,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_searches_and_enters_into_confirmation_email()"
});
formatter.result({
  "duration": 1138283200,
  "status": "passed"
});
formatter.match({
  "location": "New_RegistrationSteps.user_should_see_confirmation_button_and_click_on_it()"
});
formatter.result({
  "duration": 1373652900,
  "status": "passed"
});
formatter.after({
  "duration": 685691000,
  "status": "passed"
});
});