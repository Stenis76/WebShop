import React from "react";
import { Grid, Box, Image, Button, Heading, Text, Main, Layer } from "grommet";
import { Close } from "grommet-icons";
import { render } from "@testing-library/react";
import picture from "../assets/images/clothesonrack.jpg";

const Checkout = () => {
  return (
    <Main>
      <Grid
        fill
        rows={["1/2", "1/2"]}
        columns={["3/4", "1/4"]}
        gap="small"
        areas={[
          { name: "cart", start: [0, 1], end: [0, 1] },
          { name: "myInfo", start: [0, 0], end: [0, 0] },
          { name: "terms", start: [1, 0], end: [1, 0] },
          { name: "image", start: [1, 1], end: [1, 1] }
        ]}
      >
        <Box gridArea="cart" background="brand" />
        <Box gridArea="myInfo" background="light-5" />
        <Box gridArea="terms" background="light-2" />
        <Image src={picture} gridArea="image" />
      </Grid>
    </Main>
  );
};

export default Checkout;
