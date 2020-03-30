import React, { useContext } from "react";
import {
  Button,
  Box,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody
} from "grommet";
import CartContext from "../contexts/cartContext/context";

const CartItems = () => {
  const { cart, removeItemFromCart, shippingMethod } = useContext(CartContext);

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
      total += cart[i].price;
    }

    return total + shippingCost;
  };

  return (
    <Table style={{ width: "100%" }}>
      <TableHeader>
        <TableRow>
          <TableCell scope="col" border="bottom">
            Name
          </TableCell>
          <TableCell scope="col" border="bottom">
            Price
          </TableCell>
          <TableCell scope="col" border="bottom"></TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
        {cart.map(item => (
          <TableRow key={item.id}>
            <TableCell scope="row">{item.name}</TableCell>
            <TableCell>${item.price}</TableCell>
            <TableCell>
              <Button onClick={() => removeItemFromCart(item.id)}>x</Button>
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
