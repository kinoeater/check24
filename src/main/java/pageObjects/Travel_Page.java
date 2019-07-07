package pageObjects;

import java.io.IOException;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

public class Travel_Page extends BasePage{
	@FindBy(how = How.XPATH, using = "//input[@id='c24-travel-destination-element']")
    public WebElement destination;

	@FindBy(how = How.XPATH, using = "//input[@id='c24-travel-airport-element']")
    public WebElement airport;
	
	@FindBy(how = How.XPATH, using = "//div[@class='c24-travel-duration-overlay c24-travel-js-open-duration-layer']")
    public WebElement travel_duration;
	
	@FindBy(how = How.XPATH, using = "//input[@id='c24-travel-custom-duration-input']")
    public WebElement travel_duration_input;
	
	
    @FindBy(how = How.XPATH, using = "//input[@id='c24-travel-departure-date-element']")
    public WebElement arrival_input;
	
    @FindBy(how = How.XPATH, using = "//input[@id='c24-travel-return-date-element']")
    public WebElement return_input;
    
	@FindBy(how = How.XPATH, using = "//button[@id='c24-travel-search-button-element']")
    public WebElement find_button;
	
	@FindBy(how = How.XPATH, using = "//span[@id='c24-travel-traveller-roomcount-detail-btn']")
    public WebElement traveler_options;

	
	@FindBy(how = How.XPATH, using = "//span[@id='c24-travel-js-adult-select-1']")
    public WebElement traveler_options_one_adault;
	
	@FindBy(how = How.LINK_TEXT, using = "Reise")
    public WebElement travel;

	@FindBy(how = How.XPATH, using = "//label[contains(text(),'Flug & Hotel')]")
    public WebElement flugHotel;
		
	@FindBy(how = How.XPATH, using = "//*[@id=\"searchform-travelsearch\"]/div[2]/div[2]/span[1]")                                
    public WebElement travel_number;
	
	public Travel_Page() throws IOException {
		super();
	}
	
	
	public Travel_Page clickFindTripButton() throws Exception {
		
    	waitAndClickElement(find_button);    	
		return new Travel_Page();
		
	}
	
	public Travel_Page enterReturn(String return_time) throws Exception {
		
		return_input.sendKeys(return_time);
		return new Travel_Page();
	}
	
	
	public Travel_Page enterArrival(String arrival_time) throws Exception {
		
		arrival_input.sendKeys(arrival_time);
		return new Travel_Page();
	}
	
	
	public Travel_Page enterAirport(String departure) throws Exception {

		airport.sendKeys(departure,Keys.ENTER);
		return new Travel_Page();
	}
	
	public Travel_Page enterDestination(String travel_destination) throws Exception {
		
		destination.sendKeys(travel_destination,Keys.ENTER);
		return new Travel_Page();
	}
	
	public Travel_Page enterDuration(String duration) throws Exception {
     	
		waitAndClickElement(travelPage.travel_duration);
    	sendKeysToWebElement(travelPage.travel_duration_input, duration);
    	travel_duration_input.sendKeys(Keys.ENTER);		
    	return new Travel_Page();
    	
	}
	
public Travel_Page enterTravelOptions() throws Exception {
     	
		waitAndClickElement(travelPage.traveler_options);
		waitAndClickElement(travelPage.traveler_options_one_adault);   			
    	return new Travel_Page();
    	
	}
	
	
	
	public Travel_Page verify_destination_area() throws Exception {

		WaitUntilWebElementIsVisible(destination);
		return new Travel_Page();
	}

	

    }
