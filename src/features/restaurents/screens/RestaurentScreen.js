import React from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import RestaurentInfoCard from "../components/RestaurentInfo";
import { useRestaurantContext } from "../../../services/restaurants/restaurantsContext";
import { ActivityIndicator } from "react-native-paper";
import { Text } from "../../../components/typography/TextComponent";
import SearchComponent from "../components/SearchComponent";
import { useLocationContext } from "../../../services/location/locationContext";

const RestaurentScreen = ({ navigation }) => {
  const { restaurants, isLoading, error, retrieveRestaurants } =
    useRestaurantContext();
  const { location } = useLocationContext();

  React.useEffect(() => {
    if (location) {
      const locationString = `${location.lat},${location.lng}`;
      retrieveRestaurants(locationString);
    }
  }, [location]);
  return (
    <View>
      <SearchComponent />
      {isLoading && (
        <View
          style={{
            height: "85%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ActivityIndicator animating={true} color="tomato" size="large" />
        </View>
      )}
      {error && (
        <View
          style={{
            height: "85%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text variant="body">Something went wrong.</Text>
        </View>
      )}
      <FlatList
        data={restaurants}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("RestaurantDetails", { restaurant: item })
            }
          >
            <RestaurentInfoCard restaurant={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.name.toString()}
        contentContainerStyle={{ padding: 16 }}
      />
    </View>
  );
};

export default RestaurentScreen;
