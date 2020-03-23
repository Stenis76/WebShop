import React, { FC, useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import CartContext from "../contexts/cartContext/context";

interface IProps {}

/*
import React from "react";
import { Grid, Box } from "grommet";
import Directory from "../components/directory";

interface Iprops {
  collection: any;
}

const Shop = (props: Iprops) => {
  console.log(props.collection);

  return (
    <Grid
      fill
      responsive={true}
      areas={[
        { name: "directory", start: [0, 0], end: [0, 0] },
        { name: "main", start: [1, 0], end: [1, 0] }
      ]}
      columns={["small", "flex"]}
      rows={["flex"]}
      gap="small"
    >
      <Directory />
      <Box gridArea="main" background="brand" />

        <Switch>
          <Route path="/shop/sneakers" />
        </Switch>
  
    </Grid>
  );
};
*/

const Shop: FC<IProps> = () => {
  const [items, setItems] = useState([]);
  const { addItemToCart } = useContext(CartContext);
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
    <ul>
      {items.map((item: any) => (
        <li key={item.id}>
          <h2>{item.name}</h2>
          <img src={item.imageUrl} alt="" />
          <span>{item.price * 10} kr</span>
          <button onClick={() => addItemToCart(item)}>Add to cart</button>
        </li>
      ))}
    </ul>
  );
};

export default Shop;
