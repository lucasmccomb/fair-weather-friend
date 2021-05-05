import React from "react";
import { useSelector } from "react-redux";
import "../styles/App.scss";
import { Compass } from "react-bootstrap-icons";
import { selectCurrentWeather } from "../store/currentWeatherSlice";

export function CurrentWeatherCard() {
  const currentWeather = useSelector(selectCurrentWeather);

  const parseCloudInt = (cloudString) => {
    const cloudInt = parseInt(cloudString);
    let cloudiness = "clear";
    if (cloudInt > 95) {
      cloudiness = "overcast";
    } else if (cloudInt > 80) {
      cloudiness = "mostly cloudy";
    } else if (cloudInt < 80 && cloudInt > 40) {
      cloudiness = "partially cloudy";
    } else if (cloudInt < 40) {
      cloudiness = "mostly clear";
    } else if (cloudInt < 5) {
      cloudiness = "blue skies";
    }
    return cloudiness;
  };

  const parseWindDir = (windDir) => {
    let compassDir = "N";
    if (windDir >= 22.5 && windDir < 67.5) {
      compassDir = "NE";
    } else if (windDir >= 67.5 && windDir < 112.5) {
      compassDir = "E";
    } else if (windDir >= 112.5 && windDir < 157.5) {
      compassDir = "SE";
    } else if (windDir >= 157.5 && windDir < 202.5) {
      compassDir = "S";
    } else if (windDir >= 202.5 && windDir < 247.5) {
      compassDir = "SW";
    } else if (windDir >= 247.5 && windDir < 292.5) {
      compassDir = "W";
    } else if (windDir >= 292.5 && windDir < 337.5) {
      compassDir = "NW";
    }
    return compassDir;
  };

  return currentWeather.general ? (
    <div className="row justify-content-center">
      <div className="col-sm-12 col-md-8">
        <div className="card fwf__card">
          <div className="card-body">
            <h5 className="card-title">
              {Math.round(currentWeather.temp)}˚F • {currentWeather.general}
            </h5>
            <div className="row g-0">
              <div className="col-7">
                <div className="card-text">
                  <ul className="fwf__currentWeatherCard--list">
                    <li>
                      feels like: {Math.round(currentWeather.feels_like)}˚F
                    </li>
                    <li>
                      wind: {Math.round(currentWeather.wind_speed)} mph{" "}
                      <Compass size={14} />{" "}
                      {parseWindDir(currentWeather.wind_dir)}
                    </li>
                    <li>humidity: {currentWeather.humidity}%</li>
                    <li>clouds: {parseCloudInt(currentWeather.clouds)}</li>
                  </ul>
                </div>
              </div>
              <div className="col-5">
                <div className="fwf__img--wrap fwf__img--wrap-lg">
                  <img
                    src={`https://openweathermap.org/img/wn/${currentWeather.icon_code}@2x.png`}
                    width="100px"
                    height="100px"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : null;
}

export default CurrentWeatherCard;
