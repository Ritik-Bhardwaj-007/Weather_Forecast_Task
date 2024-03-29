const baseUrl = "https://api.weatherapi.com/v1/forecast.json?key=ef59b6751b3e4c2d8c8140702230411";

export const getWeatherDataForCity = async (city) => {
  try {
    const response = await fetch(`${baseUrl}&q=${city}&days=5&aqi=yes&alerts=no`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather data for city:', error);
    return null;
  }
};

export const getWeatherDataForLocation = async (lat, lon) => {
  try {
    const response = await fetch(`${baseUrl}&q=${lat},${lon}&days=5&aqi=yes&alerts=no`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching weather data for location:', error);
    // Handle the error as needed
    return null;
  }
};
