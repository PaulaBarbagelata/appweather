import React, {useState} from 'react';
import './WeatherForecast.css';
import axios from 'axios';

export default function WeatherForecast(props){
    let [loaded, setLoaded]= useState(false)
    let [forecast, setForecast]= useState(null);
    
    function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
      }

 if(loaded) { 
    console.log(forecast)
    return (
    <div className="WeatherForecast">
<div className="row"> 
<div className="col"> 
<div className="ForecastDay"> Sat</div>
<div className="ForecastIcon"> <img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/clear-sky-day.png" alt="" />  </div>
<div className="ForecastTemperatures">
<span className="ForecastTemp-max">  </span>
<span className="ForecastTemp-min">  </span>
 </div>


</div>

</div>
    </div>
)
    

 } else {
   
    let apiKey="c8b24acb0feab485c6f630f018577toc"
    let longitude= props.coordinates.longitude
    let latitude=  props.coordinates.latitude
    let apiUrl= `https://api.shecodes.io/weather/v1/current?lon=${longitude}&lat=${latitude}&key=${apiKey}&units=metric`;
    
   axios.get(apiUrl).then(handleResponse);
   return null;
 }
 
}