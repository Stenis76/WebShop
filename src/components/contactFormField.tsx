import React, { useState, useEffect } from "react";
import FormFieldLabel from "./formFieldLabel";
import { Box, Form, Text, Button, Grid } from "grommet";

interface IState {
  firstName: string;
  lastName: string;
  phoneNumber?: number;
  email: string;
  address: string;
  postCode?: number;
  city: string;
}

const ContactFormField = () => {
  const [state, setState] = useState<IState>({
    firstName: "",
    lastName: "",
    phoneNumber: undefined,
    email: "",
    address: "",
    postCode: undefined,
    city: ""
  });

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    localStorage.setItem("user-information", JSON.stringify(state));
  }, [state]);

  return (
    <Form style={{ gridArea: "name" }}>
      <FormFieldLabel
        name="firstName"
        label="FirstName"
        required
        type="text"
        onChange={handleOnChange}
      />
      <FormFieldLabel
        name="lastName"
        label="LastName"
        required
        type="text"
        onChange={handleOnChange}
      />

      <FormFieldLabel
        name="phoneNumber"
        label="Phone number"
        required
        type="tel"
        onChange={handleOnChange}
      />
      <FormFieldLabel
        name="email"
        label="Email"
        required
        type="email"
        onChange={handleOnChange}
      />
      <FormFieldLabel
        name="address"
        label="Address"
        required
        type="text"
        onChange={handleOnChange}
      />
      <FormFieldLabel
        name="postCode"
        label="Post code"
        required
        type="number"
        onChange={handleOnChange}
      />
      <FormFieldLabel
        name="city"
        label="City"
        required
        type="string"
        onChange={handleOnChange}
      />
    </Form>
  );
};

export default ContactFormField;
