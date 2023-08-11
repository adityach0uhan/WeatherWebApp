import React from 'react'
import '../App.css'
import '../styles/rightContainer.css'

const RightContainer = ({
  feelsLike,
  windSpeed,
  sunrise,
  sunset,
  weather,
  description}) => {
  
  return (

    <>
      
      <div className="child-containers right-container">

        <div className="description-container">

          <div><i class="fa-solid fa-cloud-sun"></i></div>
          <div>Weather{weather}</div>
          <div>{description}</div>

        </div>



        <div className="four-box-parent">

          <div>Sunset <br />{sunset}</div>
          <div>Sunrise <br /> {sunrise}</div>
          <div>Feels Like <br />{feelsLike}</div>
          <div>Wind Speed {windSpeed}</div>

        </div>
        

      </div>
    </>

  )
}

export default RightContainer