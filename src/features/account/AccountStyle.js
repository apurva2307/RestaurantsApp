import styled from "styled-components/native";
import { colors } from "../../infrastructure/theme/colors";
import { Button, TextInput } from "react-native-paper";
import { Text } from "../../components/typography/TextComponent";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../assets/homeBg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;
export const AccountContainer = styled.View`
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
  background-color: rgba(255, 255, 255, 0.7);
`;
export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  margin: 8px;
  padding: ${(props) => props.theme.space[2]};
`;
export const AuthInput = styled(TextInput)`
  width: 300px;
  margin: 8px 0px 8px 0px;
`;

export const Title = styled(Text)`
  font-size: 30px;
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;
