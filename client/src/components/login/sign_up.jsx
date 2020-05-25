import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import UserContext from "../../contexts/login-userContext/context";

import Loader from "react-loader-spinner";

import FormInput from "../form_input/form_input";
import CustomButton from "../custom_button/custom_button";

import "./sign_up.styles.scss";

const SignUp = () => {
  const [state, setState] = useState({
    username: "",
    name: "",
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

    if (state.password !== state.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const newUser = {
        name: state.name,
        email: state.email,
        username: state.username,
        password: state.password,
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

      if (data.status === "Authenticated") {
        setUser(data.user);
        setIsAuthenticated(true);
        history.push("/main");
      } else if (data.status === "User-name already taken") {
        alert("Användarnamnet är upptaget!");
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
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <FormInput
            type="text"
            name="name"
            value={state.name}
            handleChange={handleChange}
            label={"Namn"}
            required
          />
          <FormInput
            type="text"
            name="username"
            value={state.username}
            handleChange={handleChange}
            label={"Användarnamn"}
            required
          />
          <FormInput
            type="email"
            name="email"
            value={state.email}
            handleChange={handleChange}
            label={"E-post"}
            required
          />
          <FormInput
            type="password"
            name="password"
            value={state.password}
            handleChange={handleChange}
            label={"Lösenord"}
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={state.confirmPassword}
            handleChange={handleChange}
            label={"Bekräfta lösenord"}
            required
          />
          <CustomButton type="submit">Registrera dig</CustomButton>
        </form>
      )}
    </div>
  );
};

export default SignUp;
