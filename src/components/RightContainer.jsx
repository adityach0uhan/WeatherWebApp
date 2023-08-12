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



  const sunny = <i className="fa-solid fa - sun"></i>
  const rainy = <i className="fa-solid fa-cloud-rain"></i>
  const cloudy = <i className="fa-solid fa-cloud"></i>
  const haze = <i className="fa-solid fa-smog"></i>

  return (
    <>
      <div className="child-containers right-container">

        <div className="description-container">

          <div className='weather-icon'>{cloudy}</div>
          <div>{weather}</div>
          <div>{description}</div>

        </div>



        <div className="four-box-parent">

          <div>Sunset <br />{sunset}</div>
          <div>Sunrise <br /> {sunrise}</div>
          <div>Feels Like <br />{feelsLike}</div>
          <div>Wind Speed <br /> {windSpeed}</div>

        </div>


      </div>
    </>

  )
}

export default RightContainer