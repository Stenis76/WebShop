import React from "react";
import { Nav, Text, Box } from "grommet";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Box
      height="5vh"
      direction="row"
      justify="between"
      align="center"
      elevation="xsmall"
      pad="small"
    >
      <Nav direction="row" background="mainText">
        <Text margin={{ left: "small" }} size="medium">
          MENS
        </Text>
        <Text size="medium">WOMENS</Text>
        <Text size="medium">HATS</Text>
        <Text size="medium">JACKETS</Text>
        <Link to="/shop/sneakers">
          <Text size="medium">SNEAKERS</Text>
        </Link>
      </Nav>
      <Text size="medium">Sign in / Register</Text>
    </Box>
  );
};

export default Menu;
