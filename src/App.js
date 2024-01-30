import {useEffect} from 'react';
import './App.css';
import Card from './components/Card';
import Input from './components/input';
import Button from './components/Button';
import { useWeather } from './context/weather';

function App() {
  const weather =useWeather();

  useEffect(()=>{
    weather.fetchCurrentLocation();
  },[])
  return (
    <div className="App">
      <h1 className='title'> Weather Forecast</h1>
      <Input/>
      <Button value='Search'
      onClick={weather.fetchData}
      />
      <Card/>
      <Button value='Refresh' onClick={
        weather.fetchCurrentLocation
      }/>
    </div>
  );
}

export default App;
