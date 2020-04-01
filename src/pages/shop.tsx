import React, { FC, useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { Grid, Box, ResponsiveContext } from "grommet";
import Directory from "../components/directory";
import Item from "../components/item";

interface IProps {}

const Shop: FC<IProps> = () => {
  const [collections, setCollection] = useState([]);

  const { category, query = "" } = useParams();

  useEffect(() => {
    const localStorageCollections = localStorage.getItem("collection");
    if (localStorageCollections) {
      setCollection(JSON.parse(localStorageCollections));
    }
  }, []);

  const getCurrentCollectionItems = (): [] => {
    if (collections.length) {
      const col: any = collections.find(
        (collection: any) => collection.routeName === category
      );
      if (col.items) return col.items;
    }
    return [];
  };

  const matchWithQuery = (item: any) =>
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
    xlarge: ["auto", "auto"]
  };

  const rows = {
    small: ["1/3", "auto"],
    medium: ["auto", "auto"],
    large: ["auto", "auto"],
    xlarge: ["auto", "auto"]
  };

  const areas = {
    small: [
      { name: "directory", start: [0, 0], end: [0, 0] },
      { name: "main", start: [0, 1], end: [0, 1] }
    ],
    medium: [
      { name: "directory", start: [0, 0], end: [0, 0] },
      { name: "main", start: [1, 0], end: [1, 0] }
    ],
    large: [
      { name: "directory", start: [0, 0], end: [0, 0] },
      { name: "main", start: [1, 0], end: [1, 0] }
    ],
    xlarge: [
      { name: "directory", start: [0, 0], end: [0, 0] },
      { name: "main", start: [1, 0], end: [1, 0] }
    ]
  };
  return (
    <Grid
      fill
      responsive={true}
      areas={areas[size]}
      columns={columns[size]}
      rows={rows[size]}
      gap="small"
    >
      <Directory />

      <Box
        style={{
          gridArea: "main",
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          margin: "small",
          justifyContent: "center",
          overflowY: "scroll"
        }}
      >
        {category === "search" && query
          ? collections.map((collection: any) =>
              collection.items
                .filter(matchWithQuery)
                .map((item: any) => <Item key={item.id} item={item} />)
            )
          : getCurrentCollectionItems().map((item: any) => (
              <Item key={item.id} item={item} />
            ))}
      </Box>
    </Grid>
  );
};

export default Shop;
