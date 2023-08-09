import { useEffect, useState } from 'react';

import './App.css';
function App() {

  const API_KEY = process.env.REACT_APP_API

  let weatherMood = "sunny";
  let city = "pune"

  
  const [background, setBackground] = useState("");
  // const [weatherData, setWeatherData] = useState([])
  useEffect(() => { setBackground(`/images/${weatherMood}.jpg`) }, [background]);
  
  
  async function getWeatherData() {
    
    try {
      const fetchData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
      const APIdata=await fetchData.json()
      
      const { temp, feels_like, humidity } = APIdata.main 
      const windSpeed = APIdata.wind.speed;
      const location = APIdata.name;

      const { country, sunrise, sunset } = APIdata.sys;
      console.log(country)
      
      
    } catch(e) {
      console.log(e)
    }
  }
  
  
  useEffect(() => { getWeatherData() }, [])

 









  return (
    <>

      <div className='Main-Container'  >


        <img className='background-img' src={background} alt="" />

        {/* {console.log(weatherData.weather[0].main)} */}




      </div>

    </>
  );
}

export default App;
