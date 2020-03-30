import React from "react";
import FormFieldLabel from "./formFieldLabel";
import { Box, Form, Text, Button, Grid } from "grommet";

const ContactFormField = () => {
  // const areas = {
  //   small: [
  //     { name: "cart", start: [0, 1], end: [0, 1] },
  //     { name: "myCheckOut", start: [0, 0], end: [0, 0] },
  //     { name: "terms", start: [1, 0], end: [1, 0] },
  //     { name: "image", start: [1, 1], end: [1, 1] }
  //   ],
  //   medium: [
  //     { name: "cart", start: [0, 1], end: [0, 1] },
  //     { name: "myCheckOut", start: [0, 0], end: [0, 0] },
  //     { name: "terms", start: [1, 0], end: [1, 0] },
  //     { name: "image", start: [1, 1], end: [1, 1] }
  //   ],
  //   large: [
  //     { name: "cart", start: [0, 1], end: [0, 1] },
  //     { name: "myCheckOut", start: [0, 0], end: [0, 0] },
  //     { name: "terms", start: [1, 0], end: [1, 0] },
  //     { name: "image", start: [1, 1], end: [1, 1] }
  //   ]
  // };

  return (
    <Grid
      rows={["25%", "25%", "auto"]}
      columns={["1/4", "auto", "1/4"]}
      gap="small"
      areas={[
        { name: "name", start: [1, 0], end: [1, 0] }
        // { name: "adress", start: [0, 0], end: [1, 0] }
        // { name: "contact", start: [10, 0], end: [1, 0] },
        // { name: "submit", start: [10, 0], end: [1, 0] }
      ]}
    >
      <Box gridArea="name">
        <Form style={{ gridArea: "name" }}>
          <FormFieldLabel name="firstName" label="FirstName" required />
          <FormFieldLabel name="lastName" label="LastName" required />
        </Form>
      </Box>
      {/* <Box gridArea="adress">
        <Form>
          <FormFieldLabel name="adress" label="Adress" required />
          <FormFieldLabel name="country" label="Country" required />
        </Form>
      </Box> */}
      {/*
        <Box gridArea="contact">
          <FormFieldLabel name="email" label="Email" required />
          <FormFieldLabel name="phone" label="Phone" required />
        </Box>
        <Box gridArea="submit">
          <Text margin={{ left: "small" }} size="small" color="status-critical">
            * Required Field
          </Text>
          <Button type="submit" label="Submit" primary />
        </Box> */}
    </Grid>
  );
};

export default ContactFormField;
