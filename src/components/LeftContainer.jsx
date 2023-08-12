import React from 'react';
import '../App.css';
import '../styles/leftContainer.css'

const LeftContainer = ({ temperature, humidity, country, location }) => {

  const sendSearchData = () => {
    console.log()
  }

  return (
    <div className="child-containers left-container">
      {/* input box  */}
      <div className="input-box-container">
        <input className='search-bar' type="search" />
        <button className='search-btn' onClick={sendSearchData}><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>

      {/* temperature box  */}
      <div className='temperature-container'>
        <p><i className="fa-solid fa-temperature-empty"></i> {temperature} Deg </p>
      </div>


      <div className="city-country-container">

        <div className="humidity-container">
          <span> Humidity {humidity}</span>
        </div>

        <div className="place">
          <span>{country}</span>
          <span>{location}</span>
        </div>

      </div>

    </div>




  )


}

export default LeftContainer