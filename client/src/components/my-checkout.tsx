import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";

import { Box, Accordion, AccordionPanel, Button, Layer } from "grommet";

import ContactFormField from "./contact-form-field";
import PaymentForm from "./payment-form";
import ShippingForm from "./shipping-form";
import OrderConfirmation from "./order-confirmation";

import UserContext from "../contexts/user-context/context";
import CartContext from "../contexts/cart-context/context";
import SignIn from "./login/sign-in";
import { Cart } from "grommet-icons";

const MyCheckOut = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(UserContext);

  const { cart, clearCart, paymentMethod, createOrder, selectedShippingMethod } = useContext(
    CartContext
  );
  const history = useHistory();

  const validUserInformation = () =>
    user.firstName.length > 1 &&
    user.firstName.match(/[A-Ö]/gi)?.length === user.firstName.length &&
    user.lastName.length > 1 &&
    user.lastName.match(/[A-Ö]/gi)?.length === user.lastName.length &&
    user.email.length > 1 &&
    user.phoneNumber.length > 7 &&
    user.address.length > 1 &&
    user.city.length > 1 &&
    user.postCode.length > 1;

    const validShippingInfo = () => 
    selectedShippingMethod;

    

    const validPayment = () => {
      if(paymentMethod === "card"){
        if (undefined !== user.card && user.card.length) {
       return user.card.length === 16 
      }} else if(paymentMethod === "swish"){
        return user.phoneNumber.length > 8
      } else {
        return validateEmail(user.email)
      }
    }



    const validateEmail = (email: string) => {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }

  const closeModal = () => {
    history.push("/");
    setShowModal(false);
    clearCart();
  };

  const pay = async () => {
    setLoading(true);
    await createOrder();
    setShowModal(true);
  };

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
              disabled={!validShippingInfo()}
              onClick={() => setActiveIndex(2)}
              label="NEXT"
              margin={{ top: "medium" }}
            />
          </Box>
        </AccordionPanel>
        <AccordionPanel onClick={() => setActiveIndex(2)} label="Payment">
          <Box pad="medium" background="light-2">
            <PaymentForm />
            <Button
              alignSelf="center"
              primary
              disabled={!validPayment()}
              onClick={() => setActiveIndex(3)}
              label="NEXT"
              margin={{ top: "medium" }}
            />
          </Box>
        </AccordionPanel>
        <AccordionPanel onClick={() => setActiveIndex(3)} label="Place order">
          <Box pad="medium" background="light-2">
          {activeIndex === 3 &&
        !loading &&
        validUserInformation() ? (
          <Button
            margin="medium"
            primary
            label="Place your order"
            onClick={pay}
          />
        ) : (
          <Button margin="medium" primary disabled label="Place your order" />
        )}
          </Box>
        </AccordionPanel>
        
      </Accordion>

      {showModal && (
        <Layer onEsc={closeModal} onClickOutside={closeModal}>
          <OrderConfirmation closeModal={closeModal} />
        </Layer>
      )}
    </Box>
  );
};

export default MyCheckOut;
