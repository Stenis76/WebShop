import React, { useContext } from "react";
import CartContext from "../contexts/cart-context/context";

import {
  Box,
  Form,
  RadioButtonGroup,
  Text,
  Table,
  TableCell,
  TableBody,
  TableRow,
  ResponsiveContext,
  RadioButton,
} from "grommet";

interface IProps {}

const ShippingForm = (props: IProps) => {
  const {
    shippingMethods,
    setSelectedShippingMethod,
    selectedShippingMethod,
    shippingCost,
  } = useContext(CartContext);

  const getDeliveryDate = () => {
    const date = new Date();
    date.setHours(date.getHours() + 72 /* selectedShippingMethod.deliveryDate) */);
    return date.toLocaleDateString();
  };
  
  return (
    <div>
      <Text weight="bold" alignSelf="start">
        Choose your prefered delivery partner{" "}
      </Text>
      {shippingMethods.map((freight) => (
        <Form key={freight._id} style={{ gridArea: "name" }}>
          <Box align="center" pad="medium">
            <ResponsiveContext.Consumer>
              {(responsive) =>
                responsive === "small" ? (
                  <RadioButton
                    name="radio"
                    label={freight.shipmentCompany}
                    value={freight._id}
                    onChange={(event) => {
                      const method: any = event.target.value;

                      setSelectedShippingMethod(method);
                    }}
                    checked={freight._id === selectedShippingMethod?._id}
                    {...props}
                  />
                ) : (
                  <RadioButton
                    name="radio"
                    label={freight.shipmentCompany}
                    value={freight._id}
                    onChange={(event) => {
                      const method: any = event.target.value;
                      console.log(method);

                      setSelectedShippingMethod(method);
                    }}
                    checked={freight._id === selectedShippingMethod?._id}
                    {...props}
                  />
                )
              }
            </ResponsiveContext.Consumer>
          </Box>
          <Table margin="0">
            <TableBody>
              <TableRow>
                <TableCell scope="row">
                  <Text>Delivery cost:</Text>
                </TableCell>
                <TableCell>
                  <strong>${freight.shippingCost}</strong>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell scope="row">
                  <Text>Delivery date:</Text>
                </TableCell>
                <TableCell>
                  <strong>{freight.deliveryDate}</strong>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Form>
      ))}
    </div>
  );
};

export default ShippingForm;

/* [
  { label: "PostNord (72h)", value: "postNord" },
  { label: "Schenker (36h)", value: "schenker" },
  { label: "DHL Express (6h)", value: "dhl" },
] */
