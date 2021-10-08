import React, { useState } from "react";
import { ScrollView, View } from "react-native";
import { List } from "react-native-paper";
import { useCartContext } from "../../../services/cart/CartContext";
import { OrderButton } from "../components/RestaurantlistStyle";
import RestaurentInfo from "../components/RestaurentInfo";

const RestaurantDetailsScreen = ({ navigation, route }) => {
  const [breakfastExpanded, setBreakfastExpanded] = useState(false);
  const [lunchExpanded, setLunchExpanded] = useState(false);
  const [dinnerExpanded, setDinnerExpanded] = useState(false);
  const [drinksExpanded, setDrinksExpanded] = useState(false);
  const { restaurant } = route.params;
  const { addToCart } = useCartContext();
  return (
    <View>
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
      <View style={{ marginTop: 64 }}>
        <OrderButton
          mode="contained"
          icon="cash-usd"
          onPress={() => {
            addToCart({ item: "Special", price: 500 }, restaurant);
            navigation.navigate("Checkout");
          }}
        >
          Order Special only Rs. 500
        </OrderButton>
      </View>
    </View>
  );
};

export default RestaurantDetailsScreen;
