import React from "react";
import { Box, Button, Heading, TextInput, FormField, Layer } from "grommet";
import { Cart, Search } from "grommet-icons";
import MyCart from "./cart";
interface Iprops {}

interface Istate {
  setOpen(): boolean;
}

const Header = (props: Iprops) => {
  const [open, setOpen] = React.useState();

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(undefined);
  return (
    <Box
      height="8vh"
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
      <Heading
        level="3"
        margin="none"
        style={{ fontFamily: `ONEDAY` }}
        size="large"
      >
        ADAM FREDICK
      </Heading>
      <Box direction="row">
        <FormField>
          <TextInput placeholder="Sök produkter" size="medium" />
        </FormField>
        <Button icon={<Search />} onClick={() => {}} />
        <Button icon={<Cart />} onClick={onOpen} />
      </Box>
      {open && (
        <Layer position="top-right" onClickOutside={onClose}>
          <MyCart />
        </Layer>
      )}
    </Box>
  );
};

export default Header;
