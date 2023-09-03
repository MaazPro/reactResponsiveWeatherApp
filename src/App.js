import { useEffect } from 'react';
import coldBg from './assets/coldWeather.jpg'
import hotBg from './assets/sunnyWeather.jpg'
import Descriptions from './components/Descriptions';
import { getFormattedWeatherData } from './weatherService';
function App() {

  useEffect(()=>{
    const fetchWeatherData = async ()=> {
      const data = await getFormattedWeatherData("karachi");
    };

    fetchWeatherData();
  },[])

  return (
    <div className="App" style={{backgroundImage: `url(${coldBg})`}}>
      <div className='overlay'>
        <div className='container'>
          <div className='section section__inputs'>
            <input type='text' name='city' placeholder='Enter city...' />
            <button>°F</button>
          </div>
          
          <div className='section section__temperature'>
              <div className='icon'></div>
              <h3>London, GB</h3>
              <img src='' alt='Weather icon'/>
              <h3>Cloudy</h3>
            <div className='temperature'>
              <h1>34°C</h1>
            </div>
          </div>
          {/* bottom description */}
          <Descriptions />
        </div>
      </div>      
    </div>
  );
}

export default App;
