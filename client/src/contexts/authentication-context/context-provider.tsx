import React, { FC, useState } from "react";
import UserContext, { IUser } from "../user-context/context";
import AuthenticationContext from "./context";

interface IProps {}

const authenticatedUser: IUser = {
  _id: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  address: "",
  postCode: "",
  city: "",
  card: "",
};

const AuthenticationContextProvider: FC<IProps> = (props) => {
  const [user, setUser] = useState(authenticatedUser);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (email: string, password: string) => {
    const res = await fetch("http://localhost:3002/api/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();

    if (data.user) {
      setUser(data.user);
      setIsAuthenticated(true);
    }
    //Tar med password i objectet user, behöver ses över

    return data.message;
  };

  const logout = () => {
    console.log("id", user._id);

    fetch("http://localhost:3002/api/logout/" + user._id, {
      method: "GET",
      credentials: "include",
    });
    // setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthenticationContext.Provider
      {...props}
      value={{
        user,
        isAuthenticated,
        login,
        logout,
      }}
    />
  );
};

export default AuthenticationContextProvider;
