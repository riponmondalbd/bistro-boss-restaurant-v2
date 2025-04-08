import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

// TODO: add publishable key
const stripePromise = loadStripe();
const Payment = () => {
  return (
    <div>
      <title>Bistro Boss | Payment</title>
      <SectionTitle heading={"Payment"} subheading={"Please pay to eat"} />
      <div>
        <Elements stripe={stripePromise}></Elements>
      </div>
    </div>
  );
};

export default Payment;
