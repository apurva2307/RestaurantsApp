import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import RestaurentInfoCard from "../components/RestaurentInfo";
import { useRestaurantContext } from "../../../services/restaurants/restaurantsContext";
import { ActivityIndicator } from "react-native-paper";
import { Text } from "../../../components/typography/TextComponent";
import SearchComponent from "../components/SearchComponent";
import { useLocationContext } from "../../../services/location/locationContext";
import FavoritesBar from "../../FavoritesBar";
import { useFavoriteContext } from "../../../services/favorites/favoriteContext";
import FadeInView from "../../../components/animations/FadeAnimation";

const RestaurentScreen = ({ navigation }) => {
  const { restaurants, isLoading, error, retrieveRestaurants } =
    useRestaurantContext();
  const { location, locationError } = useLocationContext();
  const { favorites } = useFavoriteContext();
  const [isToggled, setIsToggled] = React.useState(false);

  React.useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);
  return (
    <View>
      <SearchComponent
        onFavoritesToggle={() => setIsToggled(!isToggled)}
        isFavoritesToggled={isToggled}
      />
      {isLoading && (
        <View
          style={{
            height: "80%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator animating={true} color="tomato" size="large" />
        </View>
      )}
      {(error || locationError) && (
        <View style={{ marginLeft: 16 }}>
          <Text variant="body" style={{ color: "red" }}>
            Something went wrong during retrieval of data.
          </Text>
        </View>
      )}
      {isToggled && <FavoritesBar favorites={favorites} />}
      <View style={{ marginBottom: 140 }}>
        <FlatList
          data={restaurants}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("RestaurantDetails", { restaurant: item })
              }
            >
              <FadeInView>
                <RestaurentInfoCard restaurant={item} />
              </FadeInView>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.name.toString()}
          contentContainerStyle={{ padding: 16 }}
        />
      </View>
    </View>
  );
};

export default RestaurentScreen;
