import { useEffect, useState } from 'react';
import coldBg from './assets/coldWeather.jpg'
import hotBg from './assets/sunnyWeather.jpg'
import Descriptions from './components/Descriptions';
import { getFormattedWeatherData } from './weatherService';
function App() {
  const [city, setCity] =useState("Paris");
  const [weather, setWeather] =useState(null);
  const [units, setUnits] = useState("metric");
  const [bg, setBg] = useState(coldBg)

  useEffect(()=>{
    const fetchWeatherData = async ()=> {
      const data = await getFormattedWeatherData(city, units);
      setWeather(data);

      const threshold = units === "metrics" ?20 : 60;
      if(data.temp <= threshold) setBg(coldBg)
      else setBg(hotBg);
    };

    fetchWeatherData();
  },[units,city])
  const handleUnitsClicked = (e)=>{
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);
    
    const isCelsius = currentUnit === "C";
    button.innerText = isCelsius ? "°F" : "°C";
    setUnits(isCelsius ? "metric" : "imperial");
  };

  const enterKeyPressed = (e)=>{
    if(e.keyCode === 13){
      setCity(e.currentTarget.value);
      e.currentTarget.blur();
    }
  }

  return (
    <div className="App" style={{backgroundImage: `url(${bg})`}}>
      <div className='overlay'>
        {
          weather && (
            <div className='container'>
          <div className='section section__inputs'>
            <input onKeyDown={enterKeyPressed} type='text' placeholder='Enter city...' />
            <button onClick={(e)=> handleUnitsClicked(e)}>°F</button>
          </div>
          
          <div className='section section__temperature'>
              <div className='icon'></div>
              <h3>{`${weather.name}, ${weather.country}`}</h3>
              <img src={weather.iconURL} alt='Weather icon'/>
              <h3>{weather.description}</h3>
            <div className='temperature'>
              <h1>{`${weather.temp.toFixed()}°${
                units=== "metric" ? "C" : "F"
              }`}</h1>
            </div>
          </div>
          {/* bottom description */}
          <Descriptions weather={weather} units={units} />
        </div>
          )
        }
      </div>      
    </div>
  );
}

export default App;
