import React, { useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthenticationContext } from "../authentication/authenticationContext";

export const FavoriteContext = React.createContext();

export const FavoriteContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const { user } = useAuthenticationContext();
  const storeFavorites = async (value, uid) => {
    try {
      if (value.length !== 0) {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(`@favorites${uid}`, jsonValue);
      }
    } catch (e) {
      console.log(e);
    }
  };
  const getFavorites = async (uid) => {
    try {
      const data = await AsyncStorage.getItem(`@favorites${uid}`);
      if (data) {
        setFavorites(JSON.parse(data));
      }
    } catch (e) {
      console.log(e);
    }
  };
  const addToFavorites = (restaurant) => {
    setFavorites([...favorites, restaurant]);
  };
  const removeFromFavorites = (restaurant) => {
    const newFavorites = favorites.filter(
      (item) => item.placeId !== restaurant.placeId
    );
    setFavorites(newFavorites);
  };

  useEffect(() => {
    if (user) {
      storeFavorites(favorites, user.uid);
    }
  }, [favorites, user]);

  useEffect(() => {
    if (user) {
      getFavorites(user.uid);
    }
  }, [user]);

  return (
    <FavoriteContext.Provider
      value={{ favorites, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoriteContext.Provider>
  );
};

export const useFavoriteContext = () => {
  return useContext(FavoriteContext);
};
