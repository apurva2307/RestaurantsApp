import React from "react";
import { useAuthenticationContext } from "../../services/authentication/authenticationContext";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./AppNavigator";
import AccountNavigator from "./AccountNavigator";

const Navigation = () => {
  const { isAuthenticated } = useAuthenticationContext();

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};

export default Navigation;
