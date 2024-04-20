import { useState } from "react";
import Favourite from "./favourite";
import FavouriteModal from "./favouriteModal";
import Logo from "./logo";
import SearchLocation from "./searchbar";

const Header = () => {
  const [showFavs, setShowFavs] = useState(false);
  return (
    <header className="fixed w-full top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <Logo />
        <div className="flex items-center gap-4 relative">
          <SearchLocation />
          <Favourite onToggle={() => setShowFavs(!showFavs)} />
          {showFavs && <FavouriteModal />}
        </div>
      </nav>
    </header>
  );
};

export default Header;
