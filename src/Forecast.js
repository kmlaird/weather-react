import React, { useState } from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  const [maxTemp, setMaxTemp] = useState(null);
  const [minTemp, setMinTemp] = useState(null);
  const [icon, setIcon] = useState(null);

  function showForecast(response) {
    setMaxTemp(response.data.main.temp_max);
    setMinTemp(response.data.main.temp_min);
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.list.weather[0].icon}@2x.png`
    );
  }

  let url = `api.openweathermap.org/data/2.5/forecast/daily?q=${props.city}&appid=667d9f573c8af4c33457be5d561a9148&units=imperial`;
  axios.get(url).then(showForecast);

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
}
