import React, { useEffect, useState } from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, Dimensions } from "react-native";
import Search from "./Search";
import { useLocationContext } from "../../services/location/locationContext";
import { useRestaurantContext } from "../../services/restaurants/restaurantsContext";
import MapCallout from "./MapCallout";

const MapScreen = () => {
  const { location } = useLocationContext();
  const { restaurants = [] } = useRestaurantContext();
  const { viewport, lat, lng } = location;
  const [latDelta, setLatDelta] = useState(0);
  useEffect(() => {
    const northeastLat = viewport.northeast.lat;
    const southwestLat = viewport.southwest.lat;
    setLatDelta(northeastLat - southwestLat);
  }, [location, viewport]);
  return (
    <View style={styles.container}>
      <Search />
      <MapView
        style={styles.map}
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant) => {
          return (
            <MapView.Marker
              key={restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <MapView.Callout>
                <MapCallout restaurant={restaurant} />
              </MapView.Callout>
            </MapView.Marker>
          );
        })}
      </MapView>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
