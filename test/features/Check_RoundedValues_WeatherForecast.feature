#features/Check_RoundedValues_WeatherForecast.feature
Feature: Check Weather Forecast details
    
    


Scenario: All values should be rounded down
        Given user is on 5 day weather forecast page
        When  user check the details on weather forecast page
        Then  all values should be rounded down











