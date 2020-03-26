import React, { useContext } from "react";
import CartContext from "../contexts/cartContext/context";
import {
  Box,
  Button,
  Heading,
  TextInput,
  FormField,
  Stack,
  Text
} from "grommet";
import { Cart, Search } from "grommet-icons";
interface Iprops {}

const Header = (props: Iprops) => {
  const { cart } = useContext(CartContext);
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
            <Cart size="large" />
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
    </Box>
  );
};

export default Header;
