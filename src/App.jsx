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

      const weather = APIdata.weather[0].main
      console.log(weather)

      setWeatherData({
        temp,
        feels_like,
        humidity,
        windSpeed,
        country,
        sunrise,
        sunset,
        location,
        weather
      })

    } catch (e) {
      console.log(e)
    }
  }
  useEffect(() => { setBackground(`/images/${weatherData.weather}.jpg`); getWeatherData() }, [background,city]);



  return (
    <>

      <div className='Main-Container'  >

        <img className='background-img' src={background} alt="Background Image" />

        <div className="content-container">

          <LeftContainer
            setUserInput={setUserInput}
            temperature={weatherData.temp}
            
          />


          <RightContainer />

        </div>





      </div>

    </>
  );
}

export default App;
