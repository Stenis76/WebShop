import React from "react";
import { Box, Paragraph } from "grommet";
import Collection from "../../assets/collection.jpg";

const HomeCollection = () => {
  return (
    <div style={{ position: "relative" }}>
      <Box gridArea="collection">
        <img
          src={Collection}
          alt="collectionImage"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%"
          }}
        />
      </Box>
      <Paragraph
        size="medium"
        style={{
          position: "absolute",
          color: "#ffc29e",
          right: 0,
          bottom: 0
        }}
      >
        ADAM FREDICK Collection
      </Paragraph>
    </div>
  );
};

export default HomeCollection;
