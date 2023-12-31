import React from 'react'
import '../App.css'
import '../styles/rightContainer.css'

const RightContainer = ({
  feelsLike,
  windSpeed,
  sunrise,
  sunset,
  weather,
  description }) => {

  const weather_data= weather.toLowerCase();
  let currentWeather;
  const sunny = <i class="fa-solid fa-sun"></i>
  const rainy = <i className="fa-solid fa-cloud-rain"></i>
  const cloudy = <i class="fa-solid fa-cloud-rain"></i>
  const haze = <i className="fa-solid fa-smog"></i>
  const clear = <i class="fa-solid fa-cloud"></i>

  if (weather_data.includes("sunny")) {
    alert("sunny")
  } else if (weather_data.includes("haze")) {
    alert("haze")
  } else if (weather_data.includes("rain" || "rainy")) {
    alert("rain")
  } else if (weather_data.includes("cloudy" || "cloud")) {
    alert("cloudy")
  } else {
    alert("clear")
  }

 
  return (
    <>
      <div className="child-containers right-container">

        <div className="description-container">
          <div className='weather-icon'>{<i className="fa-solid fa-cloud-rain"></i>}</div>
          <div>{weather}</div>
          <div>{description}</div>
        </div>

         {/* those 4 boxer at the bottom  */}
        <div className="four-box-parent">
          <div>Sunset <br/>{sunset}</div>
          <div>Sunrise <br/> {sunrise}</div>
          <div>Feels Like <br/>{feelsLike}</div>
          <div>Wind Speed <br/> {windSpeed}</div>
        </div>

      </div>
    </>

  )
}

export default RightContainer