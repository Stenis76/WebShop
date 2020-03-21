import React from "react";
import { Nav, Text } from "grommet";

const Menu = () => {
  return (
    <Nav direction="row" background="mainText" pad="small" elevation="xsmall">
      <Text margin={{ left: "small" }} size="small">
        MENS
      </Text>
      <Text size="small">WOMENS</Text>
      <Text size="small">HATS</Text>
      <Text size="small">JACKETS</Text>
      <Text size="small">SNEAKERS</Text>
    </Nav>
  );
};

export default Menu;
