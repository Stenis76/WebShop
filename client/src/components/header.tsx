import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  Box,
  Heading,
  Layer,
  Stack,
  Text,
  ResponsiveContext,
  Button,
} from "grommet";
import { Login, Logout } from "grommet-icons";
import CartContext from "../contexts/cart-context/context";
import UserContext from "../contexts/user-context/context";
import { Cart } from "grommet-icons";
import MyCart from "./my-cart";
import SearchBar from "./search-bar";

interface Iprops {}

const Header = (props: Iprops) => {
  const { cart } = useContext(CartContext);
  const responsive = useContext(ResponsiveContext);
  const { isAuthenticated } = useContext(UserContext);
  const { logout } = useContext(UserContext);
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
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          ADAM FREDICK
        </Link>
      </Heading>
      <Box direction="row">
        <SearchBar />
        <Stack
          anchor="top-right"
          onClick={onOpen}
          margin={{ right: "medium" }}
          style={{ cursor: "pointer" }}
          alignSelf="center"
        >
          <Cart size={responsive === "small" ? "1.7rem" : "2.3rem"} />
          <Box background="#76FEB3" pad={{ horizontal: "xxsmall" }} round>
            <Text
              weight="bold"
              size={responsive === "small" ? "small" : "medium"}
            >
              {cart.length}
            </Text>
          </Box>
        </Stack>
        {isAuthenticated ? (
          <Button
            margin={{ right: "medium" }}
            onClick={logout}
            icon={
              <Logout size={responsive === "small" ? "1.7rem" : "2.3rem"} />
            }
          />
        ) : (
          <Link to="/login">
            <Button
              margin={{ right: "medium" }}
              icon={
                <Login size={responsive === "small" ? "1.7rem" : "2.3rem"} />
              }
            />
          </Link>
        )}
      </Box>
      {open && (
        <Layer position="top-right" onClickOutside={onClose}>
          <MyCart closeCart={onClose} />
        </Layer>
      )}
    </Box>
  );
};

export default Header;
