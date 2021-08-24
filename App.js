import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";
import {
  useFonts as useFontsOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useFontsLato,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
import { RestaurantsContextProvider } from "./src/services/restaurants/restaurantsContext";
import { LocationContextProvider } from "./src/services/location/locationContext";
import AppNavigator from "./src/infrastructure/navigation/AppNavigator";
import { SafeArea } from "./src/utils/SafeArea";

export default function App() {
  let [oswaldLoaded] = useFontsOswald({
    Oswald_400Regular,
  });
  let [latoLoaded] = useFontsLato({
    Lato_400Regular,
  });
  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <>
      <ThemeProvider theme={theme}>
        <RestaurantsContextProvider>
          <LocationContextProvider>
            <SafeArea>
              <AppNavigator />
            </SafeArea>
          </LocationContextProvider>
        </RestaurantsContextProvider>
      </ThemeProvider>
    </>
  );
}
