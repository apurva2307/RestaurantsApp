import React from "react";
import { LiteCreditCardInput } from "react-native-credit-card-input-view";
import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51JXNPTSI0WiMTF2DtUz6pvmyzN77MlXeFnNxQRdwClZxL0sxWU7QAAclHa84g8zJmclV5rZ6a0Qjsc2AIHzqgTmB00SNFcht4m"
);

const CreditCardInput = ({ name, onSuccess }) => {
  const onChange = async (form) => {
    const { values, status } = form;
    const isIncomplete = Object.values(status).includes("incomplete");
    const expiry = values.expiry.split("/");
    const card = {
      number: values.number,
      exp_month: expiry[0],
      exp_year: expiry[1],
      cvc: values.cvc,
      name: name,
    };
    if (!isIncomplete) {
      const info = await stripe.createToken({ card });
      onSuccess(info);
    }
  };
  return <LiteCreditCardInput onChange={onChange} autoFocus />;
};

export default CreditCardInput;
