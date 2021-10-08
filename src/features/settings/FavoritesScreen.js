import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { useFavoriteContext } from "../../services/favorites/favoriteContext";
import RestaurantInfoCard from "../restaurents/components/RestaurentInfo";
import { Text } from "../../components/typography/TextComponent";
import { RestaurantList } from "../restaurents/components/RestaurantlistStyle";

const NoFavouritesArea = styled.View`
  align-items: center;
  justify-content: center;
`;
export const FavouritesScreen = ({ navigation }) => {
  const { favorites } = useFavoriteContext();

  return favorites.length ? (
    <RestaurantList
      data={favorites}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetails", {
                restaurant: item,
              })
            }
          >
            <RestaurantInfoCard restaurant={item} />
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item.name}
    />
  ) : (
    <NoFavouritesArea>
      <Text center>No favourites yet</Text>
    </NoFavouritesArea>
  );
};
