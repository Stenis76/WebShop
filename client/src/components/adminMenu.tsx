import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Nav, Text, Box, ResponsiveContext, Menu } from "grommet";

const AdminMenu = () => {
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
        {(responsive) =>
          responsive === "small" ? (
            <Menu
              label="Menu"
              items={[
                {
                  label: "Product",
                  onClick: () => history.push("/admin/product"),
                },
                { label: "Order", onClick: () => history.push("/admin/order") },
                { label: "Users", onClick: () => history.push("/admin/users") },
              ]}
            />
          ) : (
            <Nav direction="row" background="mainText">
              <header>Admin Menu</header>
              <Text margin={{ left: "small" }} size="medium">
                <Link className="link" to="/admin/product">
                  Product
                </Link>
              </Text>
              <Text size="medium">
                <Link className="link" to="/admin/order">
                  Order
                </Link>
              </Text>
              <Text size="medium">
                <Link className="link" to="/admin/users">
                  Users
                </Link>
              </Text>
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </Box>
  );
};

export default AdminMenu;
