package stepDefinitions;

import java.util.List;
import java.util.Map;
import java.util.UUID;
import org.testng.Assert;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utils.DriverFactory;

public class New_RegistrationSteps extends DriverFactory {
	
	@Given("^User opens Check24 WebPage$")
    public void user_opens_check24_webpage() throws Throwable {
      
		landingPage.go_to_Check24Page();
		landingPage.acceptCookies();
    }

    @Given("^User is on registiration page$")
    public void user_is_on_registiration_page() throws Throwable {
    	
    	registrationPage.check_visibility_of_email_area();
    }

    @When("^User navigates to registration page$")
    public void user_navigates_to_registration_page() throws Throwable {
    	
    	landingPage.goToRegistrationPage();
    	
    }

    @Then("^User can see email area$")
    public void user_can_see_email_area() throws Throwable {
    	
    	registrationPage.check_visibility_of_email_area();
    }

    @Then("^User should close popup message$")
    public void user_should_close_popup_message() throws Throwable {
    	
    	homePage.close_welcome_popup();
    }
    @And("^User enters Email as \"([^\"]*)\"$")
    public void user_enters_email_as_something(String strArg1) throws Throwable {
    	
    	registrationPage.entersEmail(strArg1);
    }
    
    @And("^User enters a randomly generated email$")
    public void user_enters_a_randomly_generated_email() throws Throwable {
    	
    	String generatedString = UUID.randomUUID().toString();
    	String RandomEmail = generatedString + "@gmail.com";
        System.out.println(generatedString);
        registrationPage.entersEmail(RandomEmail);
    	
    }

    @And("^User enters Password as \"([^\"]*)\"$")
    public void user_enters_password_as_something(String strArg1) throws Throwable {
    	
    	registrationPage.entersPassword(strArg1);
    }


    @And("^User enters Repeating Password as \"([^\"]*)\"$")
    public void user_enters_repeating_password_as_something(String strArg1) throws Throwable {
    	
    	registrationPage.entersRepeatingPassword(strArg1);
    }

    @And("^User clicks on the submit button$")
    public void user_clicks_on_the_submit_button() throws Throwable {
    	
    	registrationPage.waitAndClickElement(registrationPage.submit_button);
    	
    }

    @And("^User should land on home page$")
    public void user_should_land_on_home_page() throws Throwable {
    	
    	homePage.verify_hello_message();
    	
    }
    
    @Then("^User should be notified with \"([^\"]*)\" on email error$")
    public void user_should_be_notified_with_something_on_email_error(String strArg1) throws Throwable {
    	
    	registrationPage.WaitUntilWebElementIsVisible(registrationPage.invalid_email_error);
    	System.out.println(registrationPage.invalid_email_error.getText());
        Assert.assertEquals(strArg1, registrationPage.invalid_email_error.getText());
    }
    
    @Then("^User should be notified with \"([^\"]*)\" on password error$")
    public void user_should_be_notified_with_something_on_password_error(String strArg1) throws Throwable {
    	
    	registrationPage.WaitUntilWebElementIsVisible(registrationPage.password_error);
    	System.out.println(registrationPage.password_error.getText());
    	Assert.assertEquals(strArg1, registrationPage.password_error.getText());
    }


    @And("^User enters following details for registration$")
    public void user_enters_following_details_for_registration(DataTable table) throws Throwable {  	
    	
    	List<Map<String, String>> list = table.asMaps(String.class, String.class);
    	for(int i=0; i<list.size(); i++) {
    		
    		registrationPage.sendKeysToWebElement(registrationPage.emailArea, list.get(i).get("email"));
    		registrationPage.sendKeysToWebElement(registrationPage.passwordArea, list.get(i).get("password"));
    		registrationPage.sendKeysToWebElement(registrationPage.repeatingPasswordArea, list.get(i).get("repeatpassword"));
        
    	}
    }
    
    @And("^User enters randomly generated email and following details for registration$")
    public void user_enters_randomly_generated_email_and_following_details_for_registration(DataTable table) throws Throwable {
        
    	
    	String generatedString = UUID.randomUUID().toString();
    	String RandomEmail = generatedString + "@gmail.com";
        System.out.println(generatedString);
    	
    	List<Map<String, String>> list = table.asMaps(String.class, String.class);
    	for(int i=0; i<list.size(); i++) {
    		
    		registrationPage.sendKeysToWebElement(registrationPage.emailArea, RandomEmail);
    		registrationPage.sendKeysToWebElement(registrationPage.passwordArea, list.get(i).get("password"));
        	registrationPage.sendKeysToWebElement(registrationPage.repeatingPasswordArea, list.get(i).get("repeatpassword"));   	
    	}
    }
}































