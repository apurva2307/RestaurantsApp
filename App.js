import React from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/infrastructure/theme/index";
import { Text } from "react-native";
import {
  useFonts as useFontsOswald,
  Oswald_400Regular,
} from "@expo-google-fonts/oswald";
import {
  useFonts as useFontsLato,
  Lato_400Regular,
} from "@expo-google-fonts/lato";
import { SafeArea } from "./src/utils/SafeArea";
import firebase from "firebase/app";
import { AuthenticationContextProvider } from "./src/services/authentication/authenticationContext";
import Navigation from "./src/infrastructure/navigation/Navigation";

const firebaseConfig = {
  apiKey: "AIzaSyDh_3_MuT_ybTXNzP1JWAaoy6u3HKIAz1M",
  authDomain: "whatsappclone-6794f.firebaseapp.com",
  projectId: "whatsappclone-6794f",
  storageBucket: "whatsappclone-6794f.appspot.com",
  messagingSenderId: "218929455563",
  appId: "1:218929455563:web:ebbddde24a7d5ea71f164e",
  measurementId: "G-TVL0420B23",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

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
        <AuthenticationContextProvider>
          <SafeArea>
            <Navigation />
          </SafeArea>
        </AuthenticationContextProvider>
      </ThemeProvider>
    </>
  );
}
