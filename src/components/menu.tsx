import React from "react";
import { Nav, Text, Box } from "grommet";

const Menu = () => {
  return (
    <Box direction="row" justify="between" elevation="xsmall" pad="small">
      <Nav direction="row" background="mainText">
        <Text margin={{ left: "small" }} size="small">
          MENS
        </Text>
        <Text size="small">WOMENS</Text>
        <Text size="small">HATS</Text>
        <Text size="small">JACKETS</Text>
        <Text size="small">SNEAKERS</Text>
      </Nav>
      <Text size="small">Sign in / Register</Text>
    </Box>
  );
};

export default Menu;
