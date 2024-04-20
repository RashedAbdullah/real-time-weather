const locationsData = [
  {
    location: "Dhaka",
    latitude: 23.810331,
    longitude: 90.412521,
  },
  {
    location: "Feni",
    latitude: 22.991859,
    longitude: 91.389687,
  },
  {
    location: "Delhi",
    latitude: 77.102493,
    longitude: 28.70406,
  },
  {
    location: "New York",
    latitude: 40.7127281,
    longitude: -74.0060152,
  },
];

const getLocations = () => {
  return locationsData;
};
const getLocationsByCity = (city) => {
  if (!city) return null;
  const filteredCities = locationsData.filter((loc) => loc.location === city);
  if (filteredCities.length > 0) {
    return filteredCities[0];
  } else {
    const defaultLocation = {
      location: "",
      latitude: 0,
      longitude: 0,
    };
    return defaultLocation;
  }
};

export { getLocations, getLocationsByCity };
