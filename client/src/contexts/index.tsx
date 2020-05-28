import React, { FC } from "react";

import CartContextProvider from "./cart-context/context-provider";
import UserContextProvider from "./user-context/context-provider";

interface IProps {
  children: React.ReactNode;
}

const ApplicationContextProvider: FC<IProps> = ({ children }) => (
  <UserContextProvider>
    <CartContextProvider>{children}</CartContextProvider>
  </UserContextProvider>
);

export default ApplicationContextProvider;
