import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RestaurentScreen from "../../features/restaurents/screens/RestaurentScreen";
import RestaurantDetailsScreen from "../../features/restaurents/screens/RestaurantDetailsScreen";

const RestaurantStack = createNativeStackNavigator();

const RestaurantNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Restaurants"
    >
      <RestaurantStack.Screen name="Restaurants" component={RestaurentScreen} />
      <RestaurantStack.Screen
        name="RestaurantDetails"
        component={RestaurantDetailsScreen}
      />
    </RestaurantStack.Navigator>
  );
};

export default RestaurantNavigator;
