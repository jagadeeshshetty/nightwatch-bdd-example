
Feature: Test OpenWeatherMap web app

  Scenario: Verify the OpenWeatherMap home page elements
    # Starts at https://openweathermap.org/
    Given i open openweathermap home page
    Then the page should open with "Сurrent weather and forecast - OpenWeatherMap" title
    # Verifies that all important information is there, e.g. labels etc.
    And the your city name edit box should be visible
    And the search button should be visible

  Scenario: Verify the OpenWeatherMap search functionality with invalid city name
    # Starts on the https://openweathermap.org/
    Given i open openweathermap home page
    Then the page should open with "Сurrent weather and forecast - OpenWeatherMap" title
    # Enters an invalid city name
    When i enter "invalid city name" city name into serach edit box
    # Searches for the weather
    And i click on search button
    Then the page should open with "Find - OpenWeatherMap" title
    # Verifies that website suggests city is "Not found"
    And the not found alert should appear

  Scenario: Verify the OpenWeatherMap search functionality with valid city name
    # Starts on the https://openweathermap.org/
    Given i open openweathermap home page
    Then the page should open with "Сurrent weather and forecast - OpenWeatherMap" title
    # Enters a valid city name
    When i enter "bangalore" city name into serach edit box
    # Searches for the weather
    And i click on search button
    Then the page should open with "Find - OpenWeatherMap" title
    # Verifies that website successfully returns weather details for the city.
    And the "Bangalore, IN" link should appear
    And the "[12.9762, 77.6033]" geo coords should appear
