import React from "react";
import FormattedDate from './FormattedDate.js';

export default function Weatherinfo(props){
return (
    <div className="Weatherinfo" >

    <h1>{props.data.city}</h1>
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
            <span className="temperature">
              {Math.round(props.data.temperature)}
            </span>
            <span className="Unit">°C</span>
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