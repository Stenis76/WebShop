import React, { useEffect, useContext } from "react";
import { Switch, Route } from "react-router-dom";
import axios from "axios";
import Header from "./components/header";
import Menu from "./components/menu";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Checkout from "./pages/checkout";
import { Grommet, Box, grommet } from "grommet";
import { deepMerge } from "grommet/utils";
import ProductAdmin from "./pages/productAdminPage";
import OrderAdmin from "./pages/orderAdminPage";
import UserAdmin from "./pages/userAdminPage";
import Login from "./pages/logInPage";

const myTheme = {
  global: {
    colors: {
      brand: "#373737",
      mainText: "#FEFFFF",
      buttonBg: "#373737",
      copper: "#ffc29e",
      layer: {
        background: "red",
      },
    },
    font: {
      family: "Abel",
      size: "18px",
      height: "20px",
    },
  },
};

type Item = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

function App() {
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3002/api/product")
  //     .then((res) => {
  //       console.log(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <Grommet theme={deepMerge(grommet, myTheme)} full>
      <Header />
      <Menu />
      <Box height="87vh" pad="large">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop/:category/:query?" component={Shop} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/admin/product" component={ProductAdmin} />
          <Route path="/admin/order" component={OrderAdmin} />
          <Route path="/admin/users" component={UserAdmin} />
          <Route path="/login" component={Login} />
        </Switch>
      </Box>
    </Grommet>
  );
}

export default App;
