import styled from "styled-components/native";
import { Avatar, TextInput, Button } from "react-native-paper";
import { colors } from "../../infrastructure/theme/colors";
import { WebView } from "react-native-webview";

export const CartIconContainer = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`;

export const CartIcon = styled(Avatar.Icon).attrs({
  size: 128,
})`
  background-color: ${(props) => props.bg || props.theme.colors.brand.primary};
`;

export const NameInput = styled(TextInput)`
  margin: ${(props) => props.theme.space[2]};
`;
export const PayButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  width: 80%;
  padding: ${(props) => props.theme.space[2]};
  align-self: center;
  margin-bottom: 12px;
  margin-top: 24px;
`;
export const ClearButton = styled(Button).attrs({
  color: colors.ui.error,
})`
  width: 80%;
  padding: ${(props) => props.theme.space[2]};
  align-self: center;
`;
export const PayView = styled(WebView).attrs({
  color: colors.ui.error,
})`
  width: 80%;
  height: 25px;
  padding: ${(props) => props.theme.space[2]};
  align-self: center;
`;
