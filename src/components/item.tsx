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
      width="medium"
      height="medium"
      round="small"
      align="center"
      justify="end"
      background={url}
      margin="small"
    >
      <Box
        direction="row"
        background="rgba(255,255,255,0.8)"
        width="100%"
        height="30%"
        justify="evenly"
        align="center"
      >
        <Box direction="column" justify="between">
          <h3>{props.item.name}</h3>
          <span>{props.item.price * 10} kr</span>
        </Box>
        <Box direction="column" align="end">
          <Button
            primary
            onClick={(event: any) => {
              addItemToCart(props.item);
              const itemComponent = event.target;
              itemComponent.innerText = "Item added";
              itemComponent.style.backgroundColor = "#76FEB3";
              itemComponent.style.color = "#373737";
              setTimeout(() => {
                itemComponent.innerText = "Add to cart";
                itemComponent.style.backgroundColor = "#373737";
                itemComponent.style.color = "#FEFEFE";
              }, 4000);
            }}
            label="Add to cart"
            margin="small"
            color="buttonBg"
          />
          <Button
            alignSelf="center"
            plain
            color="#c96d36"
            label="Product details"
            onClick={() => setShow(true)}
          />
        </Box>
      </Box>

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
