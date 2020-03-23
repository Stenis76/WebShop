import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/header";
import Menu from "./components/menu";
import Home from "./pages/home";
import Shop from "./pages/shop";
import {
  Box,
  Button,
  Collapsible,
  Grommet,
  Layer,
  ResponsiveContext
} from "grommet";
import { FormClose } from "grommet-icons";

import SHOP_DATA from "./shop.data";

const theme = {
  global: {
    colors: {
      brand: "#373737",
      mainText: "#FEFFFF"
    },
    font: {
      family: "Abel",
      size: "18px",
      height: "20px"
    }
  }
};

type Item = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

type Collection = {
  id: number;
  title: string;
  routeName: string;
  items: Item[];
};

function App() {
  const [collections, setCollections] = useState<Collection[]>();

  useEffect(() => {
    syncWithLocalStorage();
  }, []);

  const syncWithLocalStorage = () => {
    const localstorageItems = localStorage.getItem("collection");
    if (localstorageItems) setCollections(JSON.parse(localstorageItems));
    else localStorage.setItem("collection", JSON.stringify(SHOP_DATA));
  };

  return (
    <Router>
      <Grommet theme={theme} full>
        <Header />
        <Menu />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/shop"
            render={props => <Shop {...props} collection={collections} />}
          />
        </Switch>
      </Grommet>
    </Router>
  );
}

export default App;
