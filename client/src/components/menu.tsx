import React, { useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import { Nav, Text, Box, ResponsiveContext, Menu } from "grommet";
import UserContext from "../contexts/user-context/context";

const MyMenu = () => {
  const history = useHistory();
  const { user } = useContext(UserContext);

  return (
    <Box
      height="5vh"
      direction="row"
      justify="between"
      align="center"
      elevation="xsmall"
      pad="small"
    >
      <ResponsiveContext.Consumer>
        {(responsive) =>
          responsive === "small" ? (
            <Menu
              label="Menu"
              items={[
                { label: "Mens", onClick: () => history.push("/shop/mens") },
                {
                  label: "Womens",
                  onClick: () => history.push("/shop/womens"),
                },
                { label: "Hats", onClick: () => history.push("/shop/hats") },
                {
                  label: "Jackets",
                  onClick: () => history.push("/shop/jackets"),
                },
                {
                  label: "Sneakers",
                  onClick: () => history.push("/shop/sneakers"),
                },
                {
                  label: "All",
                  onClick: () => history.push("/shop/all"),
                },
              ]}
            />
          ) : (
            <Nav direction="row" background="mainText">
              <Text margin={{ left: "small" }} size="medium">
                <Link className="link" to="/shop/mens">
                  MENS
                </Link>
              </Text>
              <Text size="medium">
                <Link className="link" to="/shop/womens">
                  WOMENS
                </Link>
              </Text>
              <Text size="medium">
                <Link className="link" to="/shop/hats">
                  HATS
                </Link>
              </Text>
              <Text size="medium">
                <Link className="link" to="/shop/jackets">
                  JACKETS
                </Link>
              </Text>
              <Text size="medium">
                <Link className="link" to="/shop/sneakers">
                  SNEAKERS
                </Link>
              </Text>
              <Text size="medium">
                <Link className="link" to="/shop/all">
                  ALL PRODUCTS
                </Link>
              </Text>
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
      <Text size="medium">
        {user.role === "admin" ? (
          <Link className="link" to="/admin/product">
            Admin
          </Link>
        ) : null}
      </Text>
    </Box>
  );
};

export default MyMenu;
