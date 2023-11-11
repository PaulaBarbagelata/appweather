import React from 'react';
import './WeatherForecast.css';

export default function WeatherForecastDay(props){


    function maxTemperature() {
        let temperature =  Math.round(props.data.temperature.maximum)
        return  ` ${temperature}° `
    }
    function minTemperature() {
        let temperature =  Math.round(props.data.temperature.minimum)
        return  ` ${temperature}° `
    }

   
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

return (
<div> 
<div className="ForecastDay">{day()}</div>
<div className="ForecastIcon"><img
            src={props.data.condition.icon_url}
            alt=""
            
          />  </div>
<div className="ForecastTemperatures">
<span className="ForecastTemp-max"> {maxTemperature()} </span>
<span className="ForecastTemp-min">{minTemperature()}  </span>
 </div>



</div>

)

}