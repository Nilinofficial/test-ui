import { loadStripe } from "@stripe/stripe-js";
import { allowedCountries } from "@/utils/constants";
var jwt = require("jsonwebtoken");

const publishableKey = process.env.stripe_public_key;
let stripePromise: any;

const getStripe = () => {
  if (!publishableKey) {
    return null;
  }
  if (!stripePromise) {
    stripePromise = loadStripe(publishableKey);
  }
  return stripePromise;
};

export const RedirectCheckout = async (payment_id: string) => {
  const token = document.cookie
    .split("; ")
    .find((row) => row.startsWith("token="))
    ?.split("=")[1]; // Extract token value

  console.log("Token from cookie:", token);

  let { sub } = jwt.decode(token);
  console.log(sub);

  const item = [
    {
      price: payment_id,
      quantity: 1,
    },
  ];

  const checkoutOptions = {
    lineItems: [item[0]],
    mode: "subscription",
    billingAddressCollection: "required",
    shippingAddressCollection: {
      allowedCountries,
    },
    successUrl: `http://localhost:3000/app/paymentsuccessful?session_id={CHECKOUT_SESSION_ID}`,
    cancelUrl: `http://localhost:3000/app/paymentfailed`,
    customerEmail: sub,

  };

  const stripe = await getStripe();

  const { error} = await stripe.redirectToCheckout({
    ...checkoutOptions,

  });

  if (error) {
    console.error("Stripe checkout error", error);
  } else {
    // If payment was successful, send payment details to the backend


   
  }
};
