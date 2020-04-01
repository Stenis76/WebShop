import React, { useContext } from "react";
import {
  Button,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  Image,
  Box
} from "grommet";
import { Close, AddCircle, SubtractCircle } from "grommet-icons";
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

  const calculateVat = () => {
    let total = calculateTotal();
    let vat = total * 0.25;

    return vat;
  };

  return (
    <Box>
      <Table>
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
                <Image src={item.imageUrl} style={{ width: "4rem" }}></Image>
              </TableCell>
              <TableCell scope="row">{item.name}</TableCell>
              <TableCell>${item.price}</TableCell>
              <TableCell flex direction="row" align="center">
                {item.quantity > 1 ? (
                  <Button
                    icon={<SubtractCircle />}
                    onClick={() => removeItemFromCart(item.id)}
                  />
                ) : (
                  "\u00a0\u00a0" // for empty space
                )}
                <span>{item.quantity}</span>
                <Button
                  size="small"
                  icon={<AddCircle />}
                  onClick={() => addItemToCart(item)}
                />
              </TableCell>
              <TableCell>
                <Button
                  size="small"
                  onClick={() => clearItemFromCart(item.id)}
                  icon={<Close />}
                />
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

          <TableRow>
            <TableCell scope="row">
              <em>VAT included</em>
            </TableCell>
            <TableCell>
              <em>${calculateVat()}</em>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Box>
  );
};

export default CartItems;
