import React, { useContext } from "react";
import CartContext from "../contexts/cart-context/context";

import { Box, Form, RadioButtonGroup } from "grommet";

interface IProps {}

const ShippingForm = (props: IProps) => {
  const { shippingMethod, setShippingMethod, shippingCost } = useContext(
    CartContext
  );

  const getDeliveryTime = () => {
    const date = new Date();
    switch (shippingMethod) {
      case "postNord":
        date.setHours(date.getHours() + 72);
        break;
      case "dhl":
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
            { label: "PostNord (72h)", value: "postNord" },
            { label: "Schenker (36h)", value: "schenker" },
            { label: "DHL Express (6h)", value: "dhl" }
          ]}
          value={shippingMethod}
          onChange={event => {
            const method: any = event.target.value;
            setShippingMethod(method);
          }}
          {...props}
        />
      </Box>
      <div>${shippingCost}</div>
      <div>
        <span style={{ fontWeight: "bold", color: "#c96d36" }}>
          Delivery date:
        </span>{" "}
        {getDeliveryTime().toLocaleString()}
      </div>
    </Form>
  );
};

export default ShippingForm;
