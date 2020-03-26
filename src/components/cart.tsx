import React from "react";
import { Box, Button, Heading, TextInput, FormField, Layer } from "grommet";
import { Search } from "grommet-icons";

const MyCart = () => {
  return (
    <Box height="xlarge" overflow="auto">
      <Button>Stäng ner</Button>
      <Box pad="xlarge">Cart</Box>
      <Button> Proceed to checkout</Button>
    </Box>
  );
};
export default MyCart;
