import React from "react";
import FormFieldLabel from "./formFieldLabel";
import { Box, Form, Text, Button } from "grommet";

const ContactFormField = () => (
  <Box
    height="small"
    justify="around"
    pad="small"
    direction="row"
    flex="shrink"
  >
    <Form>
      <FormFieldLabel name="firstName" label="FirstName" required />
      <FormFieldLabel name="lastName" label="LastName" required />
      <FormFieldLabel name="email" label="Email" required />
    </Form>
    <Form>
      <FormFieldLabel name="adress" label="Adress" required />
      <FormFieldLabel name="phone" label="Phone" required />
      <FormFieldLabel name="country" label="Country" required />
      <Text margin={{ left: "small" }} size="small" color="status-critical">
        * Required Field
      </Text>
    </Form>
    <Button type="submit" label="Submit" primary />
  </Box>
);

export default ContactFormField;
