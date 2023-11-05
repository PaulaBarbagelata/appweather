import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="Unit">
          °C | <a href="/#" onClick={convertToFahrenheit}>°F</a>
        </span>
      </span>
    );
  } else {
    const fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <span className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit)}</span>
        <span className="Unit">
          <a href="/#" onClick={convertToCelsius}>°C</a> | °F
        </span>
      </span>
    );
  }
}