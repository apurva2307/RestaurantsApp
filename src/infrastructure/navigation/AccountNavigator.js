import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import RegisterScreen from "../../features/account/RegisterScreen";
import AccountScreen from "../../features/account/AccountScreen";
import LoginScreen from "../../features/account/LoginScreen";

const Stack = createNativeStackNavigator();

const AccountNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Main"
    >
      <Stack.Screen name="Main" component={AccountScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

export default AccountNavigator;
