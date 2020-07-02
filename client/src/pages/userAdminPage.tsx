import React, { useEffect, useState } from "react";
import {
  Main,
  Text,
  Heading,
  Box,
  Layer,
  Form,
  InfiniteScroll,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
} from "grommet";
import axios from "axios";
import AdminMenu from "../components/adminMenu";

const UserAdmin = (props) => {
 
  const [results, setResults] = useState();
  const [open, setOpen] = React.useState<boolean>(false);
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

  useEffect(() => {
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
              </Box>
            </Form>
          </Box>
        </Layer>
      )}
    </Main>
  );
};

export default UserAdmin;
