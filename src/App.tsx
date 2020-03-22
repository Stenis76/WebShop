import React, { useState, useEffect } from "react";
import Header from "./components/header";
import Menu from "./components/menu";
import Home from "./pages/home";
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
  const [showSidebar, setShowSidebar] = useState(false);
  const [collections, setCollections] = useState<Collection[]>();

  useEffect(() => {
    syncWithLocalStorage();
  }, []);

  const syncWithLocalStorage = () => {
    const localstorageItems = localStorage.getItem("collection");
    if (localstorageItems) setCollections(JSON.parse(localstorageItems));
    else localStorage.setItem("collection", JSON.stringify(SHOP_DATA));
  };

  const showSidebarOnClick = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <Header showSidebarOnClick={showSidebarOnClick} />
            <Menu />

            <Box
              direction="row"
              flex
              overflow={{ horizontal: "hidden" }}
              pad="large"
            >
              {/*Items kommer inte ut första gången man går in om LS är tomt.*/}
              {/* {<Box flex align="center" justify="center">
                {collections
                  ? collections.map(collection =>
                      collection.items.map(item => (
                        <li key={item.id}>
                          <img src={item.imageUrl} alt="" />
                          <h2>{item.name}</h2>
                        </li>
                      ))
                    )
                  : null}
              </Box>} */}
              <Home />
              {!showSidebar || size !== "small" ? (
                <Collapsible direction="horizontal" open={showSidebar}>
                  <Box
                    flex
                    width="medium"
                    background="light-2"
                    elevation="small"
                    align="center"
                    justify="center"
                  >
                    sidebar
                  </Box>
                </Collapsible>
              ) : (
                <Layer>
                  <Box
                    background="light-2"
                    tag="header"
                    justify="end"
                    align="center"
                    direction="row"
                  >
                    <Button
                      icon={<FormClose />}
                      onClick={() => setShowSidebar(false)}
                    />
                  </Box>
                  <Box
                    fill
                    background="light-2"
                    align="center"
                    justify="center"
                  >
                    sidebar
                  </Box>
                </Layer>
              )}
            </Box>
          </Box>
        )}
      </ResponsiveContext.Consumer>
    </Grommet>
  );
}

export default App;
