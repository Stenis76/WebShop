import React from "react";
import { TextInput, Box, FormField, Text } from "grommet";

interface Iprops {
  required: boolean;
  label: string;
  name: string;
}

const FormFieldLabel = (props: Iprops) => {
  const { required, label, ...rest } = props;
  return (
    // <FormField
    // label={
    //   required ? (
    //     <Box direction="row">
    //       <Text>{label}</Text>
    //       <Text color="status-critical">*</Text>
    <FormField>
      <TextInput placeholder={label} size="medium" />
    </FormField>
    //     </Box>
    //   ) : (
    //     label
    //   )
    // }
    // required={required}
    // {...rest}
    // />
  );
};

export default FormFieldLabel;
