import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { GeoAltFill } from "react-bootstrap-icons";
import {
  fetchCurrentWeatherByZip,
  fetchCurrentWeatherByCoords,
  setWeatherValues,
} from "../store/currentWeatherSlice";
import { fetchForecast, setFiveDay } from "../store/forecastSlice";
import { setLoading } from "../store/loadingSlice";
import { setLocation } from "../store/locationSlice";
import "../styles/App.scss";

export function LocationInput() {
  const dispatch = useDispatch();
  const locationInputRef = useRef(null);
  const geolocationAvailable = () => "geolocation" in navigator;

  const initLoadingAndClearStore = () => {
    dispatch(setLoading(true));
    dispatch(setLocation(""));
    dispatch(setFiveDay([]));
    dispatch(setWeatherValues({}));
  };

  const handleSubmitLocationInput = () => {
    initLoadingAndClearStore();
    const zipCode = locationInputRef.current.value;
    dispatch(fetchCurrentWeatherByZip(zipCode));
  };

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") handleSubmitLocationInput();
  };

  const handleGetCoords = () => {
    initLoadingAndClearStore();
    if (geolocationAvailable()) {
      navigator.geolocation.getCurrentPosition((position) => {
        dispatch(
          fetchCurrentWeatherByCoords(
            position.coords.latitude,
            position.coords.longitude
          )
        );
        dispatch(
          fetchForecast(position.coords.latitude, position.coords.longitude)
        );
      });
    }
  };

  return (
    <section>
      {geolocationAvailable ? (
        <>
          <div className="row justify-content-center">
            <button
              onClick={handleGetCoords}
              className="btn btn-primary fwf__btn--geolocate"
              type="button"
            >
              <GeoAltFill size={16} />
              {"  "}
              use current location
            </button>
          </div>
          <div className="row justify-content-center fwf__location-input--separator">
            — or —
          </div>
        </>
      ) : null}
      <div className="row justify-content-center">
        <div className="col-sm-10 col-md-6 col-lg-4">
          <label htmlFor="fairWeatherFriendZipCodeInput">enter zip code</label>
          <div className="input-group mb-3">
            <input
              className="form-control"
              id="fairWeatherFriendZipCodeInput"
              onKeyDown={handleOnKeyDown}
              placeholder="ex: 11249"
              ref={locationInputRef}
              type="text"
            />

            <button
              onClick={handleSubmitLocationInput}
              className="btn btn-outline-secondary fwf__btn--zip-submit"
              type="button"
              id="fairWeatherFriendZipCodeInput_btn"
            >
              submit
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationInput;
