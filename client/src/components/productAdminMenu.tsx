import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Nav, Text, Box, ResponsiveContext, Menu } from "grommet";

const ProductAdminMenu = () => {
  const history = useHistory();

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
                { label: "Product", onClick: () => history.push("/admin/product/hats") },
                { label: "Order", onClick: () => history.push("/admin/product/sneakers") },
                { label: "Users", onClick: () => history.push("/admin/product/jackets") },
                { label: "Product", onClick: () => history.push("/admin/product/womens") },
                { label: "Order", onClick: () => history.push("/admin/product/mens") }
              ]}
            />
          ) : (
            <Nav direction="row" background="mainText">
                <header>Product Admin Menu</header>
              <Text margin={{ left: "small" }} size="medium">
                <Link className="link" to="/admin/product/hats">
                  Hats
                </Link>
              </Text>
              <Text size="medium">
                <Link className="link" to="/admin/product/sneakers">
                  Sneakers
                </Link>
              </Text>
              <Text size="medium">
                <Link className="link" to="/admin/product/jackets">
                  Jackets
                </Link>
              </Text>
              <Text size="medium">
                <Link className="link" to="/admin/product/womens">
                  Womens
                </Link>
              </Text>
              <Text size="medium">
                <Link className="link" to="/admin/product/mens">
                  Mens
                </Link>
              </Text>
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </Box>
  );
};

export default ProductAdminMenu;
