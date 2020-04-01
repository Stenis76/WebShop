import React, { FC, useState } from "react";

import CartContext from "./context";

interface IProps {}

export type ShippingMethod = "regular" | "camel" | "lightning";
export type PaymentMethod = "card" | "invoice" | "swish";

const CartContextProvider: FC<IProps> = props => {
  const [cart, setCart] = useState([] as any);
  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>("camel");
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");

  const addItemToCart = (item: any) => {
    const existing = cart.find((cartItem: any) => cartItem.id === item.id);

    if (existing) {
      const newCart = cart.map((cartItem: any) => {
        if (cartItem.id === item.id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        } else return cartItem;
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }

    console.log("add item to cart");
  };

  const removeItemFromCart = (itemId: number) => {
    const existing = cart.find((cartItem: any) => cartItem.id === itemId);

    if (existing) {
      if (existing.quantity === 1) {
        const newCart = cart.filter((item: any) => item.id !== itemId);
        setCart(newCart);
      } else {
        const newCart = cart.map((cartItem: any) => {
          if (cartItem.id === itemId) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          } else return cartItem;
        });
        setCart(newCart);
      }
    }
    console.log("remove item from cart");
  };

  const clearItemFromCart = (itemId: number) => {
    setCart((prevCart: any) =>
      prevCart.filter((cartItem: any) => cartItem.id !== itemId)
    );
  };

  const setShipping = (method: ShippingMethod) => setShippingMethod(method);
  const setPayment = (method: PaymentMethod) => setPaymentMethod(method);

  return (
    <CartContext.Provider
      {...props}
      value={{
        cart,
        shippingMethod,
        setShippingMethod: setShipping,
        paymentMethod,
        setPaymentMethod: setPayment,
        addItemToCart,
        removeItemFromCart,
        clearItemFromCart
      }}
    />
  );
};

export default CartContextProvider;
