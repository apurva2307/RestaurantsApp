import React, { useState, useEffect } from "react";
import { View, ScrollView, KeyboardAvoidingView } from "react-native";
import { List } from "react-native-paper";
import { Text } from "../../components/typography/TextComponent";
import { useCartContext } from "../../services/cart/CartContext";
import RestaurentInfo from "../restaurents/components/RestaurentInfo";
import {
  CartIconContainer,
  CartIcon,
  NameInput,
  PayButton,
  ClearButton,
} from "./CheckoutStyle";
import CreditCardInput from "./components/CreditCard";
import { payRequest } from "../../services/checkout/CheckoutService";

const CheckoutScreen = () => {
  const { cart, restaurant, clearCart } = useCartContext();
  const [sum, setSum] = useState(0);
  const [name1, setName] = useState("");
  const [card, setCard] = useState({});
  const [loading, setLoading] = useState(false);

  const onPay = () => {
    if (!card || !card.id) {
      console.log("some error");
      return;
    }
    console.log(card);
    payRequest(card.id, sum, name1);
  };

  useEffect(() => {
    if (!cart.length) {
      setSum(0);
      return;
    }
    const newSum = cart.reduce((acc, { price }) => {
      return (acc += price);
    }, 0);
    setSum(newSum);
  }, [cart]);

  if (!cart.length || !restaurant) {
    return (
      <CartIconContainer>
        <CartIcon icon="cart-off" />
        <Text type="body">Your cart is empty!</Text>
      </CartIconContainer>
    );
  }
  return (
    <ScrollView>
      <KeyboardAvoidingView
        style={{ marginHorizontal: 16, marginTop: 16 }}
        behavior="position"
      >
        <RestaurentInfo restaurant={restaurant} />
        <Text type="body" style={{ paddingTop: 8 }}>
          Your Order
        </Text>
        <List.Section>
          {cart.map(({ item, price }, index) => {
            return (
              <List.Item
                key={`${item}.${index}`}
                title={`${item} - Rs. ${price}`}
              />
            );
          })}
        </List.Section>
        <Text style={{ paddingBottom: 12 }}>Total: Rs. {sum}</Text>
        <NameInput
          placeholder="Enter yor name"
          label="Name"
          value={name1}
          onChangeText={(t) => setName(t)}
        />
        <View style={{ marginTop: 12 }}>
          {name1.length > 0 && (
            <CreditCardInput name={name1} onSuccess={setCard} />
          )}
        </View>
        <PayButton mode="contained" icon="cash-usd" onPress={onPay}>
          Pay
        </PayButton>
        <ClearButton
          mode="contained"
          icon="cart-off"
          onPress={() => {
            setName("");
            clearCart();
          }}
        >
          clear cart
        </ClearButton>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default CheckoutScreen;
