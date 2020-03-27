import React from "react";
import { Box, Button, Heading } from "grommet";
import { Close } from "grommet-icons";
import { Link } from "react-router-dom";

interface Iprops {
  closeCart: any;
}
const MyCart = (props: Iprops) => {
  return (
    <Box align="center" height="xlarge">
      <Button alignSelf="end" icon={<Close />} onClick={props.closeCart} />
      <Heading margin="small" size="3">
        Your Shopping Cart
      </Heading>
      <Box pad="xlarge">Cart</Box>
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
