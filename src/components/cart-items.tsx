import React, { useContext } from "react";
import {
  Button,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  Image
} from "grommet";
import CartContext from "../contexts/cart-context/context";

const CartItems = () => {
  const {
    cart,
    removeItemFromCart,
    addItemToCart,
    clearItemFromCart,
    shippingMethod
  } = useContext(CartContext);

  let shippingCost = 0;
  switch (shippingMethod) {
    case "camel":
      shippingCost = 2;
      break;
    case "lightning":
      shippingCost = 10;
      break;
    default:
      // regular
      shippingCost = 5;
  }

  const calculateTotal = () => {
    let total: number = 0;

    for (let i = 0; i < cart.length; i++) {
      total += cart[i].price * cart[i].quantity;
    }

    return total + shippingCost;
  };

  return (
    <Table style={{ width: "100%" }}>
      <TableHeader>
        <TableRow>
          <TableCell scope="col" border="bottom"></TableCell>
          <TableCell scope="col" border="bottom">
            Name
          </TableCell>
          <TableCell scope="col" border="bottom">
            Price
          </TableCell>
          <TableCell scope="col" border="bottom">
            Quantity
          </TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cart.map(item => (
          <TableRow key={item.id}>
            <TableCell>
              <Image src={item.imageUrl} style={{ width: "2rem" }}></Image>
            </TableCell>
            <TableCell scope="row">{item.name}</TableCell>
            <TableCell>${item.price}</TableCell>
            <TableCell flex direction="row" justify="between">
              {item.quantity > 1 ? (
                <Button onClick={() => removeItemFromCart(item.id)}>
                  {"<"}
                </Button>
              ) : (
                "\u00a0\u00a0" // for empty space
              )}
              <span>{item.quantity}</span>
              <Button onClick={() => addItemToCart(item)}>{">"}</Button>
              <Button onClick={() => clearItemFromCart(item.id)}>X</Button>
            </TableCell>
          </TableRow>
        ))}
        <TableRow>
          <TableCell scope="row">Shipping</TableCell>
          <TableCell>${shippingCost}</TableCell>
        </TableRow>

        <TableRow>
          <TableCell scope="row">
            <strong>Total</strong>
          </TableCell>
          <TableCell>
            <strong>${calculateTotal()}</strong>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default CartItems;
