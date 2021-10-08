import React, { useState, useEffect, useRef } from "react";
import { View, TouchableOpacity } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components/native";
import { Camera } from "expo-camera";
import { Text } from "../../components/typography/TextComponent";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuthenticationContext } from "../../services/authentication/authenticationContext";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`;
const InnerSnap = styled.View`
  width: 100%;
  height: 100%;
  z-index: 20;
`;

export default function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef();
  const { user } = useAuthenticationContext();

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
      navigation.goBack();
    }
  };
  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <ProfileCamera
        ref={(camera) => (cameraRef.current = camera)}
        type={type}
        ratio={"16:9"}
      >
        <TouchableOpacity onPress={snap}>
          <InnerSnap />
        </TouchableOpacity>
      </ProfileCamera>
      <Button
        mode="contained"
        color="purple"
        icon="camera"
        onPress={() => {
          setType(
            type === Camera.Constants.Type.back
              ? Camera.Constants.Type.front
              : Camera.Constants.Type.back
          );
        }}
        style={{
          width: "30%",
          position: "absolute",
          bottom: 5,
        }}
      >
        Flip
      </Button>
    </View>
  );
}
