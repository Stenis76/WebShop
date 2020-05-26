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

const UserAdmin = () => {
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

const step = 50;
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
                  User Id
                </TableCell>
                <TableCell scope="col" border="bottom">
                  First name
                </TableCell>
                <TableCell scope="col" border="bottom">
                  Last name
                </TableCell>
                <TableCell scope="col" border="bottom">
                  Phone number
                </TableCell>
                <TableCell scope="col" border="bottom">
                  Email
                </TableCell>
                <TableCell scope="col" border="bottom">
                  Adress
                </TableCell>
                <TableCell scope="col" border="bottom">
                  Post code
                </TableCell>
                <TableCell scope="col" border="bottom">
                  City
                </TableCell>
                <TableCell scope="col" border="bottom">
                  Password
                </TableCell>
                <TableCell scope="col" border="bottom">
                  Role
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
                  <TableRow key={result} >
                    <TableCell border="bottom">{result}</TableCell>
                    <TableCell border="bottom">Philip</TableCell>
                    <TableCell border="bottom">Arvidsson</TableCell>
                    <TableCell border="bottom">073-370 88 17</TableCell>
                    <TableCell border="bottom">philip.arvidsson@medieinstitutet.se</TableCell>
                    <TableCell border="bottom">Gyllenkrooksgatan 9B</TableCell>
                    <TableCell border="bottom">412 82</TableCell>
                    <TableCell border="bottom">Göteborg</TableCell>
                    <TableCell border="bottom">HejHallåPåDig</TableCell>
                    <TableCell border="bottom">Admin</TableCell>
                  </TableRow>
                  
                )}
              </InfiniteScroll>
            </TableBody>
          </Table>
        </Box>
       </Main>
  );

};

export default UserAdmin;
