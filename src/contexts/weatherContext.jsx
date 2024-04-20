import { WeatherContext } from ".";
import { useWeather } from "../hooks";

// eslint-disable-next-line react/prop-types
const WeatherProvider = ({ children }) => {
  const { weatherData, err, loadingData } = useWeather();
  return (
    <WeatherContext.Provider value={{ weatherData, err, loadingData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
