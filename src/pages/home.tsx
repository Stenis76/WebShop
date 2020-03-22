import React from "react";
import HomeHeader from "../components/home-boxes/home-header";
import HomeCollection from "../components/home-boxes/home-collection";
import { Grid, Box, Paragraph, Text } from "grommet";
import SaleImage from "../assets/sale.jpg";
import FallCollectionImage from "../assets/fallcollection.jpg";

const Home = () => {
  return (
    <Grid
      fill
      responsive={true}
      rows={["30%", "auto"]}
      columns={["25%", "45%", "auto"]}
      gap="small"
      areas={[
        { name: "header", start: [1, 0], end: [2, 1] },
        { name: "collection", start: [0, 0], end: [0, 1] },
        { name: "sale", start: [1, 1], end: [1, 1] },
        { name: "fallCollection", start: [2, 1], end: [2, 1] }
      ]}
    >
      <HomeHeader />
      <HomeCollection />

      <Box gridArea="sale">
        <img
          src={SaleImage}
          alt="SaleImage"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%"
          }}
        />
      </Box>
      <Box gridArea="fallCollection">
        <img
          src={FallCollectionImage}
          alt="FallCollectionImage"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%"
          }}
        />
      </Box>
    </Grid>
  );
};

export default Home;
