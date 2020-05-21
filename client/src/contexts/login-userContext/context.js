import React from "react";

export default React.createContext({
  isAuthenticated: false,
  setisAuthenticated: () => {},
  user: undefined,
  setUser: () => {},
  login: () => {},
  logout: () => {},
});
