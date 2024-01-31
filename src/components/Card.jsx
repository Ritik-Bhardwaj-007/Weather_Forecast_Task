import React from 'react';
import { useWeather } from '../context/weather';

const Card = ({ isFahrenheit }) => {
  const weather = useWeather();
  const currTemp = weather.data?.current;
  const forecastTemp = weather.data?.forecast;
  const tempType = isFahrenheit ? 'F' : 'C';

  return (
    weather.data===null?<div className='card'>
       <p className='h3'>Please Check the City again</p>
    </div>:
    <div className='card'>
      <img alt='Weather Icon' src={currTemp?.condition?.icon}></img>
      <p className='h2'>Description: {currTemp?.condition?.text}</p>
      <p className='h2'>
        Now: {isFahrenheit ? currTemp?.temp_f : currTemp?.temp_c}&deg; {tempType}
      </p>
      <p className='h3'>
        Minimum:{' '}
        {isFahrenheit
          ? forecastTemp?.forecastday[0]?.day.mintemp_f
          : forecastTemp?.forecastday[0]?.day.mintemp_c}
        &deg; {tempType}, Maximum:{' '}
        {isFahrenheit
          ? forecastTemp?.forecastday[0]?.day.maxtemp_f
          : forecastTemp?.forecastday[0]?.day.maxtemp_c}
        &deg; {tempType}
      </p>
      <p className='h3'>Humidity: {currTemp?.humidity}</p>
      <p className='h3'>
        Wind Speed: {currTemp?.wind_kph} Kph to {currTemp?.wind_degree} of {currTemp?.wind_dir}
      </p>
      <p className='h4'>
        Location: {weather.data?.location?.name},{weather.data?.location?.region},
        {weather.data?.location?.country}
      </p>
    </div>
  );
};

export default Card;
