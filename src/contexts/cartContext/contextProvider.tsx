import React, { FC, useState } from "react";

import CartContext from "./context";

interface IProps {}

const CartContextProvider: FC<IProps> = props => {
  const [cart, setCart] = useState([] as any);

  const addItemToCart = (item: any, itemComponent: any) => {
    setCart([...cart, item]);
    console.log("add item to cart");

    itemComponent.innerText = "Item added";
    itemComponent.style.backgroundColor = "#76FEB3";
    itemComponent.style.color = "#373737";
    setTimeout(() => {
      itemComponent.innerText = "Add to cart";
      itemComponent.style.backgroundColor = "#373737";
      itemComponent.style.color = "#FEFEFE";
    }, 4000);
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
