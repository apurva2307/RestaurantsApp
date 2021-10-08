import React from "react";
import { ScrollView, Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";
import { Text } from "../components/typography/TextComponent";
import { useNavigation } from "@react-navigation/native";
import { Card } from "react-native-paper";

const FavoriteBarContainer = styled(Card)`
  padding-left: ${(props) => props.theme.space[3]};
  padding-right: ${(props) => props.theme.space[3]};
`;

const FavoritesBar = ({ favorites }) => {
  const { navigate } = useNavigation();
  if (!favorites.length) {
    return (
      <FavoriteBarContainer>
        <Text variant="caption">No Favorite available</Text>
      </FavoriteBarContainer>
    );
  }

  return (
    <FavoriteBarContainer elevation={2}>
      <Text variant="caption">Favorites</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {favorites.map((restaurant) => {
          return (
            <TouchableOpacity
              key={restaurant.name}
              style={{
                padding: 10,
                alignItems: "center",
                maxWidth: 120,
                marginRight: 8,
              }}
              onPress={() => navigate("RestaurantDetails", { restaurant })}
            >
              <Image
                source={{ uri: restaurant.photos[0] }}
                style={{ width: 120, height: 100, borderRadius: 10 }}
              />
              <Text
                center
                variant="caption"
                numberOfLines={3}
                style={{ textAlign: "center" }}
              >
                {restaurant.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </FavoriteBarContainer>
  );
};

export default FavoritesBar;
