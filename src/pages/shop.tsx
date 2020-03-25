import React, { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Grid, Box } from "grommet";
import Directory from "../components/directory";
import Item from "../components/item";

interface IProps {}

const Shop: FC<IProps> = () => {
  const [items, setItems] = useState([]);

  const { category } = useParams();

  useEffect(() => {
    const localStorageCollections = localStorage.getItem("collection");
    if (localStorageCollections) {
      const collections = JSON.parse(localStorageCollections);
      const collection = collections.find(
        (collection: any) => collection.routeName === category
      );

      setItems(collection.items);
    }
  }, [category]);

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
        {items.map((item: any) => (
          <Item key={item.id} item={item} />
        ))}
      </Box>
    </Grid>
  );
};

export default Shop;
