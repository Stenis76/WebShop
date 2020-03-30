import React from "react";
import { Box, Accordion, AccordionPanel, Text, Button } from "grommet";
import ContactFormField from "./contactFormField";
import PaymentForm from "./payment-form";
import ShippingForm from "./shipping-form";

const MyCheckOut = () => {
  return (
    <Box gridArea="myCheckOut" background="light-6" round="small">
      <Accordion gridArea="myCheckOut">
        <AccordionPanel label="Contacts">
          <ContactFormField />
        </AccordionPanel>
        <AccordionPanel label="Shipping">
          <Box pad="medium" background="light-2">
            <ShippingForm />
          </Box>
        </AccordionPanel>
        <AccordionPanel label="Payment">
          <Box pad="medium" background="light-2">
            <PaymentForm />
          </Box>
        </AccordionPanel>
        <Button margin="medium" primary label="Place your order" />
      </Accordion>
    </Box>
  );
};

export default MyCheckOut;
