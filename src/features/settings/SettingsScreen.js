import React, { useCallback } from "react";
import styled from "styled-components/native";
import { List, Avatar } from "react-native-paper";
import { Text } from "../../components/typography/TextComponent";
import { useAuthenticationContext } from "../../services/authentication/authenticationContext";
import { colors } from "../../infrastructure/theme/colors";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TouchableOpacity } from "react-native";
import { useFocusEffect } from "@react-navigation/native";

const SettingsBackground = styled.ImageBackground.attrs({
  source: require("../../../assets/homeBg.jpg"),
})`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const SettingsItem = styled(List.Item)`
  padding: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[3]};
  background-color: rgba(255, 255, 255, 0.4);
`;
const AvatarContainer = styled.View`
  align-items: center;
  margin-top: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;

const SettingsScreen = ({ navigation }) => {
  const { onLogout, user } = useAuthenticationContext();
  const [photo, setPhoto] = React.useState(null);

  const getProfilePic = async (currentUser) => {
    const imageUrl = await AsyncStorage.getItem(`${currentUser.uid}-photo`);
    setPhoto(imageUrl);
  };
  useFocusEffect(
    useCallback(() => {
      getProfilePic(user);
    }, [user])
  );

  return (
    <SettingsBackground>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          {!photo && (
            <Avatar.Icon
              size={180}
              icon="human"
              backgroundColor={colors.brand.primary}
            />
          )}
          {photo && (
            <Avatar.Image
              size={180}
              source={{ uri: photo }}
              backgroundColor={colors.brand.primary}
            />
          )}
        </TouchableOpacity>
        <Text style={{ marginVertical: 16 }} variant="label">
          {user.email}
        </Text>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => (
            <List.Icon {...props} color={colors.ui.error} icon="heart" />
          )}
          onPress={() => navigation.navigate("Favorites")}
        />
        <SettingsItem
          title="Payment"
          left={(props) => (
            <List.Icon {...props} color={colors.ui.secondary} icon="cart" />
          )}
          onPress={() => null}
        />
        <SettingsItem
          title="Past Orders"
          left={(props) => (
            <List.Icon {...props} color={colors.ui.secondary} icon="history" />
          )}
          onPress={() => null}
        />
        <SettingsItem
          title="Logout"
          left={(props) => (
            <List.Icon {...props} color={colors.ui.secondary} icon="door" />
          )}
          onPress={onLogout}
        />
      </List.Section>
    </SettingsBackground>
  );
};

export default SettingsScreen;
