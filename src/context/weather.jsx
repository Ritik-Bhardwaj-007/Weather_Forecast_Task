import {createContext,useContext,useState} from 'react';
import {getWeatherDataForCity} from '../api'
import { getWeatherDataForLocation } from '../api';
export const WeatherContext= createContext(null);

export const useWeather=()=>{
   return useContext(WeatherContext);
   
}

export const WeatherProvider = (props)=>{
    const [data,setData]=useState('');
    const [searchCity,setSearchCity]=useState('');
    const fetchData= async ()=>{
        const response= await getWeatherDataForCity(searchCity);
        setData(response);
    }
    const fetchCurrentLocation=()=>{
        navigator.geolocation.getCurrentPosition((position)=>{
                getWeatherDataForLocation(position.coords.latitude,position.coords.longitude).then((data)=> setData(data))
        })
    }

    return (
        <WeatherContext.Provider value={{searchCity,data,setSearchCity,setData,fetchData,fetchCurrentLocation}}>
            {props.children}
        </WeatherContext.Provider>
    )
}