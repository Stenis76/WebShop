import React from "react";
import { Box, Accordion, AccordionPanel, Text } from "grommet";
import LabelFormField from "./labelFormField";

const MyCheckOut = () => {
  return (
    <Box gridArea="myCheckOut" background="light-5">
      <Accordion>
        <AccordionPanel label="Contacts">
          <LabelFormField />
        </AccordionPanel>
        <AccordionPanel label="Shipping">
          <Box pad="medium" background="light-2">
            <Text>Two</Text>
          </Box>
        </AccordionPanel>
        <AccordionPanel label="Payment">
          <Box pad="medium" background="light-2">
            <Text>Two</Text>
            <Text>Two</Text>
          </Box>
        </AccordionPanel>
      </Accordion>
    </Box>
  );
};

export default MyCheckOut;
