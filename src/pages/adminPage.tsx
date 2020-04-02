import React, { useEffect, useState } from "react";
import {
  Main,
  Text,
  Heading,
  Box,
  Image,
  Button,
  Layer,
  Form,
  RadioButtonGroup,
  TextArea,
  CheckBox
} from "grommet";
import FormFieldLabel from "../components/form-field-fabel";
import { Collection, CollectionItem } from "../shop.data";
import { AddCircle, SubtractCircle } from "grommet-icons";

const Admin = () => {
  const [currentCollection, setCurrentCollection] = useState<Collection[]>([]);
  const [open, setOpen] = React.useState<boolean>(false);
  const [category, setCategory] = useState("none");

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(false);

  useEffect(() => {
    const localStorageCollections = localStorage.getItem("collection");
    if (localStorageCollections) {
      setCurrentCollection(JSON.parse(localStorageCollections));
    }
  }, []);

  const addToCollection = (collection: Collection) => () => {
    onOpen();
    setCategory(collection.title);
  };

  const findId = () => {
    let nextID;
    const localStorageCollections = localStorage.getItem("collection");
    if (localStorageCollections) {
      let collection = JSON.parse(localStorageCollections);
      collection.map((category: any) =>
        category.items.map((item: any) => (nextID = item.id + 1))
      );
    }
    return nextID;
  };

  return (
    <Main>
      <Box direction="row" justify="evenly">
        {currentCollection.map((collection: Collection) => (
          <Box key={collection.id}>
            <Heading size="small">
              {collection.title}
              <Button
                icon={<AddCircle onClick={addToCollection(collection)} />}
              />
            </Heading>

            {collection.items.map((item: CollectionItem) => (
              <Box key={item.id}>
                <Box direction="row" align="center">
                  <Button icon={<SubtractCircle />} />
                  <Image
                    src={item.imageUrl}
                    style={{ width: "3rem", marginTop: "1rem" }}
                  ></Image>
                  <Text weight="bold" margin={{ left: "small" }}>
                    {item.name}
                  </Text>
                </Box>
              </Box>
            ))}
          </Box>
        ))}
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
                <Heading size="xsmall">{category}</Heading>
                <Text>ID: {findId()}</Text>
                <FormFieldLabel
                  name="ProductName"
                  label="Product name"
                  required
                  type="text"
                />
                <FormFieldLabel
                  name="Price"
                  label="Price"
                  required
                  type="text"
                />
                <Text>Sizes</Text>
                <Box direction="row">
                  <CheckBox label="small" onChange={() => {}} />
                  <CheckBox label="medium" onChange={() => {}} />
                  <CheckBox label="large" onChange={() => {}} />
                  <CheckBox label="xlarge" onChange={() => {}} />
                </Box>
                <Text>Seasons</Text>
                <Box direction="row">
                  <CheckBox label="spring" onChange={() => {}} />
                  <CheckBox label="summer" onChange={() => {}} />
                  <CheckBox label="autumn" onChange={() => {}} />
                  <CheckBox label="winter" onChange={() => {}} />
                </Box>
                <Text>Description</Text>
                <TextArea name="Decription" required />
              </Box>
            </Form>
          </Box>
        </Layer>
      )}
    </Main>
  );
};

export default Admin;
