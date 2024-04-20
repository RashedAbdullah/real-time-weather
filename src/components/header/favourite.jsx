import heart from "../../assets/heart.svg";
const Favourite = ({ onToggle }) => {
  return (
    <div
      onClick={onToggle}
      className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all text-white"
    >
      <img src={heart} alt="" />
      <span>Favourite Locations</span>
    </div>
  );
};

export default Favourite;
