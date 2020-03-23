import React from "react";
import { Grid, Box } from "grommet";
import Directory from "../components/directory";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

interface Iprops {
  collection: any;
}

const Shop = (props: Iprops) => {
  console.log(props.collection);

  return (
    <Grid
      fill
      responsive={true}
      areas={[
        { name: "directory", start: [0, 0], end: [0, 0] },
        { name: "main", start: [1, 0], end: [1, 0] }
      ]}
      columns={["small", "flex"]}
      rows={["flex"]}
      gap="small"
    >
      <Directory />
      <Box gridArea="main" background="brand" />
      <Router>
        <Switch>
          <Route path="/shop/sneakers" />
        </Switch>
      </Router>
    </Grid>
  );
};

export default Shop;
