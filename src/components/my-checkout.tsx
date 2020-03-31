import React, { useState, useContext } from "react";
import { Box, Accordion, AccordionPanel, Button } from "grommet";
import ContactFormField from "./contact-form-field";
import PaymentForm from "./payment-form";
import ShippingForm from "./shipping-form";

import UserContext from "../contexts/user-context/context";
import CartContext from "../contexts/cart-context/context";
import { User } from "grommet-icons";

const MyCheckOut = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const { user } = useContext(UserContext);
  const { cart, shippingMethod } = useContext(CartContext);

  const validUserInformation = () =>
    user.firstName.length > 1 &&
    user.firstName.match(/[A-Ö]/gi)?.length === user.firstName.length &&
    user.lastName.length > 1 &&
    user.lastName.match(/[A-Ö]/gi)?.length === user.lastName.length &&
    user.email.length > 1 &&
    user.phoneNumber.length > 1 &&
    user.address.length > 1 &&
    user.city.length > 1 &&
    user.postCode.length > 1;

  return (
    <Box gridArea="myCheckOut" background="light-6" round="small">
      <Accordion activeIndex={activeIndex} gridArea="myCheckOut">
        <AccordionPanel onClick={() => setActiveIndex(0)} label="Contacts">
          <Box pad="medium" background="light-2">
            <ContactFormField>
              <Button
                margin="medium"
                alignSelf="center"
                primary
                disabled={!validUserInformation()}
                onClick={() => setActiveIndex(1)}
                label="NEXT"
                type="submit"
              />
            </ContactFormField>
          </Box>
        </AccordionPanel>
        <AccordionPanel onClick={() => setActiveIndex(1)} label="Shipping">
          <Box pad="medium" background="light-2">
            <ShippingForm />
            <Button
              alignSelf="center"
              primary
              disabled={!validUserInformation()}
              onClick={() => setActiveIndex(2)}
              label="NEXT"
            />
          </Box>
        </AccordionPanel>
        <AccordionPanel onClick={() => setActiveIndex(2)} label="Payment">
          <Box pad="medium" background="light-2">
            <PaymentForm />
          </Box>
        </AccordionPanel>
        {activeIndex === 2 ? (
          <Button margin="medium" primary label="Place your order" />
        ) : null}
      </Accordion>
    </Box>
  );
};

export default MyCheckOut;
