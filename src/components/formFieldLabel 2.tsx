import React from "react";
import { Box, FormField, Text } from "grommet";

interface Iprops {
  required: boolean;
  label: string;
  name: string;
}

const FormFieldLabel = (props: Iprops) => {
  const { required, label, ...rest } = props;
  return (
    <FormField
      label={
        required ? (
          <Box direction="row">
            <Text>{label}</Text>
            <Text color="status-critical">*</Text>
          </Box>
        ) : (
          label
        )
      }
      required={required}
      {...rest}
    />
  );
};

export default FormFieldLabel;
