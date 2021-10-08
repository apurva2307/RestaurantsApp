import createStripe from "stripe-client";

const stripe = createStripe(
  "pk_test_51JXNPTSI0WiMTF2DtUz6pvmyzN77MlXeFnNxQRdwClZxL0sxWU7QAAclHa84g8zJmclV5rZ6a0Qjsc2AIHzqgTmB00SNFcht4m"
);
export const cardToeknRequest = (card) => stripe.createToekn({ card });

export const payRequest = (token, amount, name) => {
  return fetch(
    "https://us-central1-whatsappclone-6794f.cloudfunctions.net/pay",
    {
      body: JSON.stringify({ token, amount, name }),
      method: "POST",
    }
  ).then((res) => {
    if (res.status > 200) {
      return Promise.reject("Something went wrong during payment process.");
    }
  });
};
