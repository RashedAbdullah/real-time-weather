import useLocalStotage from "../hooks/useStorage";
import { FavouriteContext } from "./index";

// eslint-disable-next-line react/prop-types
const FavouriteProvider = ({ children }) => {
  const { data, setData } = useLocalStotage("Favourites", []);
  const addToFavourites = (latitude, longitude, location) => {
    setData([
      ...data,
      {
        latitude: latitude,
        longitude: longitude,
        location: location,
      },
    ]);
  };

  const toggleFavourites = (loaction) => {
    const removeFavourite = data.filter((fav) => fav.location !== loaction);
    setData(removeFavourite);
  };
  return (
    <FavouriteContext.Provider
      value={{ data, addToFavourites, toggleFavourites }}
    >
      {children}
    </FavouriteContext.Provider>
  );
};

export default FavouriteProvider;
