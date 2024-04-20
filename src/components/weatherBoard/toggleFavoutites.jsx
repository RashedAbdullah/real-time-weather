import { useContext, useEffect, useState } from "react";
import heart from "../../assets/heart.svg";
import heartRed from "../../assets/heart-red.svg";
import { FavouriteContext, WeatherContext } from "../../contexts";

const ToggleFavoutites = () => {
  const { data, addToFavourites, toggleFavourites } =
    useContext(FavouriteContext);
  const { weatherData } = useContext(WeatherContext);
  const { latitude, logitude, location } = weatherData;
  const [isFavourite, setIsFavourite] = useState(false);
  useEffect(() => {
    const found = data.find((loc) => loc.location === location);
    setIsFavourite(found);
  }, []);

  const handleFavourites = () => {
    const found = data.find((loc) => loc.location === location);
    if (!found) {
      addToFavourites(latitude, logitude, location);
    } else {
      toggleFavourites(location);
    }
    setIsFavourite(!isFavourite);
  };

  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button
          onClick={handleFavourites}
          className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]"
        >
          <span>Add to Favourite</span>
          <img src={isFavourite ? heartRed : heart} alt="" />
        </button>
      </div>
    </div>
  );
};

export default ToggleFavoutites;
