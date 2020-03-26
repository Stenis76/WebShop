import React, { useContext } from "react";
import {
  Box,
  Button,
  Heading,
  TextInput,
  FormField,
  Layer,
  Stack,
  Text
} from "grommet";
import CartContext from "../contexts/cartContext/context";
import { Cart, Search } from "grommet-icons";
import MyCart from "./cart";
interface Iprops {}

const Header = (props: Iprops) => {
  const { cart } = useContext(CartContext);

  const [open, setOpen] = React.useState<boolean>();

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

        <Button
          margin={{ right: "medium" }}
          icon={<Search />}
          onClick={() => {}}
        />
        {cart.length != 0 ? (
          <Stack anchor="top-right" margin={{ right: "medium" }}>
            <Cart size="large" onClick={onOpen} />
            <Box background="#76FEB3" pad={{ horizontal: "xsmall" }} round>
              <Text weight="bold" size="medium">
                {cart.length}
              </Text>
            </Box>
          </Stack>
        ) : (
          <Stack margin={{ right: "medium" }}>
            <Cart size="large" />
          </Stack>
        )}
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
