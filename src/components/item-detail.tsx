import React from "react";
import { Box, Text, Heading, Image } from "grommet";
import item from "./item";

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
                    padding: "0.5rem",
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
                    padding: "0.5rem",
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
        </Box>
      </Box>
    </Box>
  );
};

export default ItemDetails;
