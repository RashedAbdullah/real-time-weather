import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../contexts";

const useWeather = () => {
  const values = useContext(LocationContext);

  const [weatherData, setWeatherData] = useState({
    location: "",
    climate: "",
    temperature: "",
    minTemperature: "",
    maxTemperature: "",
    humidity: "",
    cloudPercentage: "",
    wind: "",
    time: "",
    logitude: "",
    latitude: "",
  });
  const [loadingData, setLoadingData] = useState({
    state: false,
    message: "",
  });
  const [err, setErr] = useState(null);

  const fetchingWeatherData = async (logitude, latitude) => {
    try {
      setLoadingData({
        ...loadingData,
        state: true,
        message: "Loading data...",
      });

      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${logitude}&appid=${
          import.meta.env.VITE_WEATHER_API_KEY
        }&units=metric`
      );
      if (!response.ok) {
        const errMsg = `Fetching data is failed ${response.status}`;
        throw new Error(errMsg);
      }
      const data = await response.json();
      const updateWeatherData = {
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0].main,
        temperature: data?.main?.temp,
        minTemperature: data?.main?.temp_min,
        maxTemperature: data?.main?.temp_max,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data?.wind?.speed,
        time: data?.dt,
        logitude: logitude,
        latitude: latitude,
      };
      setWeatherData(updateWeatherData);
    } catch (error) {
      setErr(err);
    } finally {
      setLoadingData({
        ...loadingData,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoadingData({
      ...loadingData,
      state: true,
      message: "Finding your location",
    });
    navigator.geolocation.getCurrentPosition((position) => {
      fetchingWeatherData(position.coords.longitude, position.coords.latitude);
    });
  }, []);

  return {
    weatherData,
    err,
    loadingData,
  };
};

export default useWeather;
