package pageObjects;

import java.io.IOException;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Registration_Page extends BasePage {
	
	
	@FindBy(how = How.ID, using = "email")
    public WebElement emailArea;
	
	@FindBy(how = How.ID, using = "password")
    public WebElement passwordArea;
	
	@FindBy(how = How.ID, using = "passwordrepetition")
    public WebElement repeatingPasswordArea;
	
	@FindBy(how = How.XPATH, using = "//*[@id=\"register\"]/div[2]/div[3]/div")
    public WebElement invalid_email_error;
	
	@FindBy(how = How.XPATH, using = "//*[@id=\"register\"]/div[4]/div[2]/div")
    public WebElement unmatched_password_error;
	
	
	@FindBy(how = How.XPATH, using = "//*[@id=\"register\"]/div[4]/div[2]/div")
    public WebElement password_error;
	
	
	@FindBy(how = How.NAME, using = "register")
    public WebElement submit_button;	
	
	
	public Registration_Page() throws IOException {
		super();
	}
			
	public Registration_Page entersEmail (String email) throws Exception {
		
		sendKeysToWebElement(emailArea, email);
		
		return new Registration_Page();
	}

	
	  public Registration_Page entersPassword (String password) throws Exception {
			
			sendKeysToWebElement(passwordArea, password);
			
			return new Registration_Page();
		}
	
   public Registration_Page entersRepeatingPassword (String repeating_password) throws Exception {
		
		sendKeysToWebElement(repeatingPasswordArea, repeating_password);
		
		return new Registration_Page();
	}
   
   public Registration_Page clicks_Submit () throws Exception {
		   
	   waitAndClickElement(submit_button);
		return new Registration_Page();
	}
     
   public Registration_Page check_visibility_of_email_area () throws Exception {
		
	   WaitUntilWebElementIsVisible(emailArea);
		
		return new Registration_Page();
	}
}
