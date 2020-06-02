import React, { FC, useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Grid, Box, ResponsiveContext } from "grommet";
import Directory from "../components/directory";
import Item from "../components/item";

import { Collection, CollectionItem } from "../interfaces";
import { ProductHunt } from "grommet-icons";

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

  const mapDbProductsToCollection = (collections) => {
    const mappedCategories: Collection[] = [];
    let idIndex = 1;

    for (const collection of collections) {
      let selectedCategory: Collection | undefined;
      for (const category of mappedCategories) {
        if (category.title === collection.category) {
          selectedCategory = category;
          break;
        }
      }

      if (!selectedCategory) {
        selectedCategory = {
          id: idIndex,
          title: collection.category,
          routeName: collection.category,
          items: [],
        };
        mappedCategories.push(selectedCategory);
        idIndex++;
      }
      selectedCategory.items.push(collection);
    }
    console.log("kooom igen", mappedCategories);
    setCollection(mappedCategories);
    return;
  };

  console.log("min collection", collections);
  const getCurrentCollectionItems = (): CollectionItem[] => {
    if (collections.length) {
      const col = collections.find((collection) => {
        console.log(collection.routeName, category);

        return collection.routeName.toLowerCase() === category!.toLowerCase();
      });
      console.log("här", col!.items);
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
            console.log(collection.items.filter(matchWithQuery));

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
    // <div>
    //   {collections.map((product, i) => (
    //     <div key={i}>
    //       <h3 style={{ textAlign: "center" }}>{product.title}</h3>
    //       <p>PRIS: {product.routeName}</p>
    //       <p>KATEGORI: {product.routeName}</p>
    //       <p>SÄSONG: {product.routeName}</p>
    //       <img src={product.routeName} />
    //       <p>BESKRIVNING: {product.routeName}</p>
    //     </div>
    //   ))}

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
    // </div>
  );
};

export default Shop;
