# Fair Weather Friend

A basic location-based weather app created by Lucas McComb.

To run app locally:

1. Clone the repository & `cd` into `fair-weather-friend` directory.
2. Run `yarn install`
3. Create a file with the name `.env`
4. Get an API key from <a href="https://openweathermap.org/" target="_blank">OpenWeatherMap.org</a>
5. Open `.env` file and add the following line:
   `REACT_APP_OPENWEATHER_API_KEY={YOUR_OPEN_WEATHER_API_KEY}`
   (substitute `{YOUR_OPEN_WEATHER_API_KEY}` for the OpenWeather API key you got in step 4)
6. Save your `.env` file
7. Run `npm start`
8. Navigate to `http://localhost:3000/` in your browser
9. Click on `use current location` or enter a zip code to get weather information

To run tests:

1. Follow steps 1-6 for running the app locally
2. Run `npm test` in terminal
3. See output

### To do:

- Improve tests
- Add ability to interpret city name
- Add hourly forecast
