import React from "react";
import { Link } from "react-router-dom";
import { Nav, Text, Box, ResponsiveContext, Menu } from "grommet";

const MyMenu = () => {
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
        {responsive =>
          responsive === "small" ? (
            <Menu
              label="Menu"
              items={[
                { label: "Mens", onClick: () => {} },
                { label: "Womens", onClick: () => {} },
                { label: "Hats", onClick: () => {} },
                { label: "Jackets", onClick: () => {} },
                { label: "Sneakers", onClick: () => {} }
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
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
      <Text size="medium">
        <Link className="link" to="/sign-in-sign-up">
          Sign in / Register
        </Link>
      </Text>
    </Box>
  );
};

export default MyMenu;
