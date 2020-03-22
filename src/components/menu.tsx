import React from "react";
import { Nav, Text, Box } from "grommet";

const Menu = () => {
  return (
    <Box direction="row" justify="between" elevation="xsmall" pad="small">
      <Nav direction="row" background="mainText">
        <Text margin={{ left: "small" }} size="medium">
          MENS
        </Text>
        <Text size="medium">WOMENS</Text>
        <Text size="medium">HATS</Text>
        <Text size="medium">JACKETS</Text>
        <Text size="medium">SNEAKERS</Text>
      </Nav>
      <Text size="medium">Sign in / Register</Text>
    </Box>
  );
};

export default Menu;
