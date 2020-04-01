import { createContext } from "react";
import { ShippingMethod, PaymentMethod } from "./context-provider";

interface IState {
  cart: any[];
  shippingMethod: ShippingMethod;
  setShippingMethod: (method: ShippingMethod) => void;
  paymentMethod: PaymentMethod;
  setPaymentMethod: (method: PaymentMethod) => void;
  addItemToCart: (item: object) => void;
  removeItemFromCart: (itemId: number) => void;
  clearItemFromCart: (itemId: number) => void;
}

export default createContext<IState>({
  cart: [],
  shippingMethod: "regular",
  setShippingMethod: () => {},
  paymentMethod: "card",
  setPaymentMethod: () => {},
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {}
});
