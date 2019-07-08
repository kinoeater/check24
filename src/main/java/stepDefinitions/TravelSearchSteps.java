package stepDefinitions;

import org.testng.Assert;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import utils.DriverFactory;

public class TravelSearchSteps extends DriverFactory {
	
	@Given("^User should land on travel page$")
    public void user_should_land_on_travel_page() throws Throwable {
		
		homePage.go_to_Travel_Page();
		travelPage.WaitUntilWebElementIsVisible(travelPage.destination);
		
    }

    @When("^User clicks on the find a trip button$")
    public void user_clicks_on_the_find_a_trip_button() throws Throwable {
    	
    	travelPage.waitAndClickElement(travelPage.find_button);
    
    }
    
    @And("^User enters travel options one adault$")
    public void user_enters_travel_options_one_adault() throws Throwable {
    	
        travelPage.enterTravelOptions();
        
    }


    @And("^User enters destination as \"([^\"]*)\"$")
    public void user_enters_destination_as_something(String travel_destination) throws Throwable {
    	
    	travelPage.enterDestination(travel_destination);
    	
    	
    }

    @And("^User enters airport as \"([^\"]*)\"$")
    public void user_enters_airport_as_something(String departure) throws Throwable {
    	
    	travelPage.enterAirport(departure);
    	
    }

    @And("^User enters duration as \"([^\"]*)\" days$")
    public void user_enters_duration_as_something_days(String duration) throws Throwable {
    	
    	 travelPage.enterDuration(duration);
    	
    	
    }

    @And("^User enters arrival date as \"([^\"]*)\"$")
    public void user_enters_arrival_date_as_something(String arrival_time) throws Throwable {
    	
    	travelPage.enterArrival(arrival_time);
    	
    }

    @And("^User enters return date as \"([^\"]*)\"$")
    public void user_enters_return_date_as_something(String return_time) throws Throwable {
    	
    	travelPage.enterReturn(return_time);
    	
    }
    

    @Then("^User is presented at least one search result$")
    public void user_is_presented_at_least_one_search_result() throws Throwable {
    	
    	travelPage.WaitUntilWebElementIsVisible(travelPage.flugHotel);
    	travelPage.travel_number.getText();
    	int result = Integer.parseInt(travelPage.travel_number.getText());
   	    System.out.println("travel_count is "+result);
    	Assert.assertTrue(result>1);
    	   
    }
    
}


































