import React from "react";
import { useSelector } from "react-redux";
import "../styles/App.scss";
import { selectForecast } from "../store/forecastSlice";
import { selectLocation } from "../store/locationSlice";

export function ForecastCard() {
  const forecast = useSelector(selectForecast);
  const currentLocation = useSelector(selectLocation);
  const dayIntDictionary = {
    0: "Sun",
    1: "Mon",
    2: "Tues",
    3: "Wed",
    4: "Thur",
    5: "Fri",
    6: "Sat",
  };

  const getDayOfWeek = (unixDate) => {
    const dateObj = new Date(unixDate * 1000);
    return dayIntDictionary[dateObj.getDay()];
  };
  const getDate = (unixDate) => {
    const dateObj = new Date(unixDate * 1000);
    return `${dateObj.getMonth() + 1}/${dateObj.getDate()}`;
  };

  return forecast && forecast.length ? (
    <div className="row justify-content-center">
      <div className="col-sm-12 col-md-8">
        <div className="card fwf__card">
          <div className="card-body">
            <h5 className="card-title">five-day forecast</h5>
            <div className="card-text fwf__forecast--days-wrap">
              {forecast.map((day) => {
                return (
                  <div
                    className="fwf__forecast--day-detail-wrap"
                    key={`${day.dt}-day`}
                  >
                    <p className="fwf__forecast--day-detail-day">
                      {getDayOfWeek(day.dt)}
                    </p>
                    <p className="fwf__forecast--day-detail-date">
                      {getDate(day.dt)}
                    </p>
                    <div className="fwf__img--wrap fwf__img--wrap-sm">
                      <img
                        src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                        width="50px"
                        height="50px"
                        alt={day.weather[0].description}
                      />
                    </div>
                    <ul className="fwf__forecast--day-detail-list">
                      <li key={`${day.dt}-2`} className="fwf__forecast--day-li">
                        {day.weather[0].description}
                      </li>
                      <li key={`${day.dt}-3`} className="fwf__forecast--day-li">
                        high: {Math.round(day.temp.max)}˚F
                      </li>
                      <li key={`${day.dt}-4`} className="fwf__forecast--day-li">
                        low:
                        <br />
                        {Math.round(day.temp.min)}˚F
                      </li>
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : currentLocation ? (
    <div className="row justify-content-center">
      <p className="fwf__forecast-card--warn">
        Forecast is only available if current location is used.
      </p>
    </div>
  ) : null;
}

export default ForecastCard;
