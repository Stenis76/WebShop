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
import axios from "axios";
import AdminMenu from "../components/adminMenu";

const initialInputs = {
  name: "",
  imageUrl: "",
  price: "",
  size: [""],
  season: [""],
  description: "",
};

const UserAdmin = (props) => {
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

  const step = 50;
  const [results, setResults] = useState();
  const [open, setOpen] = React.useState<boolean>(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  useEffect(() => {
    console.log("useeffect");

    axios
      .get("http://localhost:3002/api/users")
      .then((res) => {
        console.log("data från server - order", res);
        setResults(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <Main>
      <AdminMenu />
      <Box pad="small" basis="small">
        <Heading level={3}>
          <Box gap="small">
            <strong>Users</strong>
          </Box>
        </Heading>
        <Table>
          <TableHeader>
            <TableRow className="removeProductid">
              <TableCell scope="col" border="bottom">
                User-Id
              </TableCell>
              <TableCell scope="col" border="bottom">
                Name
              </TableCell>
              <TableCell scope="col" border="bottom">
                Role
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
                    {item.firstName + " "}
                    {item.lastName}
                  </TableCell>
                  <TableCell border="bottom">{item.role}</TableCell>
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
