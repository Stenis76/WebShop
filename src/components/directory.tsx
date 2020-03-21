import React from "react";
import { Grid, Box } from "grommet";
import Collection from "../assets/collection.jpg";

const Directory = () => {
  return (
    <Grid
      fill
      responsive={true}
      rows={["30%", "auto"]}
      columns={["25%", "auto"]}
      gap="small"
      areas={[
        { name: "header", start: [1, 0], end: [1, 0] },
        { name: "nav", start: [0, 0], end: [0, 1] },
        { name: "main", start: [1, 1], end: [1, 1] }
      ]}
    >
      <Box gridArea="header" background="brand" height="100%"></Box>
      <Box gridArea="nav" background="light-5" height="100%">
        <img
          src={Collection}
          alt="collectionImage"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%"
          }}
        />
      </Box>
      <Box gridArea="main" background="light-2" height="100%" />
    </Grid>
  );
};

export default Directory;
