import React, { useContext } from "react";
import { Box } from "grommet";
import CartContext from "../contexts/cartContext/context";

interface Iprops {
  item: any;
}

const Item = (props: Iprops) => {
  const { addItemToCart } = useContext(CartContext);
  const url = `url(${props.item.imageUrl})`;
  return (
    <Box
      width="small"
      height="medium"
      round="small"
      align="center"
      justify="center"
      background={url}
      margin="small"
    >
      <h2>{props.item.name}</h2>
      <span>{props.item.price * 10} kr</span>
      <button onClick={() => addItemToCart(props.item)}>Add to cart</button>
    </Box>
  );
};

export default Item;
