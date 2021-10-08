import React from "react";
import styled from "styled-components/native";
import { Text } from "../typography/TextComponent";
import WebView from "react-native-webview";
import { Platform } from "react-native";

const CompactImage = styled.Image`
  border-radius: 10px;
  width: 120px;
  height: 120px;
`;
const CompactWebView = styled(WebView)`
  border-radius: 10px;
  width: 120px;
  height: 120px;
`;

const Item = styled.View`
  padding: 10px;
  max-width: 120px;
  align-items: center;
  text-align: center;
`;

const CompactResInfo = ({ restaurant }) => {
  const Image = Platform.OS === "android" ? CompactWebView : CompactImage;
  return (
    <Item>
      <Image source={{ uri: restaurant.photos[0] }} />
      <Text
        center
        variant="caption"
        numberOfLines={3}
        style={{ textAlign: "center" }}
      >
        {restaurant.name}
      </Text>
    </Item>
  );
};

export default CompactResInfo;
