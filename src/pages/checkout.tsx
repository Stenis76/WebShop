import React, { useContext } from "react";
import { Grid, Box, Image, ResponsiveContext, Main } from "grommet";
import picture from "../assets/images/clothesonrack.jpg";
import MyCheckOut from "../components/my-checkout";
import CartItems from "../components/cart-items";

const Checkout = () => {
  const size = useContext(ResponsiveContext) as "small" | "medium" | "large";

  const areas = {
    small: [
      // { name: "cart", start: [0, 1], end: [0, 1] },
      { name: "myCheckOut", start: [0, 0], end: [0, 1] },
      { name: "terms", start: [1, 0], end: [1, 0] },
      { name: "image", start: [1, 1], end: [1, 1] }
    ],
    medium: [
      // { name: "cart", start: [0, 1], end: [0, 1] },
      { name: "myCheckOut", start: [0, 0], end: [0, 1] },
      { name: "terms", start: [1, 0], end: [1, 0] },
      { name: "image", start: [1, 1], end: [1, 1] }
    ],
    large: [
      // { name: "cart", start: [0, 1], end: [0, 1] },
      { name: "myCheckOut", start: [0, 0], end: [0, 1] },
      { name: "terms", start: [1, 0], end: [1, 0] },
      { name: "image", start: [1, 1], end: [1, 1] }
    ]
  };
  return (
    <Main>
      <Grid
        fill
        rows={["1/2", "auto"]}
        columns={["3/4", "auto"]}
        gap="small"
        areas={areas[size]}
      >
        <MyCheckOut />
        {/* <Box gridArea="cart" background="brand">
          Här tänker jag mig en översikt av varukorgen, hade ju varit smutt om
          vi kan använda samma komponent som i kundvagnen
        </Box> */}
        <Box gridArea="terms" background="light-2">
          <CartItems />
        </Box>

        <Box>
          <Image
            src={picture}
            gridArea="image"
            alt="shirts"
            style={{
              objectFit: "cover",
              width: "100%",
              height: "100%"
            }}
          />
        </Box>
      </Grid>
    </Main>
  );
};

export default Checkout;
