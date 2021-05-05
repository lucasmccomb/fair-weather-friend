import { createSlice } from "@reduxjs/toolkit";
import { fetchWeatherByZip, fetchWeatherByCoords } from "../api/weather";
import { setLocation } from "./locationSlice";
import { setLoading } from "./loadingSlice";

export const currentWeatherSlice = createSlice({
  name: "currentWeather",
  initialState: {
    temp: "",
    feels_like: "",
    wind_speed: "",
    wind_dir: "",
    humidity: "",
    clouds: "",
    general: "",
    location_name: "",
    icon_code: "",
  },
  reducers: {
    setWeatherValues: (state, action) => {
      state.temp = action.payload.temp;
      state.feels_like = action.payload.feels_like;
      state.wind_speed = action.payload.wind_speed;
      state.wind_dir = action.payload.wind_dir;
      state.humidity = action.payload.humidity;
      state.clouds = action.payload.clouds;
      state.general = action.payload.general;
      state.location_name = action.payload.location_name;
      state.icon_code = action.payload.icon_code;
    },
  },
});

export const { setWeatherValues } = currentWeatherSlice.actions;

export const fetchCurrentWeatherByZip = (zipCode) => {
  return async (dispatch, getState) => {
    try {
      const openWeatherResponse = await fetchWeatherByZip(zipCode);
      console.log(
        `OPEN WEATHER RESPONSE FOR ${zipCode} 🌦 `,
        openWeatherResponse.data
      );
      const weatherObj = parseCurrentWeatherResponse(openWeatherResponse.data);
      dispatch(setWeatherValues(weatherObj));
      dispatch(setLocation(weatherObj.location_name));
      dispatch(setLoading(false));
    } catch (error) {
      console.error(error.message);
    }
  };
};

export const fetchCurrentWeatherByCoords = (lat, lon) => {
  return async (dispatch, getState) => {
    try {
      const openWeatherResponse = await fetchWeatherByCoords(lat, lon);
      console.log(
        `OPEN WEATHER RESPONSE FOR ${lat} ${lon} 🌦 `,
        openWeatherResponse.data
      );
      const weatherObj = parseCurrentWeatherResponse(openWeatherResponse.data);
      dispatch(setWeatherValues(weatherObj));
      dispatch(setLocation(weatherObj.location_name));
      dispatch(setLoading(false));
    } catch (error) {
      console.error(error.message);
    }
  };
};

const parseCurrentWeatherResponse = (responseData) => ({
  temp: responseData.main.temp,
  feels_like: responseData.main.feels_like,
  wind_speed: responseData.wind.speed,
  wind_dir: responseData.wind.deg,
  humidity: responseData.main.humidity,
  clouds: responseData.clouds.all,
  general: responseData.weather[0].description,
  location_name: responseData.name,
  icon_code: responseData.weather[0].icon,
});

export const selectCurrentWeather = (state) => state.currentWeather;

export default currentWeatherSlice.reducer;
