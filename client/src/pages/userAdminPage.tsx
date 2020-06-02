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
import  AdminMenu  from "../components/adminMenu";

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

const [open, setOpen] = React.useState<boolean>(false);
const onOpen = () => setOpen(true);
const onClose = () => setOpen(false);

  return (
       <Main>
        <AdminMenu />
        <Box pad="small" basis="small">
          <Heading level={3}>
            <Box gap="small">
              <strong>Users</strong>
              <Text>
                Here are all users
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
                {/* <TableCell scope="col" border="bottom">
                  Phone number
                </TableCell> */}
                {/* <TableCell scope="col" border="bottom">
                  Email
                </TableCell> */}
                {/* <TableCell scope="col" border="bottom">
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
                </TableCell> */}
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
                    <TableCell border="bottom" onClick={() => {onOpen();}}>{result}</TableCell>
                    <TableCell border="bottom">Philip</TableCell>
                    <TableCell border="bottom">Arvidsson</TableCell>
                    {/* <TableCell border="bottom">073-370 88 17</TableCell> */}
                    {/* <TableCell border="bottom">philip.arvidsson@medieinstitutet.se</TableCell> */}
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
                <Heading size="xsmall">User</Heading>
                <Text>User ID: 0323289238</Text>
                <Text>First Name: Philip</Text>
                <Text>Last Name: Arvidsson</Text>
                <Text>Phone Number: 0733708817</Text>
                <Text>Email: philip.arvidsson@gmail.com</Text>
                <Text>Adress: Gyllenkrooksgatan 9B</Text>
                <Text>Post Code: 412 82</Text>
                <Text>City: Gothenburg</Text>
                <Text>Password: ElloEllo</Text>
                <Text>Role: Admin</Text>
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

export default UserAdmin;
