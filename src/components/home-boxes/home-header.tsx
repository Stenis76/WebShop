import React from "react";
import { Box, Paragraph } from "grommet";
import WideImage from "../../assets/manwithshirtwide.jpg";

const HomeHeader = () => {
  return (
    <Box gridArea="header" style={{ position: "relative" }}>
      <Box fill>
        <img
          src={WideImage}
          alt="WideImage"
          style={{
            objectFit: "cover",
            width: "100%",
            height: "100%"
          }}
        />
      </Box>
      <Paragraph
        size="xxlarge"
        style={{
          margin: 0,
          position: "absolute",
          color: "#FEFFFF",
          left: "1rem",
          bottom: "1rem"
        }}
      >
        Become a <span style={{ color: "#ffc29e" }}>member</span>
        <br></br> and get <span style={{ color: "#ffc29e" }}>FREE</span>{" "}
        shipping
      </Paragraph>
    </Box>
  );
};

export default HomeHeader;
