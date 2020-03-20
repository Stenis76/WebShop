import React from "react";
import { Nav, Text } from "grommet";

const Menu = () => {
  return (
    <Nav direction="row" background="mainText" pad="small">
      <Text margin={{ left: "small" }}>MENS</Text>
      <Text>WOMENS</Text>
      <Text>HATS</Text>
      <Text>JACKETS</Text>
      <Text>SNEAKERS</Text>
    </Nav>
  );
};

export default Menu;
