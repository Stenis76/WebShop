import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";

import Loader from "react-loader-spinner";
import UserContext from "../../contexts/user-context/context";
// import FormInput from "../form_input/form_input";
import { Form, FormField, Button } from "grommet";
import CustomButton from "../custom_button/custom_button";

import "./sign-in.styles.scss";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const { login } = useContext(UserContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === "email") setEmail(value);
    else if (name === "password") setPassword(value);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      setLoading(true);
      const response = await login(email, password);
      setLoading(false);

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
        <Form className="sign-in-form" onSubmit={handleSubmit}>
          <FormField
            label={"E-mail"}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            required
          />
          <FormField
            label="Password"
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            required
          />

          <div className="buttons">
            <Button type="submit">Log in</Button>
            <Link to="/login/register">
              <Button>Sign up</Button>
            </Link>
          </div>
        </Form>
      )}
    </div>
  );
};

export default SignIn;
