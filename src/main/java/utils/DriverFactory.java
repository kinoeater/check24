package utils;

import java.io.FileInputStream;
import java.util.Properties;
import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.PageFactory;

import pageObjects.Home_Page;
import pageObjects.Landing_Page;
import pageObjects.Login_Page;
import pageObjects.Registration_Page;
import pageObjects.Search_Page;
import pageObjects.Travel_Page;
import io.github.bonigarcia.wdm.WebDriverManager;

public class DriverFactory {
	
	public static WebDriver driver;
	public static Home_Page homePage;
	public static Registration_Page registrationPage;
	public static Landing_Page landingPage;
	public static Login_Page loginPage;
	public static Search_Page searchPage;
	public static Travel_Page travelPage;

	
	public WebDriver getDriver() {
		try {
			// Read Configuration
			Properties p = new Properties();
			FileInputStream fi = new FileInputStream(System.getProperty("user.dir") + "\\src\\main\\java\\properties\\config.properties");
			p.load(fi);
			String browserName = p.getProperty("browser");

			switch (browserName) {

			case "firefox":
				// code
				if (null == driver) {
					
					WebDriverManager.firefoxdriver().setup();
					DesiredCapabilities capabilities = DesiredCapabilities.firefox();
					capabilities.setCapability("marionette", true);
					driver = new FirefoxDriver();
					driver.manage().window().maximize();
				}
				break;

			case "chrome":
				// code
				if (null == driver) {
					WebDriverManager.chromedriver().setup();
					// CHROME OPTIONS
					driver = new ChromeDriver();
					driver.manage().window().maximize();
				}
				break;

						}
		} catch (Exception e) {
			System.out.println("Unable to load browser: " + e.getMessage());
		} finally {
			driver.manage().timeouts().pageLoadTimeout(60, TimeUnit.SECONDS);
			homePage = PageFactory.initElements(driver, Home_Page.class);
			registrationPage = PageFactory.initElements(driver, Registration_Page.class);
			landingPage = PageFactory.initElements(driver, Landing_Page.class);
			loginPage = PageFactory.initElements(driver, Login_Page.class);
			searchPage = PageFactory.initElements(driver, Search_Page.class);
			travelPage = PageFactory.initElements(driver, Travel_Page.class);
			
		}
		return driver;
	}
}
