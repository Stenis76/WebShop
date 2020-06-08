import React, { FC, useState, useEffect, useContext } from "react";
import axios from "axios";

import CartContext from "./context";
import UserContext from "../user-context/context";

import { CollectionItem } from "../../interfaces";

interface IProps {}

export type ShippingMethod = {
  _id: string;
  deliveryDate: number;
  orderId: string;
  shipmentCompany: string;
  shippingCost: number;
};

export type OrderMethod = {
  userId: string;
  productId: string[];
  freightId: string;
  paymentMethod: string;
  activeOrder: boolean;
};
export type PaymentMethod = "card" | "invoice" | "swish";

const CartContextProvider: FC<IProps> = (props) => {
  const [cart, setCart] = useState<CollectionItem[]>([]);
  const { user } = useContext(UserContext);
  const [shippingCost, setShippingCost] = useState(0);
  const [shippingMethods, setShippingMethods] = useState<ShippingMethod[]>([]);
  const [selectedShippingMethod, setSelectedShippingMethod] = useState<
    ShippingMethod
  >();
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>("card");
  const [order, setOrder] = useState<OrderMethod>({
    userId: user._id,
    productId: [""],
    freightId: "",
    paymentMethod: "",
    activeOrder: false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/freight")
      .then((res) => {
        setShippingMethods(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  /*   useEffect(() => {
    let cost = 0;
    switch (shippingMethod) {
      case "dhl":
        cost = 10;
        break;
      case "schenker":
        cost = 5;
        break;
      default:
        cost = 2;
    }
    setShippingCost(cost);
  }, [shippingMethod]); */

  const createOrder = async (order) => {
    const options: RequestInit = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(order),
    };

    // setLoading(true);
    const res = await fetch("http://localhost:3002/api/neworder", options);
    const data = await res.json();
    // setLoading(false);
  };

  const addItemToCart = (item: CollectionItem) => {
    const existing = cart.find((cartItem) => cartItem._id === item._id);

    if (existing) {
      const newCart = cart.map((cartItem) => {
        if (cartItem._id === item._id) {
          return {
            ...cartItem,
            quantity: cartItem.quantity ? cartItem.quantity + 1 : 1,
          };
        } else return cartItem;
      });
      setCart(newCart);
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const removeItemFromCart = (itemId: any) => {
    const existing = cart.find((cartItem) => cartItem._id === itemId);

    if (existing) {
      if (existing.quantity === 1) {
        const newCart = cart.filter((item) => item._id != itemId);
        setCart(newCart);
      } else {
        const newCart = cart.map((cartItem) => {
          if (cartItem._id === itemId) {
            return {
              ...cartItem,
              quantity: cartItem.quantity ? cartItem.quantity - 1 : 1,
            };
          } else return cartItem;
        });
        setCart(newCart);
      }
    }
  };

  const clearItemFromCart = (itemId: any) => {
    setCart((prevCart) =>
      prevCart.filter((cartItem) => cartItem._id !== itemId)
    );
  };

  const clearCart = () => setCart([]);

  const setShipping = (_id: string) => {
    const method = shippingMethods.find((method) => method._id === _id);
    setSelectedShippingMethod(method);
    setOrder((prevState) => ({
      ...prevState,
      freightId: method._id,
    }));
    filterCartToServer();
  };

  const setPayment = (method: PaymentMethod) => {
    setPaymentMethod(method);
    // setOrder((prevState) => ({
    //   ...prevState,
    //   paymentMethod: method,
    // }));
  };

  const filterCartToServer = () => {
    const cartItemsId = cart.map((item) => item._id);
    console.log("Här ska en cartitemarray komma", cartItemsId);
    setOrder((prevState) => ({
      ...prevState,
      productId: cartItemsId,
    }));
  };

  return (
    <div>
      <CartContext.Provider
        {...props}
        value={{
          cart,
          shippingMethods,
          selectedShippingMethod,
          setSelectedShippingMethod: setShipping,
          paymentMethod,
          setPaymentMethod: setPayment,
          addItemToCart,
          removeItemFromCart,
          clearItemFromCart,
          clearCart,
          shippingCost: shippingCost,
        }}
      />
    </div>
  );
};

export default CartContextProvider;
