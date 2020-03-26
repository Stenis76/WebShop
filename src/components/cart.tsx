import React from "react";
import { Box, Button, Heading, Text, FormField, Layer } from "grommet";
import { Close } from "grommet-icons";

interface Iprops {
  click: any;
}
const MyCart = () => {
  return (
    <Box height="xlarge" overflow="auto">
      <Button fill={false} plain={false} icon={<Close />} onClick={() => {}} />

      <Heading margin="small" size="3">
        Your Shopping Cart
      </Heading>
      <Box pad="xlarge">Cart</Box>
      <Button margin="medium" primary label="Proceed to checkout" />
    </Box>
  );
};
export default MyCart;
