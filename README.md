# Fair Weather Friend

A location-based weather app build with React using the free OpenWeather API for meteorological data. Try it out here: <a href="https://fairweatherfriend.live"  target="_blank">https://fairweatherfriend.live</a>.

### Browser support:

- Chrome (macOS desktop & iOS mobile\*)
- Safari (macOS desktop & iOS mobile\*)
- Firefox (macOS desktop only)

<sub>\* Ensure that location services are enabled for Chrome or Safari on your iOS device. Go to `Settings > Privacy > Location Services` and select `Safari` or `Chrome` and enable location services by either selecting `Ask Next Time` or `While Using the App`.</sub>

### To run app locally:

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

### To run tests:

1. Follow steps 1-6 for running the app locally
2. Run `npm test` in terminal
3. See output

### To do:

- Improve tests
- Create build pipeline
- a11y compliance
- Containerize using Docker
- Add ability to use city name for location input
- Add hourly forecast
- Dark mode
- Improve large screen layout
- Add more animations/transitions
- Add default location
