import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  const [maxTemp, setMaxTemp] = useState(null);
  const [minTemp, setMinTemp] = useState(null);
  const [icon, setIcon] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function showForecast(response) {
    setMaxTemp(response.data.daily[0].temp.max);
    setMinTemp(response.data.daily[0].temp.min);
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.daily[0].weather[0].icon}@2x.png`
    );
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="forecast">
        <h2>Coming up in {props.city}</h2>
        <div className="fcast-row">
          <div className="fcast-col">
            <img src={icon} alt="icon" />
            <p>
              {Math.round(maxTemp)}°F | {Math.round(minTemp)}°F
            </p>
          </div>
          <div className="fcast-col">
            <img src={icon} alt="icon" />
            <p>
              {Math.round(maxTemp)}°F | {Math.round(minTemp)}°F
            </p>
          </div>
          <div className="fcast-col">
            <img src={icon} alt="icon" />
            <p>
              {Math.round(maxTemp)}°F | {Math.round(minTemp)}°F
            </p>
          </div>
          <div className="fcast-col">
            <img src={icon} alt="icon" />
            <p>
              {Math.round(maxTemp)}°F | {Math.round(minTemp)}°F
            </p>
          </div>
          <div className="fcast-col">
            <img src={icon} alt="icon" />
            <p>
              {Math.round(maxTemp)}°F | {Math.round(minTemp)}°F
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates?.lat}&lon=${props.coordinates?.lon}&appid=c8735bb7e8e2f8d8a38c7501f3cd47d3&units=imperial`;
    axios.get(url).then(showForecast);
  }
}
