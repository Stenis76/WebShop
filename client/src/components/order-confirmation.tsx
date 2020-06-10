import React, { useEffect, useState, useContext} from "react";

import { Box, Button } from "grommet";
import { Close } from "grommet-icons";

import axios from "axios";

import CartContext from "../contexts/cart-context/context";

import styled from "styled-components";
import item from "./item";




interface IProps {
  closeModal: () => void;
}

const OrderConfirmation = (props: IProps) => {
  const {
    cart,
    selectedShippingMethod,
    paymentMethod,
    shippingCost,
  } = useContext(CartContext);
  
  
  
  let outOfStock = false;
  let ChosenWares:any = ""
  let ChosenWareId:any = ""
  let ChosenWareNumber:any;

  {cart.map((item) => ( 
    ChosenWareId = item._id,
    ChosenWares = item.inventory.small,
    ChosenWares = parseInt(ChosenWares),
    ChosenWares = ChosenWares - item.quantity,
    ChosenWares = ChosenWares.toString(),
    item.inventory.small = ChosenWares,

    checkIfOutOfStock(item)
    
))}


function checkIfOutOfStock(item) {
  if (item.inventory.small < 0) {
    outOfStock = true;
  }


     fetch("http://localhost:3002/api/product").then((res) => {
       return res.json()
   }).then((res) => {
  
     for (let i = 0; i < res.length; i++) {
       if (res[i]._id == item._id) {
         ChosenWareNumber = i
         testing(item)
       }
    }
  })
  }


  const testing = async (item: any) => {
    const product:any = item
    console.log(product.inventory.small)
    const res = await fetch("http://localhost:3002/api/product/" + ChosenWareId , {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({product}),
    })
    const data = await res.json();
    return data;
  };



  return (
    <Box background="light-3" pad="large">
      <Button
        primary
        alignSelf="end"
        icon={<Close />}
        onClick={props.closeModal}
        color="light-3"
      />
      <h1>Order confirmation</h1>
      <h3>Order nr: {Math.floor(new Date().getTime() / 10000)}</h3>
      <StyledGrid>
        <span>Paying with: </span>
        <span>{paymentMethod}</span>
        <span>Shipping with: </span>
        <span>{selectedShippingMethod.shipmentCompany}</span>
        <span>Estimated delivery: </span>
        <span>{selectedShippingMethod.deliveryDate}</span>
        {outOfStock ? <span style={{color:"red"}}>One or more items are out of stock which might delay the delivery date</span> : null}
      </StyledGrid>
      <h4>Items</h4>

      {cart.map((item) => (
        <StyledItemRow key={item._id}>
          <span>{item.name}</span>
          <span>
            ${item.price} x {item.quantity || 1}
          </span>
        </StyledItemRow>
      ))}

      <h4>
        Total: $
        {cart.reduce(
          (acc, item) => acc + item.price * (item.quantity || 1),
          0
          ) + shippingCost}
      </h4>
          

      <Button primary margin="medium" onClick={props.closeModal} label="Okay" />
    </Box>
  );
};



const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: "1fr" "1fr";
`;

const StyledItemRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;


export default OrderConfirmation;

