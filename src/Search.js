import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setMessage(`current weather`);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type a city here"
          onChange={changeCity}
          className="search-input"
        />
        <input type="submit" value="Search" className="search-submit" />
      </form>
      {message}
    </div>
  );
}
