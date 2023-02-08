import "./App.css";
import Card from "./components/card";
import Input from "./components/input";
import Button from "./components/button";
import { useWeather } from "./context/weather";
import { useEffect } from "react";

function App() {
  const weather = useWeather();
  console.log(weather, "weather consoling");

  useEffect(() => {
    weather.fetchCurrentUserLocation();
  }, []);
  return (
    <div
      className="App"
      style={{
          backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
         height:"100vh" ,backgroundImage: `url(${"https://images.unsplash.com/photo-1500964757637-c85e8a162699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1503&q=80"})`,
      }}
    >
      <h1>Weather Forecasting App</h1>
      <Input />
      <Button onClick={weather.fetchData} value="Search" />
      <Card />
      <Button onClick={() => window.location.reload()} value="Refresh" />
    </div>
  );
}

export default App;
