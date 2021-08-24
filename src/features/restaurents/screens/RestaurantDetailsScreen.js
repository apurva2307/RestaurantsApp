import React, { useState } from "react";
import { ScrollView } from "react-native";
import { List } from "react-native-paper";
import RestaurentInfo from "../components/RestaurentInfo";

const RestaurantDetailsScreen = ({ route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  const { restaurant } = route.params;
  return (
    <ScrollView>
      <RestaurentInfo restaurant={restaurant} />
      <List.Accordion
        title="Breakfast"
        titleStyle={{ color: "tomato" }}
        left={(props) => (
          <List.Icon {...props} icon="bread-slice" color="tomato" />
        )}
        expanded={breakfastExpanded}
        onPress={() => setBreakfastExpanded(!breakfastExpanded)}
      >
        <List.Item title="Poha" />
        <List.Item title="Eggs" />
      </List.Accordion>
      <List.Accordion
        title="Lunch"
        titleStyle={{ color: "tomato" }}
        left={(props) => (
          <List.Icon {...props} icon="hamburger" color="tomato" />
        )}
        expanded={lunchExpanded}
        onPress={() => setLunchExpanded(!lunchExpanded)}
      >
        <List.Item title="Daal Makhani" />
        <List.Item title="Kadhai Paneer" />
      </List.Accordion>
      <List.Accordion
        title="Dinner"
        titleStyle={{ color: "tomato" }}
        left={(props) => (
          <List.Icon {...props} icon="food-variant" color="tomato" />
        )}
        expanded={dinnerExpanded}
        onPress={() => setDinnerExpanded(!dinnerExpanded)}
      >
        <List.Item title="Chicken Biryani" />
        <List.Item title="Palak Paneer" />
      </List.Accordion>
      <List.Accordion
        title="Drinks"
        titleStyle={{ color: "tomato" }}
        left={(props) => <List.Icon {...props} icon="cup" color="tomato" />}
        expanded={drinksExpanded}
        onPress={() => setDrinksExpanded(!drinksExpanded)}
      >
        <List.Item title="Coke" />
        <List.Item title="Mango Shake" />
        <List.Item title="Cold Coffee" />
      </List.Accordion>
    </ScrollView>
  );
};

export default RestaurantDetailsScreen;
