import React, { useContext } from "react";
import CartContext from "../contexts/cart-context/context";

import { Box, Form, RadioButtonGroup } from "grommet";

interface IProps {}

const ShippingForm = (props: IProps) => {
  const { shippingMethod, setShippingMethod } = useContext(CartContext);

  const getDeliveryTime = () => {
    const date = new Date();
    switch (shippingMethod) {
      case "camel":
        date.setHours(date.getHours() + 72);
        break;
      case "lightning":
        date.setHours(date.getHours() + 6);
        break;
      default:
        date.setHours(date.getHours() + 36);
    }
    return date;
  };

  return (
    <Form style={{ gridArea: "name" }}>
      <Box align="center" pad="large">
        <RadioButtonGroup
          direction="row"
          name="radio"
          options={[
            { label: "Camel Express", value: "camel" },
            { label: "Regular", value: "regular" },
            { label: "Lightning Shipping", value: "lightning" }
          ]}
          value={shippingMethod}
          onChange={event => {
            const method: any = event.target.value;
            setShippingMethod(method);
          }}
          {...props}
        />
      </Box>
      <div>{getDeliveryTime().toLocaleString()}</div>
    </Form>
  );
};

export default ShippingForm;
