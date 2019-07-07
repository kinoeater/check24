package pageObjects;

import java.io.IOException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Home_Page extends BasePage {
 @FindBy(how = How.XPATH, using = "//*[@id=\"c24-kb-container\"]/div/div[1]/div/div/div/h1")
 public WebElement hello_message;

 @FindBy(how = How.XPATH, using = "//*[@id=\"c24-kb-container\"]/h1")
 public WebElement Meine_Benachrichtigungen_message;

 @FindBy(how = How.XPATH, using = "//*[@id=\"c24-dialog-points-modal\"]/div/header/button")
 public WebElement popup_close_button;

 @FindBy(how = How.LINK_TEXT, using = "Reise")
 public WebElement travel;

 @FindBy(how = How.XPATH, using = "//font[contains(text(),'sign up and secure 50 welcome points »')]")
 public WebElement signup_secure;
 
 @FindBy(how = How.ID, using = " termsaccepted")
 public WebElement signup_checkbox;
 
 public Home_Page() throws IOException {
  super();
  
 	}

 public Home_Page close_welcome_popup() throws Exception {

	 actionMoveAndClick(popup_close_button);
	 return new Home_Page();
  
 	}

 public Home_Page go_to_Travel_Page() throws Exception {

	 actionMoveAndClick(travel);
	 return new Home_Page();
  
 	}

 public Home_Page verify_hello_message() throws Exception {

	 WaitUntilWebElementIsVisible(hello_message);
	 return new Home_Page();
  
 	}


 public Home_Page verify_Meine_Benachrichtigunge_message() throws Exception {

	 WaitUntilWebElementIsVisible(Meine_Benachrichtigungen_message);
	 return new Home_Page();
  
	}


}