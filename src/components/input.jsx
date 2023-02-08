import React from "react";
import { useWeather } from "../context/weather";

const Input = () => {
  const weather = useWeather()
  console.log(weather)
  return (
    <div>
    <input
      className="button-74"
      value={weather.searchCity}
      onChange={(e)=> weather.setSearchCity(e.target.value)}
    />
    </div> 
  );
};

export default Input;
