import { useContext, useState } from "react";
import searchIcon from "../../assets/search.svg";
import { LocationContext } from "../../contexts";
import { getLocationsByCity } from "../../data/locations-data";

const SearchLocation = () => {
  const { selectedLocation, setSelectedLocation } = useContext(LocationContext);
  const [inputTerm, setInputTerm] = useState("");

  const handleSearchLocation = (e) => {
    e.preventDefault();
    if (inputTerm.trim() === "") {
      console.log("Enter a location");
    } else {
      const searchedLocation = getLocationsByCity(inputTerm);
      console.log(searchedLocation);
      setSelectedLocation({ ...searchedLocation });
      setInputTerm("");
    }
  };

  return (
    <>
      <form onSubmit={handleSearchLocation}>
        <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
          <input
            className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none"
            placeholder="Search Location"
            value={inputTerm}
            onChange={(e) => setInputTerm(e.target.value)}
          />
          <button type="submit">
            <img src={searchIcon} />
          </button>
        </div>
      </form>
    </>
  );
};

export default SearchLocation;
