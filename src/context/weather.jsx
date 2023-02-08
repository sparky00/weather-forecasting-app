import {createContext, useContext, useState} from "react";
import {getWeatherDataForCity, getWeatherDataForLocation} from "../api";

const weatherContext = createContext(null);

export const useWeather=()=>{
    return useContext(weatherContext)
};

export const WeatherProvider =(props)=>{
    const [data, setData] = useState(null);
    const [searchCity, setSearchCity]= useState(null);
    
const fetchData= async()=>{
    const response = await getWeatherDataForCity(searchCity);
    setData(response)
}

const fetchCurrentUserLocation =()=>{
    navigator.geolocation.getCurrentPosition((position)=>{
        getWeatherDataForLocation(position.coords.latitude, position.coords.longitude).then(data=>setData(data));
    })
}

    return (
    <weatherContext.Provider value={{searchCity, data, setSearchCity, fetchData,fetchCurrentUserLocation}} >
        {props.children}
    </weatherContext.Provider>
    )
}

