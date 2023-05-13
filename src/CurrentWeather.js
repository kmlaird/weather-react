import React, { useState } from "react";
import axios from "axios";
import Forecast from "./Forecast";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  const [temperature, setTemperature] = useState(null);
  const [maxTemp, setMaxTemp] = useState(null);
  const [minTemp, setMinTemp] = useState(null);
  const [feelsLike, setFeelsLike] = useState(null);
  const [description, setDescription] = useState(null);
  const [humidity, setHumidity] = useState(null);
  const [wind, setWind] = useState(null);
  const [visibility, setVisibility] = useState(null);
  const [icon, setIcon] = useState(null);
  const [sunrise, setSunrise] = useState(null);
  const [sunset, setSunset] = useState(null);
  const [coordinates, setCoordinates] = useState(null);
  const [loaded, setLoaded] = useState(false);
  function showWeather(response) {
    setTemperature(response.data.main.temp);
    setFeelsLike(response.data.main.feels_like);
    setMaxTemp(response.data.main.temp_max);
    setMinTemp(response.data.main.temp_min);
    setDescription(response.data.weather[0].main);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setVisibility(response.data.visibility);
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    setSunrise(formatDate(response.data.sys.sunrise * 1000));
    setSunset(formatDate(response.data.sys.sunset * 1000));
    setCoordinates(response.data.coord);
    setLoaded(true);
  }

  function formatDate(timestamp) {
    let now = new Date(timestamp);
    let hours = now.getHours();
    if (hours < 10) {
      hours = `0${hours}`;
    }
    let minutes = now.getMinutes();
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }

    return `${hours}:${minutes}`;
  }

  if (loaded) {
    return (
      <div className="current-weather">
        <h2>Currently in {props.city}</h2>
        <div className="cw-row">
          <div className="cw-col ct">
            <div className="ct-col">
              <img src={icon} alt="icon" />
              <p>{description}</p>
            </div>
            <div className="ct-col">
              <h3>{Math.round(temperature)}°F</h3>
              <p>Feels like {Math.round(feelsLike)}°F</p>
            </div>
          </div>
          <div className="cw-col">
            <p>
              <span id="temp-max">{Math.round(maxTemp)}°F</span> |{" "}
              <span id="temp-min">{Math.round(minTemp)}°F</span>
            </p>
            <p>
              Humidity: <strong>{Math.round(humidity)}%</strong>
            </p>
            <p>
              Wind: <strong>{Math.round(wind)} miles/hr</strong>
            </p>
            <p>
              Visibility: <strong>{visibility} miles</strong>
            </p>
          </div>
          <div className="cw-col">
            <p>
              Sunrise: <strong>{sunrise}</strong>
            </p>
            <p>
              Sunset: <strong>{sunset}</strong>
            </p>
          </div>
        </div>
        <Forecast city={props.city} coordinates={coordinates} />
      </div>
    );
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=667d9f573c8af4c33457be5d561a9148&units=imperial`;
    axios.get(url).then(showWeather);
  }
}
