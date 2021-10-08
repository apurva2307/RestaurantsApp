import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ResIcon from "react-native-vector-icons/Ionicons";
import RestaurantNavigator from "./RestaurantNavigator";
import MapScreen from "../../features/map/MapScreen";
import { FavoriteContextProvider } from "../../services/favorites/favoriteContext";
import { LocationContextProvider } from "../../services/location/locationContext";
import { RestaurantsContextProvider } from "../../services/restaurants/restaurantsContext";
import SettingsNavigator from "./SettingsNavigator";
import CheckoutScreen from "../../features/checkout/CheckoutScreen";
import { CartContextProvider } from "../../services/cart/CartContext";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <FavoriteContextProvider>
      <RestaurantsContextProvider>
        <LocationContextProvider>
          <CartContextProvider>
            <Tab.Navigator
              initialRouteName="RestaurentScreen"
              screenOptions={{ headerShown: false }}
            >
              <Tab.Screen
                name="RestaurentScreen"
                component={RestaurantNavigator}
                options={{
                  title: "Restaurent",
                  tabBarIcon: ({ color }) => (
                    <ResIcon name="restaurant" size={20} color={color} />
                  ),
                  tabBarActiveTintColor: "tomato",
                  tabBarInactiveTintColor: "grey",
                  tabBarLabelStyle: { marginBottom: 5 },
                }}
              />
              <Tab.Screen
                name="Map"
                component={MapScreen}
                options={{
                  title: "Map",
                  tabBarIcon: ({ color }) => (
                    <ResIcon name="map" size={20} color={color} />
                  ),
                  tabBarActiveTintColor: "tomato",
                  tabBarInactiveTintColor: "grey",
                  tabBarLabelStyle: { marginBottom: 5 },
                }}
              />
              <Tab.Screen
                name="Checkout"
                component={CheckoutScreen}
                options={{
                  title: "Checkout",
                  tabBarIcon: ({ color }) => (
                    <ResIcon name="md-cart" size={20} color={color} />
                  ),
                  tabBarActiveTintColor: "tomato",
                  tabBarInactiveTintColor: "grey",
                  tabBarLabelStyle: { marginBottom: 5 },
                }}
              />
              <Tab.Screen
                name="SettingsNav"
                component={SettingsNavigator}
                options={{
                  title: "Settings",
                  tabBarIcon: ({ color }) => (
                    <ResIcon name="settings" size={20} color={color} />
                  ),
                  tabBarActiveTintColor: "tomato",
                  tabBarInactiveTintColor: "grey",
                  tabBarLabelStyle: { marginBottom: 5 },
                }}
              />
            </Tab.Navigator>
          </CartContextProvider>
        </LocationContextProvider>
      </RestaurantsContextProvider>
    </FavoriteContextProvider>
  );
};
export default AppNavigator;
