import { useContext } from "react";
import pin from "../../assets/pin.svg";
import { getLocalTime } from "./../../utils/date";

// weather icons:
import cloud from "../../assets/cloud.svg";
import haze from "../../assets/haze.svg";
import snow from "../../assets/icons/snow.svg";
import sunny from "../../assets/icons/sunny.svg";
import rainy from "../../assets/rainy.svg";
import thunder from "../../assets/thunder.svg";
import { WeatherContext } from "../../contexts";

const WeatherHeadLine = () => {
  const { weatherData } = useContext(WeatherContext);

  const getWeatherIcon = (climate) => {
    switch (climate) {
      case "Cloud":
        return cloud;
      case "Rain":
        return rainy;
      case "Snow":
        return snow;
      case "Clear":
        return sunny;
      case "Fog":
        return haze;
      case "Haze":
        return haze;
      case "Mist":
        return haze;
      case "Thunder":
        return thunder;
      default:
        return sunny;
    }
  };

  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(weatherData.climate)} alt="Climate" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">
            {weatherData.temperature}°
          </h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={pin} />
            <h2 className="text-2xl lg:text-[50px]">{weatherData.location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">
        {getLocalTime(weatherData.time, "time", false)} -{" "}
        {getLocalTime(weatherData.time, "date", false)}
      </p>
    </div>
  );
};

export default WeatherHeadLine;
