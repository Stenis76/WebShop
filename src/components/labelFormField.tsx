import React from "react";
import FormFieldLabel from "./formFieldLabel";
import { Box, Form, Text, Button } from "grommet";

const LabelFormField = () => (
  <Box align="baseline" pad="small">
    <Form>
      <FormFieldLabel name="firstName" label="FirstName" required />
      <FormFieldLabel name="LastName" label="LastName" required />
      <FormFieldLabel name="email" label="Email" required />
      <Button type="submit" label="Submit" primary />
      <Text margin={{ left: "small" }} size="small" color="status-critical">
        * Required Field
      </Text>
    </Form>
  </Box>
);

export default LabelFormField;
