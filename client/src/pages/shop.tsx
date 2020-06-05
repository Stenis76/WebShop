import React, { FC, useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Grid, Box, ResponsiveContext } from "grommet";
import Directory from "../components/directory";
import Item from "../components/item";

import { Collection, CollectionItem } from "../interfaces";
import { ProductHunt } from "grommet-icons";
import item from "../components/item";

interface IProps {}

const Shop: FC<IProps> = () => {
  const [collections, setCollection] = useState<Collection[]>([]);

  const { category, query = "" } = useParams();

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

  const matchWithQuery = (item: CollectionItem): boolean =>
    item.name.toLowerCase().includes(query.trim().toLowerCase());

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

  const areas = {
    small: [{ name: "main", start: [0, 0], end: [0, 0] }],
    medium: [
      { name: "directory", start: [0, 0], end: [0, 0] },
      { name: "main", start: [1, 0], end: [1, 0] },
    ],
    large: [
      { name: "directory", start: [0, 0], end: [0, 0] },
      { name: "main", start: [1, 0], end: [1, 0] },
    ],
    xlarge: [
      { name: "directory", start: [0, 0], end: [0, 0] },
      { name: "main", start: [1, 0], end: [1, 0] },
    ],
  };
  const main = (
    <Box
      key="0"
      style={{
        gridArea: "main",
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        margin: "small",
        justifyContent: "center",
        overflowY: "scroll",
      }}
    >
      {category === "search" && query
        ? collections.map((collection: Collection) => {          

            return collection.items
              .filter(matchWithQuery)
              .map((item: CollectionItem) => (
                <Item key={item.id} item={item} />
              ));
          })
        : getCurrentCollectionItems().map((item: CollectionItem) => (
            <Item key={item.id} item={item} />
          ))}
    </Box>
  );
  const directory = <Directory key="1" />;

  const components = {
    small: [main],
    medium: [main, directory],
    large: [main, directory],
    xlarge: [main, directory],
  };
  return (
    <div>
      <Grid
        fill
        responsive={true}
        areas={areas[size]}
        columns={columns[size]}
        rows={rows[size]}
        gap="small"
      >
        {components[size]}
      </Grid>
    </div>
  );
};

export default Shop;
