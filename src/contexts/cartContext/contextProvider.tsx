import React, { FC, useState } from "react";

import CartContext from "./context";

interface IProps {}

const CartContextProvider: FC<IProps> = props => {
  const [cart, setCart] = useState([]);

  const addItemToCart = () => {
    console.log("add item to cart");
  };

  const removeItemFromCart = () => {
    console.log("remove item from cart");
  };

  return (
    <CartContext.Provider
      {...props}
      value={{
        cart,
        addItemToCart,
        removeItemFromCart
      }}
    />
  );
};

export default CartContextProvider;
