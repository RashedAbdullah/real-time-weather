import { useEffect, useState } from "react";
const useLocalStotage = (key, defaultValue) => {
  const [data, setData] = useState(
    JSON.parse(localStorage.getItem(key)) ?? defaultValue
  );

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(data));
  }, [data, key]);

  return { data, setData };
};
export default useLocalStotage;
