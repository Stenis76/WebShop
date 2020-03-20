import React from "react";
import { Box, Button, Heading } from "grommet";
import { Cart } from "grommet-icons";

interface Iprops {
  showSidebarOnClick: () => void;
}

const Header = (props: Iprops) => {
  return (
    <Box
      tag="header"
      direction="row"
      align="center"
      justify="between"
      background="brand"
      pad={{ left: "medium", right: "small", vertical: "small" }}
      elevation="medium"
      style={{ zIndex: 1 }}
      {...props}
    >
      <Heading level="3" margin="none" style={{ fontFamily: `ONEDAY` }}>
        ADAM FREDICK
      </Heading>
      <Button icon={<Cart />} onClick={props.showSidebarOnClick} />
    </Box>
  );
};

export default Header;
