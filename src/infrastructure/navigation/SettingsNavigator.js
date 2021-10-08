import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "../../features/settings/SettingsScreen";
import { FavouritesScreen } from "../../features/settings/FavoritesScreen";
import CameraScreen from "../../features/settings/CameraScreen";

const SettingsStack = createNativeStackNavigator();

const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator screenOptions={{ headerMode: "screen" }}>
      <SettingsStack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <SettingsStack.Screen name="Favorites" component={FavouritesScreen} />
      <SettingsStack.Screen name="Camera" component={CameraScreen} />
    </SettingsStack.Navigator>
  );
};

export default SettingsNavigator;
