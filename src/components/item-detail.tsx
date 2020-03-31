import React from "react";
import { Box, Text, Heading, Image } from "grommet";

interface Iprops {
  item: any;
}

const ItemDetails = (props: Iprops) => {
  return (
    <Box
      width="large"
      height="large"
      round="none"
      align="center"
      justify="center"
      background="light-3"
    >
      <Heading>{props.item.name}</Heading>
      <Text>size{props.item.size}</Text>
      <Image src={props.item.imageUrl} />
      <Text>${props.item.price}</Text>
    </Box>
  );
};

export default ItemDetails;
