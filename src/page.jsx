import Header from "./components/header/header";
import WeatherBoard from "./components/weatherBoard/weatherBoard";
import FavouriteProvider from "./contexts/favouriteContext";
import LocationProvider from "./contexts/locationContext";
import WeatherProvider from "./contexts/weatherContext";

const Page = () => {
  return (
    <div>
      <WeatherProvider>
        <FavouriteProvider>
          <LocationProvider>
            <Header />
            <div className="bg-body font-[Roboto] text-light bg-[url('../assets/body-bg.png')] bg-no-repeat bg-cover h-screen grid place-items-center">
              <WeatherBoard />
            </div>
          </LocationProvider>
        </FavouriteProvider>
      </WeatherProvider>
    </div>
  );
};

export default Page;
