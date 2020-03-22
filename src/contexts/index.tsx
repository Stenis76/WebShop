import React, { FC } from "react";

import AuthenticationContextProvider from "./authenticationContext/contextProvider";
import CartContextProvider from "./cartContext/contextProvider";

interface IProps {
  children: React.ReactNode;
}

const ApplicationContextProvider: FC<IProps> = ({ children }) => (
  <AuthenticationContextProvider>
    <CartContextProvider>{children}</CartContextProvider>
  </AuthenticationContextProvider>
);

export default ApplicationContextProvider;
