import React from 'react';
import { useWeather } from '../context/weather';
const Input=()=>{
    const weather = useWeather();
    return(
        <div>
            <input className='input-field'
            placeholder='  Search City'
            value={weather.searchCity} 
            onChange={(e)=>{weather.setSearchCity(e.target.value)}} />
        </div>
    )
}
export default Input;