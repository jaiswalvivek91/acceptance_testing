#features/Get_5day_WeatherForecast.feature
Feature: Get 5 day Weather Forecast
    
    Scenario Outline: User gets 5 days weather forecast
        Given user in on Weather Forecast page
        When  user enters "<city name>"
        And   user click the Enter button
        Then  user gets 5 day weather forecast for "<city name>" are shown
        And   user gets  current wind speed
        And   user gets  current wind direction
        And   user gets  Aggregate rainfall
        And   user gets  Minimum temperatures
        And   user gets  Maximum temperatures


Examples:
| city name | 
| aberdeen  |
| dundee  |
| edinburgh  |
| glasgow  |
| perth  |
| stirling  |








