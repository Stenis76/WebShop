import React from "react";

interface IState {
  cart: any[];
  addItemToCart: () => void;
  removeItemFromCart: () => void;
}

export default React.createContext<IState>({
  cart: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {}
});
