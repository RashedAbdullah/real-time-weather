import { useContext } from "react";
import { FavouriteContext } from "../../contexts";

const FavouriteModal = () => {
  const { data } = useContext(FavouriteContext);
  console.log(data);
  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
      <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
      {data.length > 0 ? (
        data.map((loc) => (
          <ul
            key={loc.location}
            className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer"
          >
            <li className="hover:bg-gray-200">{loc.location}</li>
          </ul>
        ))
      ) : (
        <p className="text-center mt-2 opacity-40 text-gray-400">
          No location found
        </p>
      )}
    </div>
  );
};

export default FavouriteModal;
