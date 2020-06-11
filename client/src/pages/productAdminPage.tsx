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
  Table,
  TableRow,
  TableBody,
  TableCell,
  TableHeader,
} from "grommet";

import FormFieldLabel from "../components/form-field-fabel";
import axios from "axios";
import { Collection, CollectionItem } from "../interfaces";
import AdminMenu from "../components/adminMenu";

interface IProps {}
const initialInputs = {
  id: "",
  name: "",
  image: "",
  price: "",
  category: [""],
  inventory: "",
  description: "",
};

const ProductAdmin: FC<IProps> = (props) => {
  const [collections, setCollection] = useState<Collection[]>([]);
  const [open, setOpen] = React.useState<boolean>(false);
  const [itemToEdit, setItemToEdit] = useState<CollectionItem>();
  const [inputs, setInputs] = useState(initialInputs);
  const [editOrAdd, setEditOrAdd] = useState<"edit" | "add">("add");
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

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
        let selectedCollection = mappedCollection.find(
          (c) => c.title === productCategory
        );

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

  const handleInputs = (name: string, value: string) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const setInputsToItemData = (item: CollectionItem) => {
    setInputs({
      id: item._id,
      name: item.name,
      image: item.imageUrl,
      price: item.price + "",
      category: item.category,
      inventory: item.inventory.small,
      description: item.description,
    });
  };

  const submitProductChanges = async () => {
    const updateInventory = {
      _id: inputs.id,
      name: inputs.name,
      price: inputs.price,
      category: [inputs.category],
      inventory: {
        small: inputs.inventory,
      },
      description: inputs.description,
    };

    try {
      const res = await fetch(
        "http://localhost:3002/api/product/" + inputs.id,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updateInventory),
        }
      );
      const data = await res.json();
      return data;
    } catch (error) {
      console.log("kan ej uppdatera produkt", error.message);
    }
  };

  return (
    <Main>
      <AdminMenu />
      <Box basis="large" pad="small">
        {collections.map((collection: Collection) => (
          <Table>
            <TableHeader>
              <Heading level="3">{collection.title}</Heading>
              <TableRow className="removeProductid">
                <TableCell scope="col" border="bottom">
                  Product Id
                </TableCell>
                <TableCell scope="col" border="bottom">
                  Product name
                </TableCell>
                <TableCell scope="col" border="bottom">
                  Price
                </TableCell>
              </TableRow>
            </TableHeader>
            {collection.items.map((item: CollectionItem) => (
              <TableBody>
                <TableRow key={item._id}>
                  <TableCell
                    border="bottom"
                    onClick={() => {
                      setEditOrAdd("edit");
                      setInputsToItemData(item);
                      setItemToEdit(item);
                      onOpen();
                    }}
                  >
                    {item._id}
                  </TableCell>
                  <TableCell
                    onClick={() => {
                      setEditOrAdd("edit");
                      setInputsToItemData(item);
                      setItemToEdit(item);
                      onOpen();
                    }}
                    border="bottom"
                  >
                    {item.name}
                  </TableCell>
                  <TableCell border="bottom">{item.price}$</TableCell>
                </TableRow>
              </TableBody>
            ))}
          </Table>
        ))}
      </Box>
      {open && (
        <Layer position="center" onClickOutside={onClose}>
          <Box width="large" height="large" overflow="auto">
            <Form validate="blur">
              <Box
                background="light-3"
                width="large"
                pad="medium"
                justify="between"
                height="large"
              >
                <Heading size="xsmall">{inputs.name}</Heading>
                <Text>ID: {inputs.id}</Text>
                <FormFieldLabel
                  name="ProductName"
                  label="Product name"
                  required
                  type="text"
                  value={inputs.name}
                  onChange={(e) => handleInputs("name", e.target.value)}
                />
                <FormFieldLabel
                  name="Price"
                  label="Price $"
                  required
                  type="text"
                  value={inputs.price}
                  onChange={(e) => handleInputs("price", e.target.value)}
                />
                <Box direction="row">
                  <FormFieldLabel
                    name="Inventory"
                    label="Inventory"
                    required
                    value={inputs.inventory}
                    onChange={(e) => handleInputs("inventory", e.target.value)}
                  />
                </Box>

                <Text>Description</Text>
                <TextArea
                  value={inputs.description}
                  name="Description"
                  required
                  onChange={(e) => handleInputs("description", e.target.value)}
                />
                <Button onClick={submitProductChanges} label="Submit edit" />
              </Box>
            </Form>
          </Box>
        </Layer>
      )}
    </Main>
  );
};

export default ProductAdmin;
