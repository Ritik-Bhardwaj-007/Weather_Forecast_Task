const baseUrl="https://api.weatherapi.com/v1/current.json?key=ef59b6751b3e4c2d8c8140702230411";

export const getWeatherDataForCity =async (city)=>{
  const response= await fetch(`${baseUrl}&q=${city}&aqi=yes`);
  return await response.json();
}

export const getWeatherDataForLocaion =async (lat,lon)=>{
  const response= await fetch(`${baseUrl}&q=${lat},${lon}&aqi=yes`);
  return await response.json();
}