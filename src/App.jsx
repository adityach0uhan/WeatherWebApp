import {  useState } from 'react';
import './App.css';
function App() {


  const [background, setBackground] = useState("")

  let weatherMood = "";
  let checkWeather = "rainy";
  switch (checkWeather) {

    case "rainy":
      return weatherMood="/images/rainy.jpg"
      break;
    
    case "sunny":
      return weatherMood = "/images/sunny.jpg";
      break;

  }
  

  setBackground("/images/cloudy.jpg")
  

  return (
    <>

      <div className='Main-Container' style={{
        background: `url(${background})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        minWidth:'100vw',
        minHeight: '100vh'
        }} >





      </div>
      
    </>
  );
}

export default App;
