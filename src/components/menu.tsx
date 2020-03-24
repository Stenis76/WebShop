import React from "react";
import { Link } from "react-router-dom";
import { Nav, Text, Box } from "grommet";

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
          <Link to="/shop/mens">MENS</Link>
        </Text>
        <Text size="medium">
          <Link to="/shop/womens">WOMENS</Link>
        </Text>
        <Text size="medium">
          <Link to="/shop/hats">HATS</Link>
        </Text>
        <Text size="medium">
          <Link to="/shop/jackets">JACKETS</Link>
        </Text>
        <Text size="medium">
          <Link to="/shop/sneakers">SNEAKERS</Link>
        </Text>
      </Nav>
      <Text size="medium">
        <Link to="/sign-in-sign-up">Sign in / Register</Link>
      </Text>
    </Box>
  );
};

export default Menu;
