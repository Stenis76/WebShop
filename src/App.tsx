import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";

import Header from "./components/header";
import Menu from "./components/menu";
import Home from "./pages/home";
import Shop from "./pages/shop";
import { Grommet } from "grommet";
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
  useEffect(() => {
    syncWithLocalStorage();
  }, []);

  const syncWithLocalStorage = () => {
    const localstorageCollections = localStorage.getItem("collection");
    if (!localstorageCollections) {
      localStorage.setItem("collection", JSON.stringify(SHOP_DATA));
    }
  };

  return (
    <Grommet theme={theme} full>
      <Header />
      <Menu />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/shop/:category" component={Shop} />} />
      </Switch>
    </Grommet>
  );
}

export default App;
