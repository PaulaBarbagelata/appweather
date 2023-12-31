import React from "react";
import FormattedDate from './FormattedDate.js';
import WeatherTemperature from "./WeatherTemperature.js";
import './Weather.css';

export default function Weatherinfo(props){
return (
    <div className="Weatherinfo" >

    <h1>{props.data.city}, {props.data.country}</h1>
    <ul>
      <li> <FormattedDate date={props.data.time} /></li> 
      <li>{props.data.description}</li>
    </ul>
    <div className="row mt-3">
      <div className="col-6">
        <div className="clearfix">
          <img
            src={props.data.iconUrl}
            alt={props.data.description}
            className="float-left"
          />
          <div className="float-left">
          <WeatherTemperature celsius={props.data.temperature}/>
            
          </div>
        </div>
      </div>
      <div className="col-6">
        <ul>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind Speed: {props.data.wind} km/h</li>
        </ul>
      </div>
    </div>
    </div>
)
}