import camelize from "camelize";

export const restaurantsRequest = (location = "37.7749295,-122.4194155") => {
  return fetch(
    `https://us-central1-whatsappclone-6794f.cloudfunctions.net/placesNearby?location=${location}`
  ).then((res) => {
    return res.json();
  });
};
export const restaurantsTransform = ({ results = [] }) => {
  const mappedResults = results.map((restaurant) => {
    return {
      ...restaurant,
      address: restaurant.vicinity,
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      isClosedTemporarily: restaurant.business_status === "CLOSED_TEMPORARILY",
    };
  });
  return camelize(mappedResults);
};
