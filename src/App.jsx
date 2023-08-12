import { useEffect, useState } from 'react';
import LeftContainer from './components/LeftContainer';
import RightContainer from './components/RightContainer';
import './App.css';



function App() {

  const API_KEY = process.env.REACT_APP_API 
  const [background, setBackground] = useState("");
  const [weatherData, setWeatherData] = useState({})
  const [userInput,setUserInput]=useState("")


  let city = "pune"


  async function getWeatherData() {

    try {
      const fetchData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
      const APIdata = await fetchData.json()

      const { temp, feels_like, humidity } = APIdata.main

      const windSpeed = APIdata.wind.speed;

      const location = APIdata.name;

      const { country, sunrise, sunset } = APIdata.sys;

      const { main, description } = APIdata.weather[0]
      


      setWeatherData({
        temp,
        feels_like,
        humidity,
        windSpeed,
        country,
        sunrise,
        sunset,
        location,
        main,
        description
      })

    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => { setBackground(`/images/${weatherData.main}.jpg`); getWeatherData() }, [background,city]);



  return (
    <>

      <div className='Main-Container'  >

        <img className='background-img' src={background} alt=""/>
       
        <div className="content-container">

          <LeftContainer
            setUserInput={setUserInput}
            temperature={weatherData.temp}
            humidity={weatherData.humidity}
            country={weatherData.country}
            location={weatherData.location}
            
          />

          <RightContainer
            windSpeed={weatherData.windSpeed}
            feelsLike={weatherData.feels_like}
            sunrise={weatherData.sunrise}
            sunset={weatherData.sunset}
            weather={weatherData.main}
           description={weatherData.description}
          />

        </div>





      </div>

    </>
  );
}

export default App;
