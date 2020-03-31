import React, { useState } from "react";
import { Box, Form, RadioButtonGroup } from "grommet";

import FormFieldLabel from "./form-field-fabel";

interface IProps {}

const PaymentForm = (props: IProps) => {
  const [paymentMethod, setPaymentMethod] = useState("kort");

  const paymentInput = () => {
    switch (paymentMethod) {
      case "invoice":
        const email = getUserData("email");
        return (
          <FormFieldLabel
            name="email"
            label="Email"
            required
            disabled
            type="email"
            value={email}
          />
        );
      case "swish":
        const phoneNumber = getUserData("phoneNumber");
        return (
          <FormFieldLabel
            name="phoneNumber"
            label="Phone number"
            required
            disabled
            type="tel"
            value={phoneNumber}
          />
        );
      default:
        return (
          <FormFieldLabel name="card" label="Card" required type="number" />
        );
    }
  };

  const getUserData = (key: any) => {
    const localStorageUser = localStorage.getItem("user-information");
    let data = "";
    if (localStorageUser) {
      data = JSON.parse(localStorageUser)[key];
    }
    return data;
  };

  return (
    <Box gridArea="name">
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
            onChange={event => setPaymentMethod(event.target.value)}
            {...props}
          />
        </Box>
        <Box>{paymentInput()}</Box>
      </Form>
    </Box>
  );
};

export default PaymentForm;
