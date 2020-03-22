import React from "react";
import { Box, Paragraph } from "grommet";
import WideImage from "../../assets/manwithshirtwide.jpg";

const HomeHeader = () => {
  return (
    <Box gridArea="header">
      <img
        src={WideImage}
        alt="WideImage"
        style={{
          objectFit: "cover",
          width: "100%",
          height: "100%",
          position: "relative"
        }}
      />
      <Paragraph
        size="xxlarge"
        style={{
          position: "absolute",
          color: "#FEFFFF",
          paddingLeft: "1.5rem",
          paddingTop: "1.5rem"
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
