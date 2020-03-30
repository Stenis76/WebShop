import React, { FC, useState } from "react";

import CartContext from "./context";

interface IProps {}

const CartContextProvider: FC<IProps> = props => {
  const [cart, setCart] = useState([] as any);

  const addItemToCart = (item: any) => {
    setCart([...cart, item]);
    console.log("add item to cart");
  };

  const removeItemFromCart = (itemId: number) => {
    const newCart = cart.filter((item: any) => item.id !== itemId);
    setCart(newCart);
    console.log("remove item from cart");
  };

  console.log("cart", cart);

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
