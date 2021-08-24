import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ResIcon from "react-native-vector-icons/Ionicons";
import RestaurantNavigator from "./RestaurantNavigator";
import MapScreen from "../../features/map/MapScreen";
import SettingsScreen from "../../features/settings/SettingsScreen";

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
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
          name="Settings"
          component={SettingsScreen}
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
    </NavigationContainer>
  );
};

export default AppNavigator;
