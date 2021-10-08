import React, { useState } from "react";
import { View } from "react-native";
import { Text } from "../../components/typography/TextComponent";
import { ActivityIndicator, Colors } from "react-native-paper";
import { useAuthenticationContext } from "../../services/authentication/authenticationContext";
import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthInput,
  ErrorContainer,
  Title,
  AuthButton,
} from "./AccountStyle";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading, setError } = useAuthenticationContext();
  return (
    <View style={{ flex: 1 }}>
      <AccountBackground>
        <AccountCover />
        <Title>Meals To Go</Title>
        <AccountContainer>
          <AuthInput
            label="E-mail"
            value={email}
            textContentType="emailAddress"
            keyboardType="email-address"
            autoCapitalize="none"
            onChangeText={(u) => setEmail(u)}
          />
          <AuthInput
            label="Password"
            value={password}
            textContentType="password"
            secureTextEntry
            autoCapitalize="none"
            onChangeText={(p) => setPassword(p)}
          />
          {error && (
            <ErrorContainer size="large">
              <Text variant="error">{error}</Text>
            </ErrorContainer>
          )}
          {!isLoading ? (
            <AuthButton
              icon="lock-open-outline"
              mode="contained"
              onPress={() => onLogin(email, password)}
            >
              Login
            </AuthButton>
          ) : (
            <ActivityIndicator animating={true} color={Colors.blue300} />
          )}
        </AccountContainer>
        <AuthButton
          mode="contained"
          onPress={() => {
            setError(null);
            navigation.goBack();
          }}
        >
          Back
        </AuthButton>
      </AccountBackground>
    </View>
  );
};

export default LoginScreen;
