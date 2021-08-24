import styled from "styled-components/native";
import { Card } from "react-native-paper";

export const RestaurentCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;
export const RestaurentCardCover = styled(Card.Cover)`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
`;
export const Address = styled.Text`
  font-family: ${(props) => props.theme.fonts.body}
  font-size: ${(props) => props.theme.fontSizes.caption}
  color: ${(props) => props.theme.colors.ui.primary};
`;
export const Info = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
export const Open = styled.View`
  height: 17px;
  width: 35px;
  background-color: red;
  padding: 0px 4px 5px 4px;
  transform: rotate(-18deg);
  margin-left: 16px;
`;
