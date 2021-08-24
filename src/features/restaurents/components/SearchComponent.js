import React, { useState } from "react";
import styled from "styled-components/native";
import { Searchbar } from "react-native-paper";
import { useLocationContext } from "../../../services/location/locationContext";
import { Text } from "../../../components/typography/TextComponent";

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const SearchComponent = () => {
  const { error, search, keyword } = useLocationContext();
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  React.useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);
  return (
    <SearchContainer style={{ justifyContent: "center" }}>
      <Searchbar
        placeholder="Search for a location"
        value={searchKeyword}
        onSubmitEditing={() => search(searchKeyword)}
        onChangeText={(text) => setSearchKeyword(text)}
      />
      {error && (
        <Text variant="error" style={{ marginTop: 10 }}>
          No result found. Try another keyword..
        </Text>
      )}
    </SearchContainer>
  );
};

export default SearchComponent;
