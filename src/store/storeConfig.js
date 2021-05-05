import { configureStore } from "@reduxjs/toolkit";
import currentWeatherReducer from "./currentWeatherSlice";
import forecastReducer from "./forecastSlice";
import locationReducer from "./locationSlice";
import loadingReducer from "./loadingSlice";

export const store = configureStore({
  reducer: {
    currentWeather: currentWeatherReducer,
    forecast: forecastReducer,
    location: locationReducer,
    loading: loadingReducer,
  },
});
