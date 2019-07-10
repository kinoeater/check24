package stepDefinitions;

import java.util.List;
import java.util.Map;
import org.testng.Assert;

import com.cucumber.listener.Reporter;

import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utils.DriverFactory;

public class LoginSteps extends DriverFactory {
	
	    @Given("^User is on login page$")
	    public void user_is_on_login_page() throws Throwable {
	    	
	    	loginPage.WaitUntilWebElementIsVisible(loginPage.loginEmailArea);
	    }
	 
	    @When("^User navigates to login page$")
	    public void user_navigates_to_login_page() throws Throwable {

			landingPage.clickOnAnmeldenButton();
			
	    }
	    
	    @Then("^User can see login email area$")
	    public void user_can_see_login_email_area() throws Throwable {
	    	
	    	loginPage.check_visibility_of_email_area();
	    }
	    

	    @And("^User enters following details for login$")
	    public void user_enters_following_details_for_login(DataTable table) throws Throwable {
	       
	    	Reporter.addStepLog("Entering the credentials!");
	    	List<Map<String, String>> list = table.asMaps(String.class, String.class);
	    	for(int i=0; i<list.size(); i++) {
	    		
	    	loginPage.sendKeysToWebElement(loginPage.loginEmailArea, list.get(i).get("email"));
	    	loginPage.sendKeysToWebElement(loginPage.loginPasswordArea, list.get(i).get("password"));
	        	
	    	}
	    }
	    
	    @Then("^User should be notified with \"([^\"]*)\" on login email-pwd error$")
	    public void user_should_be_notified_with_something_on_login_emailpwd_error(String strArg1) throws Throwable {
	    	
	    	loginPage.WaitUntilWebElementIsVisible(loginPage.invalid_email_pwd_error);
	    	System.out.println("CHECK THISSSSSS" + loginPage.invalid_email_pwd_error.getText());
	    	Assert.assertEquals(loginPage.invalid_email_pwd_error.getText(),strArg1);

	    }
	    
	    @Then("^User should be notified with \"([^\"]*)\" on login password error$")
	    public void user_should_be_notified_with_something_on_login_password_error(String strArg1) throws Throwable {
	    	
	    	loginPage.WaitUntilWebElementIsVisible(loginPage.invalid_email_pwd_error);
	    	System.out.println(loginPage.invalid_email_pwd_error.getText());
	    	Assert.assertEquals(loginPage.invalid_email_pwd_error.getText(),strArg1);
	    	
	    }
	    
	    @Then("^User should be notified with \"([^\"]*)\" on login email error$")
	    public void user_should_be_notified_with_something_on_login_email_error(String strArg1) throws Throwable {
	    	
	    	loginPage.WaitUntilWebElementIsVisible(loginPage.empty_email_error);
	    	System.out.println(loginPage.empty_email_error.getText());
	    	Assert.assertEquals(loginPage.empty_email_error.getText(),strArg1);
	    	
	    }
	    
	    
	    @Then("^User should be notified with \"([^\"]*)\" on empty password error$")
	    public void user_should_be_notified_with_something_on_empty_password_error(String strArg1) throws Throwable {
	    	
	    	loginPage.WaitUntilWebElementIsVisible(loginPage.empty_pwd_error);
	    	System.out.println(loginPage.empty_pwd_error.getText());
	    	Assert.assertEquals(loginPage.empty_pwd_error.getText(),strArg1);
	    }
	    
	    @When("^User clicks on the login button$")
	    public void user_clicks_on_the_login_button() throws Throwable {
	    	
	    	loginPage.waitAndClickElement(loginPage.login_Button);
	    	
	    }
	    


}































