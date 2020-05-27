import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import Loader from "react-loader-spinner";
import UserContext from "../../contexts/authentication-context/context";
import FormInput from "../form_input/form_input";
import CustomButton from "../custom_button/custom_button";

import "./sign-in.styles.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { login } = useContext(UserContext);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const response = await login(email, password);
      setLoading(false);
      console.log(response);

      if (response === "Auth successful") {
        history.push("/");
      } else if (response === " Auth failed") {
        alert("Wrong password");
      } else if (response === "Auth failed at start") {
        alert("Account does not exist");
      }
    } catch (error) {
      console.log("Error while loggin in", error.message);
      setLoading(false);
    }
  };

  return (
    <div className="sign-in">
      <h1>Sign in</h1>
      {loading ? (
        <Loader type="TailSpin" color="#00BFFF" height={70} width={70} />
      ) : (
        <form className="sign-in-form" onSubmit={handleSubmit}>
          <FormInput
            label={"E-mail"}
            type="text"
            name="email"
            value={email}
            handleChange={handleChange}
            required
          />
          <FormInput
            label="Password"
            type="password"
            name="password"
            value={password}
            handleChange={handleChange}
            required
          />

          <div className="buttons">
            <CustomButton type="submit">Log in</CustomButton>
            <Link to="/login/register">
              <CustomButton>Sign up</CustomButton>
            </Link>
          </div>
        </form>
      )}
    </div>
  );
};

export default SignIn;
