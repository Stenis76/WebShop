import React from "react";
import { Box, FormField } from "grommet";
import { StatusGood } from "grommet-icons";
interface Iprops {
  required: boolean;
  label: string;
  name: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  disabled?: boolean;
  validate?: (data: string) => void;
}

const FormFieldLabel = (props: Iprops) => {
  const { required, label, name, ...rest } = props;
  return (
    // <FormField
    // label={
    //   required ? (
    //     <Box direction="row">
    //       <Text>{label}</Text>
    //       <Text color="status-critical">*</Text>
    <FormField
      label={label}
      name={name}
      required
      // placeholder={label}
      {...rest}
      validate={[
        { regexp: /^[a-z]/i },
        name => {
          if (name && name.length === 1) return "must be more than 1 character";
          return undefined;
        }
      ]}
    >
      {/* <TextInput placeholder={label} size="medium" {...rest} /> */}
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
