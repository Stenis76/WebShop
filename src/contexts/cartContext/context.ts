import React from "react";
import { ShippingMethod } from "./contextProvider";

interface IState {
  cart: any[];
  shippingMethod: ShippingMethod;
  addItemToCart: (item: object) => void;
  removeItemFromCart: (itemId: number) => void;
  clearItemFromCart: (itemId: number) => void;
  setShipping: (method: ShippingMethod) => void;
}

export default React.createContext<IState>({
  cart: [],
  shippingMethod: "regular",
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  setShipping: () => {}
});
