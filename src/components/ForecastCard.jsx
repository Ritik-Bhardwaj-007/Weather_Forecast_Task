import React from 'react'
import { useWeather } from '../context/weather'

function ForecastCard({dayRequired,isFahrenheit}) {
    const weather= useWeather();
    const currTemp=weather.data?.current;
    const forecastTemp=weather.data?.forecast;
    const tempType=isFahrenheit? 'F':'C';
  return (
    <div className='forecastCard'>
      <p> Forecast Summary for {forecastTemp?.forecastday[dayRequired]?.date} </p>
      <img alt='Weather Icon' src={currTemp?.condition?.icon}></img>
      <p>Average Temperature : {isFahrenheit ? forecastTemp?.forecastday[dayRequired]?.day?.avgtemp_f : forecastTemp?.forecastday[dayRequired]?.day?.avgtemp_c}&deg; {tempType}</p>
      <p> Description : {currTemp?.condition.text}</p>
    </div>
  )
}

export default ForecastCard