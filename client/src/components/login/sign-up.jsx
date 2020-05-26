import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { Form, FormField } from "grommet";

import UserContext from "../../contexts/login-userContext/context";

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
  const { setUser, setIsAuthenticated } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("nu är vi i handlesubmit");//hit kommer vi
    
// Den här funktionen fungerar inte
    if (state.password !== state.confirmPassword) {
      alert("Passwords don't match!");      
      return;
    }

    try {
      const newUser = {
        firstname: state.firstname,
        lastname: state.lastname,
        address: state.address,
        postcode: state.postcode,
        city: state.city,
        phonenumber: state.phonenumber,
        email: state.email,
        password: state.password,
        confirmPassword: state.confirmPassword
      };
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(newUser),
      };
      setLoading(true);
      const res = await fetch("http://localhost:3002/api/newuser", options);
      const data = await res.json();
      setLoading(false);

      //Hit kommer vi aldrig
      if (data.status === "Authenticated") {        
        setUser(data.user);
        setIsAuthenticated(true);
        history.push("/");
      } else if (data.status === "User-name already taken") {
        alert("Account already exists");
      }
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
        <Form validate="submit" onSubmit={handleSubmit} style={{width: "20rem"}} >
          <FormField
            type="firstname"
            name="firstname"
            value={state.firstname}
            handleChange={handleChange}
            label="Name"
            required
            size="xsmall"
          />
          <FormField
            type="lastname"
            name="lastname"
            value={state.lastname}
            handleChange={handleChange}
            label="Last name"
            required
            size="xsmall"
          />
          <FormField
            type="address"
            name="address"
            value={state.address}
            handleChange={handleChange}
            label="Address"
            required
            size="xsmall"
          />
          <FormField
            type="postcode"
            name="postcode"
            value={state.postCode}
            handleChange={handleChange}
            label="Postcode"
            required
            size="xsmall"
          />
          <FormField
            type="city"
            name="city"
            value={state.city}
            handleChange={handleChange}
            label="City"
            required
            size="xsmall"
          />
          <FormField
            type="phonenumber"
            name="phonenumber"
            value={state.phonenumber}
            handleChange={handleChange}
            label="Phonenumber"
            required
            size="xsmall"
          />
          <FormField
            type="email"
            name="email"
            value={state.email}
            handleChange={handleChange}
            label="E-mail"
            required
            size="xsmall"
          />
          <FormField
            type="password"
            name="password"
            value={state.password}
            handleChange={handleChange}
            label="Password"
            required
            size="xsmall"
          />
          <FormField
            type="password"
            name="confirmPassword"
            value={state.confirmPassword}
            handleChange={handleChange}
            label="Confirm password"
            required
            size="xsmall"
          />
          <CustomButton margin="medium" primary type="submit">
            Sign up
          </CustomButton>
        </Form>
      )}
    </div>
  );
};

export default SignUp;
