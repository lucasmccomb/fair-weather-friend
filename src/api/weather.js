import axios from "axios";

export const fetchWeatherByZip = (zipCode) =>
  axios.get(
    `https://api.openweathermap.org/data/2.5/weather?zip=${zipCode}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=imperial`
  );

export const fetchWeatherByCoords = (lat, lon) =>
  axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=imperial`
  );

export const fetchForecastByCoords = (lat, lon) =>
  axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=imperial`
  );
