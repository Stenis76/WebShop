import React, { useContext } from "react";
import { Grid, Box, Image, ResponsiveContext, Main } from "grommet";
import picture from "../assets/images/clothesonrack.jpg";
import MyCheckOut from "../components/myCheckout";

const Checkout = () => {
  const size = useContext(ResponsiveContext) as "small" | "medium" | "large";
  console.log(size);

  const areas = {
    small: [
      { name: "cart", start: [0, 1], end: [0, 1] },
      { name: "myCheckOut", start: [0, 0], end: [0, 0] },
      { name: "terms", start: [1, 0], end: [1, 0] },
      { name: "image", start: [1, 1], end: [1, 1] }
    ],
    medium: [
      { name: "cart", start: [0, 1], end: [0, 1] },
      { name: "myCheckOut", start: [0, 0], end: [0, 0] },
      { name: "terms", start: [1, 0], end: [1, 0] },
      { name: "image", start: [1, 1], end: [1, 1] }
    ],
    large: [
      { name: "cart", start: [0, 1], end: [0, 1] },
      { name: "myCheckOut", start: [0, 0], end: [0, 0] },
      { name: "terms", start: [1, 0], end: [1, 0] },
      { name: "image", start: [1, 1], end: [1, 1] }
    ]
  };
  return (
    <Main>
      <Grid
        fill
        rows={["1/2", "1/2"]}
        columns={["3/4", "1/4"]}
        gap="small"
        areas={areas[size]}
      >
        <MyCheckOut />
        <Box gridArea="cart" background="brand">
          Här tänker jag mig en översikt av varukorgen, hade ju varit smutt om
          vi kan använda samma komponent som i kundvagnen
        </Box>
        <Box gridArea="terms" background="light-2">
          Terms and conditions
        </Box>
        <Image src={picture} gridArea="image" />
      </Grid>
    </Main>
  );
};

export default Checkout;
