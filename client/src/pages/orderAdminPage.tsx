import React, { useEffect, useState, useContext } from "react";
import {
  Main,
  Text,
  Heading,
  Box,
  Image,
  Button,
  Layer,
  Form,
  TextArea,
  CheckBox,
  Grid,
  ResponsiveContext,
  InfiniteScroll,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
} from "grommet";
import FormFieldLabel from "../components/form-field-fabel";
import axios from "axios";
import { AddCircle, SubtractCircle, FormEdit, Split } from "grommet-icons";
import AdminMenu from "../components/adminMenu";
import Axios from "axios";
import { Order, CollectionItem } from "../interfaces";
import item from "../components/item";

// const initialInputs = {
//   id: "",
//   activeOrder: true,
//   freightId: "",
//   products: [{}],
//   userId: {},
// };

const OrderAdmin = (props) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  const [results, setResults] = useState();

  const [itemToEdit, setItemToEdit] = useState();
  const [order, setOrder] = useState<Order>();
  const [editOrAdd, setEditOrAdd] = useState<"edit" | "add">("add");

  useEffect(() => {
    console.log("useeffect");

    axios
      .get("http://localhost:3002/api/order")
      .then((res) => {
        console.log("data från server - order", res);
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const step = 25;

  const size = useContext(ResponsiveContext) as
    | "small"
    | "medium"
    | "large"
    | "xlarge";

  const columns = {
    small: ["auto"],
    medium: ["auto", "auto"],
    large: ["auto", "auto"],
    xlarge: ["auto", "auto"],
  };

  const rows = {
    small: ["auto"],
    medium: ["auto", "auto"],
    large: ["auto", "auto"],
    xlarge: ["auto", "auto"],
  };
  console.log("data är sparad i state", results);

  // const handleInputs = (name: string, value: string) => {
  //   setInputs((prev) => ({ ...prev, [name]: value }));
  // };

  // const setInputsToItemData = (item) => {
  //   setOrderItems(item);
  // };

  return (
    <Main>
      <header>
        <AdminMenu />
      </header>
      <Box pad="small" basis="small">
        <Heading level={3}>
          <Box gap="small">
            <strong>Orders</strong>
          </Box>
        </Heading>
        <Table>
          <TableHeader>
            <TableRow>
              <TableCell scope="col" border="bottom">
                Order Id
              </TableCell>
              <TableCell scope="col" border="bottom">
                User Id
              </TableCell>
              <TableCell scope="col" border="bottom">
                Freight Id
              </TableCell>
              {/* <TableCell scope="col" border="bottom">
                  Order Date
                </TableCell> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            <InfiniteScroll items={results} {...props}>
              {(item) => (
                <TableRow key={item._id}>
                  <TableCell
                    border="bottom"
                    onClick={() => {
                      setEditOrAdd("edit");
                      setOrder(item);
                      // setInputsToItemData(item);
                      // setItemToEdit(item);
                      onOpen();
                    }}
                  >
                    {item._id}
                  </TableCell>
                  <TableCell border="bottom">
                    {item.userId.firstName} {item.userId.lastName}{" "}
                  </TableCell>
                  <TableCell border="bottom">
                    {item.freightId.shipmentCompany}
                  </TableCell>
                </TableRow>
              )}
            </InfiniteScroll>
          </TableBody>
        </Table>
      </Box>
      {open && (
        <Layer position="center" onClickOutside={onClose}>
          <Box width="large" height="large">
            <Form validate="blur">
              <Box
                background="light-3"
                width="large"
                pad="medium"
                justify="between"
                height="large"
              >
                <Heading size="xsmall">Order: {"" + order._id}</Heading>
                <Text>
                  User: {order.userId.firstName + " "}
                  {order.userId.lastName}
                </Text>
                <Text>Freight: {order.freightId.shipmentCompany}</Text>
                <Text>Products </Text>
                {order.products.map((item: CollectionItem) => (
                  <TableRow key={item._id}>{item.name}</TableRow>
                ))}
                <Box direction="column">
                  <Text>Black Shoes</Text>
                  <Text>White Hat</Text>
                  <Text>Orange Shirt</Text>
                  <Text>Blue Socks</Text>
                  <Text>Green Pants</Text>
                  <Text>Grey Hoodie</Text>
                </Box>
                <Text>Shipped?</Text>
                <Box direction="column">
                  <CheckBox label="Yes" onChange={() => {}} />
                  <CheckBox label="No" onChange={() => {}} />
                </Box>
                <Text>Total Price: 6724 SEK</Text>
                <Text>Order Date: 2020-05-05</Text>
                {/* {editOrAdd === "add" ? (
                  <Button onClick={addToCollection} label="Add to collection" />
                ) : (
                  <Button onClick={editItem} label="Submit edit" />
                )} */}
              </Box>
            </Form>
          </Box>
        </Layer>
      )}
    </Main>
  );
};

export default OrderAdmin;
