import React, { useState, useEffect } from 'react';
import './WeatherForecast.css';
import axios from 'axios';
import WeatherForecastDay from './WeatherForecastDay';

export default function WeatherForecast({ coordinates }) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  useEffect(() => {
    let apiKey = "c8b24acb0feab485c6f630f018577toc";
    let lon = coordinates.longitude;
    let lat = coordinates.latitude;
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}&units=metric`;

    axios
      .get(apiUrl)
      .then((response) => {
        setForecast(response.data.daily);
        setLoaded(true);
      })
      .catch((error) => {
        console.error("Error fetching forecast data:", error);
        setLoaded(true);
      });
  }, [coordinates]);

  return (
    <div className="WeatherForecast">
      <div className="row">
        {loaded ? (
          forecast.map((dailyForecast, index) => (
            index < 5 && (
              <div className="col" key={index}>
                <WeatherForecastDay data={dailyForecast} />
              </div>
            )
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}