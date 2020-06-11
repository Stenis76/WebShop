import { createContext } from "react";
import { ShippingMethod, PaymentMethod } from "./context-provider";

import { CollectionItem } from "../../interfaces";

interface IState {
  cart: CollectionItem[];
  shippingMethods: ShippingMethod[];
  selectedShippingMethod?: ShippingMethod;
  setSelectedShippingMethod: (_id: string) => void;
  paymentMethod: PaymentMethod;
  setPaymentMethod: (method: PaymentMethod) => void;
  addItemToCart: (item: CollectionItem) => void;
  removeItemFromCart: (itemId: any) => void;
  clearItemFromCart: (itemId: any) => void;
  clearCart: () => void;
  createOrder: () => void;
  shippingCost: number;
}

export default createContext<IState>({
  cart: [],
  shippingMethods: [],
  selectedShippingMethod: undefined,
  setSelectedShippingMethod: () => { },
  paymentMethod: "card",
  setPaymentMethod: () => { },
  addItemToCart: () => { },
  removeItemFromCart: () => { },
  clearItemFromCart: () => { },
  clearCart: () => { },
  createOrder: () => { },
  shippingCost: 0,
});
