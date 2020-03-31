import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Grid, Box } from "grommet";
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

  console.log({ query, category });

  return (
    <Grid
      fill
      responsive={true}
      areas={[
        { name: "directory", start: [0, 0], end: [0, 0] },
        { name: "main", start: [1, 0], end: [1, 0] }
      ]}
      columns={["medium", "flex"]}
      rows={["flex"]}
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
