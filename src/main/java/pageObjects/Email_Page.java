package pageObjects;

import java.io.IOException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Email_Page extends BasePage {
 @FindBy(how = How.ID, using = "username")
 public WebElement email_user;

 @FindBy(how = How.ID, using = "password")
 public WebElement email_password;

 @FindBy(how = How.ID, using = "login_btn")
 public WebElement email_login_button;
 
 @FindBy(how = How.XPATH, using = "//span[@class='subject-text ellipsis'][contains(text(),'E-Mail-Adresse bestätigen und 50 CHECK24 Punkte (5')]")
 public WebElement confirmation_email_link;
 
 @FindBy(how = How.XPATH, using = "//span[@class='subject-text ellipsis']")
 public WebElement confirmation_email_link_2;
 
 @FindBy(how = How.XPATH, using = "//a[contains(text(),'bestätigen')]")
 public WebElement confirm_button;
  
 @FindBy(how = How.XPATH, using = "//input[@placeholder='Search messages']")
 public WebElement search_message_area;
 
 
 
 public Email_Page() throws IOException {
  super();
  
 	}

 public Email_Page goToEmail() throws Exception {

	 getDriver().get("https://mail.protonmail.com/login");
	 return new Email_Page();
  
 	}

 public Login_Page entersEmailandPassandlogin (String user,String pass ) throws Exception {
		
		sendKeysToWebElement(email_user, user);
		sendKeysToWebElement(email_password, pass);
		waitAndClickElement(email_login_button);
		
		return new Login_Page();
		
	}

 public Email_Page enters_confirm_email() throws Exception {

	 waitAndClickElement(confirmation_email_link);
	 return new Email_Page();
  
 	}
 
 public Email_Page click_confirm_button() throws Exception {

	 waitAndClickElement(confirm_button);
	 return new Email_Page();
  
 	}
 
 public Email_Page verify_user_area() throws Exception {

	 WaitUntilWebElementIsVisible(email_user);
	 return new Email_Page();
  
 	}

 public Email_Page verify_search_message_area() throws Exception {

	 WaitUntilWebElementIsVisible(search_message_area);
	 return new Email_Page();
  
 	}



}