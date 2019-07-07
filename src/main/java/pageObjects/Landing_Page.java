package pageObjects;

import java.io.IOException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;


public class Landing_Page extends BasePage{
	
	
	@FindBy(how = How.PARTIAL_LINK_TEXT, using = "Anmelden")
    public WebElement anmelden_element;
	
	@FindBy(how = How.LINK_TEXT, using = "Meine")
    public WebElement meine_element;
	
	@FindBy(how = How.LINK_TEXT, using = "Listen")
    public WebElement listen_element;
	
	@FindBy(how = How.PARTIAL_LINK_TEXT, using = "Starten")
    public WebElement neuer_kunde;
	
	@FindBy(how = How.XPATH, using = "/html/body/div[2]/div/a")
    public WebElement cookies;
	
	
	public Landing_Page() throws IOException {
		super();
	}
	
	public Landing_Page go_to_Check24Page() throws IOException {
		
		getDriver().get("https://www.check24.de/");
		WaitUntilWebElementIsVisible(anmelden_element);
		return new Landing_Page();
		
	}
	
	public Landing_Page clickOnAnmeldenButton() throws Exception {
		
		waitAndClickElement(anmelden_element);
		return new Landing_Page();
		
	}

	
	public Landing_Page goToRegistrationPage() throws Exception {
		
		actionMoveAndClickonSubElement(anmelden_element, neuer_kunde);
		return new Landing_Page();
		
	}
	
	public Landing_Page acceptCookies() throws Exception {
		
		actionMoveAndClick(cookies);
		return new Landing_Page();
		
	}
	

}
