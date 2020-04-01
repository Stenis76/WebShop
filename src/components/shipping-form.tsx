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

  const getDeliveryCost = () => {
    let cost;
    switch (shippingMethod) {
      case "camel":
        cost = 10;
        break;
      case "lightning":
        cost = 5;
        break;
      default:
        cost = 2;
    }
    return cost;
  };

  return (
    <Form style={{ gridArea: "name" }}>
      <Box align="center" pad="large">
        <RadioButtonGroup
          direction="row"
          name="radio"
          options={[
            { label: "PostNord (72h)", value: "camel" },
            { label: "Schenker (36h)", value: "regular" },
            { label: "DHL Express (6h)", value: "lightning" }
          ]}
          value={shippingMethod}
          onChange={event => {
            const method: any = event.target.value;
            setShippingMethod(method);
          }}
          {...props}
        />
      </Box>
      <div>+ ${getDeliveryCost()}</div>
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
