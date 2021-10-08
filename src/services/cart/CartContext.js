import React, { useState, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthenticationContext } from "../authentication/authenticationContext";

export const CartContext = React.createContext();

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [restaurant, setRestaurant] = useState(null);
  const { user } = useAuthenticationContext();
  //   const storeFavorites = async (value, uid) => {
  //     try {
  //       if (value.length !== 0) {
  //         const jsonValue = JSON.stringify(value);
  //         await AsyncStorage.setItem(`@favorites${uid}`, jsonValue);
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  //   const getFavorites = async (uid) => {
  //     try {
  //       const data = await AsyncStorage.getItem(`@favorites${uid}`);
  //       if (data) {
  //         setFavorites(JSON.parse(data));
  //       }
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   };
  const addToCart = (item, rst) => {
    if (!restaurant || restaurant.placeId !== rst.placeId) {
      setRestaurant(rst);
      setCart([item]);
    } else setCart([...cart, item]);
  };
  const clearCart = () => {
    setCart([]);
    setRestaurant(null);
  };

  //   useEffect(() => {
  //     if (user) {
  //       storeFavorites(favorites, user.uid);
  //     }
  //   }, [favorites, user]);

  //   useEffect(() => {
  //     if (user) {
  //       getFavorites(user.uid);
  //     }
  //   }, [user]);

  return (
    <CartContext.Provider value={{ addToCart, clearCart, restaurant, cart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
