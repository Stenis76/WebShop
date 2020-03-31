import React from "react";
import { Box, Button, Heading } from "grommet";
import { Close } from "grommet-icons";
import { Link } from "react-router-dom";
import CartItems from "./cart-items";

interface Iprops {
  closeCart: any;
}
const MyCart = (props: Iprops) => {
  return (
    <Box align="center" height="xlarge" overflow="auto">
      <Button alignSelf="end" icon={<Close />} onClick={props.closeCart} />

      <Heading margin="small" size="3">
        Your Shopping Cart
      </Heading>
      <Box pad="medium" style={{ minWidth: "20rem" }}>
        <CartItems />
      </Box>
      <Link to="/Checkout">
        <Button
          margin="medium"
          primary
          label="Proceed to checkout"
          onClick={props.closeCart}
        />
      </Link>
    </Box>
  );
};
export default MyCart;
