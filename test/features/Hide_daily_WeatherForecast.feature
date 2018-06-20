#features/Hide_daily_WeatherForecast.feature
Feature: Hide daily Weather Forecast
 


Scenario: User can hide daily forecast
        Given 3 hourly forecast for a day is visible to user
        When  user click on 3 hourly forecast day
        Then  3 hourly forecast automatically
        





