import {useEffect, useState} from 'react';
import './App.css';
import Card from './components/Card';
import Input from './components/input';
import Button from './components/Button';
import { useWeather } from './context/weather';
import ForecastCard from './components/ForecastCard';
import ToggleSwitch from './components/ToggleSwitch';

function App() {
  const weather =useWeather();
  const [isFahrenheit, setIsFahrenheit] = useState(false);

  const handleToggle = (isChecked) => {
    setIsFahrenheit(isChecked);
  };
 
  useEffect(()=>{
    weather.fetchCurrentLocation();
    // eslint-disable-next-line
  },[])
  return (
    <div className="App">
      <div><h1 className='title'> Weather Forecast</h1>
      <Input/>
      <Button value='Search'
      onClick={weather.fetchData}
      />
      <ToggleSwitch onChange={handleToggle}/>
      <Card isFahrenheit={isFahrenheit}/>
      <Button value='Refresh' onClick={
        weather.fetchCurrentLocation
      }/>
      </div>
      {weather.data===null? null:
      <div className='forecastCardDiv'>
        
      {[...Array(3)].map((_, i) => {
          return <ForecastCard key={i} dayRequired={i} isFahrenheit={isFahrenheit} />;
        })}

      </div>}
    </div>
  );
}

export default App;
