import React, { useState } from "react";
import { Switch, Route } from "react-router-dom";




import SignUp from "../components/login/sign_up";
import SignIn from "../components/login/sign_in";

import { Grid, Box, Image, ResponsiveContext, Main } from "grommet";

import "./styles.scss";


const Login = () => {
    return (
        <div className="welcome-page">
          <div className="greeter">
            <h1>Båtforum</h1>
          </div>
    
          <Switch>
            <Route exact path="/welcome">
              <SignIn />
            </Route>
            <Route path="/welcome/register">
              <SignUp />
            </Route>
          </Switch>
        </div>
      );
    };
    
    

export default Login;