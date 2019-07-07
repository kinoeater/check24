package pageObjects;

import java.io.IOException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Login_Page extends BasePage {
	
	@FindBy(how = How.ID, using = "email")
    public WebElement loginEmailArea;
	
	@FindBy(how = How.ID, using = "password")
    public WebElement loginPasswordArea;
	
	@FindBy(how = How.ID, using = "c24-kb-register-btn")
    public WebElement login_Button;
		
	@FindBy(how = How.XPATH, using = "//div[contains(text(),'E-Mail-Adresse oder Passwort ist nicht korrekt.')]")	                                  
    public WebElement invalid_email_pwd_error;
	
	@FindBy(how = How.XPATH, using = "//div[contains(text(),'Bitte geben Sie Ihre E-Mail-Adresse an')]")	                                  
    public WebElement empty_email_error;
		
	@FindBy(how = How.XPATH, using = "//div[contains(text(),'Bitte geben Sie Ihr Passwort an.')]")	                                  
    public WebElement empty_pwd_error;
	
	
	public Login_Page() throws IOException {
		super();
	}
	
	public Login_Page entersEmail (String email) throws Exception {
		
		sendKeysToWebElement(loginEmailArea, email);
		
		return new Login_Page();
	}

	
	  public Login_Page entersPassword (String password) throws Exception {
			
	   sendKeysToWebElement(loginPasswordArea, password);
			
	   return new Login_Page();
	}
	  
	   public Login_Page clicks_Login () throws Exception {
			   
	   waitAndClickElement(login_Button);
	   return new Login_Page();
	}
	   
	   public Login_Page check_visibility_of_email_area () throws Exception {
			
	   WaitUntilWebElementIsVisible(loginEmailArea);
			
      return new Login_Page();
		}
	  
	  
}
