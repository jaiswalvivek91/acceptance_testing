#features/Get_daily_WeatherForecast.feature
Feature: Get daily Weather Forecast




Scenario: User gets daily weather forecast
        Given user in on 5 day weather forecast page
        When  user click on any shown day
        Then  user gets get 3 hourly forecast of selected day
        And   user gets  current wind speed for next 3 hours
        And   user gets  current wind direction for next 3 hours
        And   user gets  Aggregate rainfall for next 3 hours
        And   user gets  Minimum temperatures for next 3 hours
        And   user gets  Maximum temperatures for next 3 hours










