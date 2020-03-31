import React, { useState, useContext } from "react";
import { Box, Form, RadioButtonGroup, Heading } from "grommet";

import FormFieldLabel from "./form-field-fabel";

import UserContext from "../contexts/user-context/context";
import CartContext from "../contexts/cart-context/context";
import { PaymentMethod } from "../contexts/cart-context/context-provider";

interface IProps {}

const PaymentForm = (props: IProps) => {
  const { user } = useContext(UserContext);
  const { paymentMethod, setPaymentMethod } = useContext(CartContext);

  const paymentInput = () => {
    console.log(user);

    switch (paymentMethod) {
      case "invoice":
        return (
          <>
            <Heading>Invoice infromation</Heading>
          </>
        );
      case "swish":
        return (
          <FormFieldLabel
            name="phoneNumber"
            label="Phone number"
            required
            type="tel"
            value={user.phoneNumber}
          />
        );
      default:
        return (
          <FormFieldLabel
            name="card"
            label="Card"
            required
            type="number"
            value={user.card}
          />
        );
    }
  };

  return (
    <Form style={{ gridArea: "name" }}>
      <Box align="center" pad="large">
        <RadioButtonGroup
          direction="row"
          name="radio"
          options={[
            { label: "Card", value: "card" },
            { label: "Swish", value: "swish" },
            { label: "Invoice", value: "invoice" }
          ]}
          value={paymentMethod}
          onChange={event =>
            setPaymentMethod(event.target.value as PaymentMethod)
          }
          {...props}
        />
      </Box>

      {paymentInput()}
    </Form>
  );
};

export default PaymentForm;
