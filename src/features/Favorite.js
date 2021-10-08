import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useFavoriteContext } from "../services/favorites/favoriteContext";
import styled from "styled-components/native";
import AntDesign from "react-native-vector-icons/AntDesign";

const FavoriteButton = styled(TouchableOpacity)`
  background-color: transparent;
  border-color: #20232a;
  position: absolute;
  top: 22px;
  right: 25px;
  z-index: 9;
`;

const Favorite = ({ restaurant }) => {
  const { favorites, addToFavorites, removeFromFavorites } =
    useFavoriteContext();
  const isFavorite = favorites.find(
    (item) => item.placeId === restaurant.placeId
  );
  return (
    <FavoriteButton
      onPress={() =>
        isFavorite
          ? removeFromFavorites(restaurant)
          : addToFavorites(restaurant)
      }
    >
      <AntDesign
        name={isFavorite ? "heart" : "hearto"}
        size={24}
        color={isFavorite ? "red" : "white"}
      />
    </FavoriteButton>
  );
};

export default Favorite;
