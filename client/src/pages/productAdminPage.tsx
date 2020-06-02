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

const ProductAdmin = () => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [open, setOpen] = React.useState<boolean>(false);
  const [category, setCategory] = useState("none");
  const [itemToEdit, setItemToEdit] = useState<CollectionItem>();
  const [inputs, setInputs] = useState(initialInputs);
  const [editOrAdd, setEditOrAdd] = useState<"edit" | "add">("add");

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
      id: calculateNextItemId(),
      name: inputs.name,
      imageUrl: inputs.imageUrl,
      price: Number(inputs.price),
      size: inputs.size,
      season: inputs.season,
      description: inputs.description
    };

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

  const removeFromCollection = (itemId: number) => {
    const updatedCollections = collections.map(collection => ({
      ...collection,
      items: collection.items.filter(item => item.id !== itemId)
    }));

    setCollections(updatedCollections);
    localStorage.setItem("collection", JSON.stringify(updatedCollections));
  };

  const editItem = () => {
    const updatedCollections = collections.map(collection => {
      if (itemToEdit !== undefined) {
        let itemIndex = collection.items.findIndex(
          item => item.id === itemToEdit.id
        );

        if (itemIndex !== -1) {
          // if we found the index of the item
          collection.items[itemIndex] = {
            ...itemToEdit,
            name: inputs.name,
            // imageUrl: inputs.imageUrl,
            price: Number(inputs.price),
            size: inputs.size,
            season: inputs.season,
            description: inputs.description
          };
        }
      }
      return collection;
    });

    setCollections(updatedCollections);
    localStorage.setItem("collection", JSON.stringify(updatedCollections));
    onClose();
  };

  const calculateNextItemId = () => {
    let highestId =
      collections
        .map(collection => collection.items.map(item => item.id))
        .flat()
        .sort((a, b) => a - b)
        .pop() || 0;

    return highestId + 1;
  };

  const handleInputs = (name: string, value: string) => {
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const setInputsToItemData = (item: CollectionItem) => {
    setInputs({
      name: item.name,
      imageUrl: item.imageUrl,
      price: item.price + "",
      size: item.size,
      season: item.season,
      description: item.description
    });
  };

  const length = 1;
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
    <Box basis="large" pad="small">
    {collections.map((collection: Collection) => (
      <Table >
        <TableHeader>
          <Heading level="3">{collection.title}</Heading>
          <TableRow>
            <TableCell scope="col" border="bottom">
             Product Id
            </TableCell>
            <TableCell scope="col" border="bottom">
              Product name
            </TableCell>
            <TableCell scope="col" border="bottom">
              Price
            </TableCell>
            {/* <TableCell scope="col" border="bottom">
             Category
            </TableCell> */}
          </TableRow>
        </TableHeader>
        {collection.items.map((item: CollectionItem) => (
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
            step={length}
          >
            {result => (
              <TableRow key={item.id} >
                <TableCell border="bottom" onClick={() => {
                      setEditOrAdd("edit");
                      setInputsToItemData(item);
                      setItemToEdit(item);
                      onOpen();
                    }}>{item.id}</TableCell>
                <TableCell border="bottom">{item.name}</TableCell>
                <TableCell border="bottom">{item.price}</TableCell>
                {/* <TableCell border="bottom">{collection.title}</TableCell> */}
              </TableRow>
              
            )}
          </InfiniteScroll>
        </TableBody>
        ))}
      </Table>
      ))}
      </Box>
      {/* {open && (
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
                <Text>ID: {calculateNextItemId()}</Text>
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
                <FormFieldLabel
                  name="ImageUrl"
                  label="Image URL"
                  required
                  type="text"
                  value={inputs.imageUrl}
                  onChange={e => handleInputs("imageUrl", e.target.value)}
                />
                <Text>Sizes</Text>
                <Box direction="row">
                  <CheckBox label="small" />
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
                <TextArea
                  value={inputs.description}
                  name="Description"
                  required
                  onChange={e => handleInputs("description", e.target.value)}
                />
                {editOrAdd === "add" ? (
                  <Button onClick={addToCollection} label="Add to collection" />
                ) : (
                  <Button onClick={editItem} label="Submit edit" />
                )}
              </Box>
            </Form>
          </Box>
        </Layer>
      )} */}
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
                <Text>ID: {calculateNextItemId()}</Text>
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
                <FormFieldLabel
                  name="ImageUrl"
                  label="Image URL"
                  required
                  type="text"
                  value={inputs.imageUrl}
                  onChange={e => handleInputs("imageUrl", e.target.value)}
                />
                <Text>Sizes</Text>
                <Box direction="row">
                  <CheckBox label="small" />
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
                <TextArea
                  value={inputs.description}
                  name="Description"
                  required
                  onChange={e => handleInputs("description", e.target.value)}
                />
                {editOrAdd === "add" ? (
                  <Button onClick={addToCollection} label="Add to collection" />
                ) : (
                  <Button onClick={editItem} label="Submit edit" />
                )}
              </Box>
            </Form>
          </Box>
        </Layer>
      )}
    </Main>
  );
};

export default ProductAdmin;
