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
  TextArea,
  CheckBox
} from "grommet";
import FormFieldLabel from "../components/form-field-fabel";
import { Collection, CollectionItem } from "../shop.data";
import { AddCircle, SubtractCircle } from "grommet-icons";

const Admin = () => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [open, setOpen] = React.useState<boolean>(false);
  const [category, setCategory] = useState("none");
  const [inputs, setInputs] = useState({
    name: "",
    imageUrl: "",
    price: "",
    size: [],
    season: [],
    description: ""
  });

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(false);

  useEffect(() => {
    const localStorageCollections = localStorage.getItem("collection");
    if (localStorageCollections) {
      setCollections(JSON.parse(localStorageCollections));
    }
  }, []);

  const addToCollection = () => {
    const item: CollectionItem = {
      id: findId(),
      name: inputs.name,
      imageUrl: inputs.imageUrl,
      price: Number(inputs.price),
      size: inputs.size,
      season: inputs.season,
      description: inputs.description
    };

    console.log("item", item);

    const updatedCollections = collections.map(collection => {
      if (collection.routeName === category) {
        return {
          ...collection,
          items: [...collection.items, item]
        };
      } else {
        return { ...collection };
      }
    });

    setCollections(updatedCollections);
    localStorage.setItem("collection", JSON.stringify(updatedCollections));
    onClose();
  };
  // console.log("collections", collections);

  const removeFromCollection = (itemId: number) => {
    const updatedCollections = collections.map(collection => ({
      ...collection,
      items: collection.items.filter(item => item.id !== itemId)
    }));

    setCollections(updatedCollections);
    localStorage.setItem("collection", JSON.stringify(updatedCollections));
  };

  const editItem = (itemId: number, category: string) => {
    const updatedCollections = collections.map(collection => {
      if (category === collection.routeName) {
      }
      return collection;
    });
  };

  const findId = () => {
    let nextID = -1;
    const localStorageCollections = localStorage.getItem("collection");
    if (localStorageCollections) {
      let collection = JSON.parse(localStorageCollections);
      collection.map((category: any) =>
        category.items.map((item: any) => (nextID = item.id + 1))
      );
    }
    return nextID;
  };

  const handleInputs = (name: string, value: string) => {
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Main>
      <Box direction="row" justify="evenly">
        {collections.map((collection: Collection) => (
          <Box key={collection.id}>
            <Heading size="small">
              {collection.title}
              <Button
                icon={
                  <AddCircle
                    onClick={() => {
                      onOpen();
                      setCategory(collection.routeName);
                    }}
                  />
                }
              />
            </Heading>

            {collection.items.map((item: CollectionItem) => (
              <Box key={item.id}>
                <Box direction="row" align="center">
                  <Button
                    icon={<SubtractCircle />}
                    onClick={() => removeFromCollection(item.id)}
                  />
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
                  value={inputs.name}
                  onChange={e => handleInputs("name", e.target.value)}
                />
                <FormFieldLabel
                  name="Price"
                  label="Price"
                  required
                  type="text"
                  value={inputs.price}
                  onChange={e => handleInputs("price", e.target.value)}
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
                <TextArea value={inputs.price} name="Decription" required />
                <Button onClick={addToCollection} label="Add to collection" />
              </Box>
            </Form>
          </Box>
        </Layer>
      )}
    </Main>
  );
};

export default Admin;
