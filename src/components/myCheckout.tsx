import React, { useContext } from "react";
import { Box, Accordion, AccordionPanel, Text } from "grommet";

const MyCheckOut = () => {
  return (
    <Box gridArea="myCheckOut" background="light-5">
      <Accordion>
        <AccordionPanel label="Panel 1">
          <Box pad="medium" background="light-2">
            <Text>One</Text>
          </Box>
        </AccordionPanel>
        <AccordionPanel label="Panel 2">
          <Box pad="medium" background="light-2">
            <Text>Two</Text>
          </Box>
        </AccordionPanel>
      </Accordion>
    </Box>
  );
};

export default MyCheckOut;
