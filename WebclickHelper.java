package com.projectname.helpers;

import org.openqa.selenium.StaleElementReferenceException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

/**
 * Simple and focused click helper class providing reliable click operations on WebElements.
 *
 * @author Selenium Automation Framework
 * @version 1.0.0
 */
@Slf4j
public class WebClickHelper {

    private final WebDriver driver;
    private final Actions actions;

    // Constructor initializing click helper.
    public WebClickHelper(WebDriver driver) {
        this.driver = driver;
        this.actions = new Actions(driver);
        log.debug("WebClickHelper initialized successfully");
    }

    // Performs a standard click on a WebElement.
    public boolean clickElement(WebElement element) {
        log.debug("Performing click on WebElement");
        try {
            element.click();
            log.debug("Click successful");
            return true;
        } catch (StaleElementReferenceException e) {
            log.warn("Click interrupted, retrying with Actions", e);
            return clickWithActions(element);
        } catch (Exception e) {
            log.error("Click failed", e);
            return false;
        }
    }

    // Performs a click using Actions class as fallback.
    public boolean clickWithActions(WebElement element) {
        log.debug("Performing Actions click on WebElement");
        try {
            actions.click(element).perform();
            log.debug("Actions click successful");
            return true;
        } catch (Exception e) {
            log.error("Actions click failed", e);
            return false;
        }
    }

    // Performs a double-click on a WebElement.
    public boolean doubleClickElement(WebElement element) {
        log.debug("Performing double-click on WebElement");
        try {
            actions.doubleClick(element).perform();
            log.debug("Double-click successful");
            return true;
        } catch (Exception e) {
            log.error("Double-click failed", e);
            return false;
        }
    }

    // Performs a right-click (context click) on a WebElement.
    public boolean rightClickElement(WebElement element) {
        log.debug("Performing right-click on WebElement");
        try {
            actions.contextClick(element).perform();
            log.debug("Right-click successful");
            return true;
        } catch (Exception e) {
            log.error("Right-click failed", e);
            return false;
        }
    }

    // Moves to an element and then clicks it.
    public boolean moveAndClickElement(WebElement element) {
        log.debug("Performing move and click on WebElement");
        try {
            actions.moveToElement(element).click().perform();
            log.debug("Move and click successful");
            return true;
        } catch (Exception e) {
            log.error("Move and click failed", e);
            return false;
        }
    }
}
