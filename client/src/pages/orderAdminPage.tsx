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

const initialInputs = {
  name: "",
  imageUrl: "",
  price: "",
  size: [""],
  season: [""],
  description: "",
};
const OrderAdmin = (props) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);
  const [results, setResults] = useState();

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

  return (
    <Main>
      <header>
        <AdminMenu />
      </header>
      <Box pad="small" basis="small">
        <Heading level={3}>
          <Box gap="small">
            <strong>Orders</strong>
            <Text>Here are all orders</Text>
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
                  {/* <TableCell border="bottom">2020-01-07</TableCell> */}
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
                <Heading size="xsmall">Order</Heading>
                <Text>Order ID: 0323289238</Text>
                <Text> User ID: 1987627376</Text>
                <Text>Freight ID: 7384582734</Text>
                <Text>Products</Text>
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
