import React, { useState } from "react";
import AppBar from "./components/appbar";
import {
  Box,
  Button,
  Collapsible,
  Heading,
  Grommet,
  Layer,
  ResponsiveContext
} from "grommet";
import { FormClose, Cart } from "grommet-icons";

const theme = {
  global: {
    colors: {
      brand: "#49516f"
    },
    font: {
      family: "Roboto",
      size: "18px",
      height: "20px"
    }
  }
};

function App() {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  return (
    <Grommet theme={theme} full>
      <ResponsiveContext.Consumer>
        {size => (
          <Box fill>
            <AppBar>
              <Heading level="3" margin="none">
                My App
              </Heading>
              <Button
                icon={<Cart />}
                onClick={() => setShowSidebar(!showSidebar)}
              />
            </AppBar>
            <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
              <Box flex align="center" justify="center">
                app body
              </Box>
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
