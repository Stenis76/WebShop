import React from "react";

interface IState {
  cart: any[];
  addItemToCart: (item: object, itemComponent: any) => void;
  removeItemFromCart: (itemId: number) => void;
}

export default React.createContext<IState>({
  cart: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {}
});
