import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormField, Button } from "grommet";

import UserContext from "../../contexts/user-context/context";

import Loader from "react-loader-spinner";
import CustomButton from "../custom_button/custom_button";
import "./sign-in.styles.scss";

const SignUp = () => {
  const [state, setState] = useState({
    firstname: "",
    lastname: "",
    address: "",
    postcode: "",
    city: "",
    phonenumber: "",
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
    console.log("hämtar context" + user.firstName);

    if (state.password !== state.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const newUser = {
        firstname: state.firstname,
        lastname: state.lastname,
        phonenumber: state.phonenumber,
        email: state.email,
        address: state.address,
        postcode: state.postcode,
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
            type="firstname"
            name="firstname"
            value={state.firstname}
            onChange={handleChange}
            label="Name"
            required
            // size="xsmall"
          />
          <FormField
            type="lastname"
            name="lastname"
            value={state.lastname}
            onChange={handleChange}
            label="Last name"
            required
            // size="xsmall"
          />
          <FormField
            type="address"
            name="address"
            value={state.address}
            onChange={handleChange}
            label="Address"
            required
            // size="xsmall"
          />
          <FormField
            type="postcode"
            name="postcode"
            value={state.postcode}
            onChange={handleChange}
            label="Postcode"
            required
            // size="xsmall"
          />
          <FormField
            type="city"
            name="city"
            value={state.city}
            onChange={handleChange}
            label="City"
            required
            // size="xsmall"
          />
          <FormField
            type="phonenumber"
            name="phonenumber"
            value={state.phonenumber}
            onChange={handleChange}
            label="Phonenumber"
            required
            // size="xsmall"
          />
          <FormField
            type="email"
            name="email"
            value={state.email}
            onChange={handleChange}
            label="E-mail"
            required
            // size="xsmall"
          />
          <FormField
            type="password"
            name="password"
            value={state.password}
            onChange={handleChange}
            label="Password"
            required
            // size="xsmall"
          />
          <FormField
            type="password"
            name="confirmPassword"
            value={state.confirmPassword}
            onChange={handleChange}
            label="Confirm password"
            required
            // size="xsmall"
          />
          <Button margin="medium" primary type="submit">
            Sign up
          </Button>
        </Form>
      )}
    </div>
  );
};
export default SignUp;
