import React, { FC, useEffect, useState } from "react";
import {
  Main,
  Text,
  Heading,
  Box,
  Button,
  Layer,
  Form,
  TextArea,
  CheckBox, 
  InfiniteScroll,
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHeader
} from "grommet";

import FormFieldLabel from "../components/form-field-fabel";
import axios from "axios";
import { Collection, CollectionItem } from "../interfaces";
import  AdminMenu  from "../components/adminMenu";

interface IProps {}
const initialInputs = {
  id: "",
  name: "",
  image: "",
  price: "",
  category: [""],
  inventory: {
    small: "",
    medium: "",
    large: "",
    xlarge: ""
  },
  season: [""],
  description: ""
};

const ProductAdmin:  FC<IProps> = () => {
  const [collections, setCollection] = useState<Collection[]>([]);
  const [open, setOpen] = React.useState<boolean>(false);
  const [category, setCategory] = useState("none");
  const [itemToEdit, setItemToEdit] = useState<CollectionItem>();
  const [inputs, setInputs] = useState(initialInputs);
  const [editOrAdd, setEditOrAdd] = useState<"edit" | "add">("add");

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(false);
  console.log("check this out" + initialInputs)

  useEffect(() => {
    axios
      .get("http://localhost:3002/api/product")
      .then((res) => {
        mapDbProductsToCollection(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const mapDbProductsToCollection = (products) => {
    const mappedCollection: Collection[] = [];
    let idIndex = 1;

    for (const product of products) {
      
      for (const productCategory of product.category) {

        let selectedCollection = mappedCollection.find((c) => c.title === productCategory)
  
        if (!selectedCollection) {
          selectedCollection = {
            id: idIndex,
            title: productCategory,
            routeName: productCategory,
            items: [],
          };
          mappedCollection.push(selectedCollection);
          idIndex++;
        }
        selectedCollection.items.push(product);

      }
    }
    setCollection(mappedCollection);
    return;
  };

  const getCurrentCollectionItems = (): CollectionItem[] => {
    if (collections.length) {
      const col = collections.find((collection) => {
        return collection.routeName.toLowerCase() === category!.toLowerCase();
      });

      if (col) return col.items;
    }
    return [];
  };

  const addToCollection = () => {
     const item: CollectionItem = {
       _id: inputs.id,
       name: inputs.name,
       imageUrl: inputs.image,
       price: Number(inputs.price),
       category: inputs.category,
       inventory: inputs.inventory,
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

     setCollection(updatedCollections);
     localStorage.setItem("collection", JSON.stringify(updatedCollections));
     onClose();
   };

   const removeFromCollection = (itemId: string) => {
     const updatedCollections = collections.map(collection => ({
       ...collection,
       items: collection.items.filter(item => item._id !== itemId)
     }));

     setCollection(updatedCollections);
     localStorage.setItem("collection", JSON.stringify(updatedCollections));
   };

  const editItem = () => {
    const updatedCollections = collections.map(collection => {
      if (itemToEdit !== undefined) {
        let itemIndex = collection.items.findIndex(
          item => item._id === itemToEdit._id
        );

        if (itemIndex !== -1) {
          // if we found the index of the item
          collection.items[itemIndex] = {
            ...itemToEdit,
            name: inputs.name,
            // imageUrl: inputs.imageUrl,
            price: Number(inputs.price),
            // inventory:
            season: inputs.season,
            description: inputs.description
          };
        }
      }
      return collection;
    });

    // setCollections(updatedCollections);
    localStorage.setItem("collection", JSON.stringify(updatedCollections));
    onClose();
  };

  const handleInputs = (name: string, value: string) => {
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const setInputsToItemData = (item: CollectionItem) => {
    setInputs({
      id: item._id,
      name: item.name,
      image: item.imageUrl,
      price: item.price + "",
      category: item.category,
      inventory: {
        small: "",
        medium: "",
        large: "",
        xlarge: ""
      },
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
    <Box overflow="auto" flex="shrink" basis="auto" pad="small">
    {collections.map((collection: Collection) => (
      <Table >
        <TableHeader>
          <Heading level="3">{collection.title}</Heading>
          <TableRow  className="removeProductid">
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
              <TableRow key={item._id} >
                <TableCell border="bottom" onClick={() => {
                      setEditOrAdd("edit");
                      setInputsToItemData(item);
                      setItemToEdit(item);
                      onOpen();
                    }}>{item._id}</TableCell>
                <TableCell border="bottom">{item.name}</TableCell>
                <TableCell border="bottom">{item.price}$</TableCell>
              </TableRow>
              
            )}
          </InfiniteScroll>
        </TableBody>
        ))}
      </Table>
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
      <Text>ID: {}item.id</Text>
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
                  value={inputs.image}
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
