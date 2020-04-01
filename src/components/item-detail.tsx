import React, { useContext } from "react";
import { Box, Button, Text, Heading, Image } from "grommet";
import item from "./item";
import CartContext from "../contexts/cart-context/context";

interface Iprops {
  item: any;
}

const ItemDetails = (props: Iprops) => {
  const { addItemToCart } = useContext(CartContext);
  return (
    <Box
      width="large"
      height="large"
      round="none"
      align="center"
      justify="center"
      background="light-3"
      pad="large"
    >
      <Box align="center" justify="center">
        <Heading margin="xsmall">{props.item.name}</Heading>
        <Heading color="#c96d36" size="samll">
          ${props.item.price}
        </Heading>
      </Box>
      <Box direction="row">
        <Image
          src={props.item.imageUrl}
          style={{ boxShadow: "2px 2px 4px gray", marginRight: "1rem" }}
        />
        <Box justify="between">
          <Text style={{ fontWeight: "bold" }}>Sizes: </Text>
          <Box>
            <Text>
              {props.item.size.map((sizeUnit: any, index: any) => (
                <Text
                  key={index}
                  style={{
                    backgroundColor: "#e0e0e0",
                    padding: "0.3rem",
                    border: "1px solid black",
                    color: "black",
                    marginRight: "0.1rem"
                  }}
                >
                  {sizeUnit}
                </Text>
              ))}
            </Text>
          </Box>
          <Text style={{ fontWeight: "bold" }}>Seasons: </Text>
          <Box>
            <Text>
              {props.item.season.map((seasonUnit: any, index: any) => (
                <Text
                  key={index}
                  style={{
                    backgroundColor: "#e0e0e0",
                    padding: "0.3rem",
                    border: "1px solid black",
                    color: "black",
                    marginRight: "0.1rem"
                  }}
                >
                  {seasonUnit}
                </Text>
              ))}
            </Text>
          </Box>
          <Text>
            <span style={{ fontWeight: "bold" }}>Description: </span>
            {props.item.description}
          </Text>
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
        </Box>
      </Box>
    </Box>
  );
};

export default ItemDetails;
