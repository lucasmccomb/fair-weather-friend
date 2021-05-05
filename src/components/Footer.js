import React, { PureComponent } from "react";
import "../styles/App.scss";

class Footer extends PureComponent {
  render() {
    return (
      <div className="fwf__Footer--wrap">
        <div className="row justify-content-center">
          <div className="fwf__Footer">
            <p className="fwf__Footer--p">
              Created by Lucas McComb — source code{" "}
              <a
                href="https://github.com/lucasmccomb/fair-weather-friend"
                target="_blank"
                rel="noreferrer"
              >
                here
              </a>
              .
            </p>
            <p className="fwf__Footer--p">
              Weather data provided by{" "}
              <a
                href="https://openweathermap.org/"
                target="_blank"
                rel="noreferrer"
              >
                OpenWeather
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
