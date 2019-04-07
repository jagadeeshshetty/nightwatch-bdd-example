import {
  client
} from 'nightwatch-api';
import {
  Given,
  When,
  Then
} from 'cucumber';

/**
 * Open the url within browser.
 */
Given(/^i open openweathermap home page$/, async () => {
  return await client.url('https://openweathermap.org/');
});

/**
 * Validates the title of the page.
 */
Then(/^the page should open with "(.*?)" title$/, async text => {
  return await client
    .assert.title(text);
});

/**
 * Validates the 'your city name' edit box.
 */
Then(/^the your city name edit box should be visible$/, async () => {
  return await client
    .assert.visible('input[placeholder="Your city name"]');
});

/**
 * Validates the 'search' button.
 */
Then(/^the search button should be visible$/, async () => {
  return await client
    .useXpath()
    .assert.visible('//button[@class="btn btn-orange"]');
});

/**
 * Enters string into search edit box.
 * @param {string} cityName User specified city name.
 */
When(/^i enter "(.*?)" city name into serach edit box$/, async (cityName) => {
  return await client
    .useXpath()
    .waitForElementVisible('//input[@placeholder=\'Your city name\']', 48000)
    .sendKeys('//input[@placeholder=\'Your city name\']', cityName);
});

/**
 * Validates the 'Not found' error link.
 */
Then(/^the not found alert should appear$/, async () => {
  return await client
    .useXpath()
    .waitForElementVisible('//*[@class=\'alert alert-warning\'][contains(text(),\'Not found\')]', 48000)
    .assert.visible('//*[@class=\'alert alert-warning\'][contains(text(),\'Not found\')]');
});

/**
 * Click on the search button.
 */
Then(/^i click on search button$/, async () => {
  return await client
    .useXpath()
    .click('//button[@class="btn btn-orange"]');
});

/**
 * Validates the specified string link.
 * @param {string} cityLink User specified city link name.
 */
Then(/^the "(.*?)" link should appear$/, async (cityLink) => {
  return await client
    .useXpath()
    .waitForElementVisible(`//a[contains(text(),'${cityLink}')]`, 48000)
    .assert.visible(`//a[contains(text(),'${cityLink}')]`);
});

/**
 * Validates the specified string geo coords.
 * @param {string} geoCoordsValue User specified city geocoords.
 */
Then(/^the "(.*?)" geo coords should appear$/, async (geoCoordsValue) => {
  return await client
    .useXpath()
    .waitForElementVisible(`//a[contains(text(),'${geoCoordsValue}')]`, 48000)
    .assert.visible(`//a[contains(text(),'${geoCoordsValue}')]`);
});