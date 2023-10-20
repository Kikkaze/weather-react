import React from "react";
import './App.css';
import axios from 'axios';
import { useState } from "react";
import { WanderingPet } from "react-wandering-pet";

export default function App(props) {
  let apiKey = `caa883a4a60d93878755b08a933f74ea`;
	let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
	axios.get(apiUrl).then(showTemp);
  const [temp, setTemp] = useState("");
  const [city, setCity] = useState("")

  
  function showTemp (response) {
    console.log(response)
    setTemp(Math.round(response.data.main.temp));
    setCity(response.data.name);
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>The temperature in {city} today is {temp}°C</h1>
        <WanderingPet
      src="https://cdn.dribbble.com/users/6191/screenshots/1664613/media/38ae1c60b44aba78fa6e2f32f6d8004d.gif"
      height={150}
      className=""
      heightOffset={-5}
      maxLimitOffset={20} // When will the GIF reset and repeat offset from the right edge of the screen.
      movementInterval={10} // The number (milliseconds) at which will add movementOffset to the GIF to move it.
      movementOffset={0.8} // The number of pixels at which the GIF will move by for each interval.
      startingOffset={-20} // The offset at which the GIF starts from.
    />
      </header>
    </div>
  );
}
