import React, { useEffect, useState } from "react";
import { Main, Text, Heading, Box } from "grommet";
import { Collection, CollectionItem } from "../shop.data";

const Admin = () => {
  const [currentCollection, setCurrentCollection] = useState<Collection[]>([]);

  useEffect(() => {
    const localStorageCollections = localStorage.getItem("collection");
    if (localStorageCollections) {
      setCurrentCollection(JSON.parse(localStorageCollections));
    }
  }, []);
  console.log(currentCollection);

  return (
    <Main>
      <Box>
        {currentCollection.map((item: any) => (
          <Heading key={item.id}>{item.title}</Heading>
          //   item.items.map((product:any) => (
          //       <Text>{product.name}</Text>
          //   ))
        ))}
      </Box>
    </Main>
  );
};

export default Admin;
