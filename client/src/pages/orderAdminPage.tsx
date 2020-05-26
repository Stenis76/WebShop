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
  TableHeader
} from "grommet";
import FormFieldLabel from "../components/form-field-fabel";
import { Collection, CollectionItem } from "../shop.data";
import { AddCircle, SubtractCircle, FormEdit, Split } from "grommet-icons";
import  AdminMenu  from "../components/adminProductMenu";

const initialInputs = {
  name: "",
  imageUrl: "",
  price: "",
  size: [""],
  season: [""],
  description: ""
};

const OrderAdmin = () => {
  const size = useContext(ResponsiveContext) as
  | "small"
  | "medium"
  | "large"
  | "xlarge";

const columns = {
  small: ["auto"],
  medium: ["auto", "auto"],
  large: ["auto", "auto"],
  xlarge: ["auto", "auto"]
};

const rows = {
  small: ["auto"],
  medium: ["auto", "auto"],
  large: ["auto", "auto"],
  xlarge: ["auto", "auto"]
};

const step = 25;
  const [results, setResults] = useState(
    Array.from({ length: 50 }, () => Math.floor(Math.random() * 1000000))
  );
  const load = () => {
    setResults([
      ...results,
      ...Array.from({ length: 50 }, () => Math.floor(Math.random() * 1000000))
    ]);
  };

  return (
      <Main>
        <AdminMenu />
        <Box pad="small" basis="small">
          <Heading level={3}>
            <Box gap="small">
              <strong>Orders</strong>
              <Text>
                Here are all orders
              </Text>
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
                <TableCell scope="col" border="bottom">
                  Order Date
                </TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              <InfiniteScroll
                renderMarker={marker => (
                  <TableRow>
                    <TableCell>{marker}</TableCell>
                  </TableRow>
                )}
                scrollableAncestor="window"
                items={results}
                onMore={() => load()}
                step={step}
              >
                {result => (
                  <TableRow key={result}>
                    <TableCell border="bottom">{result}</TableCell>
                    <TableCell border="bottom">{result}</TableCell>
                    <TableCell border="bottom">{result}</TableCell>
                    <TableCell border="bottom">2020-01-07</TableCell>
                  </TableRow>
                )}
              </InfiniteScroll>
            </TableBody>
          </Table>
        </Box>
     </Main>
  );

};

export default OrderAdmin;
