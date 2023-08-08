import { useEffect, useState } from 'react';

import './App.css';
function App() {
  
  const [background, setBackground] = useState("");
  const [weatherData, setWeatherData] = useState([])

  function getWeatherData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.API_KEY}`)
      .then(response => response.json())
      .then(data => setWeatherData(data))
      .catch(error => console.log(error))
  }


  let weatherMood = "sunny";

  let city = "pune"


  useEffect(() => { setBackground(`/images/${weatherMood}.jpg`); getWeatherData() }, [background]);






  return (
    <>

      <div className='Main-Container'  >


        <img className='background-img' src={background} alt="" />

        {console.log(weatherData.temp)}




      </div>

    </>
  );
}

export default App;
