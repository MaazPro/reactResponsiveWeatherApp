const API_KEY= 'c893dea4423c28da57542bf07b0961bb';

const getFormattedWeatherData = async (city, units = "metrics") =>{
    // const URL= `https://api.openweathermap.org/data/2.5/weather?q=${"paris"},uk&APPID=${API_KEY}&units=${units}`;
    const URL= `https://api.openweathermap.org/data/2.5/weather?q=${city},uk&APPID=c893dea4423c28da57542bf07b0961bb&units=${units}`;
    // https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=c893dea4423c28da57542bf07b0961bb&units=metrics
    const data = await fetch(URL)
    .then((res)=> res.json())
    .then((data)=> data)
    
    console.log(data);
}

export {getFormattedWeatherData}