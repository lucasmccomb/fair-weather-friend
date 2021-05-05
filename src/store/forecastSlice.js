import { createSlice } from "@reduxjs/toolkit";
import { fetchForecastByCoords } from "../api/weather";

export const forecastSlice = createSlice({
  name: "forecast",
  initialState: {
    five_day: [],
  },
  reducers: {
    setFiveDay: (state, action) => {
      state.five_day = action.payload;
    },
  },
});

export const { setFiveDay } = forecastSlice.actions;

export const fetchForecast = (lat, lon) => {
  return async (dispatch, getState) => {
    try {
      const openWeatherResponse = await fetchForecastByCoords(lat, lon);
      console.log(
        `OPENWEATHER ONECALL RESPONSE FOR ${lat} ${lon} 🌦 `,
        openWeatherResponse.data
      );
      dispatch(setFiveDay(openWeatherResponse.data.daily.slice(0, 5)));
    } catch (error) {
      console.error(error.message);
    }
  };
};

export const selectForecast = (state) => state.forecast.five_day;

export default forecastSlice.reducer;
