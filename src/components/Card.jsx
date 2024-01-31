import React from 'react';
import { useWeather } from '../context/weather';
const Card= ({isFahrenheit})=>{
    const weather= useWeather();
    const currTemp=weather.data?.current;
    const forecastTemp=weather.data?.forecast;
    const tempType=isFahrenheit? 'F':'C';
    return (
        <div className='card'>
            <img alt='Weather Icon' src={currTemp?.condition?.icon}></img>
            <h2>Description: {currTemp?.condition?.text}</h2>
            <h2> Now: {isFahrenheit ? currTemp?.temp_f : currTemp?.temp_c}&deg; {tempType}</h2>
            <h3>Minimum:{isFahrenheit ? forecastTemp?.forecastday[0]?.day.mintemp_f : forecastTemp?.forecastday[0]?.day.mintemp_c}&deg; {tempType},
             Maximum:{isFahrenheit ? forecastTemp?.forecastday[0]?.day.maxtemp_f : forecastTemp?.forecastday[0]?.day.maxtemp_c}&deg; {tempType}</h3>
            <h3>Humidity: {currTemp?.humidity}</h3>
            <h3>Wind Speed: {currTemp?.wind_kph} Kph to {currTemp?.wind_degree} of {currTemp?.wind_dir}</h3>
            <h4> Location: {weather.data?.location?.name},{weather.data?.location?.region},{weather.data?.location?.country}</h4>
        </div>
    )
}
export default Card;