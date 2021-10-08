import React from "react";
import { View } from "react-native";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AnimationWrapper,
  AuthButton,
  Title,
} from "./AccountStyle";
import LottieView from "lottie-react-native";

const AccountScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <AccountBackground>
        <AccountCover />
        <AnimationWrapper>
          <LottieView
            source={require("../../../assets/Watermelon.json")}
            autoPlay
            key="animation"
            resizeMode="cover"
            loop
          />
        </AnimationWrapper>
        <Title>Meals To Go</Title>
        <AccountContainer>
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => navigation.navigate("Login")}
          >
            login
          </AuthButton>
          <AuthButton
            icon="email"
            mode="contained"
            onPress={() => navigation.navigate("Register")}
          >
            Register
          </AuthButton>
        </AccountContainer>
      </AccountBackground>
    </View>
  );
};

export default AccountScreen;
