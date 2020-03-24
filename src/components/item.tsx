import React, { useContext } from "react";
import { Box, Button, Layer } from "grommet";
import CartContext from "../contexts/cartContext/context";
import ItemDetails from "../components/item-detail";

interface Iprops {
  item: any;
}

const Item = (props: Iprops) => {
  const { addItemToCart } = useContext(CartContext);
  const url = `url(${props.item.imageUrl})`;
  const [show, setShow] = React.useState(false);
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

      <Button label="show" onClick={() => setShow(true)} />
      {show && (
        <Layer
          onEsc={() => setShow(false)}
          onClickOutside={() => setShow(false)}
        >
          <ItemDetails item={props.item} />
          <Button label="close" onClick={() => setShow(false)} />
        </Layer>
      )}
    </Box>
  );
};

export default Item;
