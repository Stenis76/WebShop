import React from "react";

interface IState {
  isAuthenticated: boolean;
  user?: object;
  login: (email: string, password: string) => void;
  logout: () => void;
}

export default React.createContext<IState>({
  isAuthenticated: false,
  user: undefined,
  login: () => {},
  logout: () => {},
});
