import React, { FC, useState } from "react";

import CartContext from "./context";

interface IProps {}

export type ShippingMethod = "regular" | "camel" | "lightning";

const CartContextProvider: FC<IProps> = props => {
  const [cart, setCart] = useState([] as any);
  const [shippingMethod, setShippingMethod] = useState<ShippingMethod>(
    "regular"
  );

  const addItemToCart = (item: any) => {
    setCart([...cart, item]);
    console.log("add item to cart");
  };

  const removeItemFromCart = (itemId: number) => {
    const newCart = cart.filter((item: any) => item.id !== itemId);
    setCart(newCart);
    console.log("remove item from cart");
  };

  const setShipping = (method: ShippingMethod) => setShippingMethod(method);

  console.log("cart", cart);

  return (
    <CartContext.Provider
      {...props}
      value={{
        cart,
        shippingMethod,
        addItemToCart,
        removeItemFromCart,
        setShipping
      }}
    />
  );
};

export default CartContextProvider;
