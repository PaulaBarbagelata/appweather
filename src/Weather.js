import React, { useState, useEffect } from 'react';
import WeatherForecast from "./WeatherForecast.js"
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import './Weather.css';
import Weatherinfo from './Weatherinfo.js';

export default function Weather(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState('Madrid'); 

  function handleResponse(response) {
    setReady(true);
    setWeatherData({
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      iconUrl: response.data.condition.icon_url,
      city: response.data.city,
      time: new Date(response.data.time * 1000),
      coordinates: response.data.coordinates
    });
  }

  useEffect(() => {
    if (ready) {
      return;
    }

    const apiKey = 'c8b24acb0feab485c6f630f018577toc';
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

    axios.get(apiUrl)
      .then(handleResponse)
      .catch(error => {
        console.error("Error fetching current weather data:", error);
        setReady(true);
      });
  }, [ready, city]);

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    setReady(false);
  }

  if (ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search" 
                placeholder="Enter a city"
                className="form-control custom-bg"
                autoFocus={true}
                value={city}
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input type="submit" value="Search" className="btn btn-light custom-bg" />
            </div>
          </div>
        </form>
        <Weatherinfo data={weatherData} />
        {ready && <WeatherForecast coordinates={weatherData.coordinates} />}
      </div>
    );
  } else {
    return "loading";
  }
}