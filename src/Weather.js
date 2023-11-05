import './Weather.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'

export default function Weather() {

return <div className="Weather">
<form>
  <div className="row">
    <div className="col-9">
      <input
        type="search"
        placeholder="enter a city"
        className="form-control" 
        autoFocus="on"
      />
    </div>
    <div className="col-3">
      <input type="submit" value="search" className="btn btn-primary" /> 
    </div>
  </div>
</form>
<h1>New York</h1>
<ul>
  <li>Monday 07:00</li>
  <li>Cloudy</li>
</ul>
<div className="row mt-3">
  <div className="col-6">
    <div className="clearfix">
      <img
        src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
        alt="Cloudy"
        className="float-left"
      />
      <div className="float-left">
        <span className="temperature">6</span>
        <span className="Unit">°C</span>
      </div>
    </div>
  </div>
  <div className="col-6">
    <ul>
      <li>Precipitation</li>
      <li>Humidity</li>
      <li>Wind</li>
    </ul>
  </div>
</div>
</div>

}