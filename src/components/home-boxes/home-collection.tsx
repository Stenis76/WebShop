import React from "react";
import { Box, Paragraph } from "grommet";
import Collection from "../../assets/images/collection.jpg";

const HomeCollection = () => {
  return (
    <Box gridArea="collection" style={{ position: "relative" }}>
      <Box fill>
        <img
          src={Collection}
          alt="WideImage"
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
          margin: 0,
          padding: "0.5rem",
          position: "absolute",
          color: "#ffc29e",
          right: "1rem",
          bottom: "1rem",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          fontStyle: "italic"
        }}
      >
        ADAM
        <br /> FREDICK
        <br /> <span style={{ color: "#FEFFFF" }}>collection</span>
      </Paragraph>
    </Box>
  );
};

export default HomeCollection;
