import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormField, Button, Box, Text, } from "grommet";

import UserContext from "../../contexts/user-context/context";

import Loader from "react-loader-spinner";
import CustomButton from "../custom_button/custom_button";
import "./sign-in.styles.scss";

const SignUp = () => {

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    address: "",
    postCode: "",
    city: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { user, registerUser } = useContext(UserContext);


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setState({
      ...state,
      [name]: value,
    });
  };
  

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (state.password !== state.confirmPassword) {
      return;
    }
  

    try {
      const newUser = {
        firstName: state.firstName,
        lastName: state.lastName,
        phoneNumber: state.phoneNumber,
        email: state.email,
        address: state.address,
        postCode: state.postCode,
        city: state.city,
        password: state.password,
        confirmPassword: state.confirmPassword,
      };

      registerUser(newUser);
      history.push("/");
    } catch (error) {
      console.log("Error while sign up", error.message);
      setLoading(false);
    }
  };
  const passwordMessage =
  state.password !== state.confirmPassword
    ? "The password do not match"
    : undefined;

    console.log(user.phoneNumber, "detta är telenr");
    

  return (
    <div className="sign-up">
      <h1>Create an account</h1>
      {loading ? (
        <Loader type="TailSpin" color="#00BFFF" height={70} width={70} />
      ) : (
        <Form
          validate="submit"
          style={{ width: "20rem" }}
          onSubmit={handleSubmit}
        >
          <FormField
            type="firstName"
            name="firstName"
            value={state.firstName}
            onChange={handleChange}
            label="Name"
            required={true}
            validate={{ regexp: /^[a-öA-ö]/, message: "Please use letters to enter your firstname" }}
            // size="xsmall"
          />
          <FormField
            type="lastName"
            name="lastName"
            value={state.lastName}
            onChange={handleChange}
            label="Last name"
            required={true}
            validate={{ regexp: /^[a-öA-ö]/, message: "Please use letters to enter your lastname" }}
            // size="xsmall"
          />
          <FormField
            type="address"
            name="address"
            value={state.address}
            onChange={handleChange}
            label="Address"
            required={true}
            validate={{ regexp: /^[a-öA-ö]/, message: "Please use letters to enter your adress" }}
            // size="xsmall"
          />
          <FormField
            type="postCode"
            name="postCode"
            value={state.postCode}
            onChange={handleChange}
            label="Postcode"
            required={true}
            validate={{
              regexp: /^[0-9]{5,9}$/,
              message: "Please enter a valid postcode"
            }}
            // size="xsmall"
          />
          <FormField
            type="city"
            name="city"
            value={state.city}
            onChange={handleChange}
            label="City"
            required={true}
            validate={{ regexp: /^[a-öA-ö]/, message: "Please use letters to enter your city" }}
            // size="xsmall"
          />
          <FormField
            type="phoneNumber"
            name="phoneNumber"
            value={state.phoneNumber}
            onChange={handleChange}
            label="Phone number"
            required={true}
            validate={{
              regexp: /^(\+|00)[0-9]{1,3}[0-9]{4,14}(?:x.+)?$/,
              message: "Please enter a valid phone number, at least 8 digits"
            }}
            // size="xsmall"
          />
          <FormField
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            label="E-mail"
            required={true}
            // size="xsmall"
          />
          <FormField
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            label="Password"
            required={true}
          />
          <FormField
            type="password"
            name="confirmPassword"
            value={state.confirmPassword}
            onChange={handleChange}
            label="Confirm password"
            required={true}
          />
            {passwordMessage && (
              <Box pad="xsmall">
                <Text color="red">{passwordMessage}</Text>
              </Box>
            )}
          <Button
              type="submit"
              margin="medium"
              label="Sign up"
              primary
          />
        </Form>
      )}
    </div>
  );
};
export default SignUp;
