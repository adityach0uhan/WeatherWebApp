import React from 'react'
import '../App.css'
import '../styles/rightContainer.css'

const RightContainer = () => {
  return (

    <>

      <div className="child-containers right-container">


        <div className="description-container">

          <div>logo</div>
          <div>weather</div>
          <div>description</div>

        </div>



        <div className="four-box-parent">

          <div>sunset</div>
          <div>sunrise</div>
          <div>feels like</div>
          <div> wind speed</div>

        </div>
        

      </div>
    </>

  )
}

export default RightContainer