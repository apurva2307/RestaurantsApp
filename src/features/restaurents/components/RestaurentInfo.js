import React from "react";
import { View, Image } from "react-native";
import StarIcon from "react-native-vector-icons/AntDesign";
import { Text } from "../../../components/typography/TextComponent";
import {
  RestaurentCard,
  RestaurentCardCover,
  Info,
  Address,
  Open,
} from "./RestaurentInfoStyle";

const RestaurentInfo = ({ restaurant }) => {
  const {
    name = "Barbeque",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1560611588-163f295eb145?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
    ],
    address = "100, corner street",
    isOpenNow = true,
    rating = 3.4,
    isClosedTemporarily = true,
  } = restaurant;
  const ratingArray = [];
  for (let i = 0; i < Math.round(rating); i++) {
    ratingArray.push(i);
  }
  return (
    <View>
      <RestaurentCard elevation={5}>
        <RestaurentCardCover source={{ uri: photos[0] }} />
        <Info>
          <Text variant="label">{name}</Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 4,
              marginBottom: 8,
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {ratingArray.map((item) => (
                <StarIcon
                  key={item.toString()}
                  name="star"
                  size={17}
                  color="orange"
                />
              ))}
            </View>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              {isClosedTemporarily && (
                <Text variant="error">CLOSED TEMPORARILY</Text>
              )}
              {isOpenNow && (
                <Open>
                  <Text style={{ fontSize: 15, color: "white", marginTop: -7 }}>
                    open
                  </Text>
                </Open>
              )}
              <Image
                source={{ uri: icon }}
                style={{ width: 18, height: 18, marginLeft: 16 }}
              />
            </View>
          </View>
          <Address>{address}</Address>
        </Info>
      </RestaurentCard>
    </View>
  );
};

export default RestaurentInfo;
