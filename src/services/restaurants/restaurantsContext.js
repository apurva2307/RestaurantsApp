import React, { useState, useContext, createContext } from "react";

import { restaurantsRequest, restaurantsTransform } from "./restaurantsService";

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const retrieveRestaurants = (location) => {
    setIsLoading(true);
    setRestaurants([]);
    setTimeout(() => {
      restaurantsRequest(location)
        .then(restaurantsTransform)
        .then((results) => {
          setError(null);
          setIsLoading(false);
          setRestaurants(results);
        })
        .catch((err) => {
          setRestaurants([]);
          setIsLoading(false);
          setError(err);
        });
    }, 2000);
  };

  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
        retrieveRestaurants,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};

export const useRestaurantContext = () => {
  return useContext(RestaurantsContext);
};
